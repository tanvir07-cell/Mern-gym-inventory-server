import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";
import { Si1Password, SiMinutemailer } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import authentication from "../../images/login/authentication.svg";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [user] = useAuthState(auth);
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
    signInWithEmailAndPassword(userInfo.email, userInfo.password);

    event.target.reset();

    if (!error) {
      toast.success(`${userInfo.email} logged in successfully`);
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

        case "auth/email-not-found":
          toast.error("At first register then try to login", { id: "login" });
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

  // after login redirect to the location:
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  return (
    <div className=" login mt-5">
      <div className="w-90 container mt-5 img-container">
        <img src={authentication} alt="" className="w-100" />
      </div>
      <Form
        className="w-50 container form  h-50 mt-5 p-5"
        onSubmit={handleFormSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex align-items-center position-relative">
            <SiMinutemailer className="position-absolute start-0 icon-pos"></SiMinutemailer>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className="input--style"
            />
          </div>
          {errors?.emailError && (
            <Form.Text className="error-message">
              {errors?.emailError}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="parent-hide-show d-flex align-items-center position-relative">
            <Si1Password className="position-absolute start-0 icon-pos"></Si1Password>
            <Form.Control
              type={showPass ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordChange}
              className="input--style"
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
