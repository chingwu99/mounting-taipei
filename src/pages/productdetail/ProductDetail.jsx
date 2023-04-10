import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { LoadingContext } from "../../contexts/loadingContext";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice";
import RecommendSwiper from "./components/RecommendSwiper";
import { AiOutlineHeart } from "react-icons/ai";
import { LoveContext } from "../../contexts/loveContext";

const ProductDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [state, dispatch] = useContext(LoveContext);
  const [loveList, setLoveList] = useState([]);

  useEffect(() => {
    setLoveList(state?.loveList);
  }, [state]);

  const [product, setProduct] = useState({});
  const [cartQuantity, setCartQuantity] = useState(1);
  const messageDispatch = useDispatch();

  const { fetchGetCart } = useContext(CartContext);

  const { loadingState, setLoadingState } = useContext(LoadingContext);

  const getProduct = useCallback(
    async (id) => {
      setLoadingState(true);
      const productRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/product/${id}`
      );
      setProduct(productRes.data.product);
      setLoadingState(false);
    },
    [setLoadingState]
  );

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  const addToCart = async () => {
    const data = {
      data: {
        product_id: product.id,
        qty: cartQuantity,
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

      messageDispatch(createAsyncMessage(res.data));
    } catch (error) {
      messageDispatch(createAsyncMessage(error.response.data));
      setLoadingState(false);
    }
  };

  return (
    <div className=" bg-white">
      <div className=" d-flex justify-content-center ">
        <div className="row  w-75  my-5 container-xxl">
          <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
            <div className="productDetail-img-container ">
              <img
                src={product.imageUrl}
                alt=""
                className="img-fluid productDetail-object-fit "
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-7 ">
            <div>
              <div className="d-flex">
                <div>
                  <Link to="/">首頁</Link>
                </div>
                <span>{" > "}</span>
                <div>
                  <Link to="/productspage">精選商品</Link>
                </div>
                <span>{" > "}</span>
                <div>{product.title}</div>
              </div>
              <h2 className="my-4 ">{product.title}</h2>
              <div>
                <p className="my-4">{product.description}</p>
                <p className="my-4">{product.content}</p>
              </div>

              <div className="d-flex ">
                <p className="text-danger fs-3 ">${product.price}</p>
                <p className="text-muted text-decoration-line-through ">
                  {product.origin_price}
                </p>
              </div>

              <div className="d-md-flex">
                <div className="input-group  border  ">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-primary rounded-0 border-0 py-3"
                      type="button"
                      id="button-addon1"
                      onClick={() =>
                        setCartQuantity((pre) => (pre === 1 ? pre : pre - 1))
                      }
                    >
                      <AiOutlineMinusCircle />
                    </button>
                  </div>
                  <input
                    type="number"
                    className="form-control border-0 text-center my-auto shadow-none"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    readOnly
                    value={cartQuantity}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary rounded-0 border-0 py-3"
                      type="button"
                      id="button-addon2"
                      onClick={() => setCartQuantity((pre) => pre + 1)}
                    >
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
                <div className="d-flex w-100 ms-0 ms-md-1">
                  <button
                    type="button"
                    className="btn btn-primary w-75 rounded-0 py-3"
                    onClick={() => addToCart()}
                    disabled={loadingState}
                  >
                    加入購物車
                  </button>
                  <button
                    type="button"
                    className={`rounded-0 w-25  ms-1 ${
                      loveList.some((item) => item.id === id)
                        ? "like-button-color-active"
                        : "like-button-color"
                    }`}
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_LOVE",
                        payload: {
                          ...product,
                        },
                      });
                    }}
                  >
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column  productDetail-spirit">
        <div className="border-bottom my-3 border-3">
          <p className="fs-3">用心選材，堅守品質</p>
        </div>
        <div className="w-50 my-3">
          <p>
            爬爬台北以專業的技術與堅定的信念，打造出獨一無二的登山用品。我們使用環保無毒材質，確保產品的安全和可持續性。同時，我們注重每一個細節，追求產品的品質和耐用性。
            <br />
            <br />
            每一款產品都是由我們的專業團隊精心設計和生產。我們希望每一位使用者都能夠感受到產品的獨特性和品質，同時享受到登山帶來的自由和美好。
            <br />
            <br />
            在爬爬台北，我們不斷追求創新和突破，讓每一個產品都是一個藝術品。我們相信，好的產品可以帶給人們更好的生活體驗，而我們的產品就是您追求品質和美好生活的不二之選。
          </p>
        </div>
      </div>

      <div className="container p-4">
        <h3 className="mb-4 border-bottom border-primary  border-2 pb-3">
          猜你喜歡
        </h3>
        <RecommendSwiper />
      </div>
    </div>
  );
};

export default ProductDetail;
