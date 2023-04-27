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
    }
    async getCreditCard(req: Request, res: Response) {
        const token = req.header("Authorization").replace("Bearer ", "");
        console.log({ token });
        const data = await this.creditCardService.getCreditCard(token);
        res.json({ data })
    }
}

export const creditCardController = new CreditCardController();
