import { useEffect, useState } from "react";
import axios from "axios";
import ListCard from "./components/ListCard";
import ButtonGroup from "./components/ButtonGroup";

const url = "http://localhost:3000/result";

async function fetchData(setMountingData, setAllData) {
  try {
    const response = await axios.get(`${url}`);
    console.log(response.data);
    setMountingData(response.data.results);
    setAllData(response.data.results.slice(0, 8));
  } catch (error) {
    console.error(error);
  }
}

const Mountingroute = () => {
  const [mountingData, setMountingData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [buttonfilterData, setButtonfilterData] = useState([]);

  useEffect(() => {
    fetchData(setMountingData, setAllData);
  }, []);

  useEffect(() => {
    setRenderData(buttonfilterData);
    console.log("lllll", buttonfilterData);
  }, [buttonfilterData]);

  useEffect(() => {
    setRenderData(allData);
  }, [allData]);

  const handleLoadMore = () => {
    const currentLength = allData.length;
    const nextData = mountingData.slice(currentLength, currentLength + 8);
    setAllData([...allData, ...nextData]);
  };

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
    <div className="container">
      <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-warning my-5">所有步道</h2>

        <ButtonGroup filterHandler={filterHandler} />
        <ListCard renderData={renderData} />

        <button onClick={handleLoadMore} className="btn btn-primary my-3 ">
          加載更多
        </button>
      </div>
    </div>
  );
};

export default Mountingroute;
