import { config } from "../../../config";
import { CreditCardDto } from "../../domain/dtos/creditCard.dto";
import { log } from "../../infrastructure/shared/log";
import { ICreditCardService } from "../contracts/creditCardService.interface";
import { CriptoService } from "./cripto.service";
import { JwtService } from "./jwt.service";
import { TokenizationService } from "./tokenization.service";

interface IToken {
  token: string
}
export class CreditCardService implements ICreditCardService {
  constructor(
    private criptoService = new CriptoService(config.APP_SECRET_KEY_TOKENIZATION),
    private jwtService = new JwtService(config.APP_SECRET_KEY_JWT),
    private tokenizationService = new TokenizationService()
  ) {

  }
  deleteAtributes(creditCardDto: CreditCardDto) {
    delete creditCardDto.cvv
    delete creditCardDto.type_card
    return creditCardDto;
  }

  async getTokens() {
    return await this.tokenizationService.getAll();
  }
  async tokenizate(creditCardDto: CreditCardDto) {
    const creditCardEncript = this.criptoService.encrypt<CreditCardDto>(creditCardDto);
    log(`Tarjeta de credito encriptada: `, { creditCardEncript });
    
    const jwtToken = this.jwtService.sign<IToken>({ token: creditCardEncript }, { expiresIn: config.APP_SECRET_JWT_LIMIT });
    log(`Token JWT: `, { jwtToken });

    const tokenizationCreated = await this.tokenizationService.create({ ...creditCardDto, token: creditCardEncript, token_jwt: jwtToken })
    log("Tokenizacion Creada", { tokenizationCreated })

    return tokenizationCreated.id;
  }
  async getCreditCard(pkToken: string) {
    const findTokenization = await this.tokenizationService.getById(pkToken)
    console.log({findTokenization});
    
    const creditCardDecripted = await this.jwtService.verify<IToken>(findTokenization.token_jwt);
    let creditCard = this.criptoService.decrypt<CreditCardDto>(creditCardDecripted.token);
    console.log({creditCard});
    
    creditCard = this.deleteAtributes(creditCard);
    return creditCard;
  }

}
