import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // <-- Import Header
import Navbar from './components/Navbar'; // <-- Import Navbar
import Footer from './components/Footer'; // <-- Import Footer
import Home from './pages/Home';
import KnowMore from './pages/KnowMore';
import ProjectsPage from './pages/ProjectsPage';
import './style.css';

function App() {
  return (
    <Router>
      <Header /> {/* Use Header here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;