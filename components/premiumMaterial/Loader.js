import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ progress }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80vh', overflow: 'hidden' }}>
      <div style={{ width: '100px', height: '100px' }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={5}
          styles={buildStyles({
            textColor: 'var(--green)', 
            pathColor: 'var(--green)', // Customize progress bar color
            trailColor: 'lightgray', // Customize trail color
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgressBar;
