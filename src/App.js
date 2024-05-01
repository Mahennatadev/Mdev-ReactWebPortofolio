import React from 'react';
import { useState } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/service/Services';
import Contact from './components/contact/Contact';
import Portofolio from './components/portofolio/Portofolio';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portofolio />
      <Contact />
    </main>
    </>
  )
}

export default App