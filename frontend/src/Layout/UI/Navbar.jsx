import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <header>
            <div className="container">
            <div className="top-header-container">
                <div className="logo">
                <img src="logo.png" alt="logo image"  />
                </div>
                <div className="top-nav-links">
                    <h1>Information For:</h1>
                    <ul>
                       <li><NavLink to="#">Students</NavLink></li>
                       <li><NavLink to="/faculty">Faculty&Staff</NavLink></li>
                       <li><NavLink to="#">Family</NavLink></li>
                       <li><NavLink to="#">Alumni</NavLink></li>
                    </ul>
                    <div className="search-container">{
                        <div className="relative">
                        <FaSearch className="search-icon"/>
                        <input type="text"  placeholder={"Search"}/>
                        </div>
                    }
                    </div>
                </div>
            </div>
            <div className="bottom-header-container">
                <ul>
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='#'>Events</NavLink></li>
                    <li><NavLink to='/academics'>Academics</NavLink></li>
                    <li><NavLink to='#'>Results</NavLink></li>
                    <li><NavLink to='#'>CampusLife</NavLink></li>
                    
                    <li><NavLink to='/admissions'>Admissions</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
            
            </div>

        </header>
    );
}