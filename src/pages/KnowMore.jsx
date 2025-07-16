import React from 'react';
import { motion } from 'framer-motion';

const KnowMore = () => {
  const aboutMeText = "I am a Computer Science and Engineering student at IIIT Delhi, specializing in full-stack development, data science, and AI-driven solutions. My technical foundation spans modern web technologies, machine learning frameworks, and cloud platforms, enabling me to build scalable applications that solve real-world challenges. From developing enterprise-grade web applications to implementing machine learning models, I focus on delivering solutions that create measurable impact. My experience includes working with startups on privacy-first AI systems, contributing to open-source projects, and building data visualization platforms. I am passionate about leveraging technology to bridge the gap between complex technical problems and user-friendly solutions that drive business value.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="know-more"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* About Me Section - Simplified */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="centered"
      >
        <strong className="imp">Who Am I?</strong>
        <p id="me">
          {aboutMeText}
        </p>
      </motion.article>

      {/* Languages Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="languages"
      >
        <h2>Languages and Markup I Know</h2>
        <div className="languages-list">
          {[
            { name: 'Java', icon: '/porfolio/images/java.png' },
            { name: 'Python', icon: '/porfolio/images/python.png' },
            { name: 'C++', icon: '/porfolio/images/c++.png' },
            { name: 'C', icon: '/porfolio/images/c.png' },
            { name: 'HTML', icon: '/porfolio/images/html.png' },
            { name: 'CSS', icon: '/porfolio/images/css.png' },
            { name: 'JS', icon: '/porfolio/images/JS.png'},
            { name: 'GO', icon: '/porfolio/images/GO.png'}
          ].map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="language"
            >
              <img src={language.icon} alt={language.name} className="language-icon" />
              <p>{language.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="technologies"
      >
        <h2>Tools & Technologies I Use</h2>
        <div className="technologies-list">
          {[
            { name: 'Intellij', icon: '/porfolio/images/intellij.png' },
            { name: 'VS Code', icon: '/porfolio/images/vscode.png' },
            { name: 'Git', icon: '/porfolio/images/git.png' },
            { name: 'Linux', icon: '/porfolio/images/linux.png' },
            { name: 'GitHub', icon: '/porfolio/images/github.png' },
            { name: 'Colab', icon: '/porfolio/images/colab.png' },
            { name: 'Claude Chat', icon: '/porfolio/images/claude.png' },
            { name: 'ReactJS', icon: '/porfolio/images/reacjs.png' },
            { name: 'Firebase', icon: '/porfolio/images/firebase.png' },
            { name: 'NodeJS', icon: '/porfolio/images/nodejs.png' },
            { name: 'Kaggle', icon: '/porfolio/images/kaggle.png' },
            { name: 'Tableau', icon: '/porfolio/images/tableau.png'},
          ].map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="technology"
            >
              <img src={technology.icon} alt={technology.name} className="technology-icon" />
              <p>{technology.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="achievements"
      >
        <h2>Achievements</h2>
        <div className="achievements-list">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="achievement"
          >
            <a 
              href="https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              <img
                src="/porfolio/images/google-advanced-data-analytics-certificate.png"
                alt="Achievement 1"
                className="achievement-icon"
              />
              <p>
                <strong>Google Advanced Data Analytics Certificate</strong><br/>
                Mastered advanced data analysis and machine learning techniques including logistic regression, random forest, and decision trees. Demonstrated proficiency in data preprocessing, feature engineering, and model evaluation through hands-on projects with real-world datasets, developing predictive models that deliver actionable business insights.
              </p>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="achievement"
          >
            <a 
              href="https://www.credly.com/badges/fc613fda-7639-42ad-b4c6-6316cf0afeaf/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              <img
                src="/porfolio/images/qiskit-global-summer-school-2024-quantum-excellence.png"
                alt="Achievement 1"
                className="achievement-icon"
              />
              <p>
                <strong>IBM Qiskit Global Summer School</strong><br/>
                Selected from thousands of global applicants for IBM's prestigious quantum computing program. Successfully completed 4 advanced quantum computing tasks using IBM's cloud quantum computers, demonstrating practical applications of quantum algorithms and quantum machine learning.
              </p>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="achievement"
          >
            <a 
              href="https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-link"
            >
              <img
                src="/porfolio/images/artificial-intelligence-fundamentals.png"
                alt="IBM AI Fundamentals Badge"
                className="achievement-icon"
              />
              <p>
                <strong>IBM Artificial Intelligence Fundamentals</strong><br/>
                Demonstrated proficiency in core AI concepts, machine learning principles, and practical applications. Gained hands-on experience with IBM Watson AI Studio, developing AI-powered solutions and understanding enterprise AI implementation strategies.
              </p>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default KnowMore;