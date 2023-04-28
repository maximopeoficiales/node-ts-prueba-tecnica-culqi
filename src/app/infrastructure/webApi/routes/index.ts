import { Router } from "express";

export const router = Router();
import { router as creditCardRouter } from "./creditCard.route";

router.use("/v1/creditCard", creditCardRouter);

