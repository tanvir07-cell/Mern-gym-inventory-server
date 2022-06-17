import React from "react";
import { useState } from "react";
import useInventory from "../../../hooks/useInventory";

import Product from "../Product/Product";

const Inventory = () => {
  // use Custom hook:
  const [products] = useInventory();

  return (
    <div className="container d-flex align-items-center justify-content-between">
      {products.map((product) => (
        <Product key={product?._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Inventory;
