import { Schema, model } from 'mongoose';
import { Tokenization } from '../../../../domain/entitys/tokenization';

const nameSchema = "Token";
const tokenizationSchema = new Schema<Tokenization>({
  token_jwt: {
    type: String,
    required: [true, 'El token_jwt es obligatorio'],
  },
  token: {
    type: String,
    required: [true, 'El token es obligatorio'],
  },
  type_card: {
    type: String,
    required: [true, 'El type_card es obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'La email es obligatorio'],
  },
  expiration_year: {
    type: Number,
    required: [true, 'La expiration_year es obligatorio'],
  },
  expiration_month: {
    type: Number,
    required: [true, 'La expiration_month es obligatorio'],
  },
  card_number: {
    type: String,
    required: [true, 'La card_number es obligatorio'],
  },
  cvv: {
    type: String,
    required: [true, 'La cvv es obligatorio'],
  },

  state: {
    type: Boolean,
    default: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const TokenizationModel = model(nameSchema, tokenizationSchema);