import { useContext, useRef, useEffect, useState } from "react";
import { MountingrouteContext } from "../../../contexts/mountingrouteContext";
import { Modal } from "bootstrap";

import MountingrouteModal from "../../../components/MountingrouteModal";

const ListCard = () => {
  const { renderData } = useContext(MountingrouteContext);
  const [routeInfo, setRouteInfo] = useState({});

  const mountingrouteModal = useRef(null);

  useEffect(() => {
    mountingrouteModal.current = new Modal("#mountingrouteModal", {
      backdrop: "static",
    });
  }, []);

  const openMountingrouteModal = (i) => {
    mountingrouteModal.current.show();
    setRouteInfo(i);
  };

  const closeMountingrouteModal = () => {
    mountingrouteModal.current.hide();
  };

  return (
    <div className="row container ">
      <MountingrouteModal
        closeMountingrouteModal={closeMountingrouteModal}
        routeInfo={routeInfo}
      />

      {renderData.map((i) => {
        return (
          <div
            className=" col-sm-12 col-md-6 col-lg-3  gy-4"
            key={i.登山步道路線}
          >
            <div className="card border-0 h-100">
              <div className="productpage-img-container">
                <img
                  src={i.img?.urls?.regular}
                  className="card-img-top productpage-object-fit"
                  alt="..."
                />
              </div>

              <div className="card-body d-flex flex-column">
                <div className="h-100">
                  <div
                    className="  d-flex flex-column

  align-items-center w-100 "
                    style={{ height: "50px" }}
                  >
                    <h5 className="card-title text-primary">
                      {i.登山步道路線}
                    </h5>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between w-100 my-1">
                      <p>{i.行政區}</p>
                      <p
                        className={
                          i.步道分級 === "親子級"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {i.步道分級}
                      </p>
                    </div>
                    <ul>
                      <li>
                        單程步行時間:
                        <br />
                        {i.單程步行時間min}分鐘
                      </li>
                      <li>
                        總長:
                        <br />
                        {i.總長m}公尺
                      </li>
                      <li>
                        起點:
                        <br />
                        {i.起點}
                      </li>
                      <li>
                        迄點:
                        <br />
                        {i.迄點}
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-auto"
                  onClick={() => openMountingrouteModal(i)}
                >
                  更多資訊
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;
