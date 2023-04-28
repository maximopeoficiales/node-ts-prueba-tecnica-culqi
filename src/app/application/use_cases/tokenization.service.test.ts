import { TokenizationService } from "./tokenization.service";

describe("Test TokenizationService", () => {
  const tokensArrayMock = [{ token: "token" }];
  const tokenMock = { token: "token" };
  const modelMock = {
    getAll: jest.fn().mockResolvedValue(tokensArrayMock),
    create: jest.fn().mockResolvedValue(tokenMock),
    findById: jest.fn().mockResolvedValue(tokenMock),
  }
  const instanceMock = new TokenizationService(modelMock as any);
  it("getAll method", async () => {
    const result = await instanceMock.getAll()
    expect(result).toEqual(tokensArrayMock);
  });
  it("getById method", async () => {
    const result = await instanceMock.findById("test_id")
    expect(result).toEqual(tokenMock);
  });
  it("create method", async () => {
    const result = await instanceMock.create({} as any)
    expect(result).toEqual(tokenMock);
  });


})  
