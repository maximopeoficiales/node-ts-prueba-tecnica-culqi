import { Tokenization } from "../../domain/entitys/tokenization";
import { TokenizationRepository } from "../../infrastructure/database/tokenization.repository";

export class TokenizationService {
  constructor(
    private tokenizationRepository = new TokenizationRepository(),
  ) { }
  async getAll() {
    return await this.tokenizationRepository.getAll();
  };

  async create(data: Tokenization) {
    return await this.tokenizationRepository.create(data);
  };
  async findById(id: string) {
    const result = await this.tokenizationRepository.findById(id);
    if(!result) throw new Error(`Token con ${id} no encontrado`)
    return result;
  };
}