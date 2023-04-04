import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { useCallback, useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../contexts/loadingContext";
import axios from "axios";

const HomeNewsSwiper = () => {
  const [articles, setArticles] = useState([]);
  const { setLoadingState } = useContext(LoadingContext);
  const getArticles = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const articlesRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/articles?page=${page}`
      );
      // console.log("AAAA", articlesRes);
      setArticles(articlesRes.data.articles);

      setLoadingState(false);
    },
    [setLoadingState]
  );

  useEffect(() => {
    getArticles(1);
  }, [getArticles]);

  return (
    <div className="home-news-swiper-container col-lg-10  pb-4 pt-lg-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper "
      >
        {articles.map((articles) => {
          return (
            <SwiperSlide key={articles.id}>
              <Link to={`/articledetail/${articles.id}`} className="row h-100">
                <div className="col-lg-5 my-auto ">
                  <img src={articles.imageUrl} alt="..." className="ms-lg-1" />
                </div>

                <div className="col-lg-7 d-flex   flex-column  align-items-start h-100 ">
                  <h5 className="ms-2 ms-lg-0 mt-1 mt-lg-3 text-dark">
                    {articles.title}
                  </h5>
                  <p className="my-0 my-lg-2 ms-2 ms-lg-0  text-secondary-emphasis">
                    <BsFillPencilFill />
                    {articles.author}
                  </p>
                  <p className="  d-none d-lg-block fst-italic me-1 text-dark">
                    {articles.description}
                  </p>
                  <p className=" d-none d-lg-block d-flex flex-wrap mt-auto mb-3">
                    {articles?.tag?.map((i) => {
                      return (
                        <small
                          className="text-body-secondary bg-warning rounded-pill tag p-1 "
                          key={i.id}
                        >
                          {i.tag}
                        </small>
                      );
                    })}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeNewsSwiper;
