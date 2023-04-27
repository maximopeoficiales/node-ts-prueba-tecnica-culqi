import { config } from "../../../config";
import { CreditCardDto } from "../../domain/dtos/credit-card.dto";
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
    console.log({ creditCardToken });
    const token = this.jwtService.sign<IToken>({ token: creditCardToken }, { expiresIn: config.APP_SECRET_JWT_LIMIT });
    return token;
  }

  // tokenizate(creditCardDto: CreditCardDto) {
  //   return this.cripto.encrypt<CreditCardDto>(creditCardDto);
  // }

}
