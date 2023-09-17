import NavBar from "../components/NavBar"
import ChatCont from "../components/ChatCont"
import ChatContacts from "../components/ChatContacts"
import React, { useState, useEffect } from 'react'
import Header from "../components/mobile&tabs/Header"
import socketIO from 'socket.io-client'
const socket = socketIO.connect("http://localhost:3100")

function Main(props) {
const [ChatContactsVisible, setChatContactsVisible] = useState(true)
const [initiateChat, setInitiateChat] = useState(false)
const [currentChatRecvr, setCurrentChatRecvr] = useState()
const [onlineUsers, setOnlineUsers] = useState()
const [clientWidth, setClientWidth] = useState(window.innerWidth)

useEffect(()=>{
  window.onresize = ()=>{
    setClientWidth(window.innerWidth)
    console.log(clientWidth)
  }
})


socket.on("userListRen", (userList)=>{
  console.log("received event from ChatCont to render users")
      setOnlineUsers(userList)
})

const toggleChatContactsVisible = ()=>{
  setChatContactsVisible(!ChatContactsVisible)
}

  return (
    <section className="App">
      { clientWidth > 750 ? 
      (<>
      <NavBar toggleChatContactsVisible={toggleChatContactsVisible} />
      { ChatContactsVisible && <ChatContacts setCurrentChatRecvr={setCurrentChatRecvr} username={props.username} setInitiateChat={setInitiateChat} onlineUsers={onlineUsers} setOnlineUsers={setOnlineUsers} />}
      {initiateChat && < ChatCont username={props.username} currentChatRecvr={currentChatRecvr} />}
      </>)
       : <></> }

       {clientWidth <= 750 ? 
       (<div className="MobileView">
       <Header />
       <ChatContacts setCurrentChatRecvr={setCurrentChatRecvr} username={props.username} setInitiateChat={setInitiateChat} onlineUsers={onlineUsers} setOnlineUsers={setOnlineUsers} />
       </div>) : <></>}
       
    </section>
  );
}

export default Main;
