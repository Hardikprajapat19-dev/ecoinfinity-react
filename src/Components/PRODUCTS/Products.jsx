import React from 'react'
import ProductsBanner from "./ProductsBanner";
import InfiniteGoodness from './InfiniteGoodness';
import ProductCard from './ProductCard';
import Productresistant from './Productresistant';
import "./Products.css"

function Products() {
  return (
    <>
       <ProductsBanner/>
       <InfiniteGoodness/>
       <ProductCard/>
       <Productresistant/>
    </>
  );
}

export default Products;
