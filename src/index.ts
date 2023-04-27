
import { config } from "./config";
import express from 'express';
import { expressLoader } from "./app/infrastructure/webApi/loaders/express";
// import { instanceSqlServer } from "./app/infrastructure/database/gitcardMssql/SqlServer";

const startServer = async () => {

  // let connectionSqlServer = await instanceSqlServer.getConnection();
  // if (connectionSqlServer) {
  //   console.log("Connected to SqlServer");

  const app = express();
  await expressLoader(app);

  app.listen(config.APP_PORT, () => {
    console.log(`Listening ${config.APP_NAME} on port ${config.APP_PORT}! http://localhost:${config.APP_PORT}/api`);
  });

  // } else {
  //   console.log("Error connecting to SqlServer");
  // }

};

startServer();
