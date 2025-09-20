import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryModal from '../components/GalleryModal';
import { ImagenPersonFilterLevel } from 'firebase/vertexai';
import { line } from 'framer-motion/client';

const ProjectsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  
  const projects = [
    {
      title: 'Classical Cipher Identification Using Machine Learning',
      images: [
        { src: '/porfolio/images/iiitd.png', alt: 'IIIT Delhi Logo' }
      ],
      mainImage: '/porfolio/images/iiitd.png',
      description: `
        <div class="project-header">
          <strong>BTech Project (BTP) under Dr. Ravi Anand at IIIT-Delhi</strong>
          <span class="project-period">Aug 2025 - Present</span>
        </div>
        <p>Training machine learning models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Analyzes distinct patterns introduced by different classical ciphers in encrypted text:
            <ul>
              <li>Caesar cipher - preserved but shifted letter frequencies</li>
              <li>Vigenère cipher - smoothed frequency distributions across alphabets</li>
              <li>Substitution ciphers - maintained but permuted frequency distributions</li>
              <li>Transposition ciphers - preserved frequencies with disrupted n-gram structures</li>
            </ul>
          </li>
          <li>Implements automated cryptanalysis using machine learning to reverse-engineer encryption methods</li>
          <li>Plans to scale for multiple languages including Mandarin and Urdu</li>
        </ul>
      `,
      githubLink: '',
      demoLink: 'https://iiitd.ac.in/'
    },
    {
      title: 'AI For Architects',
      images: [
        { src: '/porfolio/images/ai-for-architects1.png', alt: 'AI For Architects - Main Dashboard' },
        { src: '/porfolio/images/ai-for-architects2.png', alt: 'AI For Architects - Generation Interface' },
        { src: '/porfolio/images/ai-for-architects3.png', alt: 'AI For Architects - Results Showcase' },
        { src: '/porfolio/images/ai-for-architects4.png', alt: 'AI For Architects - Gallery Showcase'}
      ],
      mainImage: '/porfolio/images/ai-for-architects1.png',
      description:
        'A comprehensive AI-powered platform that transforms architectural visualization through intelligent design generation and dynamic video creation. The application leverages cutting-edge AI models including OpenAIs DALL-E 3, GPT-4o Vision, and Googles Veo 2.0, Veo 3.0 to convert architectural concepts into photorealistic visual content. Key features include: advanced room customization with 15+ architectural styles, intelligent lighting and color controls, real-time image editing and enhancement, text-to-video generation for architectural walkthroughs, image-to-video conversion for dynamic presentations, portfolio-based style extraction using computer vision, and compressed thumbnail generation for optimized performance. The platform features enterprise-grade architecture with role-based access control, quota management systems, cross-origin video streaming, and scalable user management designed for professional architectural firms and design studios. <br /><br /><b>Technologies:</b> React 18, TailwindCSS, Node.js, Express.js, MongoDB, OpenAI API (DALL-E 3, GPT-4o Vision), Google Veo 2.0 API, FFmpeg, Sharp, JWT Authentication, Cloudflare Tunnels, Google Cloud Storage, Video Proxy Streaming',
      link: 'https://ai-for-architects.com'
    },
    {
      title: 'Document Privacy (DP-Fusion)',
      images: [
        { src: '/porfolio/images/document-privacy2.png', alt: 'Document Privacy - Upload Interface' },
        { src: '/porfolio/images/document-privacy1.png', alt: 'Document Privacy - Processing Results' }
      ],
      mainImage: '/porfolio/images/document-privacy1.png',
      description:
        'An enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining document integrity. Built during my internship at Alpine Privacy, this solution processes multiple file formats (DOCX, PPTX, PDF, TXT) using advanced Named Entity Recognition (NER) systems including spaCy, BERT, and Flair. The platform implements DP-Fusion, a novel decoding strategy that provides theoretical privacy guarantees while ensuring all uploaded data is permanently deleted post-processing.<br /><br /><b>Technologies:</b> React 18.3 (TypeScript), Vite, Redux Toolkit, Tailwind CSS, Node.js, PyTorch, Transformers, Presidio, spaCy, FastAPI, Docker, Nginx',
      link: 'https://documentprivacy.com/'
    },
    {
      title: 'FinSight-NLP-App',
      images: [
        { src: '/porfolio/images/finsight1.png', alt: 'FinSight - Screen'},
        { src: '/porfolio/images/finsight2.png', alt: 'FinSight - Screen'},
        { src: '/porfolio/images/finsight3.png', alt: 'FinSight - Screen'}
      ],
      mainImage: '/porfolio/images/finsight1.png',
      description: 
      'A web app that performs NLP on financial text using a custom-trained spaCy model. It identifies custom entities (Stocks, Financial Events) and analyzes sentiment with VADER. The backend is built with Python and Flask, serving an interactive UI with a color-coded legend for the analysis.',
      link: 'https://finsight-app-md6v.onrender.com/'
    },
    {
      title: 'U.S. Lightning Strikes Analysis',
      images: [
        { src: '/porfolio/images/lightning-strike-analysis1.png', alt: 'U.S. Lightning Strikes - Dashboard' },
        { src: '/porfolio/images/lightning-strike-analysis2.png', alt: 'U.S. Lightning Strikes - Heatmap' },
        { src: '/porfolio/images/lightning-strike-analysis3.png', alt: 'U.S. Lightning Strikes - Time Series' }
      ],
      mainImage: '/porfolio/images/lightning-strike-analysis1.png',
      description:
        'A comprehensive data visualization project analyzing 13+ million U.S. lightning strike records (2009-2018) to uncover critical meteorological patterns. Developed interactive Tableau dashboards featuring time-series analysis, geospatial heatmaps, and comparative visualizations that reveal seasonal trends and geographic hotspots. The project demonstrates advanced data storytelling techniques and provides actionable insights for weather prediction and safety planning.<br /><br /><b>Technologies:</b> Tableau, Python, Data Analytics, Statistical Analysis',
      link: 'https://public.tableau.com/app/profile/md.kaif8168/viz/U_S_LightningStrikesStory/U_S_LightningStrikesStory'
    },
    {
      title: 'Multi-Scan App',
      image: '/porfolio/images/multi-scan.png',
      description:
        'A sophisticated Android application that combines document scanning capabilities with real-time landmark recognition using advanced machine learning. Built with modern Android development practices, the app features an intuitive interface powered by Jetpack Compose, TensorFlow Lite for efficient on-device ML inference, and automated PDF generation for scanned documents.<br /><br /><b>Technologies:</b> Kotlin, Jetpack Compose, TensorFlow Lite, CameraX, ML Kit'
    },
  
    // {
    //   title: 'StickHero',
    //   image: '/porfolio/images/stickhero.png',
    //   description:
    //     'A fully functional game implementation demonstrating advanced object-oriented programming principles and software engineering best practices. Built using JavaFX, the game features smooth animations, collision detection, and comprehensive error handling. Includes extensive unit testing with JUnit to ensure code reliability and maintainability.<br /><br /><b>Technologies:</b> Java, JavaFX, JUnit, Object-Oriented Programming'
    // },
    // {
    //   title: 'Dungeon-Shell',
    //   image: '/porfolio/images/cmd.png',
    //   description:
    //     'A sophisticated command-line shell implementation in C that replicates core Unix shell functionality. Features comprehensive command execution, pipeline processing, signal handling (SIGINT), and process monitoring with detailed logging of PIDs, execution times, and system resources. Demonstrates low-level system programming and operating system concepts.<br /><br /><b>Technologies:</b> C, Unix System Calls, Process Management, Signal Handling, Memory Management'
    // },
    // {
    //   title: 'Task-Board-App',
    //   image: '/porfolio/images/task-board.png',
    //   description: 
    //   '(A small fun side project)A modern task management application with drag-and-drop functionality, featuring a congratulatory animation when tasks are completed. Includes task management features (add, edit, delete), and supports both Light and Dark mode themes.',
    //   link: 'https://lordaizen1.github.io/task-board-app/'
    // },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="project-section"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="project"
          >
            <div className="project-content">
              <h2>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <div className="project-description">
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            </div>
            <div 
              className="project-image-container"
              onClick={() => openModal(project)}
            >
              <img 
                src={project.images ? project.images[0].src : project.image}
                alt={project.images ? project.images[0].alt : project.title}
                className="project-main-image"
              />
              <div className="image-overlay" />
              <div className="zoom-hint">Click to view gallery</div>
              {project.images && project.images.length > 1 && (
                <div className="gallery-indicator">
                  <svg className="gallery-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  {project.images.length} images
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.section>
      
      <GalleryModal 
        isOpen={modalOpen}
        onClose={closeModal}
        images={selectedProject?.images || (selectedProject ? [{ src: selectedProject.image, alt: selectedProject.title }] : [])}
        projectTitle={selectedProject?.title}
      />
    </motion.div>
  );
};

export default ProjectsPage;