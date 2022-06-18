import { Router } from "express";
import UsersControllers from "./controllers/UsersController";

const router = Router();

router
  .get("/users", UsersControllers.getUsers)
  .post("/users", UsersControllers.createUser);

export default router;
