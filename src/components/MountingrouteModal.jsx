const MountingrouteModal = ({ closeMountingrouteModal, routeInfo }) => {
  console.log("routeInfo", routeInfo);

  return (
    <div
      className="modal fade "
      id="mountingrouteModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {routeInfo.登山步道路線}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => closeMountingrouteModal()}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row row-cols-2">
              <div className="col">
                <ul>
                  <li className="routes-li-height">單程步行時間min</li>
                  <li className="routes-li-height">是否有流動廁所</li>
                  <li className="routes-li-height">是否為無障礙廁所</li>
                  <li className="routes-li-height">是否適合輪椅通行</li>
                  <li className="routes-li-height">步道分級</li>
                  <li className="routes-li-height">流動廁所位置</li>
                  <li className="routes-li-height">總長m</li>
                  <li className="routes-li-height">行動電話通訊情形</li>
                  <li className="routes-li-height">行政區</li>
                  <li className="routes-li-height">起點</li>
                  <li className="routes-li-height">起點是否為階梯</li>
                  <li className="routes-li-height">起點經度座標</li>
                  <li className="routes-li-height">起點緯度座標</li>
                  <li className="routes-li-height">輪椅可通行段平均坡度</li>
                  <li className="routes-li-height">輪椅可通行段長度m</li>
                  <li className="routes-li-height">迄點</li>
                  <li className="routes-li-height">迄點是否為階梯</li>
                  <li className="routes-li-height">迄點經度座標</li>
                  <li className="routes-li-height">迄點緯度座標</li>
                </ul>
              </div>
              <div className="col">
                <ul class="list-unstyled ">
                  <li className="routes-li-height">
                    {routeInfo.單程步行時間min}
                  </li>
                  <li className="routes-li-height">
                    {routeInfo.是否有流動廁所}
                  </li>
                  <li className="routes-li-height">
                    {routeInfo.是否為無障礙廁所}
                  </li>
                  <li className="routes-li-height">
                    {routeInfo.是否適合輪椅通行}
                  </li>
                  <li className="routes-li-height">{routeInfo.步道分級}</li>
                  <li className="routes-li-height">{routeInfo.流動廁所位置}</li>
                  <li className="routes-li-height">{routeInfo.總長m}</li>
                  <li className="routes-li-height">
                    {routeInfo.行動電話通訊情形}
                  </li>
                  <li className="routes-li-height">{routeInfo.行政區}</li>
                  <li className="routes-li-height">{routeInfo.起點}</li>
                  <li className="routes-li-height">
                    {routeInfo.起點是否為階梯}
                  </li>
                  <li className="routes-li-height">{routeInfo.起點經度座標}</li>
                  <li className="routes-li-height">{routeInfo.起點緯度座標}</li>
                  <li className="routes-li-height">
                    {routeInfo.輪椅可通行段平均坡度}
                  </li>
                  <li className="routes-li-height">
                    {routeInfo.輪椅可通行段長度m}
                  </li>
                  <li className="routes-li-height">{routeInfo.迄點}</li>
                  <li className="routes-li-height">
                    {routeInfo.迄點是否為階梯}
                  </li>
                  <li className="routes-li-height">{routeInfo.迄點經度座標}</li>
                  <li className="routes-li-height">{routeInfo.迄點緯度座標}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => closeMountingrouteModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountingrouteModal;
