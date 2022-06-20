import React from "react";
import { ToastContainer } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Account = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-5 product">
      {user && (
        <div>
          <h1 className="text-center">Tanvir Rifat</h1>
        </div>
      )}
    </div>
  );
};

export default Account;
