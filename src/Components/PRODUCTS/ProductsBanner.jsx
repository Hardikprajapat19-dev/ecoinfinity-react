import React from 'react'
import ProductsBannerImg from "../../assets/Asset-4.jpg";
function ProductsBanner() {
  return (
    <>
        <div className='ProductsBanner-section'>
         <div className='ProductsBanner-image'>
            <img src={ProductsBannerImg} alt='ProductsBannerImg'></img>
         </div>
        </div>
    </>
  );
}

export default ProductsBanner;