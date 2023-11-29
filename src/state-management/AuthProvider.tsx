import React, { Children, ReactNode, useReducer } from "react";
import LoginReducer from "./Reducers/LoginReducer";
import AuthContext from "./Contexts/AuthContext";
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
