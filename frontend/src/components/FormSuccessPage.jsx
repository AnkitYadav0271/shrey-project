
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./FormSuccessPage.css";

export const FormSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="success-page">
            <div className="success-card">
                <FaCheckCircle className="success-icon" />
                <h2>Thank You!</h2>
                <p>Your form has been submitted successfully.</p>
                <button onClick={() => navigate("/")} className="home-btn">
                    Return to Home
                </button>
            </div>
        </div>
    );
};
