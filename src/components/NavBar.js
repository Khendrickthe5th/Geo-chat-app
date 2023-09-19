import { ChatsCircle, Gear, SignOut } from "@phosphor-icons/react";
import "./NavBar.css";
import {Link} from "react-router-dom"
import socketIO from "socket.io-client"
// const socket = socketIO.connect("https://geo-chat-app-be.onrender.com")
const socket = socketIO.connect("http://localhost:3100")



function NavBar(props){

    const disconnect = ()=>{
        socket.emit("leaving", props.username)
    }

    return(
        <section className="NavBarCont">
            <div className="NavBar">

                <span className="imgCont">
                    <img src="" alt="" />
                </span>

                <span className="icon1" onClick={props.toggleChatContactsVisible}>
                    <ChatsCircle size={25} color={"#fff"}/>
                </span>

                <div className="lowerCont">
                <span className="icon2">
                    <Gear size={25} color={"#fff"}/>
                </span>

                <span className="icon3" onClick={disconnect}>
                <Link to="/"><SignOut size={25} color={"#fff"}/></Link>
                </span>
                </div>
            </div>
        </section>
    )
}

export default NavBar;