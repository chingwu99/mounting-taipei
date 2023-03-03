import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";

const filterButtonArray = [
  { buttonName: "所有步道" },
  { buttonName: "南港區" },
  { buttonName: "內湖區" },
  { buttonName: "士林區" },
  { buttonName: "文山區" },
  { buttonName: "信義區" },
  { buttonName: "中山區" },
  { buttonName: "北投區" },
];

const ButtonGroup = () => {
  const { mountingData, setAllData, setButtonfilterData } =
    useContext(MountingrouteContext);

  const filterHandler = (e) => {
    let buttonValue = e.target.value;
    switch (buttonValue) {
      case "所有步道":
        setAllData(mountingData.slice(0, 8));
        break;
      case "北投區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "北投區"));
        break;
      case "南港區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "南港區"));
        break;
      case "內湖區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "內湖區"));
        break;
      case "士林區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "士林區"));
        break;
      case "文山區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "文山區"));
        break;
      case "信義區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "信義區"));
        break;
      case "中山區":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "中山區"));
        break;

      default:
        console.log("error");
        break;
    }
  };

  return (
    <div className="container my-3 d-flex justify-content-center align-items-center ">
      {filterButtonArray.map((i) => {
        return (
          <button
            className="btn btn-warning my-3 mx-3"
            key={i.buttonName}
            onClick={filterHandler}
            value={i.buttonName}
          >
            {i.buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
