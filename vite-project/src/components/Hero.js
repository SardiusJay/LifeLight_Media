import React from 'react';
import './Hero.css';

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
            At LastLight Digital, we transform dreams and 
            communities into digital powerhouses with creativity, 
            love, and precision. This Visionnna's slogan, we 
            challenge ourselves storytelling and innovations 
            making every brand as unforgettable as love itself.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Work With Us</button>
            <button className="btn-secondary">Explore Our Work</button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
              alt="Professional team collaboration" 
            />
          </div>
          <div className="sparkle-icon-bottom">✨</div>
        </div>
      </div>
    </section>
  );
}