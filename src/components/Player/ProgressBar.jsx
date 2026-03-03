const ProgressBar = ({ currentTime, duration, onProgressChange, formatTime }) => {
  
  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      onProgressChange(value);
    }
  };

  // Safe progress calculation
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <span className="time-display">
        {formatTime(currentTime)}
      </span>
      
      <div className="progress-bar-wrapper">
        <input
          type="range"
          min="0"
          max={duration > 0 ? duration : 100}
          step="0.01"
          value={currentTime}
          onChange={handleChange}
          className="progress-bar"
          style={{
            background: `linear-gradient(to right, #667eea 0%, #764ba2 ${progress}%, #2a2a2a ${progress}%, #2a2a2a 100%)`
          }}
        />
      </div>
      
      <span className="time-display">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;