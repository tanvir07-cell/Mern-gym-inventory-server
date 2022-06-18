import React from "react";

import useInventory from "../../../hooks/useInventory";

import Product from "../Product/Product";

const Inventory = () => {
  // use Custom hook:
  const [products] = useInventory();

  // because i send this {success:true,data:result(this is the array)}
  const { data } = products;

  return (
    <div id="inventory">
      <h1 className="text-center mt-3">Inventory</h1>
      <div className="container d-flex align-items-center justify-content-between">
        {data?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
