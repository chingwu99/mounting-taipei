import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mountingRoutesData from "../data/mountingRoutesData";

export const MountingrouteContext = createContext({
  mountingData: [],
  setMountingData: () => null,
  allData: [],
  setAllData: () => null,
  renderData: [],
  setRenderData: () => null,
  buttonfilterData: [],
  setButtonfilterData: () => null,
  loadMore: true,
  setLoadMore: () => null,
  filterHandler: () => null,
});

export const MountingrouteProvider = ({ children }) => {
  const [mountingData, setMountingData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [buttonfilterData, setButtonfilterData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setMountingData(mountingRoutesData.result.results);
    setAllData(mountingRoutesData.result.results.slice(0, 8));
  }, []);

  useEffect(() => {
    setRenderData(buttonfilterData);
    // console.log("lllll", buttonfilterData);
  }, [buttonfilterData]);

  useEffect(() => {
    setRenderData(allData);
  }, [allData]);

  useEffect(() => {
    setLoadMore(false);
  }, [buttonfilterData]);

  useEffect(() => {
    setLoadMore(true);
  }, [allData]);

  const filterHandler = (e) => {
    let buttonValue = e.target.innerText;
    // console.log(buttonValue);

    switch (buttonValue) {
      case "全步道All":
        setAllData(mountingData.slice(0, 8));
        break;
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
        // console.log("error");
        break;
    }
    navigate("/mountingroute");
  };

  const value = {
    mountingData,
    setMountingData,
    allData,
    setAllData,
    renderData,
    setRenderData,
    buttonfilterData,
    setButtonfilterData,
    loadMore,
    setLoadMore,
    filterHandler,
  };

  return (
    <MountingrouteContext.Provider value={value}>
      {children}
    </MountingrouteContext.Provider>
  );
};
