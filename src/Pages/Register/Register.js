import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";

import authentication from "../../images/login/authentication.svg";

import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Register = () => {
  // for user creation:
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [showPass, setShowPass] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmationPasswordError: "",
  });

  const handleEmailChange = (event) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.target.value
      )
    ) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Invalid email address" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    if (/.{6,}/.test(event.target.value)) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...errors,
        passwordError: "Password must be at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (event) => {
    if (event.target.value !== userInfo.password) {
      setErrors({
        ...errors,
        confirmationPasswordError: "Password does not match",
      });
      setUserInfo({ ...userInfo, confirmPass: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPass: event.target.value });
      setErrors({ ...errors, confirmationPasswordError: "" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      userInfo.email &&
      userInfo.password &&
      userInfo.password === userInfo.confirmPass
    ) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      toast.success(`${userInfo.email} created successfully!`, { id: "reg" });
    } else {
      toast.error(`Please provide all information before registered`);
    }
  };

  // error from firebase backed:
  useEffect(() => {
    if (error) {
      switch (error?.code) {
        case "auth/email-already-in-use":
          toast.error("This email already exist! Please provide a new email", {
            toastId: "id-email-exist",
          });
          break;

        case "auth/invalid-email":
          toast.error(
            "Invalid Email Provided ! Please Provide a Valid Email Address",
            { toastId: "id-1" }
          );
          break;

        case "auth/invalid-password":
          toast.error("Wrong Password! Provide a valid Password", {
            toastId: "id-2",
          });
          break;

        default:
          toast.error("Something Went Wrong", { toastId: "id-3" });
          break;
      }
    }
  }, [error]);

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
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>

          {errors?.passwordError && (
            <Form.Text className="error-message">
              {errors?.passwordError}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="parent-hide-show">
            <Form.Control
              type={showPass ? "text" : "password"}
              placeholder="Confirmation Password"
              onChange={handleConfirmPasswordChange}
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

          {!errors?.passwordError && (
            // dynamic css class when password error not occur then show the password confirm error:
            <Form.Text
              className={`!errors?.passwordError? "error-message" : ""`}
            >
              {errors?.confirmationPasswordError}
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
          Already have an account?
          <Link
            className="text-primary pe-auto text-decoration-none"
            to="/login"
            onClick={() => navigate("/login")}
          >
            Login first
          </Link>
        </p>

        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
      </Form>
    </div>
  );
};

export default Register;
