import { Router } from "express";

import UserController from "./app/controllers/UserController";
import NotebookController from "./app/controllers/NotebookController";
import SessionController from "./app/controllers/SessionController";
import AppointmentController from "./app/controllers/AppointmentController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/notebooks", NotebookController.index);

routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.get("/appointments", AppointmentController.index);
routes.post("/appointments", AppointmentController.store);
// routes.delete("/appointments/:id", AppointmentController.delete);

export default routes;
