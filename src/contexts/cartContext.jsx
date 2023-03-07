import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext({
  cartData: {},
  setCartData: () => null,
  getCart: async () => {},
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});

  const getCart = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`
      );
      console.log("HHHHHH", res);
      setCartData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const value = { cartData, setCartData, getCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
