
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/HOME/Home'
import About from './Components/ABOUT/About'
import Products from './Components/PRODUCTS/Products';
import Bowls from './Components/BOWLS/Bowls';
import Plates from './Components/PLATES/Plates';
import CompartmentPlates from './Components/COMPARTMENT PLATES/CompartmentPlates';
import Contact from './Components/CONTACT/Contact';
import BowlDetails from "./Components/BOWLS/BowlDetails";
import CompartmentDetails from "./Components/COMPARTMENT PLATES/CompartmentDetails";
import PlatesDetails from "./Components/PLATES/PlatesDetails";
import Footer from './Components/Footer';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const setupObserver = () => {
      const elements = document.querySelectorAll('[data-animate]');

      if (elements.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, 100);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      elements.forEach(el => {
        observer.observe(el);
      });

      return () => {
        elements.forEach(el => observer.unobserve(el));
      };
    };

    setupObserver();

    const interval = setInterval(() => {
      setupObserver();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="Products" element={<Products />} />
        <Route path="Bowls" element={<Bowls />} />
        <Route path="Plates" element={<Plates />} />
        <Route path="CompartmentPlates" element={<CompartmentPlates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bowl-details/:id" element={<BowlDetails />} />
        <Route path="/compartment-details/:id" element={<CompartmentDetails />} />
        <Route path="/plates-details/:id" element={<PlatesDetails />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;