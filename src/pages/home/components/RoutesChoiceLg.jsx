import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";

const RoutesChoiceLg = () => {
  const { filterHandler } = useContext(MountingrouteContext);

  return (
    <div className="col-sm-12 col-md-6 mb-3 d-none d-xl-block ">
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
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "150px" }}>內湖Neihu</p>
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0 py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "150px" }}>士林Shilin</p>
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "150px" }}>北投Beitou</p>
            </div>
          </div>
          <div className="row row-cols-3  rounded-bottom-5 border border-warning m-3 mt-0">
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column py-5 px-5   fs-1 text-center "
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "150px" }}>信義Xinyi</p>
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center
align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-5 px-5   fs-1  text-center "
              onClick={filterHandler}
            >
              <p style={{ maxWidth: "180px" }}>南港Nangang</p>
            </div>
            <div
              className="col blockhover d-flex   
justify-content-center 
align-items-center flex-column  py-5 px-5   fs-1  text-center  "
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

export default RoutesChoiceLg;
