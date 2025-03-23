import React from 'react';

const ProgressBar = ({ applications }) => {
  // Status weights for progress calculation - adjusted for clearer progression
  const statusWeights = {
    'Not Started': 0,      // 0% complete
    'In Progress': 0.5,    // 20% complete
    'Submitted': 1,      // 40% complete
    'Interview Scheduled': 1, // 60% complete
    'Offer Received': 1, // 80% complete
    'Rejected': 1          // 100% complete
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    if (!applications || applications.length === 0) return 0;
    
    // Calculate total progress points earned
    const earnedProgress = applications.reduce((sum, app) => {
      return sum + (statusWeights[app.applicationStatus] || 0);
    }, 0);
    
    // Calculate maximum possible progress points
    const totalPossibleProgress = applications.length;
    
    // Calculate percentage (earned points / total possible points)
    const percentage = (earnedProgress / totalPossibleProgress) * 100;
    
    // Make sure we return a valid percentage value
    return Math.max(0, Math.min(100, percentage));
  };

  const progress = calculateProgress();

  // Get color based on progress
  const getProgressColor = () => {
    if (progress < 30) return '#FF3131'; // Red
    if (progress < 60) return '#DFFF00'; // Yellow
    return '#39FF14'; // Green
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Application Progress</span>
        <span>{progress.toFixed(1)}%</span>
      </div>
      <div className="progress-bar-background">
        <div 
          className="progress-bar-fill"
          style={{ 
            width: `${progress}%`,
            backgroundColor: getProgressColor(),
          }}
        ></div>
      </div>
      <div className="progress-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#FF3131' }}></span>
          <span className="legend-text">0-30%</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#DFFF00' }}></span>
          <span className="legend-text">30-60%</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#39FF14' }}></span>
          <span className="legend-text">60-100</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;