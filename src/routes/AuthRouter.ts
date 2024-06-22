import { Router } from "express";
import AuthController from "../controllers/AuthController";

const AuthRouter = Router();

AuthRouter.post("/api/auth/signin", AuthController.signin);

AuthRouter.post("/api/auth/signup", AuthController.signup);


export default AuthRouter;