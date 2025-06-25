import "./Footer.css";
import { FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="about-container">
                    <div className="logo">
                        <img src="logo.png" alt="logo" />
                    </div>
                    <h2>Government Polytechnic, Manikpur</h2>
                    <h4>Manikpur, Chitrakoot, Uttar Pradesh</h4>
                    <p>Mail us: gvtm@gmail.com</p>
                </div>
                <div className="more-links">
                    <div className="important-links">
                        <div className="link-section admissions">
                            <h3>Admissions</h3>
                            <ul>
                                <li><NavLink to="/admissions-2025">Admissions 2025-26</NavLink></li>
                                <li><NavLink to="/register">Online Education Admission</NavLink></li>
                                <li><NavLink to="/scholarship">Scholarship & Aid</NavLink></li>
                                <li><NavLink to="proceed-payment">Fee Deposit</NavLink></li>
                                <li><NavLink to="/faqs">Faqs</NavLink></li>
                            </ul>
                        </div>
                        <div className="link-section academics">
                            <h3>Academics</h3>
                            <ul>
                                <li><NavLink to="placement-drive">Joint Placement drive</NavLink></li>
                                <li><NavLink to="/alumni">Alumni</NavLink></li>
                                <li><NavLink to="/entrepreneurship">Entrepreneurship</NavLink></li>
                                <li><NavLink to="/more-about-placement">More About Placements</NavLink></li>
                            </ul>
                        </div>
                        <div className="link-section resources">
                            <h3>Resources</h3>
                            <ul>
                                <li><NavLink to="/resources">Online Resources</NavLink></li>
                                <li><NavLink to="https://www.gutenberg.org/" target={"_blank"}>E library</NavLink></li>
                                <li><a href="/syllabus.pdf" download>
                                    Download Syllabus
                                </a></li>
                                <li><NavLink to="/apply-certificate">Apply Certificate</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-copyright-container">
                <div className="social-links">
                    <NavLink to="#" aria-label="Youtube">
                        <FaYoutube className="youtube social" />
                    </NavLink>
                    <NavLink to="#" aria-label="Instagram">
                        <BsInstagram className="instagram social" />
                    </NavLink>
                    <NavLink to="#" aria-label="X (Twitter)">
                        <FaXTwitter className="x social" />
                    </NavLink>
                    <NavLink to="#" aria-label="Facebook">
                        <FaFacebookF className="facebook social" />
                    </NavLink>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Government Polytechnic, Manikpur. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
