import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'AI For Architects',
      image: '/porfolio/images/ai-for-architects.png', // Placeholder image, update if you have a project-specific image
      description:
        'A comprehensive full-stack application enabling architects to generate photorealistic interior visualizations using OpenAI models (DALL-E 2/3, GPT-Image-1) and create dynamic videos with Google Veo API. Features include detailed room customization, image editing, video generation from images, portfolio-based style extraction using GPT-4o Vision, admin dashboard with user management, and quota systems for both images and videos.<br /><br /><b>Technologies:</b> React 18, TailwindCSS, Node.js, Express.js, MongoDB, OpenAI API, Google Veo API, GPT-4o Vision, JWT Authentication, CloudFlare, Google Cloud Storage',
      link: 'https://ai-for-architects.com' // Replace with actual link if available
    },
    {
      title: 'DP-Fusion',
      image: '/porfolio/images/dp-fusion.png', // Placeholder image, update if you have a project-specific image
      description:
        'DP-Fusion is a document sanitization platform developed at Alpine Privacy, where I focused on both the frontend and backend development. Users can upload up to 5 files (each up to 10MB) in DOCX, PPTX, PDF, and TXT formats, which are processed locally for sensitive information removal. The application first runs a Named Entity Recognition (NER) system (spaCy, BERT, Flair) to detect PII, then applies DP-Fusion—a custom decoding strategy that provides theoretical privacy guarantees. All uploaded data is deleted after sanitization, ensuring privacy and security.<br /><br />'
        + '<b>Technologies:</b> React 18.3 (TypeScript), Vite, Redux Toolkit, Tailwind CSS, React Router, Lucide React, Lottie, Node.js, Multer, Winston, Axios, express-session, PyTorch, Transformers, Presidio, spaCy, FastAPI, Docker, Nginx, Linux. '
      ,
      link: 'https://spec-negotiations-multimedia-cod.trycloudflare.com/'
    },

    {
      title: 'Multi-Scan App',
      image: '/porfolio/images/multi-scan.png',
      description:
        'Developed an Android app integrating document scanning and landmark recognition, built with Jetpack Compose. Features a user-friendly interface, TensorFlow Lite for real-time landmark recognition, PDF generation for scans, and seamless navigation via a main menu. Technologies: Kotlin, Jetpack Compose, TensorFlow Lite, CameraX.',
    },
    {
      title: 'U.S. Lightning Strikes Analysis',
      image: '/porfolio/images/tableau.png',
      description:
        'A comprehensive data analysis project using Tableau to visualize and analyze over 13 million U.S. lightning strike records from 2009-2018. Created an interactive story featuring time-series plots, heatmaps, and comparative dashboards to uncover spatial and temporal patterns. Focused on visual storytelling and insight-driven analysis for public presentation.',
      link: 'https://public.tableau.com/app/profile/md.kaif8168/viz/U_S_LightningStrikesStory/U_S_LightningStrikesStory'
    },  
    {
      title: 'StickHero',
      image: '/porfolio/images/stickhero.png',
      description:
        'A replica of the game Stick Hero using JavaFX, implementing different concepts of OOPS, <br /> error-checking, and testing using JUnitTest.',
    },
    {
      title: 'Dungeon-Shell',
      image: '/porfolio/images/cmd.png',
      description:
        'A simple shell program called "Dungeon" written in C. SIGINT signal handling <br /> with lots of supported shell commands, pipeline handling, and maintaining <br /> a record of process\'s PID, start time, and end time, which gets shown at exit.',
    },
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
      <ParticlesComponent />
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
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </motion.article>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default ProjectsPage;