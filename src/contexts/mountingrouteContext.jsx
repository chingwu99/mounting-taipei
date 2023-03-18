import axios from "axios";
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
  const [combinedArrayy, setCombinedArrayy] = useState([]);
  const UNSPLASH_API_URL = "https://api.unsplash.com";
  const UNSPLASH_CLIENT_ID = "9xhNRblwZmuOU8hspEhs38xpj-0CsCe7QEkhGU__W-s";

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const images = await fetchImages();
        const newArray = combineData(images);
        setCombinedArrayy(newArray);
        // console.log("images", images);
        // console.log("newArray", newArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

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
  //

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
