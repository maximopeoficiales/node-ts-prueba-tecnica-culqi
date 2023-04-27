import bodyParser from "body-parser";
import { errors } from "celebrate";
import cors from "cors";
import { Express } from "express";
import { config } from "../../../../config";
import { router as routes } from '../routes';
import { errorHandler } from "../middlewares/global.middleware";

export const expressLoader = async (app: Express) => {
  const corsOptions = {
    origin: config.APP_ORIGIN
  }
  app.use(cors(corsOptions))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true, }));
  app.use("/api", routes);
  app.use(errors());
  app.use(errorHandler);


};
