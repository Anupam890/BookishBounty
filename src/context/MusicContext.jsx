
import { createContext, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMusic = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://saavn.dev/api/search/songs?query=${query}`);
      const data = await response.json();
      setMusicData(data.results);
    } catch (error) {
      console.error("Error fetching music data:", error);
    }
    setIsLoading(false);
  };

  return (
    <MusicContext.Provider value={{ musicData, fetchMusic, isLoading }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
