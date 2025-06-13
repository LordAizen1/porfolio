import React from 'react';
import { motion } from 'framer-motion';

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: '/porfolio/images/java.png' },
        { name: 'Python', level: 85, icon: '/porfolio/images/python.png' },
        { name: 'JavaScript', level: 80, icon: '/porfolio/images/JS.png' },
        { name: 'C++', level: 75, icon: '/porfolio/images/c++.png' },
        { name: 'Go', level: 70, icon: '/porfolio/images/GO.png' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React.js', level: 85, icon: '/porfolio/images/reacjs.png' },
        { name: 'Node.js', level: 80, icon: '/porfolio/images/nodejs.png' },
        { name: 'HTML/CSS', level: 90, icon: '/porfolio/images/html.png' },
        { name: 'Firebase', level: 75, icon: '/porfolio/images/firebase.png' },
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Tableau', level: 85, icon: '/porfolio/images/tableau.png' },
        { name: 'Kaggle', level: 80, icon: '/porfolio/images/kaggle.png' },
        { name: 'Google Colab', level: 90, icon: '/porfolio/images/colab.png' },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 85, icon: '/porfolio/images/github.png' },
        { name: 'VS Code', level: 90, icon: '/porfolio/images/vscode.png' },
        { name: 'IntelliJ IDEA', level: 85, icon: '/porfolio/images/intellij.png' },
        { name: 'Ubuntu/Linux', level: 75, icon: '/porfolio/images/ubuntu.png' },
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
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    />
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