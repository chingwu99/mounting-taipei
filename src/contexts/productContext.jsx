import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../slice/messageSlice";
import { CartContext } from "./cartContext";
import { LoadingContext } from "./loadingContext";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
  pagination: {},
  setPagination: () => null,
  addToCart: () => null,
  getProducts: () => null,
  homeProducts: [],
  setHomeProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const { setLoadingState } = useContext(LoadingContext);
  const dispatch = useDispatch();

  const getHomeProducts = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const productRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products?page=${page}`
      );
      setHomeProducts(productRes.data.products);

      setLoadingState(false);
    },
    [setLoadingState]
  );

  useEffect(() => {
    getHomeProducts(1);
  }, [getHomeProducts]);

  const getProducts = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const productRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products?page=${page}`
      );
      setProducts(productRes.data.products);
      setPagination(productRes.data.pagination);
      setLoadingState(false);
    },
    [setLoadingState]
  );

  useEffect(() => {
    getProducts(1);
  }, [getProducts]);

  const { fetchGetCart } = useContext(CartContext);

  const addToCart = async (e) => {
    const data = {
      data: {
        product_id: e.target.value,
        qty: 1,
      },
    };

    setLoadingState(true);
    try {
      const res = await axios.post(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`,
        data
      );

      setLoadingState(false);
      fetchGetCart();
      dispatch(createAsyncMessage(res.data));
    } catch (error) {
      setLoadingState(false);
      dispatch(createAsyncMessage(error.response.data));
    }
  };

  const value = {
    products,
    setProducts,
    pagination,
    setPagination,
    addToCart,
    getProducts,
    homeProducts,
    setHomeProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
