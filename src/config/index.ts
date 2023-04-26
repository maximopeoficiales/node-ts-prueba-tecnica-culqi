
// export const mssqlConfiguration = {
//   HOST: process.env.DB_SQL_HOST || "localhost",
//   USER: process.env.DB_SQL_USER || "sa",
//   PASSWORD: process.env.DB_SQL_PASSWORD || "PasswordO1.",
//   DATABASE: process.env.DB_SQL_DATABASE || "node_api",
//   PORT: process.env.DB_SQL_PORT || "1433",
// };

export const jwtConfig = {
  token_expiration: process.env.JWT_TOKEN_EXPIRATION || "1",
  time: process.env.JWT_TIME || "days",
  secret: process.env.JWT_SECRET || "giftcard-@R",
};

export const apiConfig = {
  NAME: 'Culqi-API',
  APP_PORT: process.env.APP_PORT || '3001',
  ERROR_MESSAGE: "Something wrong. Try again please.",
  ORIGIN: process.env.APP_ORIGIN || '*',
  MAXIMUM_YEAR_CURRENT: process.env.MAXIMUM_YEAR_CURRENT || '5',
};