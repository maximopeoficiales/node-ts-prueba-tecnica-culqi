import { CreditCardDto } from "../../domain/dtos/creditCard.dto";

export interface ICreditCardService {
  getCreditCard(pkToken: string): Promise<CreditCardDto>;
  tokenizate(creditCardDto: CreditCardDto): Promise<any>
}
