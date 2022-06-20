import React from "react";
import "./Inventory.css";

import useInventory from "../../../hooks/useInventory";

import Product from "../Product/Product";

const Inventory = () => {
  // use Custom hook:
  const [products] = useInventory();

  console.log(products);

  return (
    <div id="inventory">
      <h1 className="container text-center mt-3">Inventory</h1>
      <div className="container products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
