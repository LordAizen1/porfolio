import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const ProjectsPage = () => {
  const projects = [
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
      title: 'Dr-WebDev',
      image: '/porfolio/images/dr-webdev-high-resolution-logo 1.png',
      description:
        'Dr-WebDev is one of the fun projects I\'ve made. <br /> Creating this project was like hitting two birds with one stone. <br /> I got to learn front-end development and let people know about me.',
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
    {
      title: 'Task-Board-App',
      image: '/porfolio/images/task-board.png',
      description: 
      '(A small fun side project)A modern task management application with drag-and-drop functionality, featuring a congratulatory animation when tasks are completed. Includes task management features (add, edit, delete), and supports both Light and Dark mode themes.',
      link: 'https://lordaizen1.github.io/task-board-app/'
    },
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