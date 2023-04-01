import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./components/carousel/Carousel";
import homeimg5 from "../../image/homeimg/homeimg5.jpg";
import homeimg6 from "../../image/homeimg/homeimg6.jpg";
import homeimg7 from "../../image/homeimg/homeimg7.jpg";
import homeimg8 from "../../image/homeimg/homeimg8.jpg";
import tent from "../../image/homeimg/tent.svg";
import route from "../../image/homeimg/route.svg";
import cart from "../../image/homeimg/cart.svg";
import news from "../../image/homeimg/news.svg";
import RoutesChoiceLg from "./components/RoutesChoiceLg";
import RoutesChoiceMobile from "../../components/RoutesChoiceMobile";
import HomeCard from "./components/HomeCard";
import { WiStars } from "react-icons/wi";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Carousel />
      <div
        className="d-flex justify-content-center align-items-center   flex-column text-warning d-md-none mb-3"
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        <h2 className=" display-4 my-4 text-center">
          爬爬台北 <br />
          Mounting Taipei
        </h2>
        <p className=" ">空出一些空閒的時間 看見臺北不一樣的美</p>
      </div>

      <div className="form-color  ">
        <div className="d-flex justify-content-center align-items-center  flex-column  ">
          <h3 className="my-4 about-decoration ">關於我們</h3>
          <p>在2023年的春天由一群熱愛爬山的夥伴創立</p>
          <p className="fst-italic">
            “It is not the mountain we conquer but ourselves.”
          </p>
          <p className="fst-italic"> — Edmund Hillary, Mountain Climber</p>
          <div className="row d-flex g-5 mx-1 mb-5 ">
            <Link
              className="col-sm-12 col-md-3 d-flex flex-column  justify-content-center align-items-center "
              to="/mountingroute"
              data-aos="fade-down"
              data-aos-duration="700"
            >
              <img src={route} alt="" className="home-svg-img " />
              <p>步道資訊</p>
            </Link>
            <Link
              className="col-sm-12 col-md-3 d-flex flex-column  justify-content-center align-items-center "
              to="/productspage"
              data-aos="fade-down"
              data-aos-duration="1400"
            >
              <img src={tent} alt="" className="home-svg-img " />
              <p>商品資訊</p>
            </Link>

            <Link
              className="col-sm-12 col-md-3 d-flex flex-column  justify-content-center align-items-center "
              to="/article"
              data-aos="fade-down"
              data-aos-duration="2100"
            >
              <img src={news} alt="" className="home-svg-img " />
              <p>最新消息</p>
            </Link>

            <Link
              className="col-sm-12 col-md-3 d-flex flex-column  justify-content-center align-items-center "
              to="/cart"
              data-aos="fade-down"
              data-aos-duration="2800"
            >
              <img src={cart} alt="" className="home-svg-img " />
              <p>購物清單</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        className=" d-flex  justify-content-center
align-items-center my-3"
      >
        <div className="row d-flex flex-row-reverse ">
          {/* 行動版*/}
          <RoutesChoiceMobile />
          {/*  桌面版 */}
          <RoutesChoiceLg />
          <div className=" col-sm-12 col-md-6  text-white">
            <div
              className="h-100  d-flex   
    justify-content-center
    flex-column  mx-4 mx-lg-5 "
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <h3 className="mb-4 text-sm text-center mt-1 d-lg-none">
                六大區城市步道，
                <br />
                發現都市自然之美!
              </h3>
              <h3 className="mb-4 text-lg  d-none d-lg-block">
                六大區城市步道，發現都市自然之美!
              </h3>
              <p>
                台北屬於盆地，因次都市周圍擁有許多丘陵環繞，北部則有大屯山群以及陽明山國家公園。步道主要分布於六大行政區，包含內湖、士林、北投、信義、南港、文山，難度由簡單到困難皆有選擇，相當適合與親朋好友一起體驗。點選右方您感興趣的分區，查看有哪些步道可以選擇。
              </p>
              <Link
                to="/mountingroute"
                className="btn btn-primary w-100 d-lg-none"
              >
                查看路線
              </Link>
              <Link
                to="/mountingroute"
                className="btn btn-primary w-25 d-none d-lg-block"
              >
                查看路線
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" d-flex justify-content-center
align-items-center "
      >
        <div className="row ">
          <div
            className="  col-sm-12 col-md-6  d-flex justify-content-center
align-items-center  "
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <div
              className=" home-shoesimg-container d-flex   
    justify-content-center
    align-items-center m-4"
            >
              <img
                className=" home-shoesimg rounded-5 m"
                src={homeimg8}
                alt="..."
              />
            </div>
          </div>
          <div className="  col-sm-12 col-md-6 mb-3 ">
            <div
              className="h-100  d-flex   
    justify-content-center
    flex-column mx-4 mx-lg-5 my-2 text-white"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <h3 className="mb-4 text-sm text-center mt-1 d-lg-none">
                在爬爬台北， <br />
                找到最適合你的登山裝備！
              </h3>
              <h3 className="mb-4 text-lg  d-none d-lg-block">
                在爬爬台北， 找到最適合你的登山裝備！
              </h3>
              <p>
                在這個快節奏的都市中，偶爾離開塵囂，到大自然中去感受山水的壯美，是一種心靈上的享受。為了讓你在山中感受到更多的美好，我們致力於提供最好的登山用品，包括帳篷、登山鞋、遮陽用品等等。
                我們的產品不僅價格實惠，而且質量優良，我們深信，這些用品會成為你在山中不可或缺的夥伴。讓我們一起走過每一段陡峭的山路，一起感受每一分汗水和勝利的喜悅。
              </p>
              <Link
                to="/productspage"
                className="btn btn-primary w-100 d-lg-none"
              >
                馬上選購
              </Link>
              <Link
                to="/productspage"
                className="btn btn-primary w-25 d-none d-lg-block"
              >
                馬上選購
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" pb-5 d-flex justify-content-center
align-items-center flex-column "
      >
        <h2
          className="text-warning my-3"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <WiStars />
          推薦步道
          <WiStars />
        </h2>
        <div
          className="row container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <HomeCard
            img={homeimg5}
            title="象山步道"
            p="位於台灣台北市信義區，全長約2.5公里，
            需攀爬約500多個階梯，全程耗時約1-2小時，
            步道頂端可欣賞到台北市區的美麗風景，包括著名的台北101大樓、摩天大樓和繁華的城市夜景，
            建議攜帶充足的水和小吃，注意腳步安全。"
          />
          <HomeCard
            img={homeimg6}
            title="大屯山"
            p="位於台灣新北市和台北市的交界處，全長約8公里，
            攀登全程約需4-5小時，難度屬於中等。
            步道沿途經過森林和草原，可以欣賞到不同季節的自然風光，
            步道頂端海拔高達1,120公尺，可以俯瞰整個台北盆地和附近的山脈。"
          />
          <HomeCard
            img={homeimg7}
            title="七星山"
            p="位於台灣台北市北投區，全長約3.5公里，
            攀登全程約需2-3小時，難度屬於中等偏難。
            步道沿途景觀優美，包括林蔭小徑、樹林和瀑布等，可以讓人盡情享受大自然的美景，
            步道頂端海拔高達1,120公尺，可以俯瞰台北市的美麗風景。"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
