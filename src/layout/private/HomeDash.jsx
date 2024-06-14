import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeDash = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/music/recently');
        console.log('API response:', response.data); // Log the response to inspect the structure

        if (Array.isArray(response.data.items)) {
          const formattedSongs = response.data.items.map((item) => ({
            id: item.track.id,
            title: item.track.name,
            artist: item.track.artists.map(artist => artist.name).join(', '),
            albumArt: item.track.album.images[0].url,
          }));
          setSongs(formattedSongs);
        } else {
          console.error('API response does not contain an array of songs:', response.data);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Recently Played</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {songs.map((song) => (
          <div key={song.id} className="bg-red-800 p-4 rounded-lg">
            <img src={song.albumArt} alt={song.title} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="text-lg text-gray-100">{song.title}</h3>
            <p className="text-gray-400">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDash;
