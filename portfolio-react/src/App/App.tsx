import React from 'react';

import Header from './components/Header/Header';
import About from '../pages/About/About';
import Experiences from '../pages/Experiences/Experiences';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Footer from './components/Footer/Footer';

import '../styles/index.scss';

export default function App() {
  return (
    <div className="App">
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

