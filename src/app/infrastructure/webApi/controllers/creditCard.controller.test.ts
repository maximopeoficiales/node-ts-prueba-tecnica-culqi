import { CreditCardDto } from "../../../domain/dtos/creditCard.dto";
import { CardType } from "../../../domain/enums/card-type.enum";

describe("Test CreditCardController", () => {
    // Tests that detectCardType correctly identifies a valid Mastercard card number. 
    const creditCardServiceMock = {
        getTokens: jest.fn().mockReturnValue([{ token: "token" }]),
        tokenizate: jest.fn().mockReturnValue("token"),
        deleteAtributes: jest.fn(),
        getCreditCard: jest.fn().mockReturnValue({
            email: "maximopeoficiales@yahoo.es",
            expiration_year: 2020,
            expiration_month: 12,
            card_number: "",
            cvv: "123",
            type_card: CardType.VISA
        }as CreditCardDto),
    }
    it("test_detect_card_type_mastercard", () => {

    });

})
