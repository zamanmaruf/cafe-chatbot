import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import OpeningHours from "./components/OpeningHours";
import MapEmbed from "./components/MapEmbed";
import ChatbotWidget from "./components/ChatbotWidget";
import "./App.css";

function App() {
  const handleReserveClick = () => {
    // Scroll to OpeningHours section or open reservation modal (future enhancement)
    document.querySelector('.hours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onReserveClick={handleReserveClick} />
      <AboutUs />
      <Menu />
      <OpeningHours />
      <MapEmbed />
      <ChatbotWidget />
    </div>
  );
}

export default App;
