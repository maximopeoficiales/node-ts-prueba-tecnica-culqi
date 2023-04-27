import { Router } from "express";
import { creditCardController } from "../controllers/creditCard.controller";
import { creditCardValidator } from "../middlewares/creditCardValidator.middleware";
import { getCardType } from "../middlewares/getCardType.middleware";
import { verifyValidator } from "../middlewares/verifyValidator.middleware";
import { pkValidator } from "../middlewares/pkValidator.middleware";
export const router = Router();

router.post("/sign", pkValidator, getCardType, creditCardValidator(), creditCardController.tokenize.bind(creditCardController));
router.post("/verify", pkValidator, verifyValidator(), creditCardController.getCreditCard.bind(creditCardController));

