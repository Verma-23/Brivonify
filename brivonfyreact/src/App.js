import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ContentSection from './Components/ContentSection/ContentSection';
import Footer from './Components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('News');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <ContentSection activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
