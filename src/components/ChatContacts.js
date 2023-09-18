import "./ChatContacts.css"
import { MagnifyingGlass } from "@phosphor-icons/react"
import React, { useState, useEffect, useRef } from "react"
import socketIO from "socket.io-client"
// const socket = socketIO.connect("https://geo-chat-app-be.onrender.com")
const socket = socketIO.connect("http://localhost:3100")


function ChatContacts(props){
    const allConvo = useRef()
    const chatHeadName = useRef()
    const [clientWidth, setClientWidth] = useState(window.innerWidth)

    useEffect(()=>{
    window.onresize = ()=>{
        setClientWidth(window.innerWidth)
    }
    })



    const addClickEvent = (e)=>{
        socket.emit("join", {"roomId": e.target.innerText})
            props.setCurrentChatRecvr(e.target.getAttribute("data-onlineFrnd"))
            props.setInitiateChat(true)

            if(clientWidth <= 750){
                props.setHeaderAndChatContactsVisibility(false)
                props.setChatContVisible(!props.chatContVisible)
            }
    }

    return(
        <section className="ChatContactsCont">
            <div className="searchBoxCont">
                    <span>
                    <MagnifyingGlass />
                    <input type="text" placeholder="Search"/>
                    </span>
                </div>

            <div className="chat" ref={allConvo}>
            {props.onlineUsers && Object.entries(props.onlineUsers).map((item, index)=>{
                return( item[0] !== props.username ? <div key={index} className="convoHeaderCont" onClick={addClickEvent}>
            <div className="convoHeader">
                <div className="dpImgCont">
                    <p></p>
                </div>

                <div className="lastConvoDetail" data-onlinefrnd={item[0]}>
                    <div className="usrnameAndTime" data-onlinefrnd={item[0]}>
                        <span ref={chatHeadName} data-onlinefrnd={item[0]}>{item[0]}</span>
                        <span data-onlinefrnd={item[0]}>4:54PM</span>
                    </div>
                    <div className="textPeek" data-onlinefrnd={item[0]}>
                        <p data-onlinefrnd={item[0]}>So where are we hanging out next?, i really wanna meet you again</p>
                    </div>
                </div>
            </div>
            </div> : <div key={index}></div>)
            })}

            </div>
        </section>
    )
}

export default ChatContacts;