import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Bashundora Premier League</h1>
            <nav className="nav">
                <a href="/home">Home</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/management">Management</a>
                </nav>

            
        </div>
    );
};

export default Header;