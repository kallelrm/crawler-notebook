import "dotenv/config";

import express from "express";
import Youch from "youch";
import "express-async-errors";
import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development") {
        console.log(err);
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      console.log(err);

      return res.status(500).json({ error: "Internal server error" });
    });
  }
}

export default new App().server;
