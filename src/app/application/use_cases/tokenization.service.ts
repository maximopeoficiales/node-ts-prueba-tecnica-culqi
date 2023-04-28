import { Tokenization } from "../../domain/entitys/tokenization";
import { TokenizationRepository } from "../../infrastructure/database/tokenization.repository";

export class TokenizationService {
  constructor(
    private tokenizationService = new TokenizationRepository(),
  ) { }
  async getAll() {
    return await this.tokenizationService.getAll();
  };

  async create(data: Tokenization) {
    return await this.tokenizationService.create(data);
  };

  async updateById(id: string, data: Tokenization) {
    const updated = await this.tokenizationService.updateById(id, data);
    return updated;
  };

  async deleteById(id: string) {
    const result = await this.tokenizationService.deleteById(id)
    return result;
  };

  async getById(id: string) {
    const result = await this.tokenizationService.getById(id);
    if(!result) throw new Error(`Token con ${id} no encontrado`)
    return result;
  };
}