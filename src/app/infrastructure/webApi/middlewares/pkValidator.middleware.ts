import { NextFunction, Request, Response } from "express";
import { isValidPk } from "../../shared/isValidPk";

export const pkValidator = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")
  if (!token) throw new Error("El token es requerido")
  const pkToken = token.replace("Bearer ", "")
  if (isValidPk(pkToken)) {
    req.body.pk_token = pkToken;
    next();
  } else {
    throw new Error("El Bearer Token no es valido con el formato establecido")
  }

}