import React from 'react';
import { motion } from 'framer-motion';
import AmongUsBackground from '../components/Particles';

const KnowMore = () => {
  const aboutMeText = "I am an undergraduate Computer Science and Engineering student at IIIT Delhi, with a clear vision of becoming a versatile software developer. My journey is centered around three key areas: software development, data science/analysis, and web development. I'm constantly expanding my skill set, diving deep into data analysis tools and techniques while also building modern web applications. This balanced approach allows me to tackle complex data problems and create user-friendly solutions. Whether it's developing full-stack applications or analyzing datasets to extract meaningful insights, I'm passionate about using technology to solve real-world problems. My goal is to become a well-rounded developer who can seamlessly work across different domains of technology.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="know-more"
    >
      <AmongUsBackground />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* About Me Section */}
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
            { name: 'Ubuntu', icon: '/porfolio/images/ubuntu.png' },
            { name: 'GitHub', icon: '/porfolio/images/github.png' },
            { name: 'Colab', icon: '/porfolio/images/colab.png' },
            { name: 'Grok', icon: '/porfolio/images/grok.png' },
            { name: 'ReactJS', icon: '/porfolio/images/reacjs.png' },
            { name: 'Firebase', icon: '/porfolio/images/firebase.png' },
            { name: 'NodeJS', icon: '/porfolio/images/nodejs.png' },
            { name: 'Kaggle', icon: '/porfolio/images/kaggle.png' },
            { name: 'Tableau', icon: '/porfolio/images/tableau.png'},
            { name: 'n8n', icon: '/porfolio/images/n8n.png'},
            { name: 'Make', icon: '/porfolio/images/make.png'},
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
                <strong>Google's Advanced Data Analytics</strong>
                Completed comprehensive training in data analysis and machine learning, mastering techniques like logistic regression, random forest, and decision trees. Gained hands-on experience in data preprocessing, feature engineering, and model evaluation. Applied these skills to real-world datasets, developing predictive models and extracting actionable insights.            
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
                <strong>IBM QGSS</strong>
                Selected amongst thousands of participants to be a part of the Summer School. Completed 4 tasks/jobs in IBM's Cloud Quantum Computers. 
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
                <strong>IBM Artificial Intelligence Fundamentals</strong>
                Successfully completed the IBM Artificial Intelligence Fundamentals course, demonstrating proficiency in core AI concepts and applications as well as some experience with IBM Watson AI Studio.
              </p>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default KnowMore;