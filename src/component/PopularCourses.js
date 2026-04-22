import Courses from "./Courses"
import imgOne from "../img/Frame-6530.jpg"
import imgTwo from "../img/Frame-6531.jpg"
import imgThree from "../img/Frame-6532.jpg"
import ingFour from "../img/Frame-6533.jpg"
import imgFive from "../img/Frame-6534.jpg"
import imgSix from "../img/Frame-6535.jpg"
function PopularCourses (prop){
    return(
        <section ref = {function(ele){return prop.data.current[2] = ele}} className="popular-courses">
            <div className="container">
                <p className="section-title">Most Popular courses</p>
                <div className="grid-courses">
                    <Courses alt = "A diverse group of five people sit at a table, smiling and collaborating with laptops and notebooks in a bright office settin" img = {imgOne} title = "Learn Marketing from Top Instructors." star = "4.5" time = "6 weeks" book = "1.5k Students" price = "30.5$"/>
                    <Courses alt = "A smiling person holding a laptop stands in a modern office with brick walls" img = {imgTwo} title = "Front-end development is not hard as you think" star = "4.8" time = "1 year" book = "5k Students" price = "50.5$"/>
                    <Courses alt = "A group collaborates at a table covered with design sketches and digital mockup" img = {imgThree} title = "Everrything you need to know in UX" star = "4.7" time = "8 weeks" book = "2k Students" price = "40.9$"/>
                    <Courses alt = "A photographer, holding a camera, instructs four attentive people seated in a studio" img = {ingFour} title = "Learn photography with ease" star = "4.4" time = "4 weeks" book = "1k Students" price = "32.6$"/>
                    <Courses alt = "Aerial view of five professionals in business attire gathered around a table with laptops" img = {imgFive} title = "Be a pro in data analysis." star = "4.5" time = "6 weeks" book = "1.5k Students" price = "30.5$"/>
                    <Courses alt = "A person in a hoodie works at a desk with multiple screens displaying digital data and charts" img = {imgSix} title = "Ethical Harking is not hard as you think " star = "4.9" time = "1.5 year" book = "6k Students" price = "55.5$"/>
                </div>
            </div>
        </section>
    )
}
export default PopularCourses