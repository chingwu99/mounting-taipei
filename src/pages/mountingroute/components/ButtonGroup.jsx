import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";

const ButtonGroup = () => {
  const { filterHandler, buttonActive } = useContext(MountingrouteContext);

  return (
    <div className="container my-3 d-flex justify-content-center align-items-center d-none d-xl-block">
      <div
        className="h-100 d-flex   
    justify-content-center
    align-items-center"
      >
        <div className="text-warning  ">
          <div className="row row-cols-7  rounded-5 border border-warning px-3 py-1">
            <div
              className={`container col blockhover text-center  py-4 px-4 fs-4 text-center ${
                buttonActive.Neihu ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              內湖Neihu
            </div>
            <div
              className={`container col blockhover text-center border border-warning border-top-0 border-bottom-0 py-4 px-4 fs-4 ${
                buttonActive.Shilin ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              士林Shilin
            </div>
            <div
              className={`container col blockhover text-center  py-4 px-4 fs-4 ${
                buttonActive.Beitou ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              北投Beitou
            </div>
            <div
              className={`container col blockhover text-center border border-warning border-top-0 border-bottom-0  py-4 px-4 fs-4 ${
                buttonActive.All ? "mounting-button-active" : ""
              } `}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              全步道All
            </div>
            <div
              className={`container col blockhover text-center py-4 px-4 fs-4 ${
                buttonActive.Xinyi ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              信義Xinyi
            </div>
            <div
              className={`container col blockhover text-center border border-warning border-top-0 border-bottom-0  py-4 px-4 fs-4  ${
                buttonActive.Nangang ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "150px" }}
            >
              南港Nangang
            </div>
            <div
              className={`container col blockhover text-center  py-4 px-4 fs-4 ${
                buttonActive.Wenshan ? "mounting-button-active" : ""
              }`}
              onClick={filterHandler}
              style={{ width: "100px" }}
            >
              文山Wenshan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
