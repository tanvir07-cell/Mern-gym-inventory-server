import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <div>
          <p className="mt-2 px-2">OR</p>
        </div>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>

      <button
        className="btn btn-primary w-100 mt-2"
        onClick={() => signInWithGoogle()}
      >
        <div className="">
          <FcGoogle></FcGoogle>
          <span className="mx-2">Sign In With Google</span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
