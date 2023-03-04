import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";

const ButtonGroup = () => {
  const { mountingData, setAllData, setButtonfilterData } =
    useContext(MountingrouteContext);

  const filterHandler = (e) => {
    let buttonValue = e.target.innerText;

    console.log(buttonValue);
    switch (buttonValue) {
      case "所有步道":
        setAllData(mountingData.slice(0, 8));
        break;
      case "北投":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "北投區"));
        break;
      case "南港":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "南港區"));
        break;
      case "內湖":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "內湖區"));
        break;
      case "士林":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "士林區"));
        break;
      case "文山":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "文山區"));
        break;
      case "信義":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "信義區"));
        break;
      case "中山":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "中山區"));
        break;

      default:
        console.log("error");
        break;
    }
  };

  return (
    <div className="container my-3 d-flex justify-content-center align-items-center ">
      <div
        className="h-100 d-flex   
    justify-content-center
    align-items-center"
      >
        <div className="text-warning  ">
          <div className="row row-cols-7    rounded-5 border border-warning">
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column  py-4 px-4 fs-4 "
              onClick={filterHandler}
            >
              內湖
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column border border-warning border-top-0 border-bottom-0 py-4 px-4 fs-4  "
              onClick={filterHandler}
            >
              士林
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column  py-4 px-4 fs-4  "
              onClick={filterHandler}
            >
              北投
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-4 px-4 fs-4  "
              onClick={filterHandler}
            >
              所有步道
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column py-4 px-4 fs-4 "
              onClick={filterHandler}
            >
              信義
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column border border-warning border-top-0 border-bottom-0  py-4 px-4 fs-4  "
              onClick={filterHandler}
            >
              南港
            </div>
            <div
              className="container col blockhover d-flex   
    justify-content-center
    align-items-center flex-column  py-4 px-4 fs-4  "
              onClick={filterHandler}
            >
              文山
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
