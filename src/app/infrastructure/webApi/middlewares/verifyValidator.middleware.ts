import { Joi, Segments, celebrate } from "celebrate";

export const verifyBodySchema = {
  [Segments.BODY]: Joi.object().keys({
    pk_token: Joi.string().trim(),
    token: Joi.string().trim().required().label("El campo token es requerido"),
  })
}
export const verifyValidator = () => celebrate(verifyBodySchema);