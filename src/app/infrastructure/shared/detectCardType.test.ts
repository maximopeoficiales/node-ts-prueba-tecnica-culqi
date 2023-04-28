import { CardType } from "../../domain/enums/card-type.enum";
import { detectCardType } from "./detectCardType";
describe("Test detectCardType function", () => {
  // Tests that detectCardType correctly identifies a valid Mastercard card number. 
  it("test_detect_card_type_mastercard", () => {
    // Arrange
    const cardNumber = "5555555555554444";

    // Act
    const result = detectCardType(cardNumber);

    // Assert
    expect(result).toBe(CardType.MASTERCARD);
  });
  // Tests that detectCardType correctly handles edge cases such as card numbers with 13, 14, 15, and more than 16 digits, as well as card numbers with non-numeric characters. 
  it("test_detect_card_type_edge_cases", () => {
    // Arrange
    const cardNumber1 = "1234567890123";
    const cardNumber2 = "123456789012345";
    const cardNumber3 = "1234567890123456";
    const cardNumber4 = "1234 5678 9012 3456";
    const cardNumber5 = "1234-5678-9012-3456";

    // Act
    const result1 = detectCardType(cardNumber1);
    const result2 = detectCardType(cardNumber2);
    const result3 = detectCardType(cardNumber3);
    const result4 = detectCardType(cardNumber4);
    const result5 = detectCardType(cardNumber5);

    // Assert
    expect(result1).toBe(CardType.DESCONOCIDO);
    expect(result2).toBe(CardType.DESCONOCIDO);
    expect(result3).toBe(CardType.DESCONOCIDO);
    expect(result4).toBe(CardType.DESCONOCIDO);
    expect(result5).toBe(CardType.DESCONOCIDO);
  });
  // Tests that detectCardType correctly handles card numbers with leading/trailing spaces. 
  it("test_detect_card_type_spaces", () => {
    // Arrange
    const cardNumber = " 4111111111111111 ";

    // Act
    const result = detectCardType(cardNumber);

    // Assert
    expect(result).toBe(CardType.VISA);
  });

  // Tests that detectCardType returns CardType.DESCONOCIDO for an invalid card number. 
  it("test_detect_card_type_invalid", () => {
    // Arrange
    const cardNumber = "1234567890123456";

    // Act
    const result = detectCardType(cardNumber);

    // Assert
    expect(result).toBe(CardType.DESCONOCIDO);
  });
})
