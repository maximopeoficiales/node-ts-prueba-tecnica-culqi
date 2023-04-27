import { config } from "../../../config";
import { CreditCardDto } from "../../domain/dtos/creditCard.dto";
import { log } from "../../infrastructure/shared/log";
import { JwtService } from "./jwt.service";
import { CriptoService } from "./cripto.service";
import { TokenizationService } from "./tokenization.service";

interface IToken {
  token: string
}
export class CreditCardService {
  constructor(
    private criptoService = new CriptoService(config.APP_SECRET_KEY_TOKENIZATION),
    private jwtService = new JwtService(config.APP_SECRET_KEY_JWT),
    private tokenizationService = new TokenizationService()
  ) {

  }
  async tokenizate(creditCardDto: CreditCardDto) {
    const creditCardToken = this.criptoService.encrypt<CreditCardDto>(creditCardDto);
    log(`Encriptacion: `, { creditCardToken });
    const tokenizationCreated = this.tokenizationService.create({ ...creditCardDto, token: creditCardToken })
    log("Creado en mongo", { tokenizationCreated })
    const jwtToken = this.jwtService.sign<IToken>({ token: creditCardToken }, { expiresIn: config.APP_SECRET_JWT_LIMIT });
    log(`TokenJWT: `, { jwtToken });
    return jwtToken;
  }
  async getCreditCard(token: string) {
    const result = await this.jwtService.verify<IToken>(token);
    const creditCard = this.criptoService.decrypt<CreditCardDto>(result.token);
    delete creditCard.cvv
    delete creditCard.pk_token
    delete creditCard.type_card
    return creditCard;
  }

  // tokenizate(creditCardDto: CreditCardDto) {
  //   return this.cripto.encrypt<CreditCardDto>(creditCardDto);
  // }

}
