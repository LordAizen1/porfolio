import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Feedback from '../components/Feedback';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="intro-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm Mohammad Kaif, an undergraduate Computer Science and Engineering student at IIIT Delhi.
            <br />
            <span className="faint-text">(And yes, I absolutely love cats 🐈)</span>
          </p>
          <a
            href="/porfolio/images/Md_Kaif_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
        </div>

        <div className="highlights">
          <h2>What I Do</h2>
          <div className="highlight-cards">
            <div className="card">
              <h3>Web Development</h3>
              <p>Building modern web applications with React.js and other cutting-edge technologies.</p>
            </div>
            <div className="card">
              <h3>Data Analysis</h3>
              <p>Analyzing data to extract meaningful insights and create visualizations.</p>
            </div>
            <div className="card">
              <h3>Problem Solving</h3>
              <p>Tackling complex challenges through algorithmic thinking and creative solutions.</p>
            </div>
          </div>
        </div>

        <About />
        <Projects />
        <Feedback />

        <div className="call-to-action">
          <h2>Let's Connect</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;