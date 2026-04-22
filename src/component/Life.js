import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBookOpen, faClock, faSuitcase, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import imgOne from "../img/Frame-0.jpg" 
function Life(prop){
    return (
        <section ref = {function(ele){return prop.data.current[4] = ele}} className="life">
            <div className="container">
                <p className="section-title">We Bring The Good Education To Life</p>
                <div className="print">
                    <div className="left">
                        <img src= {imgOne} alt="Smiling young woman in a green t-shirt holds notebooks" />
                        <div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faSuitcase} />
                            </div>
                            <p><span>Job</span> <br/> Opportunities</p>
                        </div>
                    </div>
                    <div className="right">
                        <p>Let Your Education Do The Walking</p>
                        <div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBookOpen} />
                            </div>
                            <p>Free E-book, Videos and kits</p>
                        </div>
                        <div> 
                            <div className="icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <p>Learn at your own pace</p>
                        </div>
                        <div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faSuitcase} />
                            </div>
                            <p>Collaborate with different learners around the globe</p>
                        </div>
                        <div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </div>
                            <p>Top instructors around the globe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Life