import { CardType } from "../../domain/enums/card-type.enum";
import { CreditCardService } from "./creditCard.service";
import { CriptoService } from "./cripto.service";
import { JwtService } from "./jwt.service";

describe("Test CreditCardService", () => {
  const tokensArrayMock = [{ token: "token" }];
  const tokenMock = { token: "token" };
  const modelMock = {
    getAll: jest.fn().mockResolvedValue(tokensArrayMock),
    create: jest.fn().mockResolvedValue(tokenMock),
    findById: jest.fn().mockResolvedValue(tokenMock),
  }
  const dataMock = { data: 1 };
  const instanceMock = new CreditCardService(
    new CriptoService(),
    new JwtService(),
    modelMock as any
  );

  it("getTokens method", async () => {
    const result = await instanceMock.getTokens()
    expect(result).toEqual(tokensArrayMock);
  });
  it("tokenizate method", async () => {
    const result = await instanceMock.tokenizate(dataMock as any)
    expect(typeof result).toEqual("string");
  });
  it("getCreditCard method", async () => {
    const criptoMock = new CriptoService();
    const jwtMock = new JwtService();
    const cardMock = {
      email: "maximopeoficiales@yahoo.es",
      expiration_year: 2020,
      expiration_month: 12,
      card_number: "",
      cvv: "123",
      type_card: CardType.VISA
    };
    const cardEncripted = criptoMock.encrypt(cardMock);
    const dataMock = {
      token: cardEncripted
    };
    const token = jwtMock.sign(dataMock, { expiresIn: "24h" })
    const modelMock = {
      findById: jest.fn().mockResolvedValue({ ...cardMock, token: cardEncripted, token_jwt: token }),
    }
    const instanceMock = new CreditCardService(
      criptoMock,
      jwtMock,
      modelMock as any
    );

    const result = await instanceMock.getCreditCard("token")
    expect(result.email).toEqual(cardMock.email);
  });

  // it("encrypt method", async () => {
  //   const result = instanceMock.encrypt(dataMock)
  //   expect(typeof result).toEqual("string");
  // });
})  
