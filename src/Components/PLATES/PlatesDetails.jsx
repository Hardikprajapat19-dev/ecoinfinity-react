import React from "react";
import { useParams } from "react-router-dom";
import "./Plates.css";

// Apni detail images yaha import karo

import Detail1 from "../../assets/6-inch-round-plate-1536x628.png";
import Detail2 from "../../assets/6-inch-square-plate-1536x627.png";
import Detail3 from "../../assets/6-inch-deep-round-plate-1536x627.png";
import Detail4 from "../../assets/7-inch-deep-round-plate-1536x628.png";
import Detail5 from "../../assets/9-inch-round-plate-1536x628.png";
import Detail6 from "../../assets/10-inches-round-plate-e1740826617794.jpeg";
import Detail7 from "../../assets/11-inch-round-plate-1536x628.png";
import Detail8 from "../../assets/12-inch-round-plate-1536x627.png";

function PlatesDetails() {
  const { id } = useParams();

  const images = {
    "1": Detail1,
    "2": Detail2,
    "3": Detail3,
    "4": Detail4,
    "5": Detail5,
    "6": Detail6,
    "7": Detail7,
    "8": Detail8,


  };

  return (
    <div className="PlatesDetails-section">
      <div className="container-fluid p-0">
        <div className="PlatesDetails-image">
          <img
            src={images[id]}
            alt="Plate Details"
          />
        </div>
      </div>
    </div>
  );
}

export default PlatesDetails;