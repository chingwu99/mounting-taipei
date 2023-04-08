import { createContext, useReducer } from "react";

export const LoveContext = createContext({});

export const LoveProvider = ({ children }) => {
  const initState = {
    loveList: JSON.parse(localStorage.getItem("loveList")) || [],
  };

  const LoveReducer = (state, action) => {
    const loveList = [...state.loveList];

    const index = loveList.findIndex(
      (item) => item.title === action.payload.title
    );

    switch (action.type) {
      case "ADD_TO_LOVE":
        if (index === -1) {
          loveList.push(action.payload);
        } else {
          loveList.splice(index, 1);
        }

        localStorage.setItem("loveList", JSON.stringify(loveList));

        return { ...state, loveList };

      default:
        return state;
    }
  };

  const reducer = useReducer(LoveReducer, initState);

  return (
    <LoveContext.Provider value={reducer}>{children}</LoveContext.Provider>
  );
};
