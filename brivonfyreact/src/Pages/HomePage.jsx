import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import ContentSection from '../Components/ContentSection/ContentSection';
import Footer from '../Components/Footer/Footer';

function HomePage() {
  const [activeSection, setActiveSection] = useState('News');

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <ContentSection activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default HomePage;
