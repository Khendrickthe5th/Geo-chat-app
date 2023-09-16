import { io } from 'socket.io-client'
// const HOST = 3100;
// const HOST = 'https://geo-chat-app-be.onrender.com'
const HOST = socketIO.connect("http://localhost:3100")

export const socket = io(HOST, {autoConnect: false})