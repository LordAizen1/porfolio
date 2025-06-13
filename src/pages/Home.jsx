import React from 'react';
import { motion } from 'framer-motion';
import SkillsShowcase from '../components/SkillsShowcase';
import ProjectShowcase from '../components/ProjectShowcase';
import InteractiveTimeline from '../components/InteractiveTimeline';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Learning' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Passion for Code' }
  ];

  const aboutMeText = "I am an undergraduate Computer Science and Engineering student at IIIT Delhi, with a clear vision of becoming a versatile software developer. My journey is centered around three key areas: software development, data science/analysis, and web development. I'm constantly expanding my skill set, diving deep into data analysis tools and techniques while also building modern web applications. This balanced approach allows me to tackle complex data problems and create user-friendly solutions. Whether it's developing full-stack applications or analyzing datasets to extract meaningful insights, I'm passionate about using technology to solve real-world problems. My goal is to become a well-rounded developer who can seamlessly work across different domains of technology.";

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-content">
        {/* Hero Section */}
        <motion.section className="hero-section" id="hero-section" variants={itemVariants}>
          <motion.div
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            👋 Welcome to my digital space
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm <span className="text-gradient">Mohammad Kaif</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="hero-subtitle"
          >
            A passionate <strong>Computer Science student</strong> at IIIT Delhi, 
            crafting digital solutions through <strong>full-stack development</strong>, 
            <strong> data analysis</strong>, and <strong>innovative problem-solving</strong>.
            <br />
            <span className="faint-text">(And yes, I absolutely love cats 🐈)</span>
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >
            <a
              href="#projects-section"
              className="cta-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a
              href="/porfolio/images/Md_Kaif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section className="stats-section" variants={itemVariants}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section className="about-section" id="about-section" variants={itemVariants}>
          <motion.article
            className="centered"
            variants={itemVariants}
          >
            <strong className="imp">About Me</strong>
            <p id="me">
              {aboutMeText}
            </p>
          </motion.article>
        </motion.section>

        {/* What I Do Section */}
        <motion.section className="highlights" variants={itemVariants}>
          <motion.h2 variants={itemVariants}>What I Do</motion.h2>
          <div className="highlight-cards">
            {[
              {
                title: 'Full-Stack Development',
                description: 'Building modern web applications with React.js, Node.js, and Firebase. Creating seamless user experiences with responsive design and robust backend systems.',
                icon: '💻',
                color: 'var(--primary-blue)'
              },
              {
                title: 'Data Analysis & Visualization',
                description: 'Transforming raw data into actionable insights using Python, Tableau, and advanced analytics. Specializing in pattern recognition and predictive modeling.',
                icon: '📊',
                color: 'var(--accent-cyan)'
              },
              {
                title: 'Problem Solving & Innovation',
                description: 'Tackling complex challenges through algorithmic thinking and creative solutions. Passionate about competitive programming and hackathons.',
                icon: '🧩',
                color: 'var(--accent-purple)'
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Showcase */}
        <motion.section variants={itemVariants} id="skills-section">
          <SkillsShowcase />
        </motion.section>

        {/* Interactive Timeline */}
        <motion.section variants={itemVariants} id="timeline-section">
          <InteractiveTimeline />
        </motion.section>

        {/* Featured Projects */}
        <motion.section variants={itemVariants} id="projects-section">
          <ProjectShowcase />
        </motion.section>

        {/* Call to Action */}
        <motion.section className="cta-section" variants={itemVariants}>
          <motion.div
            className="cta-content"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Whether you're looking to collaborate on a project, need a developer for your team, 
              or just want to chat about the latest in tech, I'd love to connect with you!
            </p>
            <div className="cta-actions">
              <a
                href="#about-section"
                className="cta-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get to Know Me
              </a>
              <a
                href="mailto:mohdkaif2003@gmail.com"
                className="cta-secondary"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;