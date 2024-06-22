import { Router } from "express";
import UserController from "../controllers/UserController";
import { authenticate } from "../middlewares/MiddlewareAutenticacao";

const UserRouter = Router();

UserRouter.get("/api/user/get", authenticate, UserController.readUsers);

UserRouter.post("/api/user/post", UserController.createUser);

UserRouter.patch("/api/user/update/:id", UserController.updateUser);

UserRouter.delete("/api/user/delete/:id", UserController.deleteUser);

export default UserRouter;
