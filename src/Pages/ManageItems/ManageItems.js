import React, { useState } from "react";
import { useEffect } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useInventory from "../../hooks/useInventory";
import "./ManageItems.css";

const ManageItems = () => {
  const navigate = useNavigate();
  const [manageProducts, setManageProducts] = useState([]);
  useEffect(() => {
    fetch("https://secret-dawn-73954.herokuapp.com/manageProducts")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);

  const handleDelete = (_id, name) => {
    const proceed = window.confirm(
      `Are you sure you want to delete this ${name}?`
    );
    if (proceed) {
      fetch(`https://secret-dawn-73954.herokuapp.com/manageProducts/${_id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          const { deletedCount } = data;
          //   toast message delete:
          toast.success(`Deleted Successfully this ${name}`, {
            id: "delete-1",
          });
          // after deleting client also not seeing this deleted products:
          if (deletedCount === 1) {
            const remainingUsers = manageProducts?.filter(
              (pd) => pd?._id !== _id
            );
            setManageProducts(remainingUsers);
          }
        });
      return;
    }
    toast.error("Ok ! No problem!", { id: "Delete-3" });
  };

  const handleAddItem = () => {
    navigate("/addItem");
  };

  return (
    <div>
      <div className="container products-container  mt-5">
        {manageProducts?.map((product) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mt-5 product">
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
              <button
                className="btn btn-primary mb-2 mt-2 w-100"
                onClick={() => navigate(`/inventory/${product?._id}`)}
              >
                <GrUpdate className="mx-2 text-white"></GrUpdate>
                update : {product?.name}
              </button>
              <button
                className="btn btn-danger mb-3 w-100 button-danger"
                onClick={() => handleDelete(product._id, product?.name)}
              >
                <FcDeleteDatabase className="mx-2"></FcDeleteDatabase>
                Delete : {product?.name}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-3">
        <button className="btn btn-primary mb-3" onClick={handleAddItem}>
          Add New Item
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageItems;
