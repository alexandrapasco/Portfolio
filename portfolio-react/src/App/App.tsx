import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
import BIRDS from "vanta/dist/vanta.birds.min";
import { useTranslation } from "react-i18next";

// Lazy loaded pages
const About = React.lazy(() => import("../pages/About/About"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Skills = React.lazy(() => import("../pages/Skills/Skills"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.body.classList.contains("dark-mode")
  );
  const { t } = useTranslation();
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<ReturnType<typeof BIRDS> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      timeoutRef.current = setTimeout(() => {
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
          backgroundAlpha: 0.95,
        });
      }, 800); // retard d'initialisation pour meilleures perfs
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
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
        <Suspense
          fallback={
            <section role="status" aria-live="polite" className="loading">
              <p>{t("loadingPortfolio")}</p>
            </section>
          }
        >
          <About />
          <Profile />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
