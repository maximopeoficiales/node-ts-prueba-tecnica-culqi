export class Tokenization {
  email: string;
  expiration_year: number;
  expiration_month: number;
  cvv: string;
  card_number: string;
  token: string;
  type_card: string;
  state?: boolean;
  createdAt?:Date;
  updatedAt?:Date;
}