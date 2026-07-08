
import React from "react";
import robotArm from "../../assets/robot-arm.jpg";

function ManufacturingFacility() {
  return (
    <section
      className="ManufacturingFacility-section"
      style={{ backgroundImage: `url(${robotArm})` }}
    >
      <div className="ManufacturingFacility-overlay">
        <div className="ManufacturingFacility-text">
          <h2 data-animate="fade-up">at India's first & only</h2>
          <p data-animate="fade-up">automated plant</p>
        </div>
      </div>
    </section>
  );
}

export default ManufacturingFacility;