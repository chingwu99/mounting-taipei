import { useContext } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";
import Beitouimg from "../../../image/dataimage/Beitouimg.jpg";
import Nangangimg from "../../../image/dataimage/Nangangimg.jpg";
import Neihuimg from "../../../image/dataimage/Neihuimg.jpg";
import Shilinimg from "../../../image/dataimage/Shilinimg.jpg";
import Wenshanimg from "../../../image/dataimage/Wenshanimg.jpg";
import Xinyiimg from "../../../image/dataimage/Xinyiimg.jpg";
import Zhongshan from "../../../image/dataimage/Zhongshanimg.jpg";

const ListCard = () => {
  const { renderData } = useContext(MountingrouteContext);
  return (
    <div className="row row-cols-4">
      {renderData.map((i) => {
        return (
          <div className="col gy-4" key={i.登山步道路線}>
            <div className="card border-0 h-100">
              {i.行政區 === "北投區" && (
                <img src={Beitouimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "南港區" && (
                <img src={Nangangimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "內湖區" && (
                <img src={Neihuimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "士林區" && (
                <img src={Shilinimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "文山區" && (
                <img src={Wenshanimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "信義區" && (
                <img src={Xinyiimg} className="card-img-top" alt="..." />
              )}
              {i.行政區 === "中山區" && (
                <img src={Zhongshan} className="card-img-top" alt="..." />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{i.登山步道路線}</h5>
                <p>{i.行政區}</p>
                <p>{i.步道分級}</p>
                <p className="card-text flex-grow-1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;
