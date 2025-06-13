import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timelineEvents = [
    {
      id: 1,
      year: '2025',
      title: 'VeilCode Labs Developer',
      type: 'work',
      description: 'Developed an educational cryptography platform with React.js and Firebase under Dr. Ravi Anand at IIIT Delhi.',
      details: [
        'Built comprehensive course materials and interactive labs',
        'Created admin panel with CRUD functionality',
        'Designed accessible digital learning environment',
        'Technologies: React.js, Firebase, HTML/CSS, JavaScript'
      ],
      link: 'https://cryptolab.iiitd.edu.in/',
      color: '#10b981'
    },
    {
      id: 2,
      year: '2024',
      title: 'IBM Qiskit Global Summer School',
      type: 'achievement',
      description: 'Selected among thousands of participants for quantum computing excellence program.',
      details: [
        'Completed 4 quantum computing tasks on IBM Cloud',
        'Worked with real quantum computers',
        'Advanced quantum algorithm implementation',
        'Quantum circuit optimization techniques'
      ],
      color: '#8b5cf6'
    },
    {
      id: 3,
      year: '2024',
      title: 'Google Advanced Data Analytics',
      type: 'achievement',
      description: 'Completed comprehensive training in data analysis and machine learning.',
      details: [
        'Mastered logistic regression, random forest, decision trees',
        'Hands-on experience in data preprocessing',
        'Feature engineering and model evaluation',
        'Applied skills to real-world datasets'
      ],
      color: '#f59e0b'
    },
    {
      id: 4,
      year: '2023',
      title: 'Advanced Programming & Projects',
      type: 'education',
      description: 'Deepened programming skills and started building complex projects at IIIT Delhi.',
      details: [
        'Mastered advanced data structures and algorithms',
        'Built multiple full-stack applications',
        'Participated in coding competitions and hackathons',
        'Started contributing to open source projects'
      ],
      color: '#2563eb'
    },
    {
      id: 5,
      year: '2022',
      title: 'Started at IIIT Delhi',
      type: 'education',
      description: 'Began Computer Science and Engineering studies at prestigious IIIT Delhi.',
      details: [
        'Started with programming fundamentals in Java and Python',
        'Learned core CS concepts: data structures, algorithms, databases',
        'Built first web applications using HTML, CSS, and JavaScript',
        'Discovered passion for software development and data science'
      ],
      color: '#06b6d4'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'achievement':
        return '🏆';
      case 'education':
        return '🎓';
      default:
        return '📍';
    }
  };

  return (
    <div className="timeline-container" id="timeline-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="timeline-title"
      >
        My Journey
      </motion.h2>
      
      <div className="timeline">
        <div className="timeline-line" />
        
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="timeline-marker"
              style={{ backgroundColor: event.color }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedEvent(event)}
            >
              <span className="timeline-icon">{getTypeIcon(event.type)}</span>
            </motion.div>
            
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="timeline-year">{event.year}</div>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
              <button className="timeline-learn-more">Learn More</button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="timeline-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="timeline-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="timeline-modal-header">
                <h3>{selectedEvent.title}</h3>
                <span className="timeline-modal-year">{selectedEvent.year}</span>
                <button
                  className="timeline-modal-close"
                  onClick={() => setSelectedEvent(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="timeline-modal-content">
                <p className="timeline-modal-description">
                  {selectedEvent.description}
                </p>
                
                <ul className="timeline-modal-details">
                  {selectedEvent.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                
                {selectedEvent.link && (
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-modal-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveTimeline;