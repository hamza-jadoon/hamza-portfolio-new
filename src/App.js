import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Optional: Debug logs
console.log('Header:', typeof Header);
console.log('About:', typeof About);
console.log('Skills:', typeof Skills);
console.log('Projects:', typeof Projects);
console.log('Contact:', typeof Contact);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
