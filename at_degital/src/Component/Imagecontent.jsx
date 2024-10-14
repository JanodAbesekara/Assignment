import React from "react";
import comhome from "../assets/comhome.png";

function Imagecontent() {
  return (
    <div className="image-container">
      <img src={comhome} className="profimage" alt="Profile" />
      <div className="peradata">
        <p>
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <button className="buttonstart">Get free consultation</button>
      </div>
    </div>
  );
}

export default Imagecontent;
