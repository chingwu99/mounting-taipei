import { useContext } from "react";
import ListCard from "./components/ListCard";
import ButtonGroup from "./components/ButtonGroup";
import { MountingrouteContext } from "../../contexts/mountingrouteContext";
import RoutesChoiceMobile from "../../components/RoutesChoiceMobile";

const Mountingroute = () => {
  const { mountingData, allData, setAllData, loadMore } =
    useContext(MountingrouteContext);

  const handleLoadMore = () => {
    const currentLength = allData.length;
    const nextData = mountingData.slice(currentLength, currentLength + 8);
    setAllData([...allData, ...nextData]);
  };

  return (
    <div className="container">
      <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-warning mt-5">所有步道</h2>
        <p className=" subtitle-light-text subtitle-light">
          提供您台北最詳細的登山資訊
        </p>

        <ButtonGroup />
        <RoutesChoiceMobile />
        <ListCard />

        {loadMore === true && (
          <button
            onClick={handleLoadMore}
            className="container  blockhover text-center border border-warning border-top-0 border-bottom-0 py-4 px-4 fs-4 mounting-button-active mt-5"
            style={{ width: "150px" }}
          >
            更多步道
          </button>
        )}
      </div>
    </div>
  );
};

export default Mountingroute;
