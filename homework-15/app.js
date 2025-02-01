import { log } from "console";
import express from "express";
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.json());
app.use(express.static('public'));


io.on('connection', (socket) =>{
    console.log('A user connected');
    socket.on('chat message', (msg) =>{
        console.log("Message", msg);
        io.emit('Chat message', msg)  
    })
    socket.on('disconnected', () =>{
        console.log("User disconnected");
        
    })
    
})

server.listen(3000, () =>{
    console.log('Server listening on port 3000');
    
})