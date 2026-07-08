import React from 'react'
import CompartmentBanner from './CompartmentBanner ';
import CompartmentBenefits from "./CompartmentBenefits";
import CompartmentPlatesCollection from "./CompartmentPlatesCollection";
import "./CompartmentPlates.css";

function CompartmentPlates() {
  return (
    <>
      <CompartmentBanner/>
      <CompartmentBenefits/>
      <CompartmentPlatesCollection/>
    </>
  );
}

export default CompartmentPlates;
