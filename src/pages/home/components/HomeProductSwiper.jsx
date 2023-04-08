import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/productContext";
import { useContext, useEffect, useState } from "react";
import { LoveContext } from "../../../contexts/loveContext";
import { AiOutlineHeart } from "react-icons/ai";

const HomeProductSwiper = () => {
  const { homeProducts, addToCart } = useContext(ProductContext);

  const [state, dispatch] = useContext(LoveContext);

  const [loveList, setLoveList] = useState([]);

  useEffect(() => {
    setLoveList(state?.loveList);
  }, [state]);

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
        {homeProducts.map((product) => {
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
                <div className="d-flex w-100">
                  <button
                    type="button"
                    className={` rounded-0 w-25  mx-1 ${
                      loveList?.some((item) => item.id === product.id)
                        ? "swiper-like-button-color-active "
                        : "swiper-like-button-color"
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
                  <button
                    onClick={addToCart}
                    value={product.id}
                    type="button"
                    className="btn btn-secondary  rounded-0  w-75"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeProductSwiper;
