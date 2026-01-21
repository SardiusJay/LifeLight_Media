import React from 'react';
import './Services.css';

export function Services () {
  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5L5 12L20 19L35 12L20 5Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 27L20 34L35 27" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 19.5L20 26.5L35 19.5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning digital experiences that captivate and inspire users.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="8" width="24" height="24" rx="2" stroke="#2563eb" strokeWidth="2"/>
          <path d="M8 16H32M16 8V32" stroke="#2563eb" strokeWidth="2"/>
          <circle cx="20" cy="24" r="4" stroke="#2563eb" strokeWidth="2"/>
        </svg>
      ),
      title: 'Graphic Design',
      description: 'Elevate your brand with innovative designs that communicate your message.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="3" fill="#2563eb"/>
          <path d="M20 8V12M20 28V32M32 20H28M12 20H8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="10" stroke="#2563eb" strokeWidth="2"/>
          <circle cx="20" cy="20" r="15" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 3"/>
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Boost your online presence with tailored strategies that connect, engage, and convert your audience.'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <p className="services-label">SERVICES</p>
        <h2 className="services-title">High impact services for your business</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
};