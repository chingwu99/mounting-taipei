import { createContext, useState } from "react";

export const LoginContext = createContext({
  LoginState: null,
  setLoginState: () => null,
});

export const LoginProvider = ({ children }) => {
  const [LoginState, setLoginState] = useState(null);

  const value = { LoginState, setLoginState };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
