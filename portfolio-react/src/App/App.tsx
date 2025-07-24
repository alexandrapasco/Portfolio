import { useEffect, useRef, useState } from "react";
import './App.scss'; 
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Profile from "../pages/Profile/Profile";
// import DarkTheme from "./components/Header/HeaderActions/DarkTheme/DarkTheme";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.body.classList.contains("dark-mode")
  );

  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<ReturnType<typeof BIRDS> | null>(null); // ✅ plus de "any"

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    document.body.classList.toggle("dark-mode", newMode);
  };

  useEffect(() => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    if (vantaRef.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 1,
        minWidth: 1,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: isDarkMode ? 0x000000 : 0xFAEBC9,
        color1: isDarkMode ? 0xFAEBC9 : 0x50513A,
        color2: isDarkMode ? 0x000000 : 0xCEB184,
        colorMode: "lerpGradient",
        birdSize: 1.1,
        wingSpan: 30.0,
        speedLimit: 3.0,
        separation: 100.0,
        alignment: 100.0,
        cohesion: 100.0,
        backgroundAlpha: 0.95
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isDarkMode]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />


      <Brand vantaRef={vantaRef} />

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
