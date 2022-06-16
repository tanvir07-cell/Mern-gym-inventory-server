import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import authentication from "../../images/login/authentication.svg";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="login  ">
      <div className="w-90 container mt-2">
        <img src={authentication} alt="" className="w-100" />
      </div>
      <Form className="w-50 container form  h-50 mt-5 p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="error-message"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="parent-hide-show">
            <Form.Control type="password" placeholder="Password" />
          </div>
          <Form.Text className="error-message"></Form.Text>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="submit-login-btn w-100 btn "
        >
          login
        </Button>
        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;
