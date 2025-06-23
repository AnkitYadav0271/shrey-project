import { useState } from "react"; // Changed from useEffect
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setIsTopMenuOpen(false);
    };

    return (
        <header> {/* Removed className={visible ? "nav-visible" : "nav-hidden"} */}
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
                    <div
                        className={`top-nav-links ${isTopMenuOpen ? "show" : ""}`}
                        onClick={closeAllMenus}
                    >
                        <h1>Information For:</h1>
                        <ul>
                            <li onClick={closeAllMenus}>
                                <NavLink to="students">Students</NavLink>
                            </li>
                            <li onClick={closeAllMenus}>
                                <NavLink to="/faculty">Faculty & Staff</NavLink>
                            </li>
                            <li onClick={closeAllMenus}>
                                <NavLink to="/principle-login">Principle Login</NavLink>
                            </li>
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
                    <ul
                        className={isMenuOpen ? "show" : ""}
                        onClick={closeAllMenus}
                    >
                        <li onClick={closeAllMenus}>
                            <NavLink to="/" className="li-head">Home</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/events" className="li-head">Events</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/academics" className="li-head">Academics</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/result" className="li-head">Results</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/campus-life" className="li-head">CampusLife</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/admissions" className="li-head">Admissions</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/contact-us" className="li-head">Contact</NavLink>
                        </li>
                        <li onClick={closeAllMenus}>
                            <NavLink to="/about" className="li-head">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
