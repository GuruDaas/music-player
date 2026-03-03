import { useState, useRef, useEffect } from 'react';
import './Player.css';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Player = ({ currentSong, isPlaying, setIsPlaying, onNext, onPrev }) => {
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Audio setup - ONE TIME
  useEffect(() => {
    const audio = audioRef.current;
    
    // Event Listeners
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => onNext();
    const handleError = (e) => console.log("Audio Error:", e);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('canplay', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Cleanup
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('canplay', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [onNext]);

  // Song Change
  useEffect(() => {
    const audio = audioRef.current;
    
    if (currentSong?.url) {
      // Reset states
      console.log("Loading song:", currentSong.url);
      
      setCurrentTime(0);
      setDuration(0);
      
      // Set new source
      audio.src = currentSong.url;
      audio.load();
      
      // Play if isPlaying is true
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Auto-play prevented:", error);
          });
        }
      }
    }
  }, [currentSong]);

  // Play/Pause Control
  useEffect(() => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Play prevented:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, setIsPlaying]);

  // Volume Control
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Progress change handler
  const handleProgressChange = (value) => {
    const audio = audioRef.current;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  // Play/Pause toggle
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Volume change handler
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  // Mute toggle
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  // Format time function
  const formatTime = (time) => {
    if (isNaN(time) || time === 0 || time === Infinity || time === null) {
      return '0:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="player">
      <div className="player-container">
        {/* Song Info */}
        <div className="player-song-info">
          <div className="song-artwork">
            <div className={`artwork-placeholder ${isPlaying ? 'playing' : ''}`}>
              🎵
            </div>
          </div>
          <div className="song-text-info">
            <h3>{currentSong?.title || 'No Song Selected'}</h3>
            <p>{currentSong?.artist || 'Unknown Artist'}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onProgressChange={handleProgressChange}
          formatTime={formatTime}
        />

        {/* Player Controls */}
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={onNext}
          onPrev={onPrev}
        />

        {/* Volume Control */}
        <div className="volume-control">
          <button className="volume-btn" onClick={handleMuteToggle}>
            {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;