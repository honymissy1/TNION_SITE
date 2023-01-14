import Nav from "../components/Nav";
import '../asset/styles/contact.css';
import Image from  '../asset/images/blog-img.jpg'

const Contact = () =>{
    return(
        <div>
            <Nav />


            <div className="contact-container">
                <div className="contact-hero">
                    <img src={Image} alt="Why this" />
                </div>

                <div className="get-in-touch">
                    <div className="social">
                        <h1>Get in Touch</h1>
                        <h2>Hello we're looking forward to hear from you</h2>
                        <p>For additional enquires you can talk to us on our social media platforms or
                            send us a mail or better still give us a call.
                        </p>
                    </div>

                    <div class="contact">
                        <h2>Call Us</h2>
                        <p><a href="tel:+234-805-721-8781">Tel:+234-805-721-8781</a></p>
                        <h2>Location</h2>
                        <p>Translators Network International <br />22/23 Billingsway, Ikeja, Lagos</p>
                   
                    </div>

                    <form>
                        <input id="input" type="text" placeholder="Name"/>
                        <input id="input" type="text" placeholder="Email"/>
                        <input id="input" type="text" placeholder="Phone"/>
                        <input id="input" type="text" placeholder="Subject" />
                        <textarea placeholder="Message"></textarea>
                        <button className="send">Send</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}


export default Contact;