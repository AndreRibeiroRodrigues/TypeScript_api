import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/api/users", UserController.getUsers);

UserRouter.get("/api/userById/:id", UserController.getUserById);

UserRouter.post("/api/user", UserController.createUser);

UserRouter.patch("/api/user/:id", UserController.updateUser);

UserRouter.delete("/api/user/:id", UserController.deleteUser);

export default UserRouter;
