import './PlayerControls.css';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrev }) => {
  return (
    <div className="player-controls">
      <button className="control-btn prev-btn" onClick={onPrev}>
        <FaStepBackward />
      </button>

      <button className="control-btn play-btn" onClick={onPlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button className="control-btn next-btn" onClick={onNext}>
        <FaStepForward />
      </button>
    </div>
  );
};

export default PlayerControls;