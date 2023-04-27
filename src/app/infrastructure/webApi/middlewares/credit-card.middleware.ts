import { Joi, Segments, celebrate } from "celebrate";
import { config } from "../../../../config";

const currentYear = (new Date()).getFullYear();
const maximumYearCurrent = parseInt(config.APP_MAXIMUM_YEAR_CURRENT.toString());
export const creditCardSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().trim().email().max(100).required().label("El campo email es requerido y debe cumplir con el formato establecido"),
    expiration_year: Joi.number().positive().min(2000).max(currentYear + maximumYearCurrent).required().label("El campo expiration_year debe cumplir con el formato establecido"),
    expiration_month: Joi.number().positive().min(1).max(12).required().label("El campo expiration_month debe cumplir con el formato del 1 - 12"),
    cvv: Joi.number().min(1).max(9999).required().label("El campo cvv es requerido y debe cumplir con el formato establecido"),
    card_number: Joi.string().trim().min(13).max(16).required().label("El campo card_number es requerido y debe cumplir con el formato establecido"),
  })
}
export const creditCardValidator = () => celebrate(creditCardSchema);
