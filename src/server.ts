import express from "express";
import UserRouter from "./routes/UserRoutes";
import PostRouter from "./routes/PostRoutes";
import { config } from 'dotenv';

config();

const port = 3000;


const app = express();

app.use(express.json());

app.use(UserRouter);
app.use(PostRouter);

// Servidor HTTP padrão para desenvolvimento
app.listen(port, function () {
  console.log("Servidor HTTP rodando na porta " + port);
});