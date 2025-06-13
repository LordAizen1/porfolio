import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowMore from './pages/KnowMore';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import './style.css';
import AmongUsBackground from './components/Particles';

function App() {
  return (
    <Router basename="/porfolio">
      {/* Single Persistent Background - Rendered once at app level */}
      <AmongUsBackground />
      
      {/* Content Wrapper with proper z-index */}
      <div className="content-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-more" element={<KnowMore />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;