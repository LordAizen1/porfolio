import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const ExperiencesPage = () => {
  const experiences = [
    {
      title: 'Open Source Contributor — Gatsby.js',
      period: 'May 2025',
      description: `
        <ul>
          <li>Identified and reported a critical navigation error in the Gatsby.js website where external URLs were incorrectly treated as internal paths causing 404 errors</li>
          <li>Provided detailed bug report with reproduction steps, expected vs. actual behavior, and browser console evidence</li>
          <li>Issue was recognized by the Gatsby.js team and tagged for triage</li>
          <li>GitHub Issue: <a href="https://github.com/gatsbyjs/gatsby/issues/39296" target="_blank" rel="noopener noreferrer">#39296</a></li>
        </ul>
      `,
      link: 'https://github.com/gatsbyjs/gatsby/issues/39296'
    },
    {
      title: 'Open Source Contributor — Tekdi Technologies (Teachers App on GitHub)',
      period: 'May 2025',
      description: `
        <ul>
          <li>Enhanced <code>README.md</code> with an expanded project overview, tech stack breakdown, setup instructions, and improved usage/testing workflows</li>
          <li>Authored <code>CONTRIBUTING.md</code> detailing contribution workflow, branching strategy, commit standards, code style, and areas for community involvement</li>
          <li>Added <code>ARCHITECTURE.md</code> covering high-level system design, UI/data flow diagrams, component breakdown, and extensibility roadmap</li>
          <li>Structured documentation for clarity, developer onboarding, and long-term maintainability</li>
          <li>Collaborated via GitHub and followed project documentation and contribution standards</li>
        </ul>
      `,
      link: 'https://github.com/tekdi/teachers-app/pull/740'
    },
    // You can add additional experience entries here following the same structure
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="experiences-page"
    >
      <ParticlesComponent />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Experiences
      </motion.h1>

      {/* Experiences Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="experience-section"
      >
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="experience"
          >
            <div className="experience-header">
              <h2>
                {experience.link ? (
                  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                    {experience.title}
                  </a>
                ) : (
                  experience.title
                )}
              </h2>
              <p className="experience-period">{experience.period}</p>
            </div>
            <div className="experience-description">
              <div dangerouslySetInnerHTML={{ __html: experience.description }} />
            </div>
          </motion.article>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default ExperiencesPage; 