
import React from "react";
import ProductresistantImg from "../../assets/water-and-oil-resistant.jpeg";

function Productresistant() {
  return (
    <div className="Productresistant-section">
      <div className="Productresistant-image">
        <img
          src={ProductresistantImg}
          alt="Water & Oil Resistant"
        />

        <div className="Productresistant-text">
          <h2 data-animate="fade-up">Water & Oil Resistant</h2>
        </div>
      </div>
    </div>
  );
}

export default Productresistant;