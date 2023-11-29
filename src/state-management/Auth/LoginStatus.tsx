import { useContext, useReducer, useState } from "react";
import AuthContext from "./AuthContext";
import useAuth from "../../routing/hooks/useAuth";
import UseAuth from "./UseAuth";

const LoginStatus = () => {
  const { userName, dispatch } = UseAuth();

  if (userName)
    return (
      <>
        <div>
          <span className="mx-2">{userName}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({ type: "LOGIN", username: "Dilbar SHalwarma" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
