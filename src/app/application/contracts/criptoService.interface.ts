
export interface ICriptoService {
  encrypt<T>(data: T): string;
  decrypt<T>(ciphertext: string): T
}
