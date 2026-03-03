import './SongItem.css';
import { FaPlay, FaMusic } from 'react-icons/fa';

const SongItem = ({ song, isActive, onSelect }) => {
  
  // Check if song exists
  if (!song) {
    return null;
  }

  return (
    <div 
      className={`song-item ${isActive ? 'active' : ''}`}
      onClick={onSelect}
    >
      <div className="song-icon">
        {isActive ? <FaPlay /> : <FaMusic />}
      </div>
      
      <div className="song-details">
        <h4>{song.title || 'Unknown Title'}</h4>
        <p>{song.artist || 'Unknown Artist'}</p>
      </div>
      
      <div className="song-duration">
        <span>{song.duration || '0:00'}</span>
      </div>
    </div>
  );
};

export default SongItem;