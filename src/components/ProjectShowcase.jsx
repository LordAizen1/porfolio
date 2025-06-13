import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Multi-Scan App',
      category: 'mobile',
      image: '/porfolio/images/multi-scan.png',
      description: 'Android app integrating document scanning and landmark recognition with Jetpack Compose.',
      longDescription: 'A comprehensive Android application that combines document scanning capabilities with AI-powered landmark recognition. Built using modern Android development practices with Jetpack Compose for a seamless user experience.',
      technologies: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'CameraX'],
      features: [
        'Real-time document scanning with edge detection',
        'AI-powered landmark recognition using TensorFlow Lite',
        'PDF generation and sharing capabilities',
        'Modern Material Design 3 UI',
        'Offline functionality for core features'
      ],
      github: '#',
      status: 'completed'
    },
    {
      id: 2,
      title: 'U.S. Lightning Strikes Analysis',
      category: 'data',
      image: '/porfolio/images/tableau.png',
      description: 'Comprehensive data analysis of 13M+ lightning strike records using Tableau.',
      longDescription: 'An in-depth analysis of over 13 million U.S. lightning strike records from 2009-2018, creating interactive visualizations and dashboards to uncover spatial and temporal patterns in lightning activity.',
      technologies: ['Tableau', 'Python', 'Data Analysis', 'Statistical Modeling'],
      features: [
        'Interactive time-series visualizations',
        'Geographic heatmaps and clustering analysis',
        'Seasonal and temporal pattern identification',
        'Comparative analysis across different regions',
        'Public dashboard for data exploration'
      ],
      status: 'completed'
    },
    {
      id: 3,
      title: 'VeilCode Labs Platform',
      category: 'web',
      image: '/porfolio/images/veilcodelabs.png',
      description: 'Educational cryptography platform built with React.js and Firebase.',
      longDescription: 'A comprehensive educational platform designed to teach cryptography concepts through interactive labs, course materials, and hands-on exercises. Built under the guidance of Dr. Ravi Anand at IIIT Delhi.',
      technologies: ['React.js', 'Firebase', 'JavaScript', 'CSS3'],
      features: [
        'Interactive cryptography labs and exercises',
        'Comprehensive course material management',
        'Admin panel with CRUD functionality',
        'User progress tracking and analytics',
        'Responsive design for all devices'
      ],
      status: 'completed'
    },
    {
      id: 4,
      title: 'StickHero Game',
      category: 'game',
      image: '/porfolio/images/stickhero.png',
      description: 'JavaFX replica of the popular Stick Hero game with OOP principles.',
      longDescription: 'A faithful recreation of the popular mobile game Stick Hero, built using JavaFX. Demonstrates solid understanding of object-oriented programming principles, game physics, and user interface design.',
      technologies: ['Java', 'JavaFX', 'JUnit', 'OOP'],
      features: [
        'Smooth gameplay with realistic physics',
        'Score tracking and high score system',
        'Multiple difficulty levels',
        'Comprehensive unit testing with JUnit',
        'Clean, maintainable code architecture'
      ],
      github: '#',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Task Board App',
      category: 'web',
      image: '/porfolio/images/task-board.png',
      description: 'Modern task management app with drag-and-drop functionality.',
      longDescription: 'A sleek and intuitive task management application featuring drag-and-drop functionality, theme switching, and celebratory animations. Perfect for personal productivity and team collaboration.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      features: [
        'Drag-and-drop task management',
        'Light and dark theme support',
        'Congratulatory animations for completed tasks',
        'Local storage for data persistence',
        'Responsive design for all screen sizes'
      ],
      github: '#',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Dungeon Shell',
      category: 'system',
      image: '/porfolio/images/cmd.png',
      description: 'Custom shell program with advanced process management features.',
      longDescription: 'A sophisticated shell program written in C, featuring advanced process management, signal handling, and comprehensive command support. Demonstrates deep understanding of system programming concepts.',
      technologies: ['C', 'Linux', 'System Programming', 'Signal Handling'],
      features: [
        'Custom command parsing and execution',
        'Pipeline support for command chaining',
        'SIGINT signal handling',
        'Process tracking with PID and timing',
        'Built-in commands and external program support'
      ],
      github: '#',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'data', name: 'Data Analysis', count: projects.filter(p => p.category === 'data').length },
    { id: 'game', name: 'Games', count: projects.filter(p => p.category === 'game').length },
    { id: 'system', name: 'System Programming', count: projects.filter(p => p.category === 'system').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="project-showcase" id="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="showcase-title"
      >
        Featured Projects
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        className="project-categories"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
            <span className="category-count">{category.count}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              layout
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
                
                <div className="modal-details">
                  <p className="modal-description">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;