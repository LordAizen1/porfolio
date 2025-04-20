import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import ParticlesComponent from '../components/Particles';
import AmongUsBackground from '../components/Particles';
import Modal from '../components/Modal'; // Import the Modal component

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false); // State to control modal visibility

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
                  'Half data scientist, half developer – I build machine learning models with Python and deploy them through full-stack applications, bridging the gap between algorithms and end-users.',
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
          {/* Add the View Resume Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="resume-button"
            onClick={() => setIsResumeOpen(true)} // Open the modal
          >
            View Resume
          </motion.button>
        </motion.section>
      </div>

      {/* Resume Modal */}
      <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)}>
        <img
          className='resume-image'
          src="/porfolio/images/Md_Kaif.png" // Update this path to your resume image
          alt="Mohammad Kaif's Resume"
          style={{ width: '100%', height: 'auto', maxHeight: '100vh' }} // Adjust size as needed
        />
      </Modal>
    </motion.div>
  );
};

export default Home;