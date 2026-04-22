import ContactUs from "./ContactUs"
import FavouriteCourse from "./FavouriteCourse"
import Hero from "./Hero"
import InstructorsSection from "./InstructorsSection"
import Life from "./Life"
import NewSkill from "./NewSkill"
import PopularCourses from "./PopularCourses"
import Reviews from "./Reviews"

function ComSection(prop) {
    return (
        <>
            <Hero data = {prop.data}/>
            <FavouriteCourse data = {prop.data}/>
            <PopularCourses data = {prop.data}/>
            <NewSkill data = {prop.data}/>
            <Life data = {prop.data}/>
            <Reviews data = {prop.data}/>
            <InstructorsSection data = {prop.data} />
            <ContactUs data = {prop.data}/>
        </>
    )
}

export default ComSection