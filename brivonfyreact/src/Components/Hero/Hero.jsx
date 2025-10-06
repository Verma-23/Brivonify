import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Stay Connected. Stay Informed.</h1>
          <p className="hero-subtitle">
            Your one-stop space for company news, HR updates, and cross-functional insights.
          </p>
          <button className="hero-cta">Get Started</button>
        </div>
        <div className="hero-image">
          <div className="illustration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="person person-1"></div>
            <div className="person person-2"></div>
            <div className="person person-3"></div>
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
