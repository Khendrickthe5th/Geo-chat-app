import "./Header.css"
import React, { useRef } from "react"
import { DotsThreeVertical, MagnifyingGlass, CaretRight} from "@phosphor-icons/react"

function Header(){
    const sideMenuRef = useRef()
    
    const toggleOpts = ()=>{
        sideMenuRef.current.style.display = "block";
        sideMenuRef.current.focus()
        sideMenuRef.current.addEventListener("blur", ()=>{
            sideMenuRef.current.style.display = "none";
        })
        }

    return(
        <div className="HeaderCont">
            <div className="Header">
                <div>Geo chat</div>
                <div>
                <span onClick={toggleOpts}><DotsThreeVertical size={18} fill={"#fff"} /></span>
                <span>Messages</span>
                <span><MagnifyingGlass size={18} fill={"#fff"}/></span>
                </div>

                <div className="sideMenu" ref={sideMenuRef} tabIndex="5">
                    <ul>Profile <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <ul>Status <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <ul>Settings <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <ul>Log out<CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                </div>

            </div>
        </div>
    )
}

export default Header;