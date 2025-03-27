import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Dr-WebDev',
      image: '/porfolio/images/dr-webdev-high-resolution-logo 1.png',
      description:
        'Dr-WebDev is one of the fun projects I\'ve made. <br /> Creating this project was like hitting two birds with one stone. <br /> I got to learn front-end development and let people know about me.',
    },
    {
      title: 'VeilCode Labs',
      image: '/porfolio/images/veilcodelabs.png',
      description:
        "An educational cryptography platform built with React.js and Firebase. Features course materials, labs, and research resources with admin CRUD functionality. Developed under Dr. Ravi Anand at IIIT Delhi. The project aims to enhance cryptography education through a structured and accessible digital learning environment.",
      link: 'https://lordaizen1.github.io/cryptolab/'
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
      title: 'Employee Management System',
      image: '/porfolio/images/ems.png',
      description: 
      'A simple employee management system featuring an admin login as well as an employee, both having their own dashboard, admin can create tasks, see status of tasks, employee can see their active, completed etc. tasks.'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >
      {/* Title */}
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
            <h2>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-description">
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </motion.article>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default ProjectsPage;