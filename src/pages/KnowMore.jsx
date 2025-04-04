import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

// Decryption effect component
const DecryptText = ({ text, delay = 0 }) => {
  const characters = "01!@#$%^&*()_+-=[]{}|?/\\";
  const [displayText, setDisplayText] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      const randomText = text
        .split("")
        .map((_, index) => {
          if (index < iterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplayText(randomText);

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsDecrypted(true);
      }
      iterations += 1; // Speed adjustment (lower = slower)
    }, 20); // Interval timing

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        color: isDecrypted ? "#E0E0E0" : "#58A4B0"
      }}
      transition={{ 
        delay,
        color: { duration: 0.3, delay: text.length * 0.03 }
      }}
    >
      {displayText}
      {isDecrypted && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ marginLeft: 2 }}
        >
          █
        </motion.span>
      )}
    </motion.span>
  );
};

const KnowMore = () => {
  const aboutMeText = "I am an undergraduate student at the prestigious Indraprastha Institute of Information and Technology, Delhi, majoring in Computer Science and Engineering. I am passionate about software development and engineering, with some interest in web development as well. I enjoy building dynamic, user-friendly websites and applications, and I am currently honing my skills in relevant fields such as HTML, CSS, JavaScript, React, Node.js, etc. Alongside web development, I am also exploring other areas of software engineering to broaden my expertise.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="know-more"
    >
      <ParticlesComponent />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* About Me Section with Decryption Effect */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="centered"
      >
        <strong className="imp">Who Am I?</strong>
        <p id="me">
          {aboutMeText.split(". ").map((sentence, i) => (
            <React.Fragment key={i}>
              <DecryptText 
                text={i === 0 ? sentence : ". " + sentence} 
                delay={0.5 + i * 0.3} 
              />
              <br /><br />
            </React.Fragment>
          ))}
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
            { name: 'JS', icon: '/porfolio/images/js.png'}
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
        <h2>Technologies I Use</h2>
        <div className="technologies-list">
          {[
            { name: 'Intellij', icon: '/porfolio/images/intellij.png' },
            { name: 'ChatGPT', icon: '/porfolio/images/chatgpt.png' },
            { name: 'VS Code', icon: '/porfolio/images/vscode.png' },
            { name: 'Ubuntu', icon: '/porfolio/images/ubuntu.png' },
            { name: 'GitHub', icon: '/porfolio/images/github.png' },
            { name: 'ReactJS', icon: '/porfolio/images/reacjs.png' },
            { name: 'Firebase', icon: '/porfolio/images/firebase.png' },
            { name: 'NodeJS', icon: '/porfolio/images/nodejs.png' }
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
            <img
              src="/porfolio/images/qiskit-global-summer-school-2024-quantum-excellence.png"
              alt="Achievement 1"
              className="achievement-icon"
            />
            <p>
              <strong>IBM QGSS</strong>
              Selected amongst thousands of participants to be a part of the Summer School.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default KnowMore;