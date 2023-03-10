import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";

const RoutesChoiceLg = () => {
  const { filterHandler } = useContext(MountingrouteContext);

  return (
    <div className="col-sm-12 col-md-6 mb-3 d-none d-lg-block">
      <div
        className="h-100 d-flex   
justify-content-center
align-items-center"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="text-warning  ">
          <div className="row row-cols-3    rounded-top-5 border border-warning">
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              內湖Neihu
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0 py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              士林Shilin
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              北投Beitou
            </div>
          </div>
          <div className="row row-cols-3  rounded-bottom-5 border border-warning">
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column py-5 px-5   fs-1 text-center "
              onClick={filterHandler}
            >
              信義Xinyi
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              南港Nangang
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center 
align-items-center flex-column  py-5 px-5   fs-1  text-center  "
              onClick={filterHandler}
            >
              文山Wenshan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesChoiceLg;
