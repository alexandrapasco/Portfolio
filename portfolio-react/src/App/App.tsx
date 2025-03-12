import { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Profile from "../pages/Profile/Profile";
// import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min"; // Correction de l'import

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);

  // ✅ Correction : on donne un type explicite à vantaRef
  const vantaRef = useRef<ReturnType<typeof BIRDS> | null>(null);

  useEffect(() => {
    // Détecte le mode sombre
    const darkModeActive = document.body.classList.contains("dark-mode");
    setIsDarkMode(darkModeActive);

    if (!vantaRef.current) {
      vantaRef.current = BIRDS({
        el: document.body,
        mouseControls: true,
        touchControls: true,
       gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xFAEBC9,
        color1: 0x50513A,
        color2: 0xCEB184,
        colorMode: "lerpGradient",
        birdSize: 1.40,
        wingSpan: 33.00,
        speedLimit: 6.00,
        separation: 32.00,
        alignment: 28.00,
        cohesion: 60.00,
        backgroundAlpha: 0.46
      });
    }

    return () => {
      if (vantaRef.current && typeof vantaRef.current.destroy === "function") {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []); // Exécuté une seule fois au montage

  return (
    <>
      <Header />
      <Brand />
      <main>
        <About />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
