import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Teacher from "./Teacher"
import imgOne from "../img/teache-one.jpg"
import imgTwo from "../img/secound-teacher.jpg"
import imgThree from "../img/3-teacher.jpg"
import imgFour from "../img/4-teacher.jpg"
import imgFive from "../img/5-teacher.jpg"
import {useEffect, useRef, useState } from "react"
function Reviews(prop){
    let teacher = useRef(null)
    let right = useRef(null)
    let [translateX,setTranslateX] = useState("0px")
    let [num,setNum] = useState(0)
    let length = 5
    function toLeft(){
        setNum(function(prv){
            if(prv <= 0 ){
                return length - 1
            }else {
                return prv - 1 
            }
        })
    }
    function toRight(){
        setNum(function(prv){
            if(prv >= length - 1){
                return 0
            }else {
                return prv + 1 
            }
        })
    }
    useEffect(function(){
        let gap = parseFloat(window.getComputedStyle(right.current).gap) 
        let width = teacher.current.offsetWidth
        setTranslateX(`-${(width + gap) * num}px`)
    },[num])
    return (
        <section ref = {function(ele){return prop.data.current[5] = ele}} id="Reviews" className="reviews">
            <div className="container">
                <p className="section-title">Reviews</p>
                <div className="pirnt">
                    <div className="left">
                        <p>What our <span>Students</span> say about us</p>
                        <div className="arrowss">
                            <div className="left-arrow" onClick={toLeft}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                            <div className="right-arrow" onClick={toRight}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                    <div ref={right} className="right">
                        <Teacher teacher = {teacher} style = {{transform: `translateX(${translateX})`}} teacherImg = {imgOne} alt = "A smiling man in a white shirt talks on the phone at a desk with a laptop and coffee cup" teacherName = "Mohh Jumah" job = "Senior Developer" />
                        <Teacher style = {{transform: `translateX(${translateX})`}} teacherImg = {imgTwo} alt = "A smiling person in a navy suit and red tie stands in a bright, modern corridor with large windows," teacherName = "John Mark" job = "Data Analyst" />
                        <Teacher style = {{transform: `translateX(${translateX})`}} teacherImg = {imgThree} alt = "A man in a blue suit and white shirt stands outdoors," teacherName = "Rabiu Hassan" job = "Marketer" />
                        <Teacher style = {{transform: `translateX(${translateX})`}} teacherImg = {imgFour} alt = "A person in a black coat stands against a gray background, looking directly at the camera" teacherName = "Mheyah Khalifa" job = "Ux Lead" />
                        <Teacher style = {{transform: `translateX(${translateX})`}} teacherImg = {imgFive} alt = "Man in a navy suit and tie, smiling confidently outdoors with blurred architecture in the background" teacherName = "Elon Musk" job = "Content Writer" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reviews