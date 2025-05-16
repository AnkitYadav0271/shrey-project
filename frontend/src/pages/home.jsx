import { FaArrowRight } from "react-icons/fa6";
import './home.css';
import newsData from '../API/news.json';
import Logos from '../API/logo.json'
import { Article } from "../components/Artical";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbHandClick } from "react-icons/tb";
import { FaChartSimple } from "react-icons/fa6";
import { PiUsersFourFill } from "react-icons/pi";
import { LogoAnimation } from "../components/LogoAnimation";
import { NavLink } from "react-router-dom";
import { Faculty } from "../components/Faculty";

export const Home = () => {
    return (
        <>
            <div className="hero-section">
                <div className="background">
                    <img className='hero-bg' src="clgbg.jpg" alt="college background" />
                </div>
                <div className="just-another-layer"></div>
                <div className="intro-container">
                    <h3>Welcome to Govt Polytechnic Manikpur UP</h3>
                    <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
                </div>
                <div className="another-quote">
                    <p>
                        Welcome to Govt Polytechnic Manikpur, a government institution
                        dedicated to shaping the innovators and professionals 
                        of tomorrow. With a legacy of academic excellence and 
                        practical training, we provide students with the tools
                        to excel in their chosen technical fields.
                    </p>
                    <div className="right-arrow">
                        <button className="arrow-btn">
                            <a href="#">
                                <FaArrowRight className="arrow" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
           
        <section className="our-courses">
            <div className="courses-we-offer">
                <h3>Courses we Offer</h3>
                <div className="courses-img-and-details">
                    <div className="mechanical  courses-img-container">
                        <img src="mech.jpg" alt="mechanical  " />
                        <h4>Mechanical engineering</h4>
                        <p>Duration: 3yrs</p>
                    </div>
                     <div className="electrical engineering courses-img-container">
                        <img src="electrical.jpg" alt="electrical engineering" />
                        <h4>electrical engineering</h4>
                        <p>Duration: 3yrs</p>
                    </div>
                     <div className="information-technology courses-img-container">
                        <img src="cs.jpg" alt="information-technology" />
                        <h4>Information technology</h4>
                        <p>Duration: 3yrs</p>
                    </div>
                     <div className=" civil courses-img-container">
                        <img src="civil.jpg" alt="civil" />
                        <h4>Civil engineering</h4>
                        <p>Duration: 3yrs</p>
                    </div>
                </div>
            </div>
        </section>

            <section className="article-section">
                <div className="latest-tech">
                    <h3>Latest Tech Updates</h3>
                </div>
                <div className="articals">
                    {newsData.map((curTask) => (
                        <Article key={curTask.id} props={curTask} />
                    ))}
                </div>
            </section>

            <section className="exceptional-path">
                <div className="details">
                    <h2>Govt Polytechnic Manikpur:</h2>
                    <h3>The Gateway to</h3>
                    <h4>Exceptional Careers</h4>
                </div>

                <div className="icons-and-details">
                    <div className="highest-package">
                        <div className="icon">
                            <FcMoneyTransfer  className="real_icons" />
                        </div>
                        <div className="package-details">
                            <h3>40 lakhs</h3>
                            <h4>Highest salary package</h4>
                        </div>
                    </div>

                    <div className="number-of-companies highest-package">
                        <div className="icon">
                            <TbHandClick className="real_icons" />
                        </div>
                        <div className="package-details ">
                            <h3>3000+</h3>
                            <h4>Offers from 200+ companies</h4>
                        </div>
                    </div>
                    <div className="avg-package highest-package">
                        <div className="icon">
                            <FaChartSimple className="real_icons" />
                        </div>
                        <div className="package-details ">
                            <h3>5.4 Lakhs</h3>
                            <h4>Average Package</h4>
                        </div>
                    </div>
                
                 <div className="total-recruiters highest-package">
                        <div className="icon">
                            <PiUsersFourFill className="real_icons" />
                        </div>
                        <div className="package-details">
                            <h3>1100+</h3>
                            <h4>Total recruiters</h4>
                        </div>
                    </div>

                    
                </div>
            </section>
            {/*? section faculty starts here */}
     
            <section>
                <Faculty/>
            </section>


            {/* section faculty ends here  */}
            <section className="companies-section">
                <h3 >Our Proud Partners</h3>
                <div className="company-logo-animation">
                    {
                      Logos.map((curLogo,index)=>{
                        console.log(curLogo)
                        return (
                            <LogoAnimation key={index} props = {curLogo}/>
                        )
                      })
                    }
                </div>
            </section>

            <section className="register-now">
                <div className="register-container">
                    <button style={{width:'10rem'}}>
                       <NavLink to='/admissions' style={{color:'#000'}}>Register Now</NavLink>
                    </button>
                </div>
            </section>
        </>
    );
};
