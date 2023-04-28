import { NextFunction, Request, Response } from "express";
import { config } from "../../../../config";
import { Joi } from "celebrate";

export const pkValidator = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")
  if (!token) throw new Error("El token es requerido")
  const pkToken = token.replace("Bearer ", "")
  if (isValidPk(pkToken)) {
    next();
  } else {
    throw new Error("El Bearer Token no es valido con el formato establecido")
  }

}

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