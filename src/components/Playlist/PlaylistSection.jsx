import './Playlist.css';
import SongList from './SongList';

const PlaylistSection = ({ playlist, currentSong, onSongSelect, categoryName }) => {
  
  // Check if playlist exists
  if (!playlist || playlist.length === 0) {
    return (
      <div className="playlist-section">
        <div className="playlist-header">
          <h2>No Songs Available</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="playlist-section">
      <div className="playlist-header">
        <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Songs</h2>
        <p>{playlist.length} songs</p>
      </div>
      
      <SongList 
        songs={playlist}
        currentSong={currentSong}
        onSongSelect={onSongSelect}
      />
    </div>
  );
};

export default PlaylistSection;