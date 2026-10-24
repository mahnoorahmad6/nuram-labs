import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceLifecycle from './pages/ServiceLifecycle';
import IndustryDetail from './pages/IndustryDetail';
import AIDetail from './pages/AIDetail';
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/industry/:id" element={<IndustryDetail />}/>
        <Route path="/services/mvp/:id" element={<ServiceLifecycle />}/>
        <Route path="/services/mobile/:id" element={<ServiceLifecycle />}/>
        <Route path="/services/ai/:id" element={<AIDetail />}/>
        {/* Industry - Individual Information Pages */}
        <Route path="/services/industry/:id" element={<IndustryDetail />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}