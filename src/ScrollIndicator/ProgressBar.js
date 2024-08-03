// src/ProgressBar.js
import React, { useEffect } from 'react';
import './Scroll.css';

const ProgressBar = ({ progress }) => {
  console.log('progress...', progress); // Add this line to log the progress value
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
