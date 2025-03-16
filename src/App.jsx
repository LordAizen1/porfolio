import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowMore from './pages/KnowMore';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton
import './style.css';

function App() {
  return (
    <Router basename="/porfolio">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;