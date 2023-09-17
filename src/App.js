import './App.css';
import Main from "./pages/Main"
import Modal from "./pages/Modal"
import React, { useState, useEffect } from "react"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import socketIO from "socket.io-client"
const socket = socketIO.connect("http://localhost:3100")


function App() {
  // const [ChatContactsVisible, setChatContactsVisible] = useState(true)
  const [username, setUsername] = useState(null)
  // const [onlineUsers, setOnlineUsers] = useState()
  // const toggleChatContactsVisible = ()=>{
  //   setChatContactsVisible(!ChatContactsVisible)


  return (
    <Router>
    <section className="App">
    {/* <Modal setUsername={setUsername}/> */}
      <Routes>
      <Route path="/" element={<Modal setUsername={setUsername}/>} />
      <Route path="main" element={<Main username={username} />} />
      </Routes>
    </section>
    </Router>
  );
}

export default App;
