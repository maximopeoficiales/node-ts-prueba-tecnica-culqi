import dotenv from 'dotenv';
dotenv.config()
export const config = {
  APP_NAME: 'Culqi-API',
  APP_ERROR_MESSAGE: "Something wrong. Try again please.",
  APP_PORT: process.env.APP_PORT || 3001,
  APP_ENV: process.env.APP_ENV || "dev",
  APP_ORIGIN: process.env.APP_ORIGIN || "*",
  APP_MAXIMUM_YEAR_CURRENT: process.env.APP_MAXIMUM_YEAR_CURRENT || "5",
  APP_SECRET_KEY_TOKENIZATION: process.env.APP_SECRET_KEY_TOKENIZATION || "APP_SECRET_KEY_TOKENIZATION",
  APP_SECRET_KEY_JWT: process.env.APP_SECRET_KEY_JWT || "APP_SECRET_KEY_JWT",
  APP_PREFIX_PK_TOKEN: process.env.APP_PREFIX_PK_TOKEN || "pk_token",
  APP_SECRET_JWT_LIMIT: process.env.APP_SECRET_JWT_LIMIT || "APP_SECRET_JWT_LIMIT",
};