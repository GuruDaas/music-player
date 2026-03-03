import SongItem from './SongItem';

const SongList = ({ songs, currentSong, onSongSelect }) => {
  
  // Check if songs exists
  if (!songs || songs.length === 0) {
    return <div className="song-list">No songs found</div>;
  }

  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          isActive={currentSong && currentSong.id === song.id}
          onSelect={() => onSongSelect(song)}
        />
      ))}
    </div>
  );
};

export default SongList;