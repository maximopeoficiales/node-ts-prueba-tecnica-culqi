import { Request, Response } from "express";
import { CreditCardService, } from "../../../application/use_cases/creditCard.service";
import { CreditCardDto } from "../../../domain/dtos/credit-card.dto";
import { log } from "../../shared/log";


export class CreditCardController {
    constructor(
        private creditCardService = new CreditCardService(),
    ) { }

    async tokenize(req: Request, res: Response) {
        const data = req.body as CreditCardDto;
        log(`Tokenizando`, { creditCard: data });
        const result = await this.creditCardService.tokenizate(data);
        res.json({ result })
    }
    async getCreditCard(req: Request, res: Response) {
        // const token = req.header("Authorization").replace("Bearer ", "");
        const token = req.body.token;
        log(`Token: ${token}`)
        const result = await this.creditCardService.getCreditCard(token);
        log({ creditCard: result })
        res.json({ result })
    }
}

export const creditCardController = new CreditCardController();
