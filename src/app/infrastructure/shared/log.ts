import { config } from "../../../config"

export const log = (...args: any[]) => {
  if (config.APP_ENV == "dev") {
    console.log(...args);
  }
}