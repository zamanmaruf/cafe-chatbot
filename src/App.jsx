import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import OpeningHours from "./components/OpeningHours";
import MapEmbed from "./components/MapEmbed";
import "./App.css";

function App() {
  const handleReserveClick = () => {
    document.querySelector('.hours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onReserveClick={handleReserveClick} />
      <AboutUs />
      <Menu />
      <OpeningHours />
      <MapEmbed />
    </div>
  );
}

export default App; 