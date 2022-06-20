import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./addItem.css";
import { MdBookmarkAdded } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name?.value,
      img: e.target.img?.value,
      supplier: e.target.supplier?.value,
      price: e.target.price?.value,

      quantity: e.target.quantity?.value,
      email: e.target.email?.value,
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success(
          `${user?.email} added successfully this ${e.target.name?.value}`
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="add-item">
      <Form
        className="w-50 container form  h-100 mt-5 p-5"
        onSubmit={handleSubmitForm}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="email"
              placeholder="Email"
              className="input--style"
              readOnly
              value={user?.email}
              name="email"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <div className="parent-hide-show d-flex align-items-center position-relative">
            <Form.Control
              type="text"
              placeholder="Item Name"
              className="input--style"
              name="name"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="text"
              placeholder="Item-img(.png,/.jpg)"
              className="input--style"
              name="img"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="text"
              placeholder="Item Seller"
              className="input--style"
              name="supplier"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="number"
              placeholder="Price"
              className="input--style"
              name="price"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="number"
              placeholder="Quantity"
              className="input--style"
              name="quantity"
            />
          </div>
        </Form.Group>

        <textArea className="w-100" placeholder="About This Item"></textArea>
        <div className="d-flex align-items-center position-relative">
          <MdBookmarkAdded className="position-absolute start-0 icon-pos text-white "></MdBookmarkAdded>
          <Button
            type="submit"
            variant="primary"
            className="submit-login-btn w-100 btn mt-2"
          >
            Add
          </Button>
        </div>
      </Form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItem;
