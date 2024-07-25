import WebSocket, { Server } from 'ws';
import { Server as HttpServer } from 'http';

export const initializeWebSocket = (server: HttpServer) => {
    const wss = new Server({ server });

    wss.on('connection', (ws: WebSocket) => {
        console.log('New client connected');

        ws.on('message', (message: string) => {
            console.log(`Received message: ${message}`);
            wss.clients.forEach((client) => {
                client.send('Server resive your message: ' + message);
            })
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });

        ws.send('Welcome to the chat!');
    });
}
