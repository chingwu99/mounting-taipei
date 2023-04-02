import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { useEffect } from "react";
import { Pagination, Autoplay } from "swiper";
import Homeimg1 from "../../../image/homeimg/homeimg1.jpg";
import Homeimg2 from "../../../image/homeimg/homeimg2.jpg";
import Homeimg3 from "../../../image/homeimg/homeimg3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const HomeSwiper = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="swiper-container-height ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Homeimg1} alt="..." className="position-absolute" />
          <div
            className="d-flex justify-content-center align-items-center    flex-column position-relative d-none d-md-block text-white"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <p className="fs-5 fst-italic ">The</p>
            <h2 className="mb-4 pb-2 display-1  swiper-title ">
              MountingTaipei
            </h2>
            <p className=" fst-italic ">
              無論你想享受漫步山徑的悠閒氣息、追求登峰造極的極限挑戰
              <br />
              爬爬台北為你提供全方位的登山資訊與用具
              <br />
              我們為你打造最適合的登山體驗
            </p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center    flex-column position-relative position-relative text-white d-md-none"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <h2 className=" display-4 my-4 text-center">
              爬爬台北 <br />
              Mounting Taipei
            </h2>
            <p className=" ">空出一些空閒的時間 看見臺北不一樣的美</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Homeimg2} alt="..." className="position-absolute" />
          <div className="d-flex justify-content-center align-items-center    flex-column position-relative d-none d-md-block text-warning">
            <p className="fs-5  fst-italic">The</p>
            <h2 className="mb-4 pb-2 display-1  swiper-title ">
              MountingTaipei
            </h2>
            <p className="  fst-italic">
              無論你想享受漫步山徑的悠閒氣息、追求登峰造極的極限挑戰
              <br />
              爬爬台北為你提供全方位的登山資訊與用具
              <br />
              我們為你打造最適合的登山體驗
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center    flex-column position-relative position-relative text-warning d-md-none">
            <h2 className=" display-4 my-4 text-center">
              爬爬台北 <br />
              Mounting Taipei
            </h2>
            <p className=" ">空出一些空閒的時間 看見臺北不一樣的美</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Homeimg3} alt="..." className="position-absolute" />
          <div className="d-flex justify-content-center align-items-center    flex-column position-relative d-none d-md-block text-white">
            <p className="fs-5 fst-italic text-white">The</p>
            <h2 className="mb-4 pb-2 display-1  swiper-title text-white">
              MountingTaipei
            </h2>
            <p className=" fst-italic text-white">
              無論你想享受漫步山徑的悠閒氣息、追求登峰造極的極限挑戰
              <br />
              爬爬台北為你提供全方位的登山資訊與用具
              <br />
              我們為你打造最適合的登山體驗
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center    flex-column position-relative position-relative text-white d-md-none">
            <h2 className=" display-4 my-4 text-center">
              爬爬台北 <br />
              Mounting Taipei
            </h2>
            <p className=" ">空出一些空閒的時間 看見臺北不一樣的美</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
