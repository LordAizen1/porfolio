import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  const titles = [
    'Full-Stack Developer',
    'Data Scientist',
    'Problem Solver',
    'Software Engineer',
    'Tech Innovator'
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="intro-text"
        >
          <p>
            Hello, I'm <strong>Mohammad Kaif</strong>
          </p>
          <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            I'm a <TypeWriter texts={titles} typeSpeed={80} deleteSpeed={40} pauseDuration={1500} />
          </p>
          <p style={{ marginTop: '20px' }}>
            Welcome to my portfolio—a showcase of innovative projects, technical expertise, and my passion for building impactful software solutions.
          </p>
        </motion.div>

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
                title: 'Full-Stack Development',
                description:
                  'Specializing in end-to-end web applications with React, Node.js, and modern frameworks. I build scalable, user-centric solutions that bridge frontend elegance with robust backend architecture.',
              },
              {
                title: 'Data Science & AI',
                description:
                  'Leveraging machine learning and data analysis to extract meaningful insights from complex datasets. Experienced with Python, TensorFlow, and cloud platforms for ML deployment.',
              },
              {
                title: 'Innovation & Growth',
                description:
                  'Continuously exploring emerging technologies—from quantum computing to AI frameworks—to stay at the forefront of software development and deliver cutting-edge solutions.',
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
          <h2>Let's Build Something Extraordinary</h2>
          <p>
            Ready to collaborate on innovative projects, discuss technical challenges, or explore opportunities? 
            I'm passionate about creating solutions that make a difference.
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