import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Results.css";

export const Results = () => {
    // Example: Result data for each semester
    const [resultData] = useState([
        { id: 1, semester: "1st Semester", year: "2023-24", status: "Published", date: "2023-12-15" },
        { id: 2, semester: "2nd Semester", year: "2023-24", status: "Published", date: "2024-05-20" },
        { id: 3, semester: "3rd Semester", year: "2023-24", status: "Upcoming", date: "2024-09-10" },
        { id: 4, semester: "4th Semester", year: "2023-24", status: "Upcoming", date: "2025-01-15" },
    ]);

    // UPBT Result Links
    const upbtResultLinks = [
        { name: "BTEUP Official Results Portal", url: "https://upbte.edu.in/" },
        { name: "BTEUP 2024-25 Results", url: "https://upbte.edu.in/" },
        { name: "BTEUP Previous Year Results", url: "https://upbte.edu.in" },
    ];

    return (
        <div className="results-page">
            <div className="results-header">
                <h1>Results Portal</h1>
                <p>Access your semester results and important result-related information here.</p>
            </div>

            <section className="semester-results">
                <h2>Semester Results</h2>
                <div className="results-grid">
                    {resultData.map((result) => (
                        <div key={result.id} className="result-card">
                            <h3>{result.semester} ({result.year})</h3>
                            <p>Status: <span className={result.status.toLowerCase()}>{result.status}</span></p>
                            <p>Published Date: {result.date}</p>
                            {result.status === "Published" && (
                                <button className="view-result-btn">
                                    <a href={`/results/${result.id}`} target="_blank" rel="noopener noreferrer">
                                        View Result
                                    </a>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="upbt-results">
                <h2>BTEUP Results</h2>
                <p>Use the following links to access UPBT (Uttar Pradesh Board of Technical Education) results:</p>
                <ul className="upbt-links">
                    {upbtResultLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="result-guidelines">
                <h2>Result Guidelines</h2>
                <div className="guidelines-card">
                    <h3>How to Check Your Results</h3>
                    <ol>
                        <li>Visit the official result portal or the college website.</li>
                        <li>Enter your roll number and other required details.</li>
                        <li>Click on "Submit" to view your result.</li>
                        <li>Download or print your result for future reference.</li>
                    </ol>
                </div>
                <div className="guidelines-card">
                    <h3>Revaluation & Rechecking</h3>
                    <p>If you have any concerns regarding your result, you can apply for revaluation or rechecking within 15 days of result declaration.</p>
                    <NavLink to="/revaluation" className="apply-link">
                        Apply for Revaluation
                    </NavLink>
                </div>
            </section>

            <footer className="results-footer">
                <p>For any queries, please contact the examination cell at <NavLink to="/contact">examination@gvtm.edu.in</NavLink></p>
            </footer>
        </div>
    );
};
