import { Request, Response } from "express";
import { creditCardControllerInstance } from "../../../application/use_cases/credit-card.service";
export class CreditCardController {
    constructor(
        private creditCardService = creditCardControllerInstance,
    ) { }

    async tokenize(req: Request, res: Response) {

        res.json(req.body)
        // const employes = await employesService.getEmployees();

        // if (employes) {
        //     return res.status(HttpStatusCode.OK).json(employes);
        // } else {
        //     throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");
        // }throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");

    }



}

export const creditCardController = new CreditCardController();
