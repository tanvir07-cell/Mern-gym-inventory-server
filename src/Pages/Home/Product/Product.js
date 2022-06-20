import React, { useEffect, useState } from "react";

import { FcDeleteDatabase } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useInventory from "../../../hooks/useInventory";
import "./Product.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";

const Products = (props) => {
  const [user] = useAuthState(auth);
  const { name, price, img, supplier, quantity, _id } = props.product;
  const navigate = useNavigate();
  console.log(props.product);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // delete a product:
  const handleDelete = (_id, name, pd) => {
    const proceed = window.confirm(
      `Are you sure you want to delete this ${name}?`
    );
    if (proceed) {
      fetch(`http://localhost:5000/products/${_id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);

          //   toast message delete:
          toast.success(`Deleted Successfully this ${name}`, {
            id: "delete-1",
          });

          if (data.deletedCount === 1) {
            const remainingProducts = products?.filter((pd) => pd?._id !== _id);
            setProducts(remainingProducts);
          }
        });
      return;
    }
    toast.error("Ok ! No problem!", { id: "Delete-3" });
  };

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
        <div>
          <button
            className="btn btn-primary mb-2 mt-2 w-100"
            onClick={() => navigate(`/inventory/${_id}`)}
          >
            <GrUpdate className="mx-2 text-white"></GrUpdate>
            update : {name}
          </button>

          {/* if user login then see this delete button: */}
          {user ? (
            <button
              className="btn btn-danger mb-3 w-100 button-danger"
              onClick={() => handleDelete(_id, name, props.product)}
            >
              <FcDeleteDatabase className="mx-2"></FcDeleteDatabase>
              Delete : {name}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Products;
