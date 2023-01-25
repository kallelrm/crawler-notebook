import { Router } from "express";

import UserController from "./app/controllers/UserController";
import NotebookController from "./app/controllers/NotebookController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/notebooks", NotebookController.index);

export default routes;
