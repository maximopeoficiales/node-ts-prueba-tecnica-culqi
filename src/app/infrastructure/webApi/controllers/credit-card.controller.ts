import { Request, Response } from "express";
import { CreditCardService, } from "../../../application/use_cases/credit-card.service";
import { CreditCardDto } from "../../../domain/dtos/credit-card.dto";
export class CreditCardController {
    constructor(
        private creditCardService = new CreditCardService(),
    ) { }

    async tokenize(req: Request, res: Response) {
        const data = req.body as CreditCardDto;
        const result = await this.creditCardService.tokenizate(data);
        res.json({ result })
        // const employes = await employesService.getEmployees();

        // if (employes) {
        //     return res.status(HttpStatusCode.OK).json(employes);
        // } else {
        //     throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");
        // }throw new ErrorResponse(HttpStatusCode.NOT_FOUND, "Employees not found");

    }
}

export const creditCardController = new CreditCardController();
