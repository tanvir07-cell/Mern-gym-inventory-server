import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./addItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="add-item">
      <Form className="w-100 container form  h-100 mt-5 p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="email"
              placeholder="Email"
              className="input--style"
              readOnly
              value={user?.email}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <div className="parent-hide-show d-flex align-items-center position-relative">
            <Form.Control
              type="text"
              placeholder="Item Name"
              className="input--style"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="text"
              placeholder="Item-img(.png,/.jpg)"
              className="input--style"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextText">
          <div className="d-flex align-items-center position-relative">
            <Form.Control
              type="email"
              placeholder="Item Seller"
              className="input--style"
            />
          </div>
        </Form.Group>

        <textArea className="w-100" placeholder="About This Item"></textArea>

        <Button
          type="submit"
          variant="primary"
          className="submit-login-btn w-100 btn "
        >
          login
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
