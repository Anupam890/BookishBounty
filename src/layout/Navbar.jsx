import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Premium",
      path: "/pre",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Login",
      path: "/login",
    },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full h-20 bg-black text-white flex items-center justify-between px-6 md:px-12">
        <div className="logo">
          <h1 className="text-4xl">Musica</h1>
        </div>
        <div className="hidden md:flex nav-links">
          <ul className="flex items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-5">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-4xl">Musica</h1>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleNavbar} />
        </div>
        <ul className="flex flex-col mt-8">
          {navLinks.map((link, index) => (
            <li key={index} className="px-6 py-2 border-b border-gray-600">
              <Link to={link.path} onClick={toggleNavbar}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
