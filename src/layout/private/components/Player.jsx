import React, { useState, useEffect, useRef } from 'react';

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume, currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = (audioRef.current.duration * value) / 100;
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between">
      <audio ref={audioRef} src={currentSong.downloadUrl[4].url} onTimeUpdate={updateProgress} />
      <div className="flex items-center space-x-4">
        {currentSong.image && currentSong.image[0] && (
          <img
            src={currentSong.image[2].url}
            alt={currentSong.name}
            className="w-16 h-16 object-cover rounded-md"
          />
        )}
        <div>
          <p className="text-lg font-semibold">{currentSong.name}</p>
          <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center space-y-2">
        <div className="flex items-center justify-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
              <path d="M11.596 8.697l-5.233 3.36c-.473.302-1.103-.03-1.103-.597V4.54c0-.566.63-.898 1.103-.597l5.233 3.36a.7.7 0 010 1.194z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white" onClick={handlePlayPause}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                <path d="M5.5 3.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9zm6 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                <path d="M7.5 11.094V4.907l3.813 3.093-3.813 3.094z" />
              </svg>
            )}
          </button>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
              <path d="M11.596 8.697l-5.233 3.36c-.473.302-1.103-.03-1.103-.597V4.54c0-.566.63-.898 1.103-.597l5.233 3.36a.7.7 0 010 1.194z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <span className="text-gray-400 text-sm">{
            progress < 10 ? `0:0${Math.round(progress)}` : `0:${Math.round(progress)}`
            }</span>
          <input
            type="range"
            className="flex-1"
            value={progress}
            onChange={handleProgressChange}
            min="0"
            max="100"
          />
          <span className="text-gray-400 text-sm">3:45</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-gray-400" viewBox="0 0 16 16">
          <path d="M11.536 14.01a.5.5 0 0 1-.773.634L6.972 11.43H4.5a.5.5 0 0 1-.5-.5V5.07a.5.5 0 0 1 .5-.5h2.472l3.791-3.214a.5.5 0 1 1 .773.634L7.03 5.333H4.5v5.334h2.529l4.507 3.343z"/>
        </svg>
        <input
          type="range"
          className="w-24"
          value={volume}
          onChange={handleVolumeChange}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default Player;
