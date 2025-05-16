import "./Footer.css";
import { FaYoutube ,FaXTwitter ,FaFacebookF} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Footer = ()=> {
    return (
      
        <div className="footer-container">
         <div className="about-container">
        <div className="logo">
            <img src="logo.png" alt="logo" />
        </div>
        <h2>Government Polytechnic, Manikpur</h2>
        <h4>Manikpur, Chitrakoot, Uttar Pradesh</h4>
        <p>Mail us : gvtm@gmail.com</p>
         </div>
         <div className="more-links">
            <div className="copyright">
                <div className="social-links">
                    <FaYoutube className="youtube  .social"/>
                    <BsInstagram className="instagram .social"/>
                    <FaXTwitter className="x .social" />
                    <FaFacebookF className="facebook .social"/>
                </div>
               
            </div>
            <div className="important-links">
                <div className="admissions">
                    <h3>Admissions</h3>
                    <ul>
                        <li><NavLink to="#" >Admissions 2025-26</NavLink></li>
                        <li><NavLink  to="#">Online Education Admission</NavLink></li>
                        <li><NavLink to="#">Scholarship & Aid </NavLink></li>
                        <li><NavLink to="#">Fee Deposit</NavLink></li>
                        <li><NavLink to="#">Faqs</NavLink></li>
                    </ul>
                </div>
                <div className="academics">
                    <h3>Academics</h3>
                    <ul>
                        <li><NavLink  to="#">Joint Placement drive</NavLink></li>
                        <li><NavLink to="#">Alumni</NavLink></li>
                        <li><NavLink to="#">Entrepreneurship </NavLink></li>
                        <li><NavLink to="#">More About Placements</NavLink></li>
                       
                    </ul>
                </div>
                <div className="resources">
                     <h3>Resources</h3>
                    <ul>
                        <li><NavLink to="#" >Online Education</NavLink></li>
                        <li><NavLink  to="#">E library</NavLink></li>
                        <li><NavLink to="#">Download Syllabus </NavLink></li>
                        <li><NavLink to="#">Apply Certificate</NavLink></li>
                        
                    </ul>
                </div>
            </div>
         </div>
        </div>
        
    );
}