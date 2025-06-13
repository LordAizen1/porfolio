// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section className="project-section">
      <article className="project">
        <h2>Dr-WebDev</h2>
        <img src="/porfolio/images/dr-webdev-high-resolution-logo 1.png" alt="Dr-WebDev" width="300" />
        <p className="centered">
          Dr-WebDev is one of the best side projects I've made. <br />
          Creating this project was like hitting two birds with one stone. <br />
          I got to learn front-end development and let people know about me. 🤗
        </p>
      </article>
      {/* Add other projects similarly */}
    </section>
  );
};

export default Projects;