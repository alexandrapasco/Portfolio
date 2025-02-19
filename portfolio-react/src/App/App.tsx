import React, { useEffect, useState } from 'react'; 
import Header from './components/Header/Header';
import Brand from './components/Brand/Brand';
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
        highlightColor: darkModeActive ? 0xFAEBC9 : 0xFAEBC9,
        midtoneColor: darkModeActive ? 0xFAEBC9 : 0xFAEBC9,
        lowlightColor: darkModeActive ? 0xFAEBC9 : 0xFAEBC9,
        baseColor: darkModeActive ? 0xFAEBC9 : 0xFAEBC9,
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
    <>
      <Header />
      <Brand />
      <main>
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

