import "reflect-metadata";

import { apiConfig } from "./config";
import express from 'express';
import { init } from "./app/infrastructure/webApi/loaders";
// import { instanceSqlServer } from "./app/infrastructure/database/gitcardMssql/SqlServer";

const startServer = async () => {

  // let connectionSqlServer = await instanceSqlServer.getConnection();
  // if (connectionSqlServer) {
  //   console.log("Connected to SqlServer");

    const app = express();
    await init(app);

    app.listen(apiConfig.port, () => {
      console.log(`Listening ${apiConfig.name} on port ${apiConfig.port}!`);
    });

  // } else {
  //   console.log("Error connecting to SqlServer");
  // }

};

startServer();
