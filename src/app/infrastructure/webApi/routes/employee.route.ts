import { Router } from "express";
import { employeeController } from "../controllers/employee.controller";
// import { authorization, findTransaction, token, validate } from "../controllers/giftCard.controller";
export const router = Router();

// router.post("/token", giftcardController.token);
router.get("/all", employeeController.getAll);

