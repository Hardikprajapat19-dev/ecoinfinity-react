
import React from "react";
import { useParams } from "react-router-dom";

import Detail1 from "../../assets/Asset-2.png";
import Detail2 from "../../assets/Asset-3-1024x418.png";
import Detail3 from "../../assets/Asset-3-1536x628.png";
import Detail4 from "../../assets/Asset-5-1024x418.png";
import Detail5 from "../../assets/Asset-6-1536x628.png";
import "./Bowls.css";

function BowlDetails() {
  const { id } = useParams();

  const images = {
    "1": Detail1,
    "2": Detail2,
    "3": Detail3,
    "4": Detail4,
    "5": Detail5,
  };

  return (
    <div className="bowl-details-section">
      <div className="container-fluid p-0">
        <div className="bowl-details-image">
          <img src={images[id]} alt="Bowl Details" />
        </div>
      </div>
    </div>
  );
}

export default BowlDetails;