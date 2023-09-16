import { io } from 'socket.io-client'
// const HOST = 3100;
const HOST = 'https://geo-chat-app-be.onrender.com'

export const socket = io(HOST, {autoConnect: false})