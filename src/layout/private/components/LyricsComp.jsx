import { useState, useRef, useEffect, useMemo } from "react";
import { FaPlay, FaPause } from "react-icons/fa";


export default function LyricsComp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const lyrics = [
    { time: 0, text: "Verse 1:" },
    { time: 10, text: "I'm standing here waiting for you" },
    { time: 15, text: "My heart is racing, can't you see" },
    { time: 20, text: "I've been searching all my life" },
    { time: 25, text: "For someone like you to set me free" },
    { time: 30, text: "Chorus:" },
    { time: 35, text: "Oh, my love, my darling" },
    { time: 40, text: "I hunger for your touch" },
    { time: 45, text: "A long, lonely time" },
    { time: 50, text: "And time goes by so slowly" },
    { time: 55, text: "And time can do so much" },
    { time: 60, text: "Are you still mine?" },
  ];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const currentLyricIndex = useMemo(() => {
    let index = 0;
    while (index < lyrics.length && lyrics[index].time <= currentTime) {
      index++;
    }
    return index - 1;
  }, [currentTime, lyrics]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="bg-gray-900 p-6 flex flex-col items-center justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
          <img
            src="/placeholder.svg"
            alt="Album Cover"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Song Title</h2>
          <p className="text-lg text-gray-400 mb-4">Artist Name</p>
          <p className="text-sm text-gray-400">Album Name</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 overflow-auto">
        <div className="prose text-gray-300">
          {lyrics.map((line, index) => (
            <div
              key={index}
              className={`py-2 transition-colors ${
                index === currentLyricIndex ? "bg-blue-600 text-white" : ""
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gray-900/50 backdrop-blur-sm flex items-center justify-between">
        <button
          className="text-white p-2"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <FaPause className="w-6 h-6" />
          ) : (
            <FaPlay className="w-6 h-6" />
          )}
        </button>
        
      </div>
      <audio ref={audioRef} src="/song.mp3" />
    </div>
  );
}
