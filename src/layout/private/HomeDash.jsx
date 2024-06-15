import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeDash = () => {
  const [songs, setSongs] = useState([]);
  const [userName, setUserName] = useState('');

  
  
  const fetchUserName = async()=>{
    try{
      const response = await axios.get('http://localhost:8090/api/user');
      console.log('API response:', response.data);
      if(response.data.name){
        setUserName(response.data.name);
      }else{
        console.error('API response does not contain a name:', response.data);
      }
    }catch(error){
      console.error('Error fetching user name:', error);
    }
  }
  fetchUserName();
  const greet = () => {
    if (new Date().getHours() < 12) {
      return `Good Morning, ${userName}`;
    } else if (new Date().getHours() < 18) {
      return `Good Afternoon, ${userName}`
    } else {
      return `Good Evening, ${userName}`
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-100 mb-4">{greet()}</h1>
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Recently Played</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {songs.map((song) => (
          <div key={song.id} className="bg-red-800 p-4 rounded-lg">
            <img
              src={song.albumArt}
              alt={song.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg text-gray-100">{song.title}</h3>
            <p className="text-gray-400">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDash;
