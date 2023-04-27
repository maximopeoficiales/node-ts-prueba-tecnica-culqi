import { Router } from "express";
import { creditCardController } from "../controllers/credit-card.controller";
import { creditCardValidator } from "../middlewares/credit-card.middleware";
import { getCardType } from "../middlewares/getCardType.middleware";
export const router = Router();

router.post("/sign", getCardType, creditCardValidator(), creditCardController.tokenize.bind(creditCardController));
router.get("/verify", creditCardController.getCreditCard.bind(creditCardController));

