import { config } from "../../../config";
import { CreditCardDto } from "../../domain/dtos/credit-card.dto";
import { log } from "../../infrastructure/shared/log";
import { JwtService } from "./jwt.service";
import { TokenizationService } from "./tokenization.service";

interface IToken {
  token: string
}
export class CreditCardService {
  constructor(
    private criptoService = new TokenizationService(config.APP_SECRET_KEY_TOKENIZATION),
    private jwtService = new JwtService(config.APP_SECRET_KEY_JWT)
  ) {

  }
  async tokenizate(creditCardDto: CreditCardDto) {
    const creditCardToken = this.criptoService.encrypt<CreditCardDto>(creditCardDto);
    log(`Encriptacion: `, { creditCardToken });
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
