
// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import slide1 from "../../assets/eco-earth-banner-01.png";
// // import slide2 from "../../assets/eco-tree-banner-02.png";
// // import slide3 from "../../assets/eco-bird-banner-03.png";
// // import Slide4 from "../../assets/eco-infinity-banner-04.png"
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';


// // // import required modules
// // import { Navigation } from 'swiper/modules';

// // function Home() {
// //   return (
// //     <>
// //       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
// //         <SwiperSlide>
// //           <img src={slide1} alt="Slide 1" />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <img src={slide2} alt="Slide 2" />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <img src={slide3} alt="Slide 3" />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //           <img src={Slide4} alt="Slide 4" />
// //         </SwiperSlide>
// //       </Swiper>
// //     </>
// //   );
// // }

// // export default Home;

// import HomeHero from "./HomeHero";
// import ProductShowcase from "./ProductShowcase";
// import ManufacturingFacility from "./ManufacturingFacility";
// import WhoWeAre from "./WhoWeAre";
// import StatsSection from "./StatsSection";
// import WhyChooseUs from "./WhyChooseUs";
// import CustomerSpeak from "./CustomerSpeak";
// import ClientsServed from "./ClientsServed";
// import InquirySection from "./InquirySection";

// function Home() {
//   return (
//     <>
//       <HomeHero />
//       <ProductShowcase />
//       <ManufacturingFacility />
//       <WhoWeAre/>
//       <StatsSection/>
//       <WhyChooseUs/>
//       <CustomerSpeak/>
//       <ClientsServed/>
//       <InquirySection/>
//     </>
//   );
// }

// export default Home;

import HomeHero from "./HomeHero";
import ProductShowcase from "./ProductShowcase";
import ManufacturingFacility from "./ManufacturingFacility";
import WhoWeAre from "./WhoWeAre";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import CustomerSpeak from "./CustomerSpeak";
import ClientsServed from "./ClientsServed";
import InquirySection from "./InquirySection";
import "./Home.css";
function Home() {
  return (
    <>
      <HomeHero />
      <ProductShowcase />
      <ManufacturingFacility />
      <WhoWeAre />
      <StatsSection />
      <WhyChooseUs />
      <CustomerSpeak />
      <ClientsServed />
      <InquirySection />
    </>
  );
}

export default Home;