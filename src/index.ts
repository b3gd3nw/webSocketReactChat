import express, { Express } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { getChatHistory } from "./controllers/chatController";

const app: Express = express();

app.get('/chat-history', getChatHistory);

app.use(errorHandler);

export { app };

