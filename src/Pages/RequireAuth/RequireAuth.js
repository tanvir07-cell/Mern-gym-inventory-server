import React from "react";
import "./RequireAuth.css";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    <p>Loading....</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // verified email:
  if (!user.emailVerified) {
    return (
      <div className="verify-email">
        <h3 className="text-danger mb-5">Your Email is not verified ❌</h3>
        <h5 className="text-success mb-5">Please Verify Your Email Address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Send Email", { id: "verification-email" });
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
