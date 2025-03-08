import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Dr-WebDev',
      image: '/images/dr-webdev-high-resolution-logo 1.png',
      description:
        'Dr-WebDev is one of the best side projects I\'ve made. <br /> Creating this project was like hitting two birds with one stone. <br /> I got to learn front-end development and let people know about me. 🤗',
    },
    {
      title: 'StickHero',
      image: '/images/stickhero.png',
      description:
        'A replica of the game Stick Hero using JavaFX, implementing different concepts of OOPS, <br /> error-checking, and testing using JUnitTest.',
    },
    {
      title: 'Dungeon-Shell',
      image: '/images/cmd.png',
      description:
        'A simple shell program called "Dungeon" written in C. SIGINT signal handling <br /> with lots of supported shell commands, pipeline handling, and maintaining <br /> a record of process\'s PID, start time, and end time, which gets shown at exit.',
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
            whileHover={{ scale: 1.05 }}
            className="project"
          >
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} width="300" />
            <p
              className="centered"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            {/* Uncomment this if you want to add a GitHub link */}
            {/* <a href="https://github.com/LordAizen1/project1" target="_blank">View on GitHub</a> */}
          </motion.article>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default ProjectsPage;