import { NavLink } from "react-router-dom";
import "./Academics.css";
import "./ApplyCertificate.css"

export const ApplyCertificate = () => {
    return (
        <div className="coming-soon-page">
            <div className="hero-section">
                <div className="content">
                    <h1>Apply Certificate</h1>
                    <h2>Coming Soon!</h2>
                    <p>
                        We are working hard to launch our certificate application portal.
                        Stay tuned for updates and get ready to apply for your certificates online!
                    </p>
                </div>
                <div className="svg-container">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Certificate-PNG-Download-Image.png" alt="Certificate coming soon" />
                </div>
            </div>

            <div className="cta-section">
                <p>
                    Want to be notified when the portal opens?
                </p>
                <form className="notify-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Notify Me</button>
                </form>
            </div>



        </div>
    );
};
