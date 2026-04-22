import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
function FavouriteCourse (prop){
    let chil = useRef(null)
    let [translate,setTranslate] = useState()
    let [transfor,setTransform] = useState("transform 0.6s ease")
    let [number,setNumber] = useState(2)
    let [arr,setArr] = useState([
        {id : "5 clone" , className : "photography favourite" , content: "Photography"},
        {id : "6 clone" , className : "cooking favourite" , content: "Cooking"},
        {id : 1 , className : "marketing favourite" , content: "Marketing"},
        {id : 2 , className : "design favourite" , content: "Design"},
        {id : 3 , className : "programming favourite" , content: "Programming"},
        {id : 4 , className : "technology favourite" , content: "Technology"},
        {id : 5 , className : "photography favourite" , content: "Photography"},
        {id : 6 , className : "cooking favourite" , content: "Cooking"},
        {id : "1 clone" , className : "marketing favourite" , content: "Marketing"},
        {id : '2 clone' , className : "design favourite" , content: "Design"},
        {id : "3 clone" , className : "programming favourite" , content: "Programming"},  
    ])
    let arrJsx = arr.map(function(el,index){
        return (
            <div ref={index === arr.length - 1 ? chil : null} key={`key-${el.id}`} className = {index === number + 1  ? `${el.className} active` : el.className } >
                <p>{el.content}</p>
                <div className = {index === number + 1 ? "active" : ""} ></div>
            </div>
        )
    })
    function right(){
        setNumber (function(prv) {
            return prv + 1
        })
    }
    function left(){
        setNumber (function(prv) {
            return prv - 1
        })
    }
    useEffect(function(){
        let width = chil.current.offsetWidth
        let gap = parseFloat(window.getComputedStyle(chil.current).marginRight)
        setTranslate(width + gap)
        if (number === arr.length - 3){
            setTimeout(function(){
                setTransform("none")
                setNumber(2)
                setTimeout(function(){
                    setTransform("transform 0.6s ease")
                },10)
            },650)
        }else if (number === 0){
            setTimeout(function(){
                setTransform("none")
                setNumber(arr.length - 5)
                setTimeout(function(){
                    setTransform("transform 0.6s ease")
                },10)
            },650)
        }
    },[number])
    return (
        <section ref = {function(ele){return prop.data.current[1] = ele}} id="Courses" className="favourite-course">
            <div className="container">
                <p className="section-title">Choose favourite course from top categories</p>
                <div className="grid-favourite-course">
                    <div className="arrows">
                        <div className="left" onClick={left}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                        <div className="right" onClick={right}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="slider"  style={{transition: `${transfor}`,transform: `translateX(-${translate * number}px)`}}>
                        {arrJsx}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FavouriteCourse
