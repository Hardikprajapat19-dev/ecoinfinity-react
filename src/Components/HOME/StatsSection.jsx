
import React from "react";

import disposableband from "../../assets/disposable-band.jpeg";
import handshake from "../../assets/handshake.jpeg";
import jointhepuzzle from "../../assets/join-the-puzzle.jpeg";
import transport from "../../assets/transport.jpeg";

const stats = [
  {
    image: disposableband,
    alt: "Disposable Band",
    number: "19+",
    title: "Variety of Products",
    textClass: "stats-text1",
    imgAnimation: "fade-right",
    titleAnimation: "fade-left",
  },
  {
    image: handshake,
    alt: "Handshake",
    number: "950+",
    title: "Trusted Clients",
    textClass: "stats-text2",
    imgAnimation: "fade-left",
    titleAnimation: "fade-right",
  },
  {
    image: jointhepuzzle,
    alt: "Join The Puzzle",
    number: "50+",
    title: "Professional Team",
    textClass: "stats-text1",
    imgAnimation: "fade-right",
    titleAnimation: "fade-left",
  },
  {
    image: transport,
    alt: "Transport",
    number: "5 Lakh+",
    title: "Products Delivered",
    textClass: "stats-text2",
    imgAnimation: "fade-left",
    titleAnimation: "fade-right",
  },
];

function StatsSection() {
  return (
    <div className="Stats-Section">
      {stats.map((item, index) => (
        <div className="Stats-Section-image" key={index}>
          <img
            src={item.image}
            alt={item.alt}
            data-animate={item.imgAnimation}
          />

          <div className={item.textClass}>
            <h2 data-animate={item.titleAnimation}>
              {item.number}
            </h2>

            <p data-animate={item.titleAnimation}>
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;