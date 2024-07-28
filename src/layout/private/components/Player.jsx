import { useContext, useEffect, useState } from "react";
import MusicContext from "../../../context/MusicContext";
import { FaVolumeUp, FaVolumeDown } from "react-icons/fa";

function Player() {
  const { musicData, fetchMusic, isLoading } = useContext(MusicContext);
  const [volume, setVolume] = useState(50); 

  useEffect(() => {
    fetchMusic("tera");
  }, [fetchMusic]);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    
  };

  return (
    <div className="bg-gray-700 p-4 shadow-lg flex justify-between items-center rounded-lg">
      {/* Left section: Music title and artist */}
      <div className="flex-1 text-white">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {musicData ? (
              <div>
                <h2 className="text-xl font-bold">{musicData.title}</h2>
                <p className="text-sm text-gray-400">{musicData.artist}</p>
              </div>
            ) : (
              <div>No music data available</div>
            )}
          </div>
        )}
      </div>

      {/* Right section: Quality and Volume controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label className="mr-2 text-sm text-white">Quality:</label>
          <select className="bg-white/20 border border-white/20 rounded px-2 py-1 text-black text-sm">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <FaVolumeDown className="text-white" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="appearance-none bg-white/20 rounded-lg overflow-hidden h-2"
          />
          <FaVolumeUp className="text-white" />
          <span className="text-white">{volume}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
