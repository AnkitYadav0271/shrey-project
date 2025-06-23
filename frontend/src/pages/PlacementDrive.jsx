import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Academics.css";

export const PlacementDrive = () => {
    return (
        <div className="placement-drive">
            <div className="heading-image">
                <div className="img-dialogue">
                    <div className="dialogue">
                        <h2>Placement Drive</h2>
                        <p>
                            Welcome to the Government Polytechnic College Manikpur Placement Drive!
                            Our goal is to connect talented students with leading companies, helping you launch your career with confidence.
                            Whether you're seeking internships or full-time roles, our placement cell is here to support you every step of the way.
                        </p>
                    </div>
                    <div className="svg-container">
                        <img src="https://talentbattle.in/Files/C4U_Images/C4U_CKEDITOR_IMAGES/IMG11221_28.png" alt="placement svg" />

                    </div>
                </div>
            </div>

            <div className="image-and-some-dialogue">
                <div className="img">
                    <img src="https://www.mypunepulse.com/wp-content/uploads/2024/08/about_placement.jpg" alt="placement-students" />

                </div>
                <div className="details-two-cols">
                    <div className="first-cols">
                        <p>
                            Participate in our placement drive to explore opportunities with top recruiters.
                            Gain interview experience, receive personalized guidance, and discover the perfect role for your skills and interests.
                        </p>
                        <h3>Why Join Our Placement Drive?</h3>
                        <p>
                            Our placement cell works closely with industry partners to bring you the best opportunities.
                            You'll receive training, mock interviews, and career counseling to help you stand out.
                            Our alumni network and dedicated staff ensure you have the support you need to succeed.
                        </p>
                        <section className="register-now">
                            <div className="register-container">
                                <button style={{ width: '10rem' }}>
                                    <NavLink to='/admissions' style={{ color: '#000' }}>Register Now</NavLink>
                                </button>
                            </div>
                        </section>
                    </div>
                    <div className="second-cols">
                        <div className="first-box box">
                            <div className="heading">
                                <h1>Top Recruiters</h1>
                            </div>
                            <ul>
                                <li>Tech Solutions Pvt. Ltd.</li>
                                <li>Green Energy Inc.</li>
                                <li>Infra Builders</li>
                                <li>Global IT Services</li>
                            </ul>
                        </div>

                        <div className="second-box box">
                            <div className="heading-second">
                                <h1>Success Stories</h1>
                            </div>
                            <p>
                                Our students have secured positions in leading companies across various sectors.
                                Hear from alumni who have transformed their careers through our placement drive.
                            </p>
                            <div className="explore">
                                <div className="another-div">
                                    <h3>Explore opportunities</h3>
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
