import { useContext, useEffect } from "react";
import ListCard from "./components/ListCard";
import ButtonGroup from "./components/ButtonGroup";
import { MountingrouteContext } from "../../contexts/mountingrouteContext";

const Mountingroute = () => {
  const {
    mountingData,
    allData,
    setAllData,
    setRenderData,
    buttonfilterData,
    loadMore,
    setLoadMore,
  } = useContext(MountingrouteContext);

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

  useEffect(() => {
    setLoadMore(false);
  }, [buttonfilterData]);

  useEffect(() => {
    setLoadMore(true);
  }, [allData]);

  return (
    <div className="container">
      <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-warning my-5">所有步道</h2>

        <ButtonGroup />
        <ListCard />

        {loadMore === true && (
          <button onClick={handleLoadMore} className="btn btn-primary my-3 ">
            加載更多
          </button>
        )}
      </div>
    </div>
  );
};

export default Mountingroute;
