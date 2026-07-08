import React from "react";
import BowlImg from "../../assets/bowl-with-food.jpeg";

function BowlsBanner() {
  return (
    <div className="BowlsBanner-section">
      <div className="BowlsBanner-image">
        <img src={BowlImg} alt="BowlImg" />

        <div className="BowlsBanner-text">
          <h2 data-animate="fade-up">Bowl 'em Over!</h2>
        </div>
      </div>
    </div>
  );
}

export default BowlsBanner;