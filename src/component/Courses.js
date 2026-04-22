import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faUserGroup } from "@fortawesome/free-solid-svg-icons"
function Courses(prop){
    return(
        <div ref={prop.ref} style = {prop.style} className="courses">
            <img src = {prop.img} alt= {prop.alt} />
            <div  className="parent">
                <div>
                    <p className="title">{prop.title}</p>
                    <div>
                        <FontAwesomeIcon icon={faStar} />
                        <p className="star">{prop.star}</p>
                    </div>
                </div>
                <div>
                    <p className="time">{prop.time}</p>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p className="book">{prop.book}</p>
                    </div>
                    <p className="price">{prop.price}</p>
                </div>
            </div>
        </div>
    )
}
export default Courses