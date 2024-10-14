import React from "react";
import comhome from "../assets/comhome.png";

function Imagecontent() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={comhome}
        alt="comhome"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 my-20 left-11 bottom-10 w-3/4">
        <div className=" bg-blue-500 lg:bg-black md:bg-gradient-to-r from-green-400 to-blue-500 text-center p-8 h-auto w-1/2 mx-auto">
          <p className="text-white text-2xl md:text-4xl font-bold uppercase mb-4">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 uppercase rounded-lg">
            Get free consultation
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Imagecontent;
