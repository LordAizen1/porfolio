import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <ParticlesComponent />
      <div className="home-content">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="intro-text"
        >
          Hi, I'm <strong>Mohammad Kaif</strong>, a passionate developer and tech enthusiast. 
          This is my space to showcase my projects, skills, and journey in the world of software development.
        </motion.p>

        {/* Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="highlights"
        >
          <h2>What I Do</h2>
          <div className="highlight-cards">
            {[
              {
                title: 'Web Development',
                description:
                  'I build responsive, user-friendly websites and web applications using modern technologies like React, Node.js, and Tailwind CSS.',
              },
              {
                title: 'Problem Solving',
                description:
                  'I love solving complex problems using algorithms and data structures. I regularly participate in coding challenges and hackathons to sharpen my skills.',
              },
              {
                title: 'Learn Something New',
                description:
                  'I strive to learn something new, a new AI, a new technology or a new programming language.',
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="call-to-action"
        >
          <h2>Let's Build Something Amazing Together</h2>
          <p>
            Whether you're looking to collaborate on a project, hire a developer, or just want to chat about tech, 
            I'd love to hear from you!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#last-footer"
            className="cta-button"
          >
            Get In Touch
          </motion.a>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;