import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { LoadingContext } from "./loadingContext";

export const CartContext = createContext({
  cartData: {},
  setCartData: () => null,
  loadingItems: [],
  setLoadingItems: () => null,
  // getCart: async () => {},
  fetchGetCart: () => {},
  removeCartItem: async () => {},
  updateCartItem: async () => {},
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  const [loadingItems, setLoadingItems] = useState([]);

  const { setLoadingState } = useContext(LoadingContext);

  const fetchGetCart = useCallback(() => {
    const getCart = async () => {
      setLoadingState(true);
      try {
        const res = await axios.get(
          `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`
        );
        // console.log("首次得到購物車數量", res);
        setCartData(res.data.data);
        setLoadingState(false);
      } catch (error) {
        // console.log(error);
        setLoadingState(false);
      }
    };
    getCart();
  }, [setLoadingState]);

  // const getCart = async () => {
  //   setLoadingState(true);
  //   try {
  //     const res = await axios.get(
  //       `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`
  //     );
  //     // console.log("首次得到購物車數量", res);
  //     setCartData(res.data.data);
  //     setLoadingState(false);
  //   } catch (error) {
  //     // console.log(error);
  //     setLoadingState(false);
  //   }
  // };

  // useEffect(() => {
  //   getCart();
  // }, []);

  useEffect(() => {
    fetchGetCart();
  }, [fetchGetCart]);

  const removeCartItem = async (id) => {
    setLoadingState(true);
    try {
      // const res =
      await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${id}`
      );
      // console.log(res);
      fetchGetCart();
      setLoadingState(false);
    } catch (error) {
      // console.log(error);
      setLoadingState(false);
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
    setLoadingState(true);
    try {
      // const res =
      await axios.put(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${item.id}`,
        data
      );
      // console.log(res);
      setLoadingItems(
        loadingItems.filter((loadingObject) => loadingObject !== item.id)
      );
      fetchGetCart();
      setLoadingState(false);
    } catch (error) {
      // console.log(error);
      setLoadingState(false);
    }
  };

  const value = {
    cartData,
    setCartData,
    // getCart,
    fetchGetCart,
    loadingItems,
    setLoadingItems,
    removeCartItem,
    updateCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
