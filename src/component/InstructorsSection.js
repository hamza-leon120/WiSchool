import Instructors from "./instructors"
import imgOne from "../img/teache-one.jpg"
import imgTwo from "../img/3213319.jpg"
import imgThree from "../img/secound-teacher.jpg"
function InstructorsSection(prop){
    return (
        <section ref = {function(ele){return prop.data.current[6] = ele}} id="Instructors" className="instructors-section">
            <div className="container">
                <p className="section-title">Meet our instructors</p>
                <div className="print">
                    <Instructors img = {imgOne} alt = "A smiling man with a beard is talking on his cellphone, seated at a table with a laptop and coffee cup in a modern" name = "John Mark" job = "Senior Developer" contant = "“Education will be for you what you want it to be” " />
                    <Instructors img = {imgTwo} alt = "A woman with dark hair, wearing pearl earrings and red lipstick, looks directly at the camera with a confident expression" name = "Lora Shrof" job = "Marketing Lead" contant = "“Knowledge has to be improved, challenged, and increased constantly, or it vanishes”" />
                    <Instructors img = {imgThree} alt = "Smiling individual in a blue suit and red tie, standing in a bright, modern hallway with large windows" name = "Zeng Chin" job = "Data Analist at Metar" contant = "“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge” " />
                </div>
            </div>
        </section>
    )
}

export default InstructorsSection