import { Router } from "express";
import { creditCardController } from "../controllers/credit-card.controller";
import { creditCardValidator } from "../middlewares/credit-card.middleware";
export const router = Router();

router.post("/tokenize", creditCardValidator(), creditCardController.tokenize.bind(creditCardController));
router.get("/", creditCardController.getCreditCard.bind(creditCardController));

