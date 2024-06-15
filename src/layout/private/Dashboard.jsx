import { FaHome, FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Player from "./Player";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-800 min-h-screen text-white p-2 grid grid-cols-1 md:grid-cols-8">
        <div className="sidebar rounded-lg  bg-gray-700 p-3 md:col-span-2 lg:col-span-1">
          <ul className="flex flex-col space-y-4 items-center">
            <li className="flex items-center">
              <FaHome className="mr-2" />
              <Link to="homeDash" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <FaSearch className="mr-2" />
              <Link to="search" className="hover:text-gray-400">
                Search
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-container md:col-span-6 lg:col-span-7 p-4">
          <Outlet />
        </div>
      </div>
      {/* <Player /> */}
    </>
  );
};

export default Dashboard;
