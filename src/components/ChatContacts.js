import "./ChatContacts.css"
import { MagnifyingGlass } from "@phosphor-icons/react"
import React, { useState, useEffect, useRef } from "react"
import socketIO from "socket.io-client"
const socket = socketIO.connect("https://chat-app-test-pwrp.onrender.com")
// const socket = socketIO.connect("http://localhost:3100")


function ChatContacts(props){
    const [onlineUsers, setOnlineUsers] = useState()
    const allConvo = useRef()
    const chatHeadName = useRef()


    useEffect(()=>{
        console.log("online users redndered")
        socket.on("userListRen", (userList)=>{
        setOnlineUsers(userList)
        console.log("received event from server")
    })
    },[ onlineUsers])

    const addClickEvent = (e)=>{
        socket.emit("join", {"roomId": e.target.innerText})
            props.setCurrentChatRecvr(e.target.getAttribute("data-onlineFrnd"))
            // console.log(e.target.getAttribute("data-onlineFrnd"))
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
            {onlineUsers && Object.entries(onlineUsers).map((item, index)=>{
                return( item[0] !== props.username ? <div key={index} className="convoHeaderCont" onClick={addClickEvent}>
            <div className="convoHeader">
                <div className="dpImgCont">
                    <p></p>
                </div>
                {/* {console.log("rendered users", item[0], "username", props.username)} */}
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