import { useState } from 'react';
import axios from 'axios';
import { FaPlayCircle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Search = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8090/api/music/search?query=${query}`);
      console.log(response.data.results);
      setSongs(response.data.results);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching results');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center mb-4">
        <input
          type="text"
          placeholder="Search for a song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 outline-none text-black rounded-md mb-2 md:mb-0 md:mr-2 max-w-sm w-full md:w-auto"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {songs && songs.length > 0 ? (
          songs.map((song, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center relative">
              {song.image && song.image[0] && (
                <div className="relative w-full h-40 mb-4">
                  <img
                    src={song.image[2].url}
                    alt={song.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <FaPlayCircle className="text-5xl text-lime-500 cursor-pointer absolute bottom-2 right-2" />
                </div>
              )}
              <h3 className="text-lg text-white mb-2">{song.name}</h3>
    
              {song.downloadUrl && song.downloadUrl[4] && (
                <audio src={song.downloadUrl[4].url} controls className="w-full">
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full">No songs found</p>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Search;
