// src/components/Feedback.jsx
import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="feedback-section">
        <div className="feedback-header">
          <h2 className="feedback-title">Feedback</h2>
          <p className="feedback-subtitle">Help me improve</p>
        </div>
      </div>
      <div className="feedback-form">
        <form id="form" action="https://formspree.io/f/mwpeppnd" method="post">
          <div className="form-group">
            <label htmlFor="suggestion">Suggestions:</label>
            <textarea id="suggestion" name="suggestion" rows="4" placeholder="Enter your suggestions here..." required></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;