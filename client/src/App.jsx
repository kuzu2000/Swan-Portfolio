import { useState } from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import './App.css'

function App() {

  return (
    <main id="home">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
