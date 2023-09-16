require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const { getAllData } = require("./database")
const http = require('http').Server(app)
const PORT = process.env.PORT 



app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next)=>{
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE,");
    res.append("Access-Control-Allow-Headers", "Content-Type")
    next()
})

// Sockets.io block of functions 
const socketIo = require('socket.io')(http, {cors: {origin: 'https://chat-app-test-pwrp.onrender.com'}})
const connectedUsers = {}
let roomID;

socketIo.on('connection', (socket) => {
    socket.on("userList", (username)=>{
        connectedUsers[username] = socket.id;
        socketIo.emit("userListRen", connectedUsers)
        console.log("connected!", socketIo.allSockets())
    })

    socket.on("createRoom", (username)=>{
        socket.join(connectedUsers[username])
        console.log(connectedUsers[username],"just created a room")
    })
    
    socket.on("join", (roomId)=>{
        socket.join(connectedUsers[roomId.roomId])
        roomID = connectedUsers[roomId.roomId]
        // console.log("Successfully joined: ", roomID)
    })

    socket.on("typing", (curPartnr)=>{
        socketIo.emit("typing", curPartnr)
    })

    socket.on("privateMessage", (message)=>{
        socketIo.to(connectedUsers[message.receiver]).emit("privateMessage", {message: message})
        console.log("privateMessage received from :", message.sender,  "and emitted to: ", roomID, connectedUsers[message.receiver])
    })
    socket.on('disconnect', () => {
        Object.entries(connectedUsers).forEach((item) => {
            if (item[1] === socket.id) {
              delete connectedUsers[item[0]]
              socketIo.emit("userListRen", connectedUsers)
            }
          })
      });
})


app.get("/getAllData", async(req, res)=>{
const response = await getAllData()
res.status(200).send(response)
console.log("Good!", response)
})

http.listen(PORT, (err)=>{
    if (err){
        console.log(err, "Failed" )
    }
    console.log("Success!!")

})
