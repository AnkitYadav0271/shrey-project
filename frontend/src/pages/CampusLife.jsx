import { FaRunning, FaUsers, FaBookOpen, FaMusic, FaMicrophone, FaUtensils, FaLaptop, FaPaintBrush, FaTree, FaVolleyballBall, FaHandsHelping } from "react-icons/fa";
import "./CampusLife.css";

export const CampusLife = () => {
    // Example: Clubs and Activities
    const clubs = [
        { id: 1, name: "Sports Club", icon: <FaRunning />, desc: "Join our sports teams and compete in inter-college tournaments." },
        { id: 2, name: "Tech Club", icon: <FaLaptop />, desc: "Explore new technologies, participate in hackathons, and build projects." },
        { id: 3, name: "Cultural Club", icon: <FaMusic />, desc: "Celebrate diversity through music, dance, and drama performances." },
        { id: 4, name: "Literary Club", icon: <FaBookOpen />, desc: "Engage in debates, poetry, and literary competitions." },
        { id: 5, name: "Art Club", icon: <FaPaintBrush />, desc: "Express creativity through painting, sketching, and craft workshops." },
        { id: 6, name: "Eco Club", icon: <FaTree />, desc: "Promote sustainability with tree planting, clean-up drives, and awareness campaigns." },
    ];

    // Example: Campus Events
    const events = [
        { id: 1, name: "Annual Sports Day", icon: <FaVolleyballBall />, desc: "A day of fun, competition, and sportsmanship for all students." },
        { id: 2, name: "Tech Fest", icon: <FaLaptop />, desc: "Showcase your tech skills in coding, robotics, and innovation challenges." },
        { id: 3, name: "Cultural Fest", icon: <FaMusic />, desc: "A vibrant celebration of music, dance, and drama from across India." },
        { id: 4, name: "Open Mic Night", icon: <FaMicrophone />, desc: "Share your talents or enjoy performances by your peers." },
        { id: 5, name: "Food Festival", icon: <FaUtensils />, desc: "Savor delicious food from different regions and cultures." },
        { id: 6, name: "Community Service Day", icon: <FaHandsHelping />, desc: "Give back to the community through volunteering activities." },
    ];

    // Example: Student Life Highlights
    const highlights = [
        "Join study groups and late-night library sessions with friends.",
        "Socialize in the cafeteria and enjoy meals together.",
        "Participate in weekend getaways and campus trips.",
        "Build lifelong friendships and network with peers.",
        "Manage your time and budget to make the most of college life.",
        "Express yourself by decorating your dorm or personal space.",
    ];

    return (
        <div className="campus-life-page">
            <div className="campus-life-header">
                <h1>Campus Life</h1>
                <p>Experience a vibrant community, exciting events, and opportunities to grow beyond the classroom.</p>
            </div>

            <section className="clubs-section">
                <h2>Clubs & Organizations</h2>
                <div className="clubs-grid">
                    {clubs.map((club) => (
                        <div key={club.id} className="club-card">
                            <div className="club-icon">{club.icon}</div>
                            <h3>{club.name}</h3>
                            <p>{club.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="events-section">
                <h2>Upcoming Events</h2>
                <div className="events-grid">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <div className="event-icon">{event.icon}</div>
                            <h3>{event.name}</h3>
                            <p>{event.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="highlights-section">
                <h2>Student Life Highlights</h2>
                <ul className="highlights-list">
                    {highlights.map((item, index) => (
                        <li key={index} className="highlight-item">{item}</li>
                    ))}
                </ul>
            </section>

            <section className="gallery-section">
                <h2>Campus Gallery</h2>
                <div className="gallery-grid">
                    <img src="clgimg.jpg" alt="Campus building" />
                    <img src="seminar-on-goal.jpeg" alt="Students in library" />
                    <img src="original-sports-day.jpg" alt="Sports event" />
                    <img src="holi-celebration.jpg" alt="Cultural fest" />
                    <img src="seminar-with-youth.jpeg" alt="Study group" />
                    <img src="college-cafeteria.jpg" alt="Cafeteria" />
                </div>
            </section>

            <footer className="campus-life-footer">
                <p>Join us and make your college years unforgettable!</p>
            </footer>
        </div>
    );
};
