
import React from "react";

import slide1 from "../../assets/eco-earth-banner-01.png";
import slide2 from "../../assets/eco-tree-banner-02.png";
import slide3 from "../../assets/eco-bird-banner-03.png";
import slide4 from "../../assets/eco-infinity-banner-04.png";

// Mobile Images
import mobile1 from "../../assets/001.jpeg";
import mobile2 from "../../assets/002.jpeg";
import mobile3 from "../../assets/003.jpeg";
import mobile4 from "../../assets/004.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    desktop: slide1,
    mobile: mobile1,
    alt: "Slide 1",
  },
  {
    desktop: slide2,
    mobile: mobile2,
    alt: "Slide 2",
  },
  {
    desktop: slide3,
    mobile: mobile3,
    alt: "Slide 3",
  },
  {
    desktop: slide4,
    mobile: mobile4,
    alt: "Slide 4",
  },
];

function HomeHero() {
  return (
    <Swiper
      navigation
      loop
      modules={[Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <picture>

            {/* Mobile */}
            <source
              media="(max-width:768px)"
              srcSet={slide.mobile}
            />

            {/* Desktop */}
            <img
              src={slide.desktop}
              alt={slide.alt}
            />

          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeHero;