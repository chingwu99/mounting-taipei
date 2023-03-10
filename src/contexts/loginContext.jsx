import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({
  LoginState: null,
  setLoginState: () => null,
});

export const LoginProvider = ({ children }) => {
  const [LoginState, setLoginState] = useState(null);

  console.log("吸ㄏㄧ ", LoginState);

  const value = { LoginState, setLoginState };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
