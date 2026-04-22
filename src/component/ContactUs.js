import Button from "./Button"
import imgOne from "../img/image.jpg"
function ContactUs (prop){
    return(
        <section ref = {function(ele){return prop.data.current[7] = ele}} id="Contact-Us" className="contact-us">
            <div className="back"></div>
            <div className="container">
                <div className="print">
                    <img src= {imgOne} alt="A woman in a white shirt, wearing a headset, smiles while sitting at a desk" />
                    <div className="right">
                        <p>You don’t have to see the whole staircase just take the first step</p>
                        <p>Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a </p>
                        <div className="buttons">
                            <Button class = "button" content = "Get Started"/>
                            <Button class = "button" content = "Place a call"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ContactUs