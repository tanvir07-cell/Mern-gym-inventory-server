import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Products = ({ product }) => {
  const { name, price, img, supplier, quantity, _id } = product;
  const navigate = useNavigate();

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-5 product">
      <img src={img} alt="" />
      <div className="product-description mx-2">
        <h3 className="mt-2 text-shadow-h2"> {name}</h3>
        <p>
          Supplier : <span>{supplier}</span>
        </p>
        {/* <p>{description}</p> */}

        <p>
          Price : <small>${price}</small>
        </p>
        <p>
          Quantity : <span>{quantity}</span>
        </p>
        <button
          className="btn btn-primary mb-3 "
          onClick={() => navigate(`${_id}`)}
        >
          stock update : {name}
        </button>
      </div>
    </div>
  );
};

export default Products;
