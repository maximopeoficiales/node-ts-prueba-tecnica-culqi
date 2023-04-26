import { apiConfig } from "../../../../config";
import { router as routes } from '../routes'
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const expressLoader = async (app: Express) => {
  const corsOptions = {
    origin: apiConfig.origin
  }
  app.use(express.json());
  app.use(cors(corsOptions))
  app.use(express.urlencoded({ extended: true }));
  // body parser - parse json in body.requests
  app.use(bodyParser.json()); // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      extended: true, // to support URL-encoded bodies
    })
  );
  app.use("/api", routes);
};
