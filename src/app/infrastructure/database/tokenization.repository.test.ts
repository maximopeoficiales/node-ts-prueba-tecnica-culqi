import { TokenizationRepository } from "./tokenization.repository";

describe("Test TokenizationRepository", () => {
  const tokensArrayMock = [{ token: "token" }];
  const tokenMock = { token: "token" };
  const modelMock = {
    find: jest.fn().mockImplementationOnce(() => ({
      sort: jest.fn().mockResolvedValue(tokensArrayMock)
    })),
    findById: jest.fn().mockResolvedValue(tokenMock),
  }
  const instanceMock = new TokenizationRepository(modelMock as any);
  it("getAll method", async () => {
    const result = await instanceMock.getAll()
    expect(result).toEqual(tokensArrayMock);
  });
  it("findById method", async () => {
    const result = await instanceMock.findById("test_id")
    expect(result).toEqual(tokenMock);
  });
  it("create method", async () => {
    const modelMock = jest.fn().mockReturnValue({
      save: jest.fn()
    });
    const instanceMock = new TokenizationRepository(modelMock as any);
    await instanceMock.create({} as any)
    expect(modelMock).toBeCalled();
  });


})  
