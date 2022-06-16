import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <div>
          <p className="mt-2 px-2">OR</p>
        </div>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>

      <button className="btn btn-primary w-100">
        <div className="">
          <span className="mx-2">Sign In With Google</span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
