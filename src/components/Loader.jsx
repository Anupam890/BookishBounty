import React from 'react';
import "./style.css";

const Loader = () => {
  return (
    <div className="flex items-center">
      <span className="inline-block w-[3px] h-[20px] bg-white/50 rounded-[10px] animate-scale-up4"></span>
      <span className="inline-block w-[3px] h-[35px] bg-white/50 rounded-[10px] mx-[5px] animate-scale-up4 delay-75"></span>
      <span className="inline-block w-[3px] h-[20px] bg-white/50 rounded-[10px] animate-scale-up4 delay-150"></span>
    </div>
  );
};

export default Loader;
