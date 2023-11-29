import React, { Dispatch } from "react";
import { AuthAction } from "../Reducers/LoginReducer";

interface AuthContextType {
  userName: string;
  dispatch: Dispatch<AuthAction>;
}
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
