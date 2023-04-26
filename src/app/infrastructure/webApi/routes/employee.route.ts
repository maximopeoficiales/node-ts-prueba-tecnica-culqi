import { Router } from "express";
import { employeeController } from "../controllers/employee.controller";
export const router = Router();

router.get("/all", employeeController.getAll);

