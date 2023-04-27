import { Request, Response } from "express";
import { CreditCardService, } from "../../../application/use_cases/creditCard.service";
import { CreditCardDto } from "../../../domain/dtos/creditCard.dto";
import { log } from "../../shared/log";


export class CreditCardController {
    constructor(
        private creditCardService = new CreditCardService(),
    ) { }
    async getTokens(req: Request, res: Response) {
        const tokens = await this.creditCardService.getTokens();
        res.json({ tokens });
    }
    // ejemplo de pk_test
    async tokenize(req: Request, res: Response) {
        const data = req.body as CreditCardDto;
        log(`Tokenizando`, { creditCard: data });
        let token = await this.creditCardService.tokenizate(data);
        token = `pk_test_${token}`
        res.json({ token })
    }
    async getCreditCard(req: Request, res: Response) {
        let token = req.header("Authorization").replace("Bearer ", "");
        token = token.replace("pk_test_", "");
        // const token = req.body.pk_token;
        log(`Token: ${token}`)
        const result = await this.creditCardService.getCreditCard(token);
        log({ creditCard: result })
        res.json({ result })
    }
}

export const creditCardController = new CreditCardController();
