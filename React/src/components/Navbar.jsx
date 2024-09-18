import React from 'react';
import './Navbar.css'; // Assuming you're using an external CSS file for custom styles
import img1 from '../assets/img1.png';

function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={img1} alt="Healthy Buy Logo" className="navbar-logo" />
                      
                    </a>
                    
                  
                </div>
                <ul className="nav navbar-nav">
                
                <li><a href="#" className="nav-link">Healthybuy</a></li>
                    <li className="nav-link"><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">Menu</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                    <li><a href="#" className="nav-link">About Us</a></li>
                </ul>
                <div className="navbar-right">
                    <a href="#" className="btn btn-login navbar-btn">Login</a>
                    <a href="#" className="btn btn-signup navbar-btn">Sign up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
