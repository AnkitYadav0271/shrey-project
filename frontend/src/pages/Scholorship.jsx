import { FaRupeeSign, FaGraduationCap, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import "./Scholorship.css";

export const Scholarship = () => {
    return (
        <div className="scholarship-page">
            <div className="scholarship-header">
                <h1>Scholarships</h1>
                <p>Explore financial aid opportunities to support your academic journey at Govt Polytechnic Manikpur.</p>
            </div>

            <section className="scholarship-overview">
                <h2><FaGraduationCap /> Overview</h2>
                <p>
                    Scholarships provide vital financial support to students, enabling them to focus on their studies without the burden of financial constraints. Govt Polytechnic Manikpur encourages all eligible students to apply for scholarships offered by the Government of Uttar Pradesh and other agencies.
                </p>
            </section>

            <section className="up-scholarship">
                <h2><FaRupeeSign /> Government of Uttar Pradesh Scholarship</h2>
                <p>
                    The Uttar Pradesh government offers a range of scholarships for students at different educational levels. These scholarships are designed to support students from economically disadvantaged backgrounds and promote access to quality education.
                </p>

                <div className="scholarship-grid">
                    <div className="scholarship-card">
                        <h3>Pre-Matric Scholarship (Class 9-10)</h3>
                        <ul>
                            <li><FaCheckCircle /> For students in classes 9 and 10</li>
                            <li><FaCheckCircle /> Family income limit: ₹1,00,000 per annum (General category)</li>
                            <li><FaCheckCircle /> Covers books, tuition, and other expenses</li>
                        </ul>
                    </div>
                    <div className="scholarship-card">
                        <h3>Post-Matric Scholarship (Class 11-12 and above)</h3>
                        <ul>
                            <li><FaCheckCircle /> For students in classes 11, 12, and higher education</li>
                            <li><FaCheckCircle /> Family income limit: ₹2,50,000 per annum (General category)</li>
                            <li><FaCheckCircle /> Available for SC/ST/OBC/Minority/General categories</li>
                        </ul>
                    </div>
                    <div className="scholarship-card">
                        <h3>Post-Matric Scholarship (Outside State)</h3>
                        <ul>
                            <li><FaCheckCircle /> For UP residents studying outside the state</li>
                            <li><FaCheckCircle /> Must be enrolled in recognized institutions</li>
                            <li><FaCheckCircle /> Similar income and eligibility criteria</li>
                        </ul>
                    </div>
                </div>

                <div className="eligibility">
                    <h3>Eligibility Criteria</h3>
                    <ul>
                        <li><FaCheckCircle /> Must be a permanent resident of Uttar Pradesh</li>
                        <li><FaCheckCircle /> Must be enrolled in a recognized government, government-aided, or private institution</li>
                        <li><FaCheckCircle /> Must meet the specified annual family income limit</li>
                        <li><FaCheckCircle /> Must have passed the previous qualifying examination</li>
                    </ul>
                </div>

                <div className="application-process">
                    <h3>How to Apply</h3>
                    <ol>
                        <li>Visit the official UP Scholarship portal: <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener noreferrer">scholarship.up.gov.in</a></li>
                        <li>Register or login to your account</li>
                        <li>Fill out the application form with your academic and personal details</li>
                        <li>Upload required documents (income certificate, caste certificate if applicable, etc.)</li>
                        <li>Submit the form online</li>
                        <li>Print the application and submit a hard copy to your college if required</li>
                    </ol>
                </div>

                <div className="important-dates">
                    <h3>Important Dates (2025-26)</h3>
                    <ul>
                        <li><strong>Application Starts:</strong> First week of July 2025</li>
                        <li><strong>Last Date for Registration:</strong> Third week of December 2025</li>
                        <li><strong>Last Date for Form Completion:</strong> Last week of December 2025</li>
                        <li><strong>Submission of Hard Copy to College:</strong> First week of January 2026</li>
                        <li><strong>Application Correction:</strong> Last week of January to first week of February 2026</li>
                    </ul>
                </div>
            </section>

            <section className="other-scholarships">
                <h2><FaGraduationCap /> Other Scholarships</h2>
                <p>
                    In addition to the UP Government Scholarship, students may be eligible for scholarships from the Central Government and other agencies. Check the <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">National Scholarship Portal</a> for more opportunities.
                </p>
            </section>

            <footer className="scholarship-footer">
                <p>For any queries, contact the scholarship cell at <a href="mailto:scholarship@gvtm.edu.in">scholarship@gvtm.edu.in</a></p>
            </footer>
        </div>
    );
};
