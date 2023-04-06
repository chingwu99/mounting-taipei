import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import mountingRoutesData from "../data/mountingRoutesData";
import { LoadingContext } from "./loadingContext";

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
  buttonActive: {
    All: true,
    Beitou: false,
    Nangang: false,
    Neihu: false,
    Shilin: false,
    Wenshan: false,
    Xinyi: false,
  },
  setButtonActive: () => null,
});

export const MountingrouteProvider = ({ children }) => {
  const [mountingData, setMountingData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [buttonfilterData, setButtonfilterData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [combinedArrayy, setCombinedArrayy] = useState([]);
  const UNSPLASH_API_URL = "https://api.unsplash.com";
  const UNSPLASH_CLIENT_ID = "9xhNRblwZmuOU8hspEhs38xpj-0CsCe7QEkhGU__W-s";
  const { setLoadingState } = useContext(LoadingContext);
  const [buttonActive, setButtonActive] = useState({
    All: true,
    Beitou: false,
    Nangang: false,
    Neihu: false,
    Shilin: false,
    Wenshan: false,
    Xinyi: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setLoadingState(true);
    async function fetchData() {
      try {
        const images = await fetchImages();
        const newArray = combineData(images);
        setCombinedArrayy(newArray);

        setLoadingState(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoadingState(false);
      }
    }

    fetchData();
  }, [setLoadingState]);

  async function fetchImages() {
    let imgArr = [];

    for (let i = 1; i <= 6; i++) {
      const res = await axios.get(
        `${UNSPLASH_API_URL}/search/photos?client_id=${UNSPLASH_CLIENT_ID}&per_page=30&page=${i}&query=mountains`
      );

      imgArr.push(...res.data.results);
    }

    return imgArr;
  }

  function combineData(images) {
    return mountingRoutesData.result.results.map((item, index) => {
      return {
        ...item,
        img: images[index],
      };
    });
  }

  useEffect(() => {
    setMountingData(combinedArrayy);
    setAllData(combinedArrayy.slice(0, 8));
  }, [combinedArrayy]);

  useEffect(() => {
    setRenderData(buttonfilterData);
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

    switch (buttonValue) {
      case "全步道All":
        setAllData(mountingData.slice(0, 8));
        setButtonActive({
          All: true,
          Beitou: false,
          Nangang: false,
          Neihu: false,
          Shilin: false,
          Wenshan: false,
          Xinyi: false,
        });
        break;
      case "北投Beitou":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "北投區"));
        setButtonActive({
          All: false,
          Beitou: true,
          Nangang: false,
          Neihu: false,
          Shilin: false,
          Wenshan: false,
          Xinyi: false,
        });
        break;
      case "南港Nangang":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "南港區"));
        setButtonActive({
          All: false,
          Beitou: false,
          Nangang: true,
          Neihu: false,
          Shilin: false,
          Wenshan: false,
          Xinyi: false,
        });
        break;
      case "內湖Neihu":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "內湖區"));
        setButtonActive({
          All: false,
          Beitou: false,
          Nangang: false,
          Neihu: true,
          Shilin: false,
          Wenshan: false,
          Xinyi: false,
        });
        break;
      case "士林Shilin":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "士林區"));
        setButtonActive({
          All: false,
          Beitou: false,
          Nangang: false,
          Neihu: false,
          Shilin: true,
          Wenshan: false,
          Xinyi: false,
        });
        break;
      case "文山Wenshan":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "文山區"));
        setButtonActive({
          All: false,
          Beitou: false,
          Nangang: false,
          Neihu: false,
          Shilin: false,
          Wenshan: true,
          Xinyi: false,
        });
        break;
      case "信義Xinyi":
        setButtonfilterData(mountingData.filter((i) => i.行政區 === "信義區"));
        setButtonActive({
          All: false,
          Beitou: false,
          Nangang: false,
          Neihu: false,
          Shilin: false,
          Wenshan: false,
          Xinyi: true,
        });
        break;

      default:
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
    buttonActive,
    setButtonActive,
  };

  return (
    <MountingrouteContext.Provider value={value}>
      {children}
    </MountingrouteContext.Provider>
  );
};
