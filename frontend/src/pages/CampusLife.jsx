import React from "react";
import { FaRunning, FaUsers, FaBookOpen, FaMusic, FaMicrophone, FaUtensils, FaLaptop, FaPaintBrush, FaTree, FaVolleyballBall, FaHandsHelping } from "react-icons/fa";
import "./CampusLife.css";

const CampusLife = () => {
    // Clubs with images
    const clubs = [
        { id: 1, name: "Sports Club", icon: <FaRunning />, desc: "Join our sports teams and compete in inter-college tournaments.", image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 2, name: "Tech Club", icon: <FaLaptop />, desc: "Explore new technologies, participate in hackathons, and build projects.", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 3, name: "Cultural Club", icon: <FaMusic />, desc: "Celebrate diversity through music, dance, and drama performances.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 4, name: "Literary Club", icon: <FaBookOpen />, desc: "Engage in debates, poetry, and literary competitions.", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 5, name: "Art Club", icon: <FaPaintBrush />, desc: "Express creativity through painting, sketching, and craft workshops.", image: "https://i.shgcdn.com/4f086bd0-da61-4a3f-bf7d-8e6d0b342c41/-/format/auto/-/preview/3000x3000/-/quality/lighter/" },
        { id: 6, name: "Eco Club", icon: <FaTree />, desc: "Promote sustainability with tree planting, clean-up drives, and awareness campaigns.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    ];

    // Events with images
    const events = [
        { id: 1, name: "Annual Sports Day", icon: <FaVolleyballBall />, desc: "A day of fun, competition, and sportsmanship for all students.", image: "original-sports-day.jpg" },
        { id: 2, name: "Tech Fest", icon: <FaLaptop />, desc: "Showcase your tech skills in coding, robotics, and innovation challenges.", image: "https://srmap.edu.in/wp-content/uploads/2024/03/DSC00042-1024x683.jpg" },
        { id: 3, name: "Cultural Fest", icon: <FaMusic />, desc: "A vibrant celebration of music, dance, and drama from across India.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 4, name: "Open Mic Night", icon: <FaMicrophone />, desc: "Share your talents or enjoy performances by your peers.", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 5, name: "Food Festival", icon: <FaUtensils />, desc: "Savor delicious food from different regions and cultures.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { id: 6, name: "Community Service Day", icon: <FaHandsHelping />, desc: "Give back to the community through volunteering activities.", image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    ];

    // Highlights with images
    const highlights = [
        { text: "Join study groups and late-night library sessions with friends.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { text: "Socialize in the cafeteria and enjoy meals together.", image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { text: "Participate in weekend getaways and campus trips.", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { text: "Build lifelong friendships and network with peers.", image: "https://www.unco.edu/college-bound-colorado/images/group-friends-jumping.jpg" },
        { text: "Manage your time and budget to make the most of college life.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { text: "Express yourself by decorating your dorm or personal space.", image: "shreyLogopic.jpg" },
    ];

    // Gallery images
    const galleryImages = [
        { src: "clgimg.jpg", alt: "Campus building" },
        { src: "pic1.jpg", alt: "Students in seminar" },
        { src: "pic2.jpg", alt: "Sports event" },
        { src: "pic3.jpg", alt: "Cultural fest" },
        { src: "shrey_img1.jpg", alt: "Study group" },
        { src: "pic5.jpg", alt: "Cafeteria" },
        { src: "pic4.jpg", alt: "student" },
        { src: "pic7.jpg", alt: "newImg" },
        { src: "shrey_img2.jpg", alt: "shreyImg" },
        { src: "shrey_img3.jpg", alt: "gallery" },
        { src: "shreyLogopic.jpg", alt: "ShreyPic" },

    ];

    return (
        <div className="campus-life-page">
            <div className="campus-life-header" style={{ backgroundImage: "url('campusLife.jpg')" }}>
                <h1 className={"campus-life-h1"}>Campus Life</h1>
                <p>Experience a vibrant community, exciting events, and opportunities to grow beyond the classroom.</p>
            </div>

            <section className="clubs-section">
                <h2>Clubs & Organizations</h2>
                <div className="clubs-grid">
                    {clubs.map((club) => (
                        <div key={club.id} className="club-card">
                            <img src={club.image} alt={club.name} className="club-image" />
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
                            <img src={event.image} alt={event.name} className="event-image" />
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
                        <li key={index} className="highlight-item">
                            <img src={item.image} alt="" className="highlight-image" />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="gallery-section">
                <h2>Campus Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages.map((img, idx) => (
                        <img key={idx} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </section>

            <footer className="campus-life-footer">
                <p>Join us and make your college years unforgettable!</p>
            </footer>
        </div>
    );
};

export default CampusLife;
