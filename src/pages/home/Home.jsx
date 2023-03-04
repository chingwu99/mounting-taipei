import { useContext } from "react";
import { MountingrouteContext } from "../../contexts/mountingrouteContext";
import Carousel from "./components/carousel/Carousel";
import homeimg4 from "../../image/homeimg/homeimg4.jpg";
import homeimg5 from "../../image/homeimg/homeimg5.jpg";
import homeimg6 from "../../image/homeimg/homeimg6.jpg";
import homeimg7 from "../../image/homeimg/homeimg7.jpg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { mountingData, setButtonfilterData } =
    useContext(MountingrouteContext);

  const navigate = useNavigate();

  const filterHandler = (e) => {
    let buttonValue = e.target.innerText;
    console.log(buttonValue);

    switch (buttonValue) {
      case "北投Beitou":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "北投區"));
        break;
      case "南港Nangang":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "南港區"));
        break;
      case "內湖Neihu":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "內湖區"));
        break;
      case "士林Shilin":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "士林區"));
        break;
      case "文山Wenshan":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "文山區"));
        break;
      case "信義Xinyi":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "信義區"));
        break;

      default:
        console.log("error");
        break;
    }

    navigate("/mountingroute");
  };

  return (
    <>
      <Carousel />
      <div
        className="container d-flex justify-content-center
align-items-center my-5"
      >
        <div className="row ">
          <div className="col   h-100">
            <div
              className="h-100 w-100 d-flex   
    justify-content-center
    align-items-center"
            >
              <img className=" w-100 rounded-5" src={homeimg4} />
            </div>
          </div>
          <div className="col ">
            <div
              className="h-100 text-white d-flex   
    justify-content-center
    flex-column"
            >
              <h3 className="mb-4">你有多久，沒有踏出戶外了？</h3>
              <p>
                台北，台灣最繁榮的城市。城市經濟發達，集結許多企業總部的重鎮，也擁有大量的居住人口，生活步調快速緊湊，休閒娛樂蓬勃發展。但你知道嗎？除了這些，台北還擁有許許多多的親山步道，是您在城市間接觸自然，陶冶身心的絕佳之地。爬爬台北提供您完備的台北親山資訊，等著你認識台北山林之美。
              </p>
              <Link to="/mountingroute" className="btn btn-primary w-25">
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
          <div className="col ">
            <div
              className="h-100  d-flex   
    justify-content-center
    flex-column text-white"
            >
              <h3 className="mb-4">六大行政區，發現都市自然之美!</h3>
              <p>
                台北屬於盆地，因次都市周圍擁有許多丘陵環繞，北部則有大屯山群以及陽明山國家公園。步道主要分布於六大行政區，包含內湖、士林、北投、信義、南港、文山，難度由簡單到困難皆有選擇，相當適合與親朋好友一起體驗。點選右方您感興趣的分區，查看有哪些步道可以選擇。
              </p>
              <Link to="/mountingroute" className="btn btn-primary w-25">
                查看路線
              </Link>
            </div>
          </div>

          <div className="col ">
            <div
              className="h-100 d-flex   
    justify-content-center
    align-items-center"
            >
              <div className="text-warning  ">
                <div className="row row-cols-3    rounded-top-5 border border-warning">
                  <div
                    className="col blockhover d-flex   
    justify-content-center
    align-items-center flex-column  py-5 px-5 fs-1  "
                    onClick={filterHandler}
                  >
                    內湖Neihu
                  </div>
                  <div
                    className="col blockhover d-flex   
    justify-content-center
    align-items-center flex-column border border-warning border-top-0 border-bottom-0 py-5 px-5 fs-1   "
                    onClick={filterHandler}
                  >
                    士林Shilin
                  </div>
                  <div
                    className="col blockhover d-flex   
    justify-content-center
    align-items-center flex-column  py-5 px-5 fs-1   "
                    onClick={filterHandler}
                  >
                    北投Beitou
                  </div>
                </div>
                <div className="row row-cols-3  rounded-bottom-5 border border-warning">
                  <div
                    className="col blockhover d-flex   
    justify-content-center
    align-items-center flex-column py-5 px-5 fs-1  "
                    onClick={filterHandler}
                  >
                    信義Xinyi
                  </div>
                  <div
                    className="col blockhover d-flex   
    justify-content-center
    align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-5 px-5 fs-1   "
                    onClick={filterHandler}
                  >
                    南港Nangang
                  </div>
                  <div
                    className="col blockhover d-flex   
    justify-content-center 
    align-items-center flex-column  py-5 px-5 fs-1   "
                    onClick={filterHandler}
                  >
                    文山Wenshan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container  mb-5 d-flex justify-content-center
align-items-center flex-column"
      >
        <h2 className="text-warning my-5">推薦步道</h2>
        <div className="row row-cols-3">
          <div className="col">
            <div className="card border-0">
              <img src={homeimg5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">象山</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src={homeimg6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">大屯山</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card border-0">
              <img src={homeimg7} className="card-img-top h-100 " alt="..." />
              <div className="card-body">
                <h5 className="card-title">七星山</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;