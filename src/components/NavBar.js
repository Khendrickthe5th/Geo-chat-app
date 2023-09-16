import { ChatsCircle, Gear, SignOut } from "@phosphor-icons/react";
import "./NavBar.css";
import {Link} from "react-router-dom"



function NavBar({toggleChatContactsVisible}) {
    return(
        <section className="NavBarCont">
            <div className="NavBar">

                <span className="imgCont">
                    <img src="" alt="" />
                </span>

                <span className="icon1" onClick={toggleChatContactsVisible}>
                    <ChatsCircle size={25} color={"#fff"}/>
                </span>

                <div className="lowerCont">
                <span className="icon2">
                    <Gear size={25} color={"#fff"}/>
                </span>

                <span className="icon3">
                <Link to="/"><SignOut size={25} color={"#fff"}/></Link>
                </span>
                </div>
            </div>
        </section>
    )
}

export default NavBar;