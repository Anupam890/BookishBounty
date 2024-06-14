import { FaPlay } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer w-full text-white bg-black">
      <div className="top-container flex flex-wrap justify-between p-4 md:px-8">
        <div className="left-container">
          <div className="logo flex items-center">
            <FaPlay className="text-white text-2xl md:text-4xl" />
            <h1 className="text-2xl md:text-4xl ml-2">Musica</h1>
          </div>
          <div className="store-icons mt-4 flex">
            <div className="store-icon mr-4">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="apple"
                className="h-8"
              />
            </div>
            <div className="store-icon">
              <img
                src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                alt="google"
                className="h-8"
              />
            </div>
          </div>
        </div>
        <div className="right-container mt-4 md:mt-0 flex flex-wrap">
          <div className="company mb-4 md:mb-0 mr-8">
            <h2 className="text-lg">Company</h2>
            <ul>
              <li className="text-sm hover:underline">About Us</li>
              <li className="text-sm hover:underline">Jobs</li>
            </ul>
          </div>
          <div className="community mb-4 md:mb-0 mr-8">
            <h2 className="text-lg">Community</h2>
            <ul>
              <li className="text-sm hover:underline">Support</li>
              <li className="text-sm hover:underline">Register</li>
              <li className="text-sm hover:underline">Login</li>
            </ul>
          </div>
          <div className="social">
            <h2 className="text-lg">Social</h2>
            <ul className="flex">
              <li className="mr-4">
                <a href="#" className="text-sm hover:text-gray-400">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-sm hover:text-gray-400">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-container px-4 py-2 md:px-8">
        <p className="text-sm">&copy; 2021 Musica. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
