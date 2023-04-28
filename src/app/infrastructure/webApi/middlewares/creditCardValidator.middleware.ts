import { Joi, Segments, celebrate } from "celebrate";
import luhn from "luhn";
import { config } from "../../../../config";
import { CardType } from "../../../domain/enums/card-type.enum";

const currentYear = (new Date()).getFullYear();
const APP_MAXIMUM_YEAR_CURRENT= Number(config.APP_MAXIMUM_YEAR_CURRENT)
const maximumYearCurrent = +APP_MAXIMUM_YEAR_CURRENT;
const maximumYear = currentYear + maximumYearCurrent;

export const creditCardBodySchema = {
  [Segments.BODY]: Joi.object().keys({
    pk_token: Joi.string().trim(),
    type_card: Joi.string().trim(),
    email: Joi.string().trim().email().min(5).max(100).regex(/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|es)$/).required().label("El campo email es requerido y debe cumplir con el formato establecido"),
    expiration_year: Joi.number().positive().min(2000).max(maximumYear).required().label("El campo expiration_year debe cumplir con el formato establecido"),
    expiration_month: Joi.number().positive().min(1).max(12).required().label("El campo expiration_month debe cumplir con el formato del 1 - 12"),
    cvv: Joi.string().length(3).regex(/^[0-9]+$/).required()
      .when(Joi.ref('type_card'), {
        is: CardType.AMEX,
        then: Joi.string().length(4),
        otherwise: Joi.string().length(3),
      })
      .label("El campo cvv es requerido y debe cumplir con el formato establecido dependiendo del card_number"),
    // validacion con el algoritmo luhn
    card_number: Joi.string().trim().min(13).max(16).required()
      .custom((value, helper) => {
        return luhn.validate(value) ? value : helper.error("any.invalid");
      })
      .label("El campo card_number es requerido y debe cumplir con el formato establecido"),
  })
}
export const creditCardValidator = () => celebrate(creditCardBodySchema);