import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext({
  cartData: {},
  setCartData: () => null,
  loadingItems: [],
  setLoadingItems: () => null,
  submitData: {},
  setSubmitData: () => null,
  getCart: async () => {},
  removeCartItem: async () => {},
  updateCartItem: async () => {},
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  const [loadingItems, setLoadingItems] = useState([]);
  const [submitData, setSubmitData] = useState({});

  const getCart = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`
      );
      console.log("首次得到購物車數量", res);
      setCartData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${id}`
      );
      console.log(res);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartItem = async (item, quantity) => {
    const data = {
      data: {
        product_id: item.product_id,
        qty: quantity,
      },
    };
    setLoadingItems([...loadingItems, item.id]);
    try {
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${item.id}`,
        data
      );
      console.log(res);
      setLoadingItems(
        loadingItems.filter((loadingObject) => loadingObject !== item.id)
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    cartData,
    setCartData,
    getCart,
    loadingItems,
    setLoadingItems,
    removeCartItem,
    updateCartItem,
    submitData,
    setSubmitData,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
