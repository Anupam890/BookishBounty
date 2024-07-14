import { useState } from 'react';
import axios from 'axios';
import { FaPlayCircle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const response = await axios.get('http://localhost:8090/api/music/search', {
          params: { query },
        });
        if (response.data.tracks.items.length === 0) {
          toast.warn('No results found for the search query.');
        } else {
          setResults(response.data.tracks.items);
        }
      } catch (error) {
        console.error('Error fetching data from backend', error);
        setResults([]);
        toast.error('Error fetching data from backend.');
      }
    } else {
      toast.warn('Please enter a search query.');
    }
  };

  const handleTrackClick = (trackUri) => {
    setCurrentTrackUri(trackUri);
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
        {results.map((track) => (
          <div
            key={track.id}
            className="bg-gray-700 p-4 flex flex-col relative hover:bg-slate-600 cursor-pointer items-center justify-center rounded-md"
            onClick={() => handleTrackClick(track.uri)}
          >
            <div className="image-container w-full h-40">
              <img
                src={track.album.images[0].url}
                alt={track.name}
                className="w-full h-full object-cover rounded-lg mb-2"
              />
            </div>
            <h3 className="text-lg text-gray-100 text-center pt-2">{track.name}</h3>
            <p className="text-gray-400">{track.artists.map(artist => artist.name).join(', ')}</p>
            <FaPlayCircle className="text-5xl text-lime-500 cursor-pointer absolute bottom-4 right-4" />
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Search;
