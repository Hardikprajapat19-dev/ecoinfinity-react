
import React from "react";

const data = [
  {
    title: "Vision",
    description:
      "Empowering a sustainable future through innovative eco-friendly solutions, fostering collaboration to create a healthier planet for generations to come.",
    className: "vision-card",
    animation: "fade-left",
  },
  {
    title: "Mission",
    description:
      "Empowering a sustainable future through innovative eco-friendly solutions, fostering collaboration to create a healthier planet for generations to come.",
    className: "mission-card",
    animation: "fade-right",
  },
];

function VisionMission() {
  return (
    <div className="VisionMission-section">
      {data.map((item, index) => (
        <div
          key={index}
          className={`VisionMission-card ${item.className}`}
          data-animate={item.animation}>
          <h2>{item.title}</h2>

          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default VisionMission;