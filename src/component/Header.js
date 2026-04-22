import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars,faUser } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"
import { useEffect, useState } from "react"
function Header(){
    let [clss,setClss] = useState("")
    let [fixed,setFixed] = useState("")
    let [opacity,setOpacity] = useState(1)
    let [width,setWidth] = useState(0)
    let [list,] = useState([
        {id: "1", li: 'Home'},
        {id: "2", li: 'Courses'},
        {id: "3", li: 'Reviews'},
        {id: "4", li: 'Instructors'},
        {id: "5", li: 'Contact Us'}
    ])
    function toSection(eve) {
        let id = eve.target.innerHTML.replaceAll(" ","-")
        window.scrollTo ({
            top: document.querySelector(`#${id}`).offsetTop - 80,
            behavior: 'smooth'
        })
    }
    let listJsx = list.map(function(ele){
        return (
            <li key={ele.id} onClick={toSection} >{ele.li}</li>
        )
    })
    function changeClss (){
        setClss(function(prv) {
            if(prv === ""){
                return "active"
            }else {
                return ""
            }
        })
    }
    useEffect(function(){
        let bodyHeight = document.body.offsetHeight
        let windowHeight = window.innerHeight
        function close(){
            setClss('')
            if(window.scrollY >= 100) {
                setOpacity(0)
                setWidth(0)
                if (window.scrollY >= 500){
                    setFixed("fixed")
                    setOpacity(1)
                    setWidth((((window.scrollY + windowHeight + 250) * 100) /  bodyHeight).toFixed(0))
                }
            }else {
                setFixed('')
                setOpacity(1)
            }
        }
        window.addEventListener("scroll",close)
        return function() {
            window.removeEventListener("scroll",close)
        }
    },[])
    return(
        <header className = {fixed} style={{opacity: `${opacity}`}}>
            <div className="container">
                <div className="bar-logo">
                    <FontAwesomeIcon icon={faBars} onClick={changeClss} />
                    <div className="logo">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <p>WiSchool</p>
                    </div>
                </div>
                <nav className = {clss}>
                    <ul>
                        {listJsx}
                    </ul>
                </nav>
                <div className="users">
                    <Button class = "Login-button" content = "Login" />
                    <Button class = "Register-button" content = "Register" />
                </div>
                <div className="user">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <div className="precentage" style={{width: `${width}%`}}></div>
        </header>
    )
}
export default Header