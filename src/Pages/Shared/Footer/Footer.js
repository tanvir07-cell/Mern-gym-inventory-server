import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer bg-dark text-white text-center p-5">
      <p> &copy; Tanvir Rifat 2022 || Reserved </p>
      <div className="d-flex justify-content-center gap-5 mt-5">
        <FiFacebook
          className="fb"
          style={{ color: "#1877f2", "font-size": "2em" }}
        ></FiFacebook>
        <AiOutlineInstagram
          className="insta"
          style={{ color: "#c32aa3", "font-size": "2em" }}
        ></AiOutlineInstagram>
      </div>
    </div>
  );
};

export default Footer;
