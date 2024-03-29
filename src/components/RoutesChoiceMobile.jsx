import { useContext, useEffect } from "react";
import { MountingrouteContext } from "../contexts/mountingrouteContext";
import AOS from "aos";
import "aos/dist/aos.css";

const RoutesChoiceMobile = () => {
  const { filterHandler, buttonActive } = useContext(MountingrouteContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col-sm-12 col-md-6 mb-3  d-xl-none">
      <div
        className="h-100 d-flex   
justify-content-center
align-items-center"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="text-warning  ">
          <div className="row row-cols-3    rounded-top-5 border border-warning m-3 mb-0">
            <div
              className={`col  d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-5  text-center ${
                buttonActive.Neihu
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "80px" }}>內湖Neihu</p>
            </div>
            <div
              className={`col  d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0 py-5 px-5   fs-5  text-center ${
                buttonActive.Shilin
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "80px" }}>士林Shilin</p>
            </div>
            <div
              className={`col  d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-5  text-center ${
                buttonActive.Beitou
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "80px" }}>北投Beitou</p>
            </div>
          </div>
          <div className="row row-cols-3  rounded-bottom-5 border border-warning m-3 mt-0">
            <div
              className={`col  d-flex   
justify-content-center
align-items-center flex-column py-5 px-5   fs-5 text-center ${
                buttonActive.Xinyi
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "80px" }}>信義Xinyi</p>
            </div>
            <div
              className={`col  d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-5 px-5   fs-5  text-center ${
                buttonActive.Nangang
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "180px" }}>南港Nangang</p>
            </div>
            <div
              className={`col  d-flex   
justify-content-center 
align-items-center flex-column  py-5 px-5   fs-5  text-center  ${
                buttonActive.Wenshan
                  ? "mounting-button-active-mobile"
                  : "blockhover-mobile"
              }`}
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "180px" }}>文山Wenshan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesChoiceMobile;
