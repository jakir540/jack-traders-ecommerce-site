import React from "react";
import Login from "../features/auth/components/Login";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-gray-950 font-semibold mt-10">
        Please Login{" "}
      </h1>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
