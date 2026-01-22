import React from 'react';
import './Navbar.css';
import logo from '../assets/images/LifeLight-logo.png'; 

export function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="LifeLight Media Logo" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Right Side: Search & Button */}
        <div className="navbar-actions">
          <button className="search-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};