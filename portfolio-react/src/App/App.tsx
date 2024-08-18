import React, { useEffect, useState } from 'react'; // Ajoute l'import de useState
import Header from './components/Header/Header';
import About from '../pages/About/About';
import Experiences from '../pages/Experiences/Experiences';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import '../styles/index.scss';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Détecte le mode sombre
    const darkModeActive = document.body.classList.contains('dark-mode');
    setIsDarkMode(darkModeActive);

    if (window.VANTA) {
      const vantaEffect = window.VANTA.FOG({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: darkModeActive ? 0x2b0958 : 0xd79ef3,
        midtoneColor: darkModeActive ? 0x220740 : 0x2b0958,
        lowlightColor: darkModeActive ? 0x0d0025 : 0xc0b10,
        baseColor: darkModeActive ? 0x000000 : 0xffffff,
        blurFactor: 0.32,
        speed: 0.20,
        zoom: 0.90
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, [isDarkMode]); // L'effet dépend de l'état du mode sombre

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      <Header />
      <main>
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
