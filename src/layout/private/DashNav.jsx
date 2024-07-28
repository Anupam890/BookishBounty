import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import Music from "./Music";

export default function DashNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songData, setSongData] = useState([]);

  const fetchMusic = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/music/search?query=${query}`); // Ensure the backend is running at this address
      const data = response.data;
      console.log(data);
      setSongData(data.results); 
    } catch (error) {
      console.error("Error fetching music data:", error);
    }
  };

  const handleChange = (e) => {
    fetchMusic(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="bg-black border-b border-gray-700 text-white p-4 flex items-center justify-between">
        <div className="navbar-toggle">
          <FaBars className="cursor-pointer" />
        </div>
        <div className="search-bar relative">
          <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="bg-gray-800 text-white pl-10 py-1 rounded-md w-72 focus:outline-none"
          />
        </div>
        <div className="userinfo flex items-center space-x-4">
          <div className="notify relative">
            <FaBell className="cursor-pointer" />
            <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs">
              3
            </span>
          </div>
          <div
            className="profile-bar bg-gray-700 flex items-center gap-3 p-2 rounded-md cursor-pointer"
            onClick={toggleModal}
          >
            <div className="profile-img bg-white w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
                alt="profile"
                className="w-full h-full"
              />
            </div>
            <p>Anupam</p>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-4 rounded-md shadow-lg">
          <p className="text-white cursor-pointer">Profile</p>
          <p className="text-white cursor-pointer">Settings</p>
          <p className="text-white cursor-pointer">Logout</p>
        </div>
      )}
      <Music songData={songData} />
    </>
  );
}
