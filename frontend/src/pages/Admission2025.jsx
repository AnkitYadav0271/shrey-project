import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaCheck } from "react-icons/fa";
import "./Admission2025.css";

export const Admission2025 = () => {
    return (
        <div className="admission-page">
            {/* Header section */}
            <div className="header-section">
                <div className="header-content">
                    <h2>Admissions 2025</h2>
                    <p>
                        Join Rajkiya Government Polytechnic for the 2025 academic year and start your journey towards a successful career in technical education.
                    </p>
                </div>
                <div className="header-image">
                    <img src="admission-illustration.jpg" alt="Admission illustration" />
                </div>
            </div>

            {/* Main content */}
            <div className="main-content">
                {/* Left column */}
                <div className="left-column">
                    <img src="collpic.jpg" alt="Campus entrance" />
                    <div className="left-content">
                        <h3>Why Choose Rajkiya Government Polytechnic?</h3>
                        <p>
                            Discover a vibrant community of learners and innovators. Our faculty are committed to your success, offering mentorship, hands-on training, and industry connections.
                        </p>
                        <div className="register-btn">
                            <button>
                                <NavLink to="/admissions">Register Now</NavLink>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="right-column">
                    {/* Admission Timeline */}
                    <div className="info-box">
                        <h3>
                            <FaCalendarAlt /> Admission Timeline
                        </h3>
                        <ul>
                            <li>
                                <FaCheck /> Application Opens: June 1, 2025
                            </li>
                            <li>
                                <FaCheck /> Last Date to Apply: July 31, 2025
                            </li>
                            <li>
                                <FaCheck /> Entrance Exam: August 15, 2025
                            </li>
                            <li>
                                <FaCheck /> Results Announcement: September 1, 2025
                            </li>
                        </ul>
                    </div>

                    {/* Eligibility & Requirements */}
                    <div className="info-box">
                        <h3>Eligibility & Requirements</h3>
                        <ul>
                            <li>Passed 10th standard or equivalent</li>
                            <li>Minimum 50% marks in qualifying examination</li>
                            <li>Valid ID proof and domicile certificate</li>
                        </ul>
                        <div className="explore-link">
                            <span>View detailed requirements</span>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
