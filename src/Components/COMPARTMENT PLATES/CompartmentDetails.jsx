import React from "react";
import { useParams } from "react-router-dom";
import "./CompartmentPlates.css";


import Detail1 from "../../assets/9-inch-3-compartment-round-plate.png";
import Detail2 from "../../assets/9-inch-3-compartment-rectangle-plate.png";
import Detail3 from "../../assets/10-inch-3-compartment-round-plate.png";
import Detail4 from "../../assets/11-inch-4-compartment-round-plate.png";
import Detail5 from "../../assets/11-inch-4-compartment-rectangle-plate.png";
import Detail6 from "../../assets/12-inch-round-plate-1536x627.png";

function CompartmentDetails() {
  const { id } = useParams();

  const images = {
    "1": Detail1,
    "2": Detail2,
    "3": Detail3,
    "4": Detail4,
    "5": Detail5,
    "6": Detail6,
  };

  return (
    <div className="CompartmentDetails-section">
      <div className="container-fluid p-0">
        <div className="CompartmentDetails-image">
          <img src={images[id]} alt="Compartment Plate Details" />
        </div>
      </div>
    </div>
  );
}

export default CompartmentDetails;