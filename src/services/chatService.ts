import { IMessage } from "../interfaces/IMessage";

class ChatService {
    private history: IMessage[] = [];

    public addMessage(message: IMessage) {
        this.history.push(message);
    }

    public getHistory() {
        return this.history
    }
}

export const chatService = new ChatService();