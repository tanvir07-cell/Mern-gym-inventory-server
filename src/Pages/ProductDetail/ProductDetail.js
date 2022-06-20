import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import UseProductDetail from "../../hooks/UseProductDetail";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // use Custom hook:
  const [product] = UseProductDetail(id);

  const handleReduce = (id) => {
    console.log("clicked");
    if (product.quantity > 0) {
      const quantityUpdate = parseInt(product?.quantity) - 1;
      console.log(quantityUpdate);
      fetch(`http://localhost:5000/deliver/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantityUpdate }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(`${product.name} Delivered successfully`, {
            id: "delivered",
          });
        });
    } else {
      alert("Error");
    }
  };

  const handleSubmitRestock = (id, event) => {
    console.log(id);
    const restock = document.querySelector("#restock");

    if (product.quantity > 0) {
      // parsing restock.value using(+);
      const quantityIncrease = parseInt(product.quantity) + +restock.value;
      fetch(`http://localhost:5000/restock/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantityIncrease }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(`${product?.name} restocked successfully!`);
          restock.value = "";
        });
    } else {
      toast.error(`Quantity must greater than 0`, { id: "quantity3" });
    }
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 product w-50 mx-auto ">
      <img src={product?.img} alt="" className="w-100 mx-auto " />
      <div className="product-description mx-5">
        <h3 className="mt-2 text-shadow-h2"> {product?.name}</h3>
        <p>
          Supplier : <span>{product?.supplier}</span>
        </p>
        {/* <p>{description}</p> */}

        <p>
          Price : <small>${product?.price}</small>
        </p>
        <p>
          Quantity : <span>{product?.quantity}</span>
        </p>
        <button className="btn btn-primary" onClick={() => handleReduce(id)}>
          Deliver
        </button>

        <div className="mt-2">
          <input
            type="text"
            name="restock"
            id="restock"
            placeholder={`Restock this ${product?.name}`}
          />
          <button
            className="btn btn-primary mx-2"
            onClick={() => handleSubmitRestock(id)}
          >
            Restock
          </button>
        </div>
        <button
          className="btn btn-primary mt-2"
          onClick={() => navigate("/manageItem")}
        >
          Manage Item
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetail;
