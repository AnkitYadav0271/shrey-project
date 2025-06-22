import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

    // Add scroll logic
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        // Use the 'visible' state to set the class
        <header className={visible ? "nav-visible" : "nav-hidden"}>
            <div className="container">
                <div className="top-header-container">
                    <button
                        className="menu-toggle"
                        onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
                    >
                        {isTopMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="logo">
                        <img src="/logo.png" alt="logo image" />
                    </div>
                    <div className={`top-nav-links ${isTopMenuOpen ? "show" : ""}`}>
                        <h1>Information For:</h1>
                        <ul>
                            <li><NavLink to="students">Students</NavLink></li>
                            <li><NavLink to="/faculty">Faculty & Staff</NavLink></li>
                            <li><NavLink to="/principle-login">Principle Login</NavLink></li>
                        </ul>
                        <div className="search-container">
                            <div className="relative">
                                <FaSearch className="search-icon" />
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-header-container">
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className={isMenuOpen ? "show" : ""}>
                        <li><NavLink to="/" className="li-head">Home</NavLink></li>
                        <li><NavLink to="/events" className="li-head">Events</NavLink></li>
                        <li><NavLink to="/academics" className="li-head">Academics</NavLink></li>
                        <li><NavLink to="result" className="li-head">Results</NavLink></li>
                        <li><NavLink to="campus-life" className="li-head">CampusLife</NavLink></li>
                        <li><NavLink to="/admissions" className="li-head">Admissions</NavLink></li>
                        <li><NavLink to="/contact-us" className="li-head">Contact</NavLink></li>
                        <li><NavLink to="/about" className="li-head">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
