import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { LoadingContext } from "./loadingContext";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../slice/messageSlice";

export const CartContext = createContext({
  cartData: {},
  setCartData: () => null,
  loadingItems: [],
  setLoadingItems: () => null,
  couponValue: "",
  setCouponValue: () => null,
  // getCart: async () => {},
  fetchGetCart: () => {},
  removeCartItem: async () => {},
  updateCartItem: async () => {},
  submitCoupon: async () => {},
  couponData: "",
});

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  const [loadingItems, setLoadingItems] = useState([]);
  const [couponValue, setCouponValue] = useState("");

  const { setLoadingState } = useContext(LoadingContext);

  const dispatch = useDispatch();

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
        setLoadingState(false);
      }
    };
    getCart();
  }, [setLoadingState]);

  useEffect(() => {
    fetchGetCart();
  }, [fetchGetCart]);

  const removeCartItem = async (id) => {
    setLoadingState(true);
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${id}`
      );

      fetchGetCart();
      setLoadingState(false);
      dispatch(createAsyncMessage(res.data));
    } catch (error) {
      setLoadingState(false);
      dispatch(createAsyncMessage(error.response.data));
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
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart/${item.id}`,
        data
      );

      setLoadingItems(
        loadingItems.filter((loadingObject) => loadingObject !== item.id)
      );
      fetchGetCart();
      setLoadingState(false);
      dispatch(createAsyncMessage(res.data));
    } catch (error) {
      // console.log(error);
      setLoadingState(false);
      dispatch(createAsyncMessage(error.response.data));
    }
  };

  const couponData = {
    data: {
      code: couponValue,
    },
  };

  const submitCoupon = async (couponData) => {
    setLoadingState(true);
    try {
      const res = await axios.post(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/coupon`,
        couponData
      );

      // console.log(res);
      fetchGetCart();
      setCouponValue("");
      setLoadingState(false);
      dispatch(createAsyncMessage(res.data));
    } catch (error) {
      setLoadingState(false);
      dispatch(createAsyncMessage(error.response.data));
    }
    // console.log(couponValue);
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
    couponValue,
    setCouponValue,
    submitCoupon,
    couponData,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
