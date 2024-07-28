import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaVolumeDown,
  FaCompactDisc,
  FaMicrophone,
  FaGlobe,
  FaBars,
  FaArrowAltCircleLeft,
  FaHeart,
  FaLink,
} from "react-icons/fa";
import DashNav from "./DashNav";
import Player from "./components/Player";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      to: "music",
      label: "Explore",
      icon: <FaGlobe className="inline-block" />,
    },
    {
      to: "albums",
      label: "Albums",
      icon: <FaCompactDisc className="inline-block" />,
    },
    {
      to: "artists",
      label: "Artists",
      icon: <FaMicrophone className="inline-block" />,
    },
    {
      to: "playlists",
      label: "Playlists",
      icon: <FaVolumeDown className="inline-block" />,
    },
    {
      to: "recent",
      label: "Recently Played",
      icon: <FaArrowAltCircleLeft className="inline-block" />,
    },
    {
      to: "favorites",
      label: "Favorites",
      icon: <FaHeart className="inline-block" />,
    },
    {
      to: "listen-together",
      label: "Listen Together",
      icon: <FaLink className="inline-block" />,
    },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row max-w-full">
      <button
        className="md:hidden p-4 text-white bg-gray-800"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      <div
        className={`side-navbar bg-black text-white border-r fixed md:static z-10 h-full md:h-auto w-2/5 md:w-1/5 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-center my-4 text-xl font-bold">Musica</h2>
        <div className="nav-items-container">
          <div className="items px-3 py-3">
            <p className="text-lg p-2 uppercase font-semibold text-gray-500">
              Menu
            </p>
            <ul>
              {navItems.slice(0, 4).map((item) => (
                <li
                  key={item.to}
                  className={`px-2 py-2 my-1 ${
                    location.pathname.includes(item.to)
                      ? "border-r-4 border-[#5675FF] bg-gray-700"
                      : ""
                  }`}
                >
                  <Link to={item.to}>
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="items px-3 py-3">
            <p className="text-lg p-2 uppercase font-semibold text-gray-500">
              Library
            </p>
            <ul>
              {navItems.slice(4).map((item) => (
                <li
                  key={item.to}
                  className={`px-2 py-2 my-1 ${
                    location.pathname.includes(item.to)
                      ? "border-r-4 border-[#5675FF] bg-gray-700"
                      : ""
                  }`}
                >
                  <Link to={item.to}>
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content w-full md:w-4/5 ml-auto">
        <DashNav />
        <div className="main-container p-3">
          <Outlet />
        </div>
        <Player />
      </div>
    </div>
  );
}
