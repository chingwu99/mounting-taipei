import { createContext, useState, useEffect } from "react";
import mountingRoutesData from "../data/mountingRoutesData.json";

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
});

export const MountingrouteProvider = ({ children }) => {
  const [mountingData, setMountingData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [buttonfilterData, setButtonfilterData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    setMountingData(mountingRoutesData.result.results);
    setAllData(mountingRoutesData.result.results.slice(0, 8));
  }, []);

  useEffect(() => {
    setRenderData(buttonfilterData);
    console.log("lllll", buttonfilterData);
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
  };

  return (
    <MountingrouteContext.Provider value={value}>
      {children}
    </MountingrouteContext.Provider>
  );
};
