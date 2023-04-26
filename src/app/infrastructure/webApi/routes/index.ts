import { Router } from "express";

export const router = Router();

import { router as giftcardRouter } from "./giftCard.route";
import { router as employeeRouter } from "./employee.route";

// router.use("/v1/giftcard", giftcardRouter);
// router.use("/v2/giftcard", giftcardRouterV2);
router.use("/v1/employee", employeeRouter);

