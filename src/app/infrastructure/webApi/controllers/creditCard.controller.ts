import { Request, Response, NextFunction } from 'express';
import { CreditCardService, } from "../../../application/use_cases/creditCard.service";
import { CreditCardDto } from "../../../domain/dtos/creditCard.dto";
import { log } from "../../shared/log";
import { config } from "../../../../config";


export class CreditCardController {
    constructor(
        private creditCardService = new CreditCardService(),
    ) { }
    async getTokens(req: Request, res: Response, next: NextFunction) {
        try {
            const tokens = await this.creditCardService.getTokens();
            res.json({ tokens });
        } catch (error) {
            next(error);
        }
    }
    // ejemplo de pk_test
    async tokenizate(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body as CreditCardDto;
            log(`Tokenizando`, { creditCard: data });
            let token = await this.creditCardService.tokenizate(data);
            res.json({ token })
        } catch (error) {
            next(error)
        }
    }
    async getCreditCard(req: Request, res: Response, next: NextFunction) {
        try {
            let pkToken = req.header("Authorization").replace("Bearer ", "");
            pkToken = pkToken.replace(config.APP_PREFIX_PK_TOKEN, "");
            // const token = req.body.pk_token;
            log(`Token: ${pkToken}`)
            const result = await this.creditCardService.getCreditCard(pkToken);
            log({ creditCard: result })
            res.json({ result })
        } catch (error) {
            next(error)
        }
    }
}

export const creditCardController = new CreditCardController();
