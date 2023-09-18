import "./Header.css"
import { useRef } from "react"
import { DotsThreeVertical, MagnifyingGlass, CaretRight} from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Header(){
    const sideMenuRef = useRef()
    
    const toggleOpts = ()=>{
        sideMenuRef.current.style.display = "block";
        sideMenuRef.current.focus()
        }
        const runEventListener = ()=> sideMenuRef.current.style.display = "none";

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
                    <ul onClick={runEventListener}>Profile <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <ul onClick={runEventListener}>Status <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <ul onClick={runEventListener} >Settings <CaretRight className="carertIcon" size={18} fill={"#fff"} /></ul>
                    <Link to="/" className="zzk" onClick={runEventListener}>Log out<CaretRight className="carertIcon" size={18} fill={"#fff"} /></Link>
                </div>

            </div>
        </div>
    )
}

export default Header;