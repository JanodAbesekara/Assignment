import React from "react";
import imagePath from "../assets/search.png";

function ScreenLogo() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[60vh] md:min-h-[40vh] lg:min-h-[40vh] p-8 gap-8">
      <div className="md:w-1/2 text-left px-4 md:px-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          Digital Strategy Consulting
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation, and every business needs a different mix. We provide a
          clear concept and strategic overview to find the most efficient model
          for your business.
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          LEARN MORE
        </button>
      </div>

      <div className="md:w-1/2 flex items-center justify-center px-4 md:px-8">
        <img
          src={imagePath}
          alt="Digital Strategy Consulting"
          className="w-2/3 md:w-1/2 object-contain"
        />
      </div>
    </div>
  );
}

export default ScreenLogo;
