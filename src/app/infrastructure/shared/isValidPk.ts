import { Joi } from "celebrate";
import { config } from "../../../config";
import { log } from "./log";

export const isValidPk = (value: string) => {
  // TODO: Algoritmo de formato
  const regex = /^pk_test/;
  if (regex.test(value)) {
    const objectId = value.replace(config.APP_PREFIX_PK_TOKEN, "");
    const validation = objectIdSchema.validate(objectId);
    if(validation.error) return false;
    return true;
  }
  return false;
}

export const objectIdSchema = Joi.string().hex().length(24);