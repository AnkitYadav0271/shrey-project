import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Academics.css";
import "./Enterpreneurship.css"
export const Entrepreneurship = () => {
    return (
        <div className="entrepreneurship-page">
            <div className="heading-image">
                <div className="img-dialogue">
                    <div className="dialogue">
                        <h2>Entrepreneurship</h2>
                        <p>
                            Unleash your innovative spirit at Government Polytechnic College Manikpur.
                            Our entrepreneurship program empowers students to turn ideas into reality,
                            providing mentorship, resources, and a supportive community.
                        </p>
                    </div>
                    <div className="svg-container">
                        <img src="entrepreneur_svg.webp" alt="entrepreneur svg" />
                    </div>
                </div>
            </div>

            <div className="image-and-some-dialogue">
                <div className="img">
                    <img src="startup_workshop.png" alt="startup workshop" />
                </div>
                <div className="details-two-cols">
                    <div className="first-cols">
                        <h3>Why Choose Entrepreneurship?</h3>
                        <p>
                            Entrepreneurship is more than starting a business—it’s about solving problems,
                            thinking creatively, and making an impact. Our program provides the tools and
                            guidance you need to succeed, whether you’re launching a startup or innovating
                            within established organizations.
                        </p>
                        <section className="success-stories">
                            <div className="story">
                                <h4>From Idea to Impact</h4>
                                <p>
                                    "The mentorship I received at Govt Polytechnic Manikpur helped me refine
                                    my business model and connect with investors. Today, my company supports
                                    local artisans across the region."
                                </p>
                                <span className="author">— Anjali Mehta, Founder, CraftConnect</span>
                            </div>
                            <div className="story">
                                <h4>Innovation in Action</h4>
                                <p>
                                    "Participating in the college’s startup incubator gave me the confidence
                                    to pitch my idea and secure seed funding. I’m now building a tech solution
                                    for sustainable agriculture."
                                </p>
                                <span className="author">— Rohit Kumar, Founder, AgriTech Solutions</span>
                            </div>
                        </section>
                    </div>
                    <div className="second-cols">
                        <div className="entrepreneur-features">
                            <h3>Program Highlights</h3>
                            <ul className="feature-list">
                                <li>
                                    <span className="feature-icon">🎯</span>
                                    <span className="feature-text">Mentorship from industry experts</span>
                                </li>
                                <li>
                                    <span className="feature-icon">💡</span>
                                    <span className="feature-text">Workshops and pitch competitions</span>
                                </li>
                                <li>
                                    <span className="feature-icon">🤝</span>
                                    <span className="feature-text">Networking with entrepreneurs and investors</span>
                                </li>
                                <li>
                                    <span className="feature-icon">📊</span>
                                    <span className="feature-text">Access to startup resources and funding</span>
                                </li>
                            </ul>
                        </div>
                        <div className="cta-section">
                            <h3>Ready to Start?</h3>
                            <div className="explore">
                                <div className="another-div">
                                    <h4>Join our next workshop</h4>
                                    <span><FaArrowRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="link-section resources">
                <h3>Resources</h3>
                <ul>
                    <li><NavLink to="#">Entrepreneur Toolkit</NavLink></li>
                    <li><NavLink to="#">Startup Incubator</NavLink></li>
                    <li><a href="/entrepreneurship_guide.pdf" download>Download Guide</a></li>
                    <li><NavLink to="#">Success Stories</NavLink></li>
                </ul>
            </div>
        </div>
    );
};
