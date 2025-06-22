import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactUs.css";
import {useNavigate} from "react-router-dom";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const navigate = useNavigate()

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
        navigate("/form-submitted")

    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any queries or feedback.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <h3>Address</h3>
                            <p>Government Polytechnic, Manikpur, Chitrakoot District, Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaPhone className="icon" />
                        <div>
                            <h3>Phone</h3>
                            <p>+91 XXXXX XXXXX</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="icon" />
                        <div>
                            <h3>Email</h3>
                            <p>info@gvtm.edu.in</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <FaClock className="icon" />
                        <div>
                            <h3>Working Hours</h3>
                            <p>Monday to Saturday, 9:00 AM – 5:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send us a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
              <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
              />
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
