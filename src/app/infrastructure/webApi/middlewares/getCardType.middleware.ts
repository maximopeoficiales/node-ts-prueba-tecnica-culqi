import { NextFunction, Request, Response } from "express";
import { detectCardType } from "../../shared/detectCardType";
import { log } from "../../shared/log";

export const getCardType = (req: Request, res: Response, next: NextFunction) => {
  const cardNumber = req.body.card_number;
  const type = detectCardType(cardNumber);
  req.body.type_card = type;
  log(`Tipo de card: ${type}`)
  next();
}