import React, { useState } from 'react';
import Player from './components/Player';

const Music = ({ songData }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlayClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="relative pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {songData && songData.length > 0 ? (
          songData.map((song, index) => (
            <div
              key={index}
              className="card bg-gray-800 text-white p-4 rounded-md shadow-md relative group"
            >
              <p className="text-lg font-semibold">{song.name}</p>
              {song.image && song.image[0] && (
                <img
                  src={song.image[2].url}
                  alt={song.name}
                  className="w-full h-32 object-cover mt-2 rounded-md"
                />
              )}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
                onClick={() => handlePlayClick(song)}
              >
                Play
              </button>
            </div>
          ))
        ) : (
          <p>No songs found</p>
        )}
      </div>
      <Player currentSong={currentSong} />
    </div>
  );
};

export default Music;
