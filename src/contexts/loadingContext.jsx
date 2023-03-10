import { createContext, useState } from "react";

export const LoadingContext = createContext({
  loadingState: null,
  setLoadingState: () => null,
});

export const LoadingProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);

  const value = { loadingState, setLoadingState };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
