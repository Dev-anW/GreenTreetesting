import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

// New component to handle all scrolling logic
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A small timeout ensures the page has rendered before we try to scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // If there is no hash, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Effect runs when pathname or hash changes

  return null; // This component does not render anything
};

function App() {
  return (
    <HashRouter>
      <ScrollHandler /> {/* Use the new ScrollHandler here */}
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
