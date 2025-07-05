import React from "react";
import "./HeroSection.css";

export default function HeroSection({ onReserveClick }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-cafe">local café</h2>
          <h1 className="hero-title">Welcome to Our Café!</h1>
          <p className="hero-subtitle">How can I assist you today?</p>
          <button className="hero-cta" onClick={onReserveClick}>Reserve a Table</button>
        </div>
      </div>
    </section>
  );
} 