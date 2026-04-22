import Courses from "./Courses"
import imgOne from "../img/Frame-6540.jpg"
import imgThree from "../img/Frame-6541.jpg"
import imgFour from "../img/Frame-6542.jpg"
import imgTwo from "../img/Frame-6531.jpg"
import imgFive from "../img/Frame-6534.jpg"
import imgSix from "../img/Frame-6535.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
function NewSkill(prop) {
    let chil = useRef(null)
    let [translate, setTranslate] = useState()
    let [transition,setTransition] = useState("transform 0.6s ease")
    let [number,setNumber] = useState(2)
    let [arr, setArry] = useState([
        { id: "5 clone", img:  imgFive, alt: "A diverse team in a business meeting,", title: "Be a pro in data analysis.", star: "4.5", time: "6 weeks", book: "1.5k Students", price: "30.5$", },
        { id: "6 clone", img:  imgSix, alt: "A person in a hoodie works on multiple screens displaying digital data and graphs", title: "Ethical Harking is not hard as you think ", star: "4.9", time: "1.5 year", book: "6k Students", price: "55.5$", },
        { id: 1, img: imgOne, alt: "", title: "ll you need in Business Strategy", star: "4.3", time: "6 weeks", book: "1k Students", price: "25.9$", },
        { id: 2, img: imgThree, alt: "Two people collaborate at a desk with wireframe sketches", title: "The amazing hack in Figma prototyping", star: "4.4", time: "4 weeks", book: "1.5k Students", price: "29.8$" },
        { id: 3, img: imgFour, alt: "A woman smiles at her desk with a computer displaying code. ", title: "Introduction to basic game developement", star: "4.8", time: "6 weeks", book: "3k Students", price: "34.7$", },
        { id: 4, img: imgTwo, alt: "Smiling person in plaid shirt holds a laptop in a modern office with brick walls", title: "Front-end development is not hard as you think", star: "4.8", time: "1 year", book: "5k Students", price: "50.5$", },
        { id: 5, img:  imgFive, alt: "A diverse team in a business meeting,", title: "Be a pro in data analysis.", star: "4.5", time: "6 weeks", book: "1.5k Students", price: "30.5$", },
        { id: 6, img:  imgSix, alt: "A person in a hoodie works on multiple screens displaying digital data and graphs", title: "Ethical Harking is not hard as you think ", star: "4.9", time: "1.5 year", book: "6k Students", price: "55.5$", },
        { id: "1 clone", img: imgOne, alt: "", title: "ll you need in Business Strategy", star: "4.3", time: "6 weeks", book: "1k Students", price: "25.9$", },
        { id: "2 clone", img: imgThree, alt: "Two people collaborate at a desk with wireframe sketches", title: "The amazing hack in Figma prototyping", star: "4.4", time: "4 weeks", book: "1.5k Students", price: "29.8$" },
        { id: "3 clone", img: imgFour, alt: "A woman smiles at her desk with a computer displaying code. ", title: "Introduction to basic game developement", star: "4.8", time: "6 weeks", book: "3k Students", price: "34.7$", },
    ])
    let arrJsx  = arr.map(function(ele,index){
        return (
            <Courses alt = {ele.alt} key = {ele.id} ref = {index === arr.length - 1 ? chil : null}  img = {ele.img}   title = {ele.title}  star= {ele.star} time = {ele.time}  book = {ele.book} price = {ele.price} />
        )
    })
    function toLeft() {
        setNumber(function(prv) {
            return prv - 1 
        })
    }
    function toRight() {
        setNumber(function(prv) {
            return prv + 1 
        })
    }
    useEffect(function() {
        let width = chil.current.offsetWidth
        let gap = parseInt(window.getComputedStyle(chil.current).marginRight)
        setTranslate(width + gap)
        if(number === arr.length - 3){
            setTimeout(function(){
                setTransition("none")
                setNumber(2)
                setTimeout(function(){
                    setTransition("transform 0.6s ease")
                },10)
            },600)
        }else if(number === 0) {
            setTimeout(function(){
                setTransition("none")
                setNumber(arr.length - 5)
                setTimeout(function(){
                    setTransition("transform 0.6s ease")
                },10)
            },600)
        }
    },[number])
    return (
        <section ref = {function(ele){return prop.data.current[3] = ele}} className="new-skill">
            <div className="container">
                <p className="section-title">Learn a new skill in two hours</p>
                <div className="grid-skill">
                    <div className="arrows">
                        <div className="left" onClick={toLeft}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className="right" onClick={toRight}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="slider" style={{transform: `translateX(-${translate * number}px)`,transition: `${transition}`}}>
                        {arrJsx} 
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewSkill