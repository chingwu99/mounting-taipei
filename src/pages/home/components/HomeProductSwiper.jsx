import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { useCallback, useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../contexts/loadingContext";
import { useDispatch } from "react-redux";
import axios from "axios";
import { CartContext } from "../../../contexts/cartContext";
import { createAsyncMessage } from "../../../slice/messageSlice";
import { Link } from "react-router-dom";

//

const HomeProductSwiper = () => {
  const [products, setProducts] = useState([]);
  const { setLoadingState } = useContext(LoadingContext);
  const dispatch = useDispatch();

  const getProducts = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const productRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products?page=${page}`
      );
      setProducts(productRes.data.products);

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
      // console.log("res", res);
      setLoadingState(false);
      fetchGetCart();
      dispatch(createAsyncMessage(res.data));
      // handleSuccessMessage(dispatch, res);
    } catch (error) {
      // console.log(error);

      setLoadingState(false);
      dispatch(createAsyncMessage(error.response.data));
    }
  };
  return (
    <div className="home-product-swiper-container col-lg-10 mt-sm-2 mt-lg-4 mb-3">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt="..." />
              </Link>

              <div className="d-flex flex-column text-start m-1 mx-2">
                <small className=" fst-italic m-0">{product.title}</small>
                <small className=" fst-italic mb-1">
                  特價 ${product.price}
                </small>
                <button
                  onClick={addToCart}
                  value={product.id}
                  type="button"
                  className="btn btn-secondary  rounded-0  "
                >
                  加入購物車
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeProductSwiper;
