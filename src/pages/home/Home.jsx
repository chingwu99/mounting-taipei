import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./components/carousel/Carousel";
import homeimg4 from "../../image/homeimg/homeimg4.jpg";
import homeimg5 from "../../image/homeimg/homeimg5.jpg";
import homeimg6 from "../../image/homeimg/homeimg6.jpg";
import homeimg7 from "../../image/homeimg/homeimg7.jpg";
import homeimg8 from "../../image/homeimg/homeimg8.jpg";
import RoutesChoiceLg from "./components/RoutesChoiceLg";
import RoutesChoiceMobile from "../../components/RoutesChoiceMobile";
import HomeCard from "./components/HomeCard";

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
        data-aos-duration="3000"
      >
        <h2 className=" display-4 my-4 text-center">
          爬爬台北 <br />
          Mounting Taipei
        </h2>
        <p className=" ">空出一些空閒的時間 看見臺北不一樣的美</p>
      </div>

      <div className="container my-md-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3 ">
            <div
              className="d-flex justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img className="w-100 rounded-5" src={homeimg4} alt="..." />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 mb-3"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="text-white">
              <h3 className="mb-4 text-sm text-center mt-1 d-lg-none">
                你有多久，沒有踏出戶外了？
              </h3>
              <h3 className="mb-4  d-none d-lg-block">
                你有多久，沒有踏出戶外了？
              </h3>
              <p>
                台北，台灣最繁榮的城市。城市經濟發達，集結許多企業總部的重鎮，也擁有大量的居住人口，生活步調快速緊湊，休閒娛樂蓬勃發展。但你知道嗎？除了這些，台北還擁有許許多多的親山步道，是您在城市間接觸自然，陶冶身心的絕佳之地。爬爬台北提供您完備的台北親山資訊，等著你認識台北山林之美。
              </p>
              <Link
                to="/mountingroute"
                className="btn btn-primary w-100  mt-3 d-lg-none"
              >
                查看路線
              </Link>
              <Link
                to="/mountingroute"
                className="btn btn-primary w-25  mt-3 d-none d-lg-block"
              >
                查看路線
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container d-flex  justify-content-center
align-items-center my-5"
      >
        <div className="row d-flex flex-row-reverse ">
          {/* 行動版*/}
          <RoutesChoiceMobile />
          {/*  桌面版 */}
          <RoutesChoiceLg />
          <div
            className=" col-sm-12 col-md-6 mb-3"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div
              className="h-100  d-flex   
    justify-content-center
    flex-column text-white"
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
        className="container d-flex justify-content-center
align-items-center my-5"
      >
        <div className="row ">
          <div className="  col-sm-12 col-md-6 mb-3  h-100 ">
            <div
              className="h-100 w-100 d-flex   
    justify-content-center
    align-items-center"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img className=" w-100 rounded-5" src={homeimg8} alt="..." />
            </div>
          </div>
          <div
            className="  col-sm-12 col-md-6 mb-3"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div
              className="h-100 text-white d-flex   
    justify-content-center
    flex-column"
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
        className="container  mb-5 d-flex justify-content-center
align-items-center flex-column"
      >
        <h2 className="text-warning my-3">推薦步道</h2>
        <div className="row">
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
