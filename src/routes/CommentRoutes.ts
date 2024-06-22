import { Router } from "express";
import CommentController from "../controllers/CommentController";
import { authenticate } from "../middlewares/MiddlewareAutenticacao";

const CommentRouter = Router();

CommentRouter.get("/api/comment/get", authenticate, CommentController.listComments);

CommentRouter.post("/api/comment/post", CommentController.createComment);

CommentRouter.patch("/api/comment/upadate/:id", CommentController.updateComment);

CommentRouter.delete("/api/comment/delete/:id", CommentController.deleteComment);


export default CommentRouter;
