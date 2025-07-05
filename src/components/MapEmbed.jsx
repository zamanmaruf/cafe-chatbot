import React from "react";
import "./MapEmbed.css";

export default function MapEmbed() {
  return (
    <section className="map-section">
      <h2>Find Us</h2>
      <div className="map-embed-container">
        <iframe
          title="Café Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.4194154846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4a0b0b0b0b0b0b0b!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 12 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
} 