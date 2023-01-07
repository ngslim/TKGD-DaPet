import React, { useState } from "react";
// import { initialState, AuthReducer } from "./reducer";

export const AuthStateContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const onChangeState = () => {
    setIsLogin(!isLogin);
  };

  return (
    <AuthStateContext.Provider
      value={{ state: isLogin, handler: onChangeState }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};
