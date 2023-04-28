import { JwtService } from "./jwt.service";
describe("Test JwtService", () => {
  const dataMock = { data: 1 };
  const instanceMock = new JwtService();
  it("verify method", async () => {
    const token = instanceMock.sign(dataMock, { expiresIn: "24h" })
    const result = await instanceMock.verify<{ data: number }>(token)
    expect(result.data).toEqual(dataMock.data);
  });
  it("sign method", async () => {
    const result = instanceMock.sign(dataMock, { expiresIn: "24h" })
    expect(typeof result).toEqual("string");
  });
})  
