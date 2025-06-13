import React from 'react';
import { motion } from 'framer-motion';

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: '/porfolio/images/java.png' },
        { name: 'Python', icon: '/porfolio/images/python.png' },
        { name: 'JavaScript', icon: '/porfolio/images/JS.png' },
        { name: 'C++', icon: '/porfolio/images/c++.png' },
        { name: 'Go', icon: '/porfolio/images/GO.png' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React.js', icon: '/porfolio/images/reacjs.png' },
        { name: 'Node.js', icon: '/porfolio/images/nodejs.png' },
        { name: 'HTML/CSS', icon: '/porfolio/images/html.png' },
        { name: 'Firebase', icon: '/porfolio/images/firebase.png' },
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Tableau', icon: '/porfolio/images/tableau.png' },
        { name: 'Kaggle', icon: '/porfolio/images/kaggle.png' },
        { name: 'Google Colab', icon: '/porfolio/images/colab.png' },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', icon: '/porfolio/images/github.png' },
        { name: 'VS Code', icon: '/porfolio/images/vscode.png' },
        { name: 'IntelliJ IDEA', icon: '/porfolio/images/intellij.png' },
        { name: 'Ubuntu/Linux', icon: '/porfolio/images/ubuntu.png' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="skills-showcase"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="skills-title">
        Technical Skills
      </motion.h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skill-category"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-header">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsShowcase;