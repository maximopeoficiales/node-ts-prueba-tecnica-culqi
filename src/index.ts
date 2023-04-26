
import { apiConfig } from "./config";
import express from 'express';
import { expressLoader } from "./app/infrastructure/webApi/loaders/express";
// import { instanceSqlServer } from "./app/infrastructure/database/gitcardMssql/SqlServer";

const startServer = async () => {

  // let connectionSqlServer = await instanceSqlServer.getConnection();
  // if (connectionSqlServer) {
  //   console.log("Connected to SqlServer");

  const app = express();
  await expressLoader(app);

  app.listen(apiConfig.APP_PORT, () => {
    console.log(`Listening ${apiConfig.NAME} on port ${apiConfig.APP_PORT}!`);
  });

  // } else {
  //   console.log("Error connecting to SqlServer");
  // }

};

startServer();
