import { CriptoService } from "./cripto.service";

describe("Test CriptoService", () => {
  const dataMock = { data: 1 };
  const instanceMock = new CriptoService();
  it("decrypt method", async () => {
    const token = instanceMock.encrypt(dataMock)
    const result = instanceMock.decrypt<{ data: number }>(token)
    expect(result.data).toEqual(dataMock.data);
  });
  it("encrypt method", async () => {
    const result = instanceMock.encrypt(dataMock)
    expect(typeof result).toEqual("string");
  });
})  
