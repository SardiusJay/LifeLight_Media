import React from 'react';
import './Hero.css';
import HeroImage from '../assets/Images/Heroimage.png';

export function Hero () {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <div className="sparkle-icon">✨</div>
          
          <h1 className="hero-title">
            Turning Vision into Vibrancy, Bringing Your Brand to{' '}
            <span className="highlight">Life and Light!</span>
          </h1>

          <p className="hero-description">
            At LifeLight Media, we transform brands and 
            communities into digital powerhouses with creativity, 
            love, and precision. This Valentine’s season, we celebrate connection, storytelling, 
            and innovation, making every brand as unforgettable as love itself.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Work With Us</button>
            <button className="btn-secondary">Explore Our Work</button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={HeroImage} alt="Professional team collaboration" />
          </div>
          <div className="sparkle-icon-bottom">✨</div>
        </div>
      </div>
    </section>
  );
}