import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import SurveyForm from './pages/SurveyForm';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/survey" element={<SurveyForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}