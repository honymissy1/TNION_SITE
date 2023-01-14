import Nav from "../components/Nav";
import '../asset/styles/home.css'
import HeroImg from '../asset/images/hero-img.png'

const Index = () =>{
    return(
        <div>
            <Nav />
            <div className="home-content">
              <section className="hero-section">
                <div className="hero-content">
                    <h2>Welcome to <span style={{color: 'red', fontWeight: "900"}}>TNION</span></h2>
                    <h1>Whoever you are we are glad to have you</h1>
                    <h2>Free Signups available</h2>

                    <button className="hero-btn">Partner Now</button>
                </div>

                <div className="hero-img">
                    <img src={HeroImg} alt="Hero"/>
                </div>
              </section>

              <div className="about">
                <h1>About Us</h1>
                <div>
                    <h2>The Translator's Network International Outreach Network (TNION)</h2>
                    <p>is a Network of Ministers who
                        have adopted the use of
                        Rhapsody of Realities
                        devotional and are in turn
                        involved in the spread and
                        sponsorship of the
                        devotional in their localities
                        and regions of the world</p>
                </div>
                
              </div>
              
              <div className="section-2">
                <h1>WHO CAN JOIN TNION</h1>

                <ul>
                    <li>Pastors</li>
                    <li>Teachers</li>
                    <li>Evangelist</li>
                    <li>Prophets</li>
                    <li>Apostles</li>
                    <li>Ministers of the gospel with music</li>
                    <li>Youth leaders</li>
                    <li>Kids church leaders</li>
                </ul>
              </div>
            </div>

            <div className="extra"></div>
        </div>
    )
}


export default Index;