import "./About.css";

export const About = () => {
    return (
        <div className="about-container-page">
            <div className="about-heading-page">
                <h1>About Us</h1>
            </div>
            <div className="about-page-details">
                <img src="college-about.jpg" alt="college" />
                <p>
                    This institute has been established in 2008. Government Polytechnic, Manikpur,
                    Uttar Pradesh is an AICTE approved college for polytechnic and is affiliated to Uttar
                    Pradesh Board of Technical Education situated at Manikpur, Uttar Pradesh. This college offers polytechnic diploma course in India, offering ITI courses for technical education.
                    Mechanical Engineering, Electrical Engineering and Electronics Engineering have been
                    sanctioned by government. However, out of three Branches, only Electronics Engineering
                    Branch is running at present.
                    <br />
                    <br />
                    This institute is built in 10 Acre Land and is located at Manikpur Tahsil and Chitrakoot
                    District. It was established at Manikpur Tahsil owing to need of imparting Technical education
                    in this region. The institute lies 3Km away from Manikpur railway Junction and Manikpur Bus station.
                    Manikpur is only 30 Km away from District headquarter Chitrakoot (Karvi). Manikpur is well connected
                    with Train route from Allahabad, Kanpur, Lucknow, Jhansi and Satna(MP). The nearest Airport is in
                    Allahabad. Since there are lush green jungle and Hills around this institute, so natural atmosphere
                    here is very healthy.
                </p>
            </div>

            {/*  SECTION: Mission & Vision */}
            <div className="about-mission-vision">
                <h2>Our Mission</h2>
                <p>
                    To provide quality technical education and training to students, equipping them with the skills and knowledge necessary to excel in the ever-evolving industrial and technological landscape.
                </p>
                <h2>Our Vision</h2>
                <p>
                    To be recognized as a premier technical institute in Uttar Pradesh, fostering innovation, research, and ethical leadership among our students.
                </p>
            </div>

            {/*  SECTION: Achievements */}
            <div className="about-achievements">
                <h2>Our Achievements</h2>
                <ul>
                    <li>Consistently high placement rates for our graduates</li>
                    <li>State-of-the-art laboratories and workshops</li>
                    <li>Active participation in regional and national technical competitions</li>
                    <li>Strong industry partnerships for internships and placements</li>
                </ul>
            </div>

            {/*  SECTION: Faculty */}
            <div className="about-faculty">
                <h2>Our Faculty</h2>
                <p>
                    Our dedicated team of experienced faculty members is committed to providing personalized guidance and mentorship to each student, ensuring their academic and personal growth.
                </p>
            </div>

            {/*  SECTION: Contact */}
            <div className="about-contact">
                <h2>Contact Us</h2>
                <p>
                    For more information, please visit our college or contact us at:<br />
                    <strong>Email:</strong> info@gvtm.edu.in<br />
                    <strong>Phone:</strong> +91 XXXXX XXXXX<br />
                    <strong>Address:</strong> Government Polytechnic, Manikpur, Chitrakoot District, Uttar Pradesh
                </p>
            </div>
        </div>
    );
};
