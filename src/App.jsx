import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import PlaylistSection from './components/Playlist/PlaylistSection';
import Player from './components/Player/Player';
import { songsData } from './components/data/songsData';

function App() {
  // Default values with fallback
  const [selectedCategory, setSelectedCategory] = useState('punjabi');
  const [currentPlaylist, setCurrentPlaylist] = useState(songsData?.punjabi || []);
  const [currentSong, setCurrentSong] = useState(songsData?.punjabi?.[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Category change handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const newPlaylist = songsData?.[category] || [];
    setCurrentPlaylist(newPlaylist);
    setCurrentSong(newPlaylist[0] || null);
    setIsPlaying(false);
  };

  // Song select handler
  const handleSongSelect = (song) => {
    if (song) {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Next song handler
  const handleNextSong = () => {
    if (!currentSong || currentPlaylist.length === 0) return;
    
    const currentIndex = currentPlaylist.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % currentPlaylist.length;
    setCurrentSong(currentPlaylist[nextIndex]);
  };

  // Previous song handler
  const handlePrevSong = () => {
    if (!currentSong || currentPlaylist.length === 0) return;
    
    const currentIndex = currentPlaylist.findIndex(song => song.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? currentPlaylist.length - 1 : currentIndex - 1;
    setCurrentSong(currentPlaylist[prevIndex]);
  };

  // Early return if no data
  if (!songsData) {
    return (
      <div className="app" style={{ color: 'white', textAlign: 'center', paddingTop: '100px' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
    <div className="app">
      <Sidebar 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <PlaylistSection 
        playlist={currentPlaylist}
        currentSong={currentSong}
        onSongSelect={handleSongSelect}
        categoryName={selectedCategory}
      />
      
      {currentSong && (
        <Player 
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onNext={handleNextSong}
          onPrev={handlePrevSong}
        />
      )}
    </div>
    </>
  );
}

export default App;