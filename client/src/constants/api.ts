import {io} from 'socket.io-client';

const PORT = process.env.PORT || 4000;
export const SERVER_URI = `http://localhost:${PORT}`;
export const socket = io(SERVER_URI);
