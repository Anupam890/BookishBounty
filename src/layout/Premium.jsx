import React from 'react';
import { motion } from 'framer-motion';

const Premium = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-black text-white">
      <div className="flex flex-wrap justify-center -mx-4">
        <motion.div 
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Premium Feature 1</h2>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Learn More</button>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Premium Feature 2</h2>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Learn More</button>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Premium Feature 3</h2>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Learn More</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;
