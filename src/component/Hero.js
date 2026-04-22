import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser,faSquareRootVariable,faCommentDots,faUserGroup,faBookOpen,faHand } from "@fortawesome/free-solid-svg-icons"
function Hero(prop){
    return (
        <section ref = {function(ele){return prop.data.current[0] = ele}} id="Home" className="hero">
            <div className="container">
                <div className="first">
                    <div className="left">
                        <h1>Quality <span>Education</span> <br/> By Any Means <br/> Necessary.</h1>
                        <Button class = "Get-Started-button" content = "Get Started"/>
                    </div>
                    <div className="right">
                        <div className="number">
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <p>15k</p>
                            <p>Amazing students around the globe</p>
                        </div>
                        <div className="learn">
                            <p>Learn from best <br/> <span>instructors</span> around <br/> the globe</p>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faSquareRootVariable} />
                        </div>
                        <p>Problem Solving</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <p>Live chat</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        <p>Group Reading</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <p>10k Courses</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faHand} />
                        </div>
                        <p>Hand-on activities</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero