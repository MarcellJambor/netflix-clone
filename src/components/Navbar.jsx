import React from "react";
import Logo from '../assests/logo.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth } from "../context/AuthContext";
import { signOut } from '../firebase';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const {currentUser} = useAuth();

    const navigate = useNavigate();

    return (
        <div className="navbar-container">
        <nav className="navbar">
            <div className="logo">
                <Link to={"/"}>
                    <img src={Logo} alt="netflix logo"/>
                </Link>
            </div>
            {currentUser?
            <div className="links">
            <ul>
                <li><Link>TvShows</Link></li>
                <li><Link>Movies</Link></li>
                <li><Link>New & Popular</Link></li>
                <li><Link>My List</Link></li>
                <li><button className="logout" onClick={async () => {
                await signOut();
                navigate('/login');
                }}>LogOut</button></li>

            </ul>
            </div>:
            <div className="links">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
        </div>}    
        </nav>
        </div>
    )
};

export default NavBar;