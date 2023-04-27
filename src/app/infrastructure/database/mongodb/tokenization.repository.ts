import { Tokenization } from "../../../domain/entitys/tokenization";
import { TokenizationModel } from "./models/user.schema";

export class TokenizationRepository {
  constructor() { }
  async getAll() {
    return await TokenizationModel.find().sort({ createdAt: -1 });
  };

  async create(data: Tokenization) {
    const newUser = new TokenizationModel(data);
    await newUser.save();
    return newUser;
  };

  async updateById(id: string, data: Tokenization) {
    const updated = await TokenizationModel.findByIdAndUpdate(id, data, { new: true });
    return updated;
  };

  async deleteById(id: string) {
    const result = await TokenizationModel.findByIdAndDelete(id)
    return result;
  };

  async getById(id: string) {
    return await TokenizationModel.findById(id);
  };
}