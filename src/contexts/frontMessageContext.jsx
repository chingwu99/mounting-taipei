import { createContext, useReducer } from "react";

export const FrontMessageContext = createContext({});

export const FrontMessageProvider = ({ children }) => {
  const initState = { text: "" };

  const FrontMessageReducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS_MESSAGE":
        return { ...action.payload };
      case "CLEAR_MESSAGE":
        return { ...initState };
      default:
        return state;
    }
  };

  const reducer = useReducer(FrontMessageReducer, initState);

  return (
    <FrontMessageContext.Provider value={reducer}>
      {children}
    </FrontMessageContext.Provider>
  );
};

export function handleSuccessMessage(dispatch, res) {
  dispatch({
    type: "SUCCESS_MESSAGE",
    payload: {
      text: res.data.message,
    },
  });

  setTimeout(() => {
    dispatch({
      type: "CLEAR_MESSAGE",
    });
  }, 3000);
}
