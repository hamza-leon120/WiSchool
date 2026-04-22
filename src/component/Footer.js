import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Button from "./Button"
function Footer(prop) {
    return (
        <footer ref = {function(ele){return prop.data.current[8] = ele}}>
            <div className="container">
                <div className="top">
                    <div className="left">
                        <p className="name">WiSchool</p>
                        <p className="contant">We are not here to sell you products, we sell value through our expertise.</p>
                        <div className="icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Training</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">SME</a></li>
                            <li><a href="#">Solution</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Place a Call</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">haaymem20@gmail.com</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Job Opening</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Research</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Uk Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <p>Subscribe to get latest updates</p>
                    <div>
                        <form action= "">
                            <input type = "email" placeholder ="Your Email address" required />
                            <button className = "button" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer