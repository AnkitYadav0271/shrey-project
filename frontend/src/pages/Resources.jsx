import React from "react";
import "./Resources.css";


const Resources = ({ resources, youtubeVideos }) => (
    <div className="resources-component">
        <div className="resources-section">
            <h4>Resources</h4>
            <ul className="resources-list">
                {resources.map((resource, rIdx) => (
                    <li key={rIdx}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.name}
                            {resource.isPdf && (
                                <span className="download-badge">Download PDF</span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="youtube-section">
            <h4>YouTube Videos</h4>
            <ul className="youtube-list">
                {youtubeVideos.map((video, vIdx) => (
                    <li key={vIdx}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                            {video.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const ElectricalEngineeringPage = () => {
    // Semesters 1-6: Resources and YouTube videos
    const semesters = [
        {
            id: 1,
            name: "Semester 1",
            resources: [
                { name: "Communication Skills Notes", url: "https://www.studocu.com/in/document/communication-skills/", isPdf: false },
                { name: "Maths Notes", url: "https://www.pdfdrive.com/applied-mathematics-i-books.html", isPdf: true },
                { name: "Physics Notes", url: "https://www.pdfdrive.com/applied-physics-books.html", isPdf: true },
                { name: "Chemistry Notes", url: "https://www.pdfdrive.com/applied-chemistry-books.html", isPdf: true },
                { name: "Engineering Drawing Notes", url: "https://www.pdfdrive.com/engineering-drawing-books.html", isPdf: true },
                { name: "IT Basics Notes", url: "https://www.pdfdrive.com/information-technology-books.html", isPdf: true },
                { name: "Workshop Practice Manual", url: "https://www.pdfdrive.com/workshop-practice-books.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "Communication Skills", url: "https://www.youtube.com/watch?v=zY9vSxv1rHs" },
                { title: "Applied Maths-I", url: "https://www.youtube.com/watch?v=2S0e8VYb8eQ" },
                { title: "Physics Concepts", url: "https://www.youtube.com/watch?v=9q6kL5RkZ7g" }
            ]
        },
        {
            id: 2,
            name: "Semester 2",
            resources: [
                { name: "Maths-II Notes", url: "https://www.pdfdrive.com/applied-mathematics-ii-books.html", isPdf: true },
                { name: "Physics-II Notes", url: "https://www.pdfdrive.com/applied-physics-books.html", isPdf: true },
                { name: "Basic Electrical Engineering Notes", url: "https://www.pdfdrive.com/basic-electrical-engineering-books.html", isPdf: true },
                { name: "Electrical Workshop Manual", url: "https://www.pdfdrive.com/electrical-workshop-books.html", isPdf: true },
                { name: "Electronics Components Notes", url: "https://www.pdfdrive.com/electronics-components-books.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "Basic Electrical Engineering", url: "https://www.youtube.com/watch?v=JwJ6VQ8XzZ4" },
                { title: "Physics-II Concepts", url: "https://www.youtube.com/watch?v=9q6kL5RkZ7g" }
            ]
        },
        {
            id: 3,
            name: "Semester 3",
            resources: [
                { name: "Maths-III Notes", url: "https://www.pdfdrive.com/applied-mathematics-iii-books.html", isPdf: true },
                { name: "Instrumentation Notes", url: "https://www.pdfdrive.com/electrical-instrumentation-books.html", isPdf: true },
                { name: "Engineering Materials Notes", url: "https://www.pdfdrive.com/electrical-engineering-materials-books.html", isPdf: true },
                { name: "Digital Electronics Notes", url: "https://www.pdfdrive.com/digital-electronics-books.html", isPdf: true },
                { name: "Electrical Machines-I Notes", url: "https://www.pdfdrive.com/electrical-machines-books.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "Electrical Machines", url: "https://www.youtube.com/watch?v=YVkUvmDQ3HY" },
                { title: "Digital Electronics", url: "https://www.youtube.com/watch?v=7mZEYYd65_c" }
            ]
        },
        {
            id: 4,
            name: "Semester 4",
            resources: [
                { name: "Industrial Electronics Notes", url: "https://www.pdfdrive.com/industrial-electronics-books.html", isPdf: true },
                { name: "Power Plant Notes", url: "https://www.pdfdrive.com/power-plant-engineering-books.html", isPdf: true },
                { name: "Transmission & Distribution Notes", url: "https://www.pdfdrive.com/transmission-distribution-books.html", isPdf: true },
                { name: "Energy Conservation Notes", url: "https://www.pdfdrive.com/energy-conservation-books.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "Power Plant Engineering", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { title: "Industrial Electronics", url: "https://www.youtube.com/watch?v=3dQ2bQlzQp0" }
            ]
        },
        {
            id: 5,
            name: "Semester 5",
            resources: [
                { name: "Switchgear & Protection Notes", url: "https://www.pdfdrive.com/switchgear-protection-books.html", isPdf: true },
                { name: "PLC & SCADA Notes", url: "https://www.pdfdrive.com/plc-scada-books.html", isPdf: true },
                { name: "Electrical Machines-II Notes", url: "https://www.pdfdrive.com/electrical-machines-books.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "PLC and SCADA", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { title: "Switchgear", url: "https://www.youtube.com/watch?v=YVkUvmDQ3HY" }
            ]
        },
        {
            id: 6,
            name: "Semester 6",
            resources: [
                { name: "Installation & Maintenance Notes", url: "toolsandaccessories", isPdf: true },
                { name: "Utilization Notes", url: "https://www.pdfdrive.com/utilization-electrical-energy-books.html", isPdf: true },
                { name: "Project Work Guide", url: "https://www.pdfdrive.com/project-work-guides.html", isPdf: true }
            ],
            youtubeVideos: [
                { title: "Project Work Tips", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { title: "Utilization of Electrical Energy", url: "https://www.youtube.com/watch?v=3dQ2bQlzQp0" }
            ]
        }
    ];




    return (
        <div className="electrical-engineering-page">
            <div className="ee-header">
                <h1>Electrical Engineering</h1>
                <p>UP Polytechnic Diploma Program</p>
            </div>

            <section className="semester-section">
                <h2>Semester-wise Resources & Videos</h2>
                <div className="semester-list">
                    {semesters.map((semester) => (
                        <div key={semester.id} className="semester-card">
                            <h3>{semester.name}</h3>
                            <Resources
                                resources={semester.resources}
                                youtubeVideos={semester.youtubeVideos}
                            />
                        </div>
                    ))}
                </div>


            </section>
        </div>
    );
};

export default ElectricalEngineeringPage;
