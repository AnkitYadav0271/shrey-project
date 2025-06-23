import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Academics.css";
import "./Alumni.css"

export const Alumni = () => {
    return (
        <div className="alumni-page">
            <div className="heading-image">
                <div className="img-dialogue">
                    <div className="dialogue">
                        <h2>Alumni Network</h2>
                        <p>
                            Welcome back to the Government Polytechnic College Manikpur Alumni Network.
                            Stay connected, share your journey, and inspire the next generation of students.
                        </p>
                    </div>
                    <div className="svg-container">
                        <img src="alumni.jpg" alt="alumni svg" />
                    </div>
                </div>
            </div>

            <div className="image-and-some-dialogue">
                <div className="img">
                    <img src="https://media.gettyimages.com/id/1175414396/photo/large-group-of-happy-college-students-celebrating-their-graduation-day-outdoors.jpg?s=612x612&w=0&k=20&c=TapPl6OrS1_4B4itG9i5CN5_DkltWz-OCT0hMOWIccw=" alt="alumni gathering" />
                </div>
                <div className="details-two-cols">
                    <div className="first-cols">
                        <h3>Your Journey, Our Pride</h3>
                        <p>
                            Our alumni are making a difference across industries and communities.
                            Every story is unique, and every achievement inspires us to aim higher.
                        </p>
                        <section className="alumni-stories">
                            <div className="story">
                                <h4>From Campus to Career</h4>
                                <p>
                                    "My time at Govt Polytechnic Manikpur gave me the skills and confidence to excel.
                                    Today, I lead a team of engineers and mentor young professionals."
                                </p>
                                <span className="author">— Ramesh Patel, B.E. Mechanical, 2015</span>
                            </div>
                            <div className="story">
                                <h4>Building Bridges</h4>
                                <p>
                                    "I returned to campus as a guest lecturer, sharing my industry experience.
                                    Giving back feels just as rewarding as my own education."
                                </p>
                                <span className="author">— Priya Sharma, B.E. Electrical, 2018</span>
                            </div>
                        </section>
                    </div>
                    <div className="second-cols">
                        <div className="alumni-features">
                            <h3>Stay Involved</h3>
                            <ul className="feature-list">
                                <li>
                                    <span className="feature-icon">📅</span>
                                    <span className="feature-text">Attend reunions and events</span>
                                </li>
                                <li>
                                    <span className="feature-icon">👥</span>
                                    <span className="feature-text">Connect with classmates and mentors</span>
                                </li>
                                <li>
                                    <span className="feature-icon">💡</span>
                                    <span className="feature-text">Share your success story</span>
                                </li>
                            </ul>
                        </div>
                        <div className="alumni-cta">
                            <h3>Explore Opportunities</h3>
                            <div className="explore">
                                <div className="another-div">
                                    <h4>Join our alumni directory</h4>
                                    <span><FaArrowRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
