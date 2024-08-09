import React, { useEffect } from 'react'; // Ajoute l'import de useEffect
import Header from './components/Header/Header';
import About from '../pages/About/About';
import Experiences from '../pages/Experiences/Experiences';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Footer from './components/Footer/Footer';

import '../styles/index.scss';

export default function App() {
  useEffect(() => {
    // Vérifie que le script Vanta est chargé
    if (window.VANTA) {
      // Charger l'effet Vanta quand le composant est monté
      const vantaEffect = window.VANTA.FOG({
        el: document.body, // Applique l'effet au body
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf6e18c, // Couleur jaune pâle
        midtoneColor: 0x8f0dd3, // Couleur violette
        lowlightColor: 0x19aaf6, // Couleur bleue
        blurFactor: 0.29,
        speed: 0.20,
        zoom: 0.40
      });

      // Nettoyage lorsque le composant est démonté
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

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
