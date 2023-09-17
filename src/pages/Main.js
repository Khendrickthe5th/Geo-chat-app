import NavBar from "../components/NavBar"
import ChatCont from "../components/ChatCont"
import ChatContacts from "../components/ChatContacts"
import React, { useState } from 'react'
import socketIO from 'socket.io-client'
const socket = socketIO.connect("http://localhost:3100")

function Main(props) {
const [ChatContactsVisible, setChatContactsVisible] = useState(true)
const [initiateChat, setInitiateChat] = useState(false)
const [currentChatRecvr, setCurrentChatRecvr] = useState()
const [onlineUsers, setOnlineUsers] = useState()
// const chatValue = useRef()
// const [username, setUsername] = useState(null)

socket.on("userListRen", (userList)=>{
  console.log("received event from ChatCont to render users")
      setOnlineUsers(userList)
})

const toggleChatContactsVisible = ()=>{
  setChatContactsVisible(!ChatContactsVisible)
}
// const func = (e)=>{
//   try{
//     e.preventDefault();
//     socket.emit('message', chatValue.current.value)
//     chatValue.current.value = ""
//   }
//   catch(err){
//     console.error(err)
//   }
// }

  return (
    <section className="App">
      {/* Modal component for the initial prompt upon accesing the webpage, saving user location, username, and other details needed */}
      {/* <Modal setUsername={setUsername}/> */}

      <NavBar toggleChatContactsVisible={toggleChatContactsVisible} />
      { ChatContactsVisible && <ChatContacts setCurrentChatRecvr={setCurrentChatRecvr} username={props.username} setInitiateChat={setInitiateChat} onlineUsers={onlineUsers} setOnlineUsers={setOnlineUsers} />}
      {initiateChat && < ChatCont username={props.username} currentChatRecvr={currentChatRecvr} />} 

{/*       
{ chat !== null && chat !== undefined &&  chat.length !== 0 ? chat.map((item, index)=>{
        return <div className="chatCont" key={index} > <p className="chat">{item}</p></div>
      }) : <p>No Chats to display!</p>}

      <div className="formCont">
      <input type="text" name="text" id="text" maxLength="20" ref={chatValue}/>
      <input type="submit" value="Send" onClick={func} />
      </div> */}
    </section>
  );
}

export default Main;
