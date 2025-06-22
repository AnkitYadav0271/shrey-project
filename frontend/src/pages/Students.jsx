
import { NavLink } from "react-router-dom";
import "./Student.css";
import { FaBook, FaGraduationCap, FaHome, FaRunning, FaUsers, FaUtensils, FaCalendarAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

export const StudentPage = () => {
    return (
        <div className="student-page">
            <div className="student-header">
                <h1>Student Life at Rajkiya Government Polytechnic</h1>
                <p>Welcome to your home away from home. Discover everything you need for a successful and enjoyable college journey.</p>
            </div>

            <section className="daily-routine">
                <h2><BsClock /> Daily Routine</h2>
                <div className="routine-grid">
                    <div className="routine-card">
                        <h3><FaHome /> Morning</h3>
                        <ul>
                            <li>7:00 AM – 7:30 AM: Wake Up & Freshen Up</li>
                            <li>7:30 AM – 8:00 AM: Breakfast</li>
                            <li>8:00 AM – 12:00 PM: Morning Classes</li>
                        </ul>
                    </div>
                    <div className="routine-card">
                        <h3><FaUtensils /> Afternoon</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>12:00 PM – 1:00 PM: Lunch Break</li>
                            <li className={"student-li" +
                                ""}>1:00 PM – 3:00 PM: Afternoon Classes</li>
                        </ul>
                    </div>
                    <div className="routine-card">
                        <h3><FaRunning /> Evening</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>3:00 PM – 4:00 PM: Extracurricular Activities</li>
                            <li className={"student-li" +
                                ""}>4:00 PM – 6:00 PM: Self-Study & Projects</li>
                        </ul>
                    </div>
                    <div className="routine-card">
                        <h3><FaHome /> Night</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>6:00 PM – 7:00 PM: Dinner</li>
                            <li className={"student-li" +
                                ""}>7:00 PM – 9:00 PM: Study & Assignments</li>
                            <li className={"student-li" +
                                ""}>9:00 PM – 10:00 PM: Relax & Wind Down</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="academic-life">
                <h2><FaBook /> Academic Life</h2>
                <div className="academic-grid">
                    <div className="academic-card">
                        <h3>Classes & Labs</h3>
                        <p>Attend interactive classes and practical labs to gain hands-on experience in your field.</p>
                    </div>
                    <div className="academic-card">
                        <h3>Assignments & Projects</h3>
                        <p>Work on real-world projects and assignments to apply your knowledge and develop skills.</p>
                    </div>
                    <div className="academic-card">
                        <h3>Exams & Assessments</h3>
                        <p>Regular assessments and exams to track your progress and prepare for your future career.</p>
                    </div>
                </div>
            </section>

            <section className="campus-life">
                <h2><FaGraduationCap /> Campus Life</h2>
                <div className="campus-grid">
                    <div className="campus-card">
                        <h3>Extracurricular Activities</h3>
                        <p>Join clubs, sports, and cultural events to develop leadership and teamwork skills.</p>
                    </div>
                    <div className="campus-card">
                        <h3>Library & Study Spaces</h3>
                        <p>Access a wide range of books and quiet study areas for focused learning.</p>
                    </div>
                    <div className="campus-card">
                        <h3>Cafeteria & Dining</h3>
                        <p>Enjoy healthy meals and snacks at the college cafeteria.</p>
                    </div>
                </div>
            </section>

            <section className="resources">
                <h2><FaUsers /> Student Resources</h2>
                <div className="resources-grid">
                    <div className="resource-card">
                        <h3>Academic Support</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>Mentorship Programs</li>
                            <li className={"student-li" +
                                ""}>Tutorial Sessions</li>
                            <li className={"student-li" +
                                ""}>Online Learning Portal</li>
                        </ul>
                    </div>
                    <div className="resource-card">
                        <h3>Career Guidance</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>Placement Drives</li>
                            <li className={"student-li" +
                                ""}>Internship Opportunities</li>
                            <li className={"student-li" +
                                ""}>Resume Building Workshops</li>
                        </ul>
                    </div>
                    <div className="resource-card">
                        <h3>Health & Wellness</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>Medical Facilities</li>
                            <li className={"student-li" +
                                ""}>Counselling Services</li>
                            <li className={"student-li" +
                                ""}>Sports & Fitness</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="calendar-section">
                <h2><FaCalendarAlt /> Important Dates</h2>
                <div className="calendar-grid">
                    <div className="date-card">
                        <h3>Academic Calendar</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>Semester Start: July 1, 2025</li>
                            <li className={"student-li" +
                                ""}>Mid-Term Exams: September 15-20, 2025</li>
                            <li className={"student-li" +
                                ""}>Semester End: December 20, 2025</li>
                        </ul>
                    </div>
                    <div className="date-card">
                        <h3>Events</h3>
                        <ul>
                            <li className={"student-li" +
                                ""}>Freshers' Party: July 15, 2025</li>
                            <li className={"student-li" +
                                ""}>Sports Day: October 10, 2025</li>
                            <li className={"student-li" +
                                ""}>Annual Fest: November 25-27, 2025</li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer className="student-footer">
                <p>Need help? <NavLink to="/contact">Contact the Student Support Team</NavLink></p>
            </footer>
        </div>
    );
};
