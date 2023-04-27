import JWT from "jsonwebtoken";

export class JwtService {
  constructor(
    private secretKey: string = "PRIVATE_KEY",
  ) { }

  verify<T>(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      JWT.verify(token, this.secretKey, (err: JWT.VerifyErrors, payload: T) => {
        if (err) {
          reject(err)
        }
        resolve(payload)
      });
    })
  }

  sign<T>(data: T | any, options: JWT.SignOptions = null) {
    const token = JWT.sign(data, this.secretKey, options);
    return token;
  }
}
