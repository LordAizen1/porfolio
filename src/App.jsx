import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTopButton from './components/ScrollToTopButton';
import './style.css';
import AmongUsBackground from './components/Particles';

function App() {
  return (
    <Router basename="/porfolio">
      {/* Persistent Background - Rendered once */}
      <AmongUsBackground />
      
      {/* Content Wrapper (z-index: 1) */}
      <div className="content-wrapper">
        <Header />
        <Home />
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;