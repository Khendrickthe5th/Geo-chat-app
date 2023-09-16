// import '../App.css';
// import Modal from "./Modal"
import NavBar from "../components/NavBar"
import ChatCont from "../components/ChatCont"
import ChatContacts from "../components/ChatContacts"
import React, { useState } from 'react'

function Main(props) {
const [ChatContactsVisible, setChatContactsVisible] = useState(true)
const [currentChatRecvr, setCurrentChatRecvr] = useState()
// const chatValue = useRef()
// const [username, setUsername] = useState(null)

// useEffect(()=>{
//   socket.on('message', (data)=>{
//     setChat([...chat, data])
//   })
// })

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

      <NavBar toggleChatContactsVisible={toggleChatContactsVisible}/>
      { ChatContactsVisible && <ChatContacts setCurrentChatRecvr={setCurrentChatRecvr} username={props.username} />}
      < ChatCont username={props.username} currentChatRecvr={currentChatRecvr} />

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
