import { Tokenization } from "../../domain/entitys/tokenization";
import { TokenizationModel } from "./mongodb/models/user.schema";

export class TokenizationRepository {
  constructor(
    private model = TokenizationModel
  ) { }
  async getAll() {
    return await this.model.find().sort({ createdAt: -1 });
  };
  async create(data: Tokenization) {
    const newUser = new this.model(data);
    await newUser.save();
    return newUser;
  };
  async findById(id: string) {
    const result = await this.model.findById(id);
    return result
  };
}