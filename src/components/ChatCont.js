import { Phone, VideoCamera, MapPin, Smiley, Paperclip, PaperPlaneTilt, DotsThreeVertical, CaretLeft, ArrowBendUpLeft } from "@phosphor-icons/react";
import React, { useEffect, useState, useRef } from "react";
import socketIO from 'socket.io-client'
import "./ChatCont.css";
import EmojiPad from "./EmojiPad"
// const socket = socketIO.connect('https://geo-chat-app-be.onrender.com')
const socket = socketIO.connect("http://localhost:3100")


function ChatCont(props) {
const chatCanvasRef = useRef()
const inputFieldVal = useRef()
const chatRecipient = useRef()
const [EmojiPadVisible, setEmojiPadVisible] = useState(false)
const [isTyping, setIsTyping] = useState(false)
// const [props.messages, props.setMessages] = useState([])
const [videoAndPhoneIconVisible, setVideoAndPhoneIconVisible] =  useState(false)

//   useEffect(() => {
//     fetch("http://localhost:3100/getAllData", {
//       method: "GET",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   });
let roomId = props.username
let isRoomCreated = false;

  useEffect(()=>{
    console.log(props.messages)
    if(!isRoomCreated){
      socket.emit("createRoom", roomId)
      isRoomCreated = true;
      console.log(roomId, "Created!", isRoomCreated)
    }
    chatCanvasRef.current.scrollBy(0, chatCanvasRef.current.scrollHeight)
  }, [props.messages, roomId])

  socket.on("privateMessage", ({message})=>{
    props.setMessages([...props.messages, message])
    console.log([...props.messages, message], "is this not iterable?")
})

const toggleVideoAndPhoneIcon =(e)=>{
  setVideoAndPhoneIconVisible(!videoAndPhoneIconVisible)
}

const setTyping = function(){
  socket.emit("typing", props.currentChatRecvr)
}

const backToChats =()=>{
  props.setHeaderAndChatContactsVisibility(true)
  props.setChatContVisible(false)
}

socket.on("typing", (chatHead)=>{
  if(props.username == chatHead){
    setIsTyping(true)
    setTimeout(()=>{ setIsTyping(false)}, 4000)
  }
})

  const emitMessages = ()=>{
    try{
      socket.emit("privateMessage", {
        "message": inputFieldVal.current.value,
        "sender": props.username,
        "receiver": props.currentChatRecvr,
        "timeStamp": formatAMPM(new Date),
      })
      
      props.setMessages([...props.messages, {
        "message": inputFieldVal.current.value,
        "sender": props.username,
        "receiver": props.currentChatRecvr,
        "timeStamp": formatAMPM(new Date),
      }])
        inputFieldVal.current.value = ""
        inputFieldVal.current.focus()
        console.log(props.messages)
        
    }
    catch(error){
        console.log("Oppps :", error)
    }
  }

  const emitMessagesKeybrd = (event)=>{
    if(event.key === "Enter"){
    try{
      socket.emit("privateMessage", {
        "message": inputFieldVal.current.value,
        "sender": props.username,
        "receiver": props.currentChatRecvr,
        "timeStamp": formatAMPM(new Date),
      })
      
      props.setMessages([...props.messages, {
        "message": inputFieldVal.current.value,
        "sender": props.username,
        "receiver": props.currentChatRecvr,
        "timeStamp": formatAMPM(new Date),
      }])
        inputFieldVal.current.value = ""
        inputFieldVal.current.focus()
        console.log(props.messages)
        
    }
    catch(error){
        console.log("Oppps :", error)
    }
  }}

  const changeEmojiVisibility = function(){
    if(!EmojiPadVisible){
      setEmojiPadVisible(true)
    }
    else{
      setEmojiPadVisible(false)
    }
  }

  function formatAMPM(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

// ===========================================================================================
  return (
    <section className="chatCont">
      <div className="chatInfoPanel">

      <span className="chatPanelPhoneIcon" onClick={backToChats}>
            <ArrowBendUpLeft size={20} />
          </span>

        <span>
          <div className="chatPartnerInfo">
            <div ref={chatRecipient}>{props.currentChatRecvr}</div>
            <div>
              <div>
                <MapPin size={15} />
                Trans Ekulu, Enugu
              </div>
            </div>
          </div>
          <div className="chatPartnerActive">
            <span></span>
            <span>Active now</span>
          </div>
        </span>

        {props.clientWidth > 750 && <span className="chatPanelIconsCont">
          <span className="chatPanelVideoIcon">
            <VideoCamera size={20} />
          </span>

          <span className="chatPanelPhoneIcon">
            <Phone size={20} />
          </span>
        </span>}

        {props.clientWidth <= 750 && <div className="chatPanelIconsContMobileAndTabs">
          <span className="chatPanelVideoIcon" onClick={toggleVideoAndPhoneIcon}>
            <DotsThreeVertical size={20} />
          </span>

          {videoAndPhoneIconVisible && <span className="chatPanelVideoIcon">
            <VideoCamera size={20} />
          </span>}

          {videoAndPhoneIconVisible && <span className="chatPanelPhoneIcon">
            <Phone size={20} />
          </span>}
        </div>}


      </div>

      <div className="chatCanvas" ref={chatCanvasRef}>

        {props.messages && props.messages.map((item, index)=>{

          return (item.receiver === props.currentChatRecvr || item.sender === props.currentChatRecvr ? <div key={index} className={item.sender !== props.username ? "chat-appreceiver" : "chat-appsender"}>
          <p className="mesageVal">{item.message}</p>
          <p className="messageTime">{item.timeStamp}</p>
        </div> : <></>)
        })}

  {isTyping && chatRecipient.current.innerText !== "" ? <div className="loaderXYZabc">
		<span></span>
		<span></span>
		<span></span>
    </div> : <></>}

        {EmojiPadVisible ? <EmojiPad inputFieldVal={inputFieldVal}/> : <></>}
          
      </div>

      <div className="chatActionsPanel">
        <div>
          <span>
            <Smiley size={25} onClick={changeEmojiVisibility}/>
          </span>
          <input ref={inputFieldVal} onChange={setTyping} onKeyUp={emitMessagesKeybrd} type="text" placeholder="Your message here..." />
        </div>
        <div>
          <span>
            <Paperclip size={25} />
          </span>
          <span onClick={emitMessages}>
            <PaperPlaneTilt size={25} fill={"#fff"} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ChatCont;
