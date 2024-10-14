import React from "react";
import imagePath from "../assets/desktop.png";

function ComputerScre() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] md:min-h-[40vh] lg:min-h-[40vh] p-0 ">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={imagePath}
          alt="Web & Mobile App Development"
          className="w-2/3 md:w-1/2 object-contain"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Web & Mobile App Development
        </h2>
        <p className="text-lg text-gray-600 mb-2 leading-relaxed">
          Your web and mobile apps are pieces of the puzzle to grow your
          business. We use frameworks that tailor content and engagement methods
          to respond to different intents shown by your potential customers who
          interact with your business online.
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default ComputerScre;
