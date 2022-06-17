import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import authentication from "../../images/login/authentication.svg";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [signInWithEmailAndPassword, user2, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.target.value
      )
    ) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, emailError: "Invalid Email Address" });
    }
  };

  const handlePasswordChange = (event) => {
    if (/.{6,}/.test(event.target.value)) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...error,
        passwordError: "Password Must Contain six character",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className=" login">
      <div className="w-90 container mt-2">
        <img src={authentication} alt="" className="w-100" />
      </div>
      <Form
        className="w-50 container form  h-50 mt-5 p-5"
        onSubmit={handleFormSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          {errors?.emailError && (
            <Form.Text className="error-message">
              {errors?.emailError}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="parent-hide-show">
            <Form.Control
              type={showPass ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {showPass ? (
              <BiHide
                className="position-hide-show"
                onClick={() => setShowPass(!showPass)}
              ></BiHide>
            ) : (
              <BiShow
                className="position-hide-show"
                onClick={() => setShowPass(!showPass)}
              ></BiShow>
            )}
          </div>

          {errors?.passwordError && (
            <Form.Text className="error-message">
              {errors?.passwordError}
            </Form.Text>
          )}
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="submit-login-btn w-100 btn "
        >
          login
        </Button>
        <p className="mt-3">
          New to Gym inventory ?
          <Link
            className="text-primary pe-auto text-decoration-none"
            to="/register"
            onClick={() => navigate("/register")}
          >
            Please Register
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;
