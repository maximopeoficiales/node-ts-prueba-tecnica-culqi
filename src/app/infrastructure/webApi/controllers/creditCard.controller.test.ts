import * as httpMocks from 'node-mocks-http';
import { CreditCardDto } from "../../../domain/dtos/creditCard.dto";
import { CardType } from "../../../domain/enums/card-type.enum";
import { CreditCardController } from "./creditCard.controller";

describe("Test CreditCardController", () => {
    // Tests that detectCardType correctly identifies a valid Mastercard card number. 
    const getTokensResultMock = [{ token: "token" }]
    const tokenizateResultMock = { token: "token" };
    const getCreditCardResultMock = {
        email: "maximopeoficiales@yahoo.es",
        expiration_year: 2020,
        expiration_month: 12,
        card_number: "",
        cvv: "123",
        type_card: CardType.VISA
    } as CreditCardDto;

    const creditCardServiceMock = {
        getTokens: jest.fn().mockResolvedValue(getTokensResultMock),
        tokenizate: jest.fn().mockResolvedValue(tokenizateResultMock),
        deleteAtributes: jest.fn(),
        getCreditCard: jest.fn().mockResolvedValue(getCreditCardResultMock),
    }
    const instanceMock = new CreditCardController(creditCardServiceMock as any);
    const errorMock = { error: "error" };

    it("getTokens method", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn()
        await instanceMock.getTokens(req, res, next)
        expect(res._getJSONData()).toEqual({ tokens: getTokensResultMock });
    });
    it("getTokens method with error", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn()
        creditCardServiceMock.getTokens = jest.fn().mockRejectedValue(errorMock)
        instanceMock.getTokens(req, res, next).catch((error) => {
            expect(error).toEqual(errorMock);
        })
    });
    it("tokenize method", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn()
        await instanceMock.tokenizate(req, res, next)
        expect(res._getJSONData()).toEqual({ token: tokenizateResultMock });
    });
    it("tokenize method with error", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn()
        creditCardServiceMock.tokenizate = jest.fn().mockRejectedValue(errorMock)
        instanceMock.tokenizate(req, res, next).catch((error) => {
            expect(error).toEqual(errorMock);
        })
    });
    it("getCreditCard method", async () => {
        const req = httpMocks.createRequest()
        req.header = jest.fn().mockReturnValue("token");
        const res = httpMocks.createResponse();
        const next = jest.fn()
        await instanceMock.getCreditCard(req, res, next)
        expect(res._getJSONData()).toEqual({ result: getCreditCardResultMock });
    });
    it("getCreditCard method with error", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn()
        creditCardServiceMock.getCreditCard = jest.fn().mockRejectedValue(errorMock)
        instanceMock.getCreditCard(req, res, next).catch((error) => {
            expect(error).toEqual(errorMock);
        })
    });

})  
