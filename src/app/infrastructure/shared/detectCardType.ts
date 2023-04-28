import { CardType } from "../../domain/enums/card-type.enum";

export const detectCardType = (cardNumber: string) => {
  cardNumber= cardNumber.trim()
  // Visa
  const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  // Mastercard
  const mastercardRegEx = /^5[1-5][0-9]{14}$/;
  // American Express
  const amexRegEx = /^3[47][0-9]{13}$/;

  if (visaRegEx.test(cardNumber)) {
    return CardType.VISA;
  } else if (mastercardRegEx.test(cardNumber)) {
    return CardType.MASTERCARD;
  } else if (amexRegEx.test(cardNumber)) {
    return CardType.AMEX;
  } else {
    return CardType.DESCONOCIDO;
  }
}
