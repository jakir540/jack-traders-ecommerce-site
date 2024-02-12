import React from "react";
import Navbar from "../features/navbar/Navbar";
import { ProductsList } from "../features/products-list/components/ProductsList";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductsList></ProductsList>
    </div>
  );
};

export default Home;
