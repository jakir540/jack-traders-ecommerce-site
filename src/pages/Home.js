import React from "react";
import { ProductsList } from "../features/products-list/ProductsList";
import Navbar from "../features/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductsList></ProductsList>
    </div>
  );
};

export default Home;
