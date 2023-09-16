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
             <span>Heyyy</span>
            <input ref={usernameVal} type="text" name="username" id="" />
            <button onClick={pushUsername}>Submit</button>
            <Link to="/main"><button> Remove </button></Link>
        </div>
    </div>
    )
}

export default Modal;