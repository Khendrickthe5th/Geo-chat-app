import "./Header.css"
import { DotsThreeVertical, MagnifyingGlass} from "@phosphor-icons/react"

function Header(){
    return(
        <div className="HeaderCont">
            <div className="Header">
                <div>Geo chat</div>
                <div>
                <span><DotsThreeVertical size={18} fill={"#fff"} /></span>
                <span>Messages</span>
                <span><MagnifyingGlass size={18} fill={"#fff"}/></span>

                </div>

            </div>
        </div>
    )
}

export default Header;