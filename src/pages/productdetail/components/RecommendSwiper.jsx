import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/productContext";

const RecommendSwiper = () => {
  const { homeProducts, addToCart } = useContext(ProductContext);
  return (
    <div className="recommend-swiper-container">
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
            slidesPerView: 5,
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

export default RecommendSwiper;
