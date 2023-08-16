import React from 'react';
import About from './components/About';
import Brands from './components/Brands';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Serviecs from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Serviecs />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn/>
    </div>
  )

};

export default App;
