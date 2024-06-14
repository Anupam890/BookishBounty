import { FaPlay } from "react-icons/fa";
import test from "../assets/test.mp4";
import arijit from "../assets/arijit.jpg";
import shreya from "../assets/shreya.png";
import vishal from "../assets/vishal.jpg";
import badshah from "../assets/badshah.jpg";
import Footer from "./Footer";
import { motion } from "framer-motion";

import { useCycle } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const [xPosition, cycleXPosition] = useCycle("0%", "-100%");

  useEffect(() => {
    const interval = setInterval(() => {
      cycleXPosition();
    }, 20000);

    return () => clearInterval(interval);
  }, [cycleXPosition]);

  const cards = [
    { id: 1, artists: arijit, name: "Arijit Singh" },
    { id: 2, artists: shreya, name: "Shreya Ghoshal" },
    { id: 3, artists: vishal, name: "Vishal Mishra" },
    { id: 4, artists: badshah, name: "Badshah" },
  ];

  return (
    <>
      <div className="hero-container w-full h-screen bg-black flex items-center justify-center px-4 md:px-0">
        <div className="upper-container backdrop-blur-lg flex flex-col md:flex-row items-center justify-around w-full max-w-5xl p-6 bg-white bg-opacity-10 rounded-lg">
          <div className="left-container w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            {/* image  */}
            <div className="circle-container w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="music"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="right-container w-full md:w-1/2 text-center md:text-left">
            <div className="text-info text-white text-2xl">
              <h1 className="mb-4">Listening is Everything</h1>
              <p className="mb-2">Millions of Songs and Podcasts.</p>
              <span>No Credit Card.</span>
              <div className="info mt-6 md:mt-10">
                <div className="left flex items-center gap-2">
                  <div className="outer-icon border-2 border-transparent flex items-center justify-center rounded-full bg-gradient-animation bg-400% animate-gradient-animation mx-auto md:mx-0 gap-3">
                    <FaPlay className=" text-white" />
                    <p className="text-white">Play</p>
                  </div>
                  <div className="bar">
                    <div className="inner-bar bg-white w-[2px] h-12 mt-2 mx-auto md:mx-0"></div>
                  </div>
                  <p>Download the app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-section w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <p className="text-lg md:text-xl lg:text-2xl mb-4 py-5">
          TOP SONGS 2024
        </p>
        <h2 className="text-2xl md:text-5xl lg:text-4xl text-center mb-8 font-bold">
          Top songs being discovered
          <br /> around the world right now
        </h2>
        <div className="video-container w-3/4 h-3/5 md:w-3/4 md:h-3/4 lg:w lg:h-100 border-b-[45px] bg-white rounded-lg relative flex items-center justify-center">
          <video
            src={test}
            muted
            loop
            autoPlay
            className="w-full h-full rounded-lg"
          ></video>
          <p className="absolute bottom-[-30px] text-black font-bold ">
            see who made it on the list
          </p>
        </div>
      </div>
      <div className="featured-artists w-full p-4 md:p-8 lg:p-12 bg-black text-white">
        <p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
          FEATURED ARTISTS
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mb-8 font-bold">
          Rising track from new and
          <br /> Upcoming artists
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="card-container flex"
            initial={{ x: "100%" }}
            animate={{ x: xPosition }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {cards.concat(cards).map((card, index) => (
              <div
                key={index}
                className="card min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] p-2 md:p-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={card.artists}
                    alt="artist"
                    className="w-full h-50 object-cover rounded-t-lg"
                  />
                  <div className="card-info p-3 sm:p-4">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-black text-center">
                      {card.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="more-charts w-full min-h-screen bg-black text-white">
        <h2 className="text-4xl font-bold px-5 py-10">More charts</h2>
        <div className="chart-container-card flex flex-wrap justify-center">
          <div className="chart-card w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden p-4">
              <p className="text-white text-lg font-bold">Card 1</p>
              <p className="text-white">
                Some content here for the first card.
              </p>
            </div>
          </div>
          <div className="chart-card w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden p-4">
              <p className="text-white text-lg font-bold">Card 2</p>
              <p className="text-white">
                Some content here for the second card.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
