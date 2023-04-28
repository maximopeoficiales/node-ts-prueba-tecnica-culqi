import JWT from "jsonwebtoken";
export interface ICriptoService {
  verify<T>(token: string): Promise<T>;
  sign<T>(data: T | any, options?: JWT.SignOptions): string
}
