import { Router } from "express";

export const router = Router();

import { router as creditCardRouter } from "./creditCard.route";

// router.use("/v1/giftcard", giftcardRouter);
// router.use("/v2/giftcard", giftcardRouterV2);
router.use("/v1/creditCard", creditCardRouter);

