import React, { Children, ReactNode, useReducer } from "react";
import AuthContext from "./AuthContext";
interface LoginAction {
  type: "LOGIN";
  username: string;
}
interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;
const LoginReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, AuthDispatch] = useReducer(LoginReducer, "");
  return (
    <AuthContext.Provider value={{ userName: user, dispatch: AuthDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
