import http, { Server } from 'http';
import { app } from './index';
import { initializeWebSocket } from './websocket';

const PORT = process.env.PORT || 3000;

const server: Server = http.createServer(app);

initializeWebSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});