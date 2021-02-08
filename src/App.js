import React, { useState } from 'react';
import ContactSection from './components/contactSection.component/ContactSection';
import Dropdown from './components/dropdown.component/Dropdown';
import Footer from './components/footer.component/Footer';
import GalerySection from './components/galerySection.component/GalerySection';
import Hero from './components/hero.component/Hero';
import InfoSection from './components/infoSection.component/InfoSection';
import NavBar from './components/navbar.component/NavBar';
import { InfoData } from './data/infoData';


import { SliderImages } from './data/SliderImages';

import { GlobalStyles } from './styles/global';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderImages} />
      <InfoSection {...InfoData} />
      <GalerySection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
