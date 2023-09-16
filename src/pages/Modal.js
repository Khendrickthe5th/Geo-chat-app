import "./Modal.css"
import React, {useEffect, useRef} from 'react'
import {Link} from "react-router-dom"


function Modal({setUsername}){
const usernameVal = useRef()

    useEffect(()=>{
        console.log("Okay Working")
    })

    const pushUsername =()=>{
        setUsername(usernameVal.current.value)
    }


    return(
    <div className="modalCont"> 
        <div className="modal">
            <div className="loginSec">
            <span>Type in your <br />Favourite Nickname</span>
            <div>  
            <p>Username</p>
            <input ref={usernameVal} type="text" name="username" placeholder="Your Nickname here..."/>
            </div>
            <Link to="/main"><div className="butLogin" onClick={pushUsername}>Login</div></Link>
            </div>
            <div className="displaySec">
                <div className="displaySecInnerCont">
                <h1>Join the<br />
                Conversation</h1>
                <h6>Meet random people from around the Globe</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;