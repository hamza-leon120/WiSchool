import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
function Up() {
    let [position,setPosition] = useState('')
    window.onscroll = function(){
        if(this.scrollY >= 500) {
            setPosition("fixed")
        }else {
            setPosition('')
        }
    }
    function toTheTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={toTheTop} className="up" style={{position: `${position}`}}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}
export default Up