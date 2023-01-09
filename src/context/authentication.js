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
  const [role, setRole] = useState("");
  const onChangeState = () => {
    setIsLogin(!isLogin);
  };
  const onChangeRole = () => {
    if (!isLogin) {
      setRole("");
    } else {
      if (role === "doctor") {
        setRole("user");
      } else {
        setRole("doctor");
      }
    }
  };

  return (
    <AuthStateContext.Provider
      value={{
        state: isLogin,
        handler: onChangeState,
        role: role,
        onChangeRole: onChangeRole,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};
