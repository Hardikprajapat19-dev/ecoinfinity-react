import React from 'react'
import PlatesBannerImg from "../../assets/plates-banner-1024x397.png";
function PlatesBanner() {
  return (
    <>
      <div className='PlatesBanner-section'>
        <div className='PlatesBanner-image'>
            <img src={PlatesBannerImg} alt='PlatesBannerImg'></img>
        </div>
      </div>
    </>
  );
}

export default PlatesBanner;