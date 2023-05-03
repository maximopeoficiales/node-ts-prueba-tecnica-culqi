import CryptoJS from "crypto-js";
import { ICriptoService } from "../contracts/criptoService.interface";

// https://refactoring.guru/es/design-patterns/factory-method
// https://refactoring.guru/es/design-patterns/abstract-factory
export class CriptoService implements ICriptoService {
  constructor(
    private privateKey: string = "PRIVATE_KEY"
  ) { }
  encrypt<T>(data: T) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.privateKey).toString();
  }
  decrypt<T>(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.privateKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData as T;
  }
}
// El estándar de cifrado avanzado (AES) es un cifrado de bloque simétrico elegido por el gobierno de EE. UU. para proteger la información clasificada . AES se implementa en software y hardware en todo el mundo para cifrar datos confidenciales. Es fundamental para la seguridad informática gubernamental, la ciberseguridad y la protección de datos electrónicos.

// The Advanced Encryption Standard (AES) is a U.S. Federal Information Processing Standard (FIPS). It was selected after a 5-year process where 15 competing designs were evaluated.

// CryptoJS supports AES-128, AES-192, and AES-256. It will pick the variant by the size of the key you pass in. If you use a passphrase, then it will generate a 256-bit key.