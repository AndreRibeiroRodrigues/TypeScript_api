import { Request, Response } from "express";
import AuthDatabaseService from "../services/AuthServise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

class AuthController {
  async signup(req: Request, res: Response) {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Falta parâmetros",
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await AuthDatabaseService.createUser({ email, password: hashedPassword, name });

      res.json({
        status: "ok",
        user: newUser,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Falta parâmetros",
      });
    }

    try {
      const user = await AuthDatabaseService.findUserByEmail(email);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({
          status: "error",
          message: "Credenciais inválidas",
        });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
        expiresIn: "1h",
      });

      res.json({
        status: "ok",
        token,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default new AuthController();
