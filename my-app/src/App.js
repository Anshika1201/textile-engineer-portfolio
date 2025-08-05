import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import TextileProjects from './components/TextileProjects';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-950 text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Services />
      <TextileProjects />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;