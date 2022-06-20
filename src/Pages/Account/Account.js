import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { FcDeleteDatabase } from "react-icons/fc";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useInventory from "../../hooks/useInventory";
import UseProductDetail from "../../hooks/UseProductDetail";
import { toast, ToastContainer } from "react-toastify";

const Account = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [products, setProducts] = useInventory();

  const [product, setProduct] = useState({});
  console.log(product);
  //   console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user.email]);

  const handleDelete = (_id, name) => {
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
    <div>
      {user && (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 product container w-100 p-5">
          <h3 className="text-shadow text-center ">
            {user?.displayName} you added{" "}
            <span className="text-danger">{product?.name}</span>
          </h3>
        </div>
      )}

      {product?.name && (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-7 product mx-auto ">
          <img src={product?.img} alt="" />
          <div className="product-description mx-2">
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
            <div>
              <button
                className="btn btn-primary mb-2 mt-2 w-100"
                onClick={() => navigate(`/inventory/${product?._id}`)}
              >
                <GrUpdate className="mx-2 text-white"></GrUpdate>
                update : {product?.name}
              </button>

              {/* if user login then see this delete button: */}
              {user ? (
                <button
                  className="btn btn-danger mb-3 w-100 button-danger"
                  onClick={() => handleDelete(product?._id, product?.name)}
                >
                  <FcDeleteDatabase className="mx-2"></FcDeleteDatabase>
                  Delete : {product.name}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      )}
    </div>
  );
};

export default Account;
