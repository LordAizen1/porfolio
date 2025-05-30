import React from 'react';
import { motion } from 'framer-motion';
// import ParticlesComponent from '../components/Particles';
import AmongUsBackground from '../components/Particles';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <AmongUsBackground />
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
          Hi👋🏼, I'm <strong>Mohammad Kaif</strong>, a passionate developer and tech enthusiast. 
          This is my space to showcase my projects, skills, and journey in the world of software development.
          <br />
          <span className="faint-text">(And I love cats 🐈)</span>
        </motion.p>

        {/* Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="highlights"
        >
          <h2>What I Do</h2>
          <div className="highlight-cards">
            {[
              {
                title: 'Development',
                description:
                  'Full-stack development with a focus on data-driven applications. Building modern web solutions while exploring data analysis and visualization to create impactful user experiences.',
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
                transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
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
          {/* Resume Link */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="resume-button"
            href="/porfolio/images/Md_Kaif_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </motion.a>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;