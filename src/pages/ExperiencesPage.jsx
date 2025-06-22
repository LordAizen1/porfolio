import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const ExperiencesPage = () => {
  const experiences = [
        {
      title: 'Intern, LLM Engineer',
      period: 'June 2025–Present',
      description: `
    <div>
      <strong>Project:</strong> Agentic Applications<br/>
      <strong>Company:</strong> Alpine Privacy<br/>
      <em>Alpine Privacy is an early-stage startup focused on privacy-first AI solutions.</em>
    </div>
        <ul>
          <li>Build and fine-tuned LLM-based agentic applications for privacy-centric use cases.</li>
          <li>Contributed to the development of scalable AI pipelines in a fast-paced startup environment.</li>
          <li>Utilized various tools such as NER, LLMs to accelerate model development and deployment.</li>
        </ul>
      `,
      // No public link, so omit or add if available
    },
    {
      title: 'Developer - VeilCode Labs',
      period: 'Jan 2025-Mar 2025',
      description: `
        <ul>
          <li>Developed an educational cryptography platform built with React.js and Firebase under Dr. Ravi Anand at IIIT Delhi.</li>
          <li>Implemented comprehensive course materials, interactive labs, and research resources to enhance cryptography education.</li>
          <li>Created an admin panel with CRUD functionality for managing educational content.</li>
          <li>Designed and built a structured and accessible digital learning environment focused on cryptography concepts.</li>
          <li>Technologies used: React.js, Firebase, HTML/CSS, JavaScript</li>
        </ul>
      `,
      link: 'https://cryptolab.iiitd.edu.in/'
    },
    {
      title: 'Open Source Contributor — IIITD-PYQs',
      period: 'May 2025',
      description: `
        <ul>
          <li>Contributed past year course materials for a new course (Design Research) to a widely-used IIITD repository, enhancing resources for thousands of students</li>
          <li>Ensured proper formatting and categorization of materials to improve accessibility and usability for exam preparation</li>
          <li>Submitted and successfully merged a pull request (PR #44), marking my first contribution that got merged in main</li>
          <li>Collaborated via GitHub, adhering to the project's contribution guidelines and standards</li>
          <li>GitHub PR: <a href="https://github.com/NalishJain/IIITD-PYQs/pull/44" target="_blank" rel="noopener noreferrer">#44</a></li>
        </ul>
      `,
      link: 'https://github.com/NalishJain/IIITD-PYQs/pull/44'
    },
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
    
    // {
    //   title: 'Open Source Contributor — Tekdi Technologies (Teachers App on GitHub)',
    //   period: 'May 2025',
    //   description: `
    //     <ul>
    //       <li>Enhanced <code>README.md</code> with an expanded project overview, tech stack breakdown, setup instructions, and improved usage/testing workflows</li>
    //       <li>Authored <code>CONTRIBUTING.md</code> detailing contribution workflow, branching strategy, commit standards, code style, and areas for community involvement</li>
    //       <li>Added <code>ARCHITECTURE.md</code> covering high-level system design, UI/data flow diagrams, component breakdown, and extensibility roadmap</li>
    //       <li>Structured documentation for clarity, developer onboarding, and long-term maintainability</li>
    //       <li>Collaborated via GitHub and followed project documentation and contribution standards</li>
    //     </ul>
    //   `,
    //   link: 'https://github.com/tekdi/teachers-app/pull/740'
    // },
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