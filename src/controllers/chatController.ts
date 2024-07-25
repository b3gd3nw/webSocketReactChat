import { Request, Response } from "express";
import { chatService } from "../services/chatService";

export const getChatHistory = async (req: Request, res: Response) => {
   try {
    const history = await chatService.getHistory();
    res.send(history);
   } catch (err) {
    res.status(500).send('Internal Server Error');
   }
};