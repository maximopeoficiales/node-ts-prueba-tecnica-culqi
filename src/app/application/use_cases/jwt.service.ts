import JWT from "jsonwebtoken";
import { IJwtService } from "../contracts/jwtService.interface";

export class JwtService implements IJwtService {
  constructor(
    private secretKey: string = "PRIVATE_KEY",
  ) { }

  verify<T>(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      JWT.verify(token, this.secretKey, (err: JWT.VerifyErrors, payload: T) => {
        if (err) {
          throw new Error(`Fallo en la veficacion del token razon: ${err.message}`)
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
