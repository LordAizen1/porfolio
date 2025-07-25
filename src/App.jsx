import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import PageTransition from './components/PageTransition';
import Loading from './components/Loading';
import GradientBackground from './components/GradientBackground';
import './style.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const KnowMore = lazy(() => import('./pages/KnowMore'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <Home />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/know-more" element={
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <KnowMore />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/experiences" element={
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <ExperiencesPage />
            </PageTransition>
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <NotFound />
            </PageTransition>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/porfolio">
      {/* Blue-Tinted Gradient Background */}
      <GradientBackground />
      
      {/* Content Wrapper (z-index: 1) */}
      <div className="content-wrapper">
        <Header />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;