import { config } from "./config";
import express from 'express';
import { expressLoader } from "./app/infrastructure/webApi/loaders/express";
import { log } from "./app/infrastructure/shared/log";

const startServer = async () => {
  const app = express();
  await expressLoader(app);
  log(config)
  app.listen(config.APP_PORT, () => {
    console.log(`Listening ${config.APP_NAME} on port ${config.APP_PORT}! http://localhost:${config.APP_PORT}/api`);
  });
};

startServer();
