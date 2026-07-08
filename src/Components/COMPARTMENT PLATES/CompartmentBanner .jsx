
import React from "react";

import Banner1536 from "../../assets/compartment-plate-banner-1536x596.png";
import Banner1024 from "../../assets/compartment-plate-banner-1024x397.png";
import Banner768 from "../../assets/compartment-plate-banner-768x298.png";
import BannerDefault from "../../assets/compartment-plate-banner.png";
import BannerMobile from "../../assets/Product_Compartment-Plate-Banner-Mobile.jpeg";

function CompartmentBanner() {
  return (
    <div className="CompartmentBanner-section">
      <div className="CompartmentBanner-image">
        <picture>

          <source media="(max-width:576px)" srcSet={BannerMobile} />
          <source media="(max-width:768px)" srcSet={Banner768} />
          <source media="(max-width:1024px)" srcSet={Banner1024} />
          <source media="(max-width:1536px)" srcSet={Banner1536} />

          <img
            src={BannerDefault}
            alt="Compartment Banner"/>
        </picture>
      </div>
    </div>
  );
}

export default CompartmentBanner;