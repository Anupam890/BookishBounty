import React, { useState, useRef } from "react";
import { FaPlayCircle ,FaHeart} from "react-icons/fa";
import arijit from "../../assets/arijit.jpg";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="player-container bg-black w-full h-36 p-7 gap-4 flex items-center justify-between text-white border-white">
        <div className="inner-container flex items-center">
          <div className="image-container w-20 h-20">
            <img src={arijit} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="title-container pl-4 ">
            <p className="text-2xl font-bold">Tera Fitoor</p>
            <p className="text-sm">Arijit Singh</p>
          </div>
          <div className="liked-songs pl-4">
            <FaHeart className="text-3xl cursor-pointer"/>
          </div>
        </div>
        <div className="player-container flex ">
          <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
          <div className="player-controls flex items-center justify-between">
            <FaPlayCircle className="text-3xl cursor-pointer" onClick={togglePlayPause} />
            <div className="flex items-center">
              <p className="text-sm">0:00</p>
              <p className="text-sm">/</p>
              <p className="text-sm">0:00</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm">0:00</p>
              <p className="text-sm">/</p>
              <p className="text-sm">0:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
