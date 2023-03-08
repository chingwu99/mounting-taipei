const Progressbar = ({
  progresslength,
  stationOne,
  stationTwo,
  stationThree,
}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center  py-5 ">
      <div className="position-relative mt-1 mb-3 w-25 bg-danger ">
        <div
          className="progress bg-warning "
          role="progressbar"
          aria-label="Progress"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: "3px" }}
        >
          <div
            className="progress-bar bg-primary"
            style={{ width: progresslength }}
          ></div>
        </div>
        <button
          type="button"
          className={`position-absolute top-0 start-0 translate-middle btn btn-sm  rounded-pill  ${stationOne}`}
          style={{ width: "2rem", height: "2rem" }}
        >
          1
        </button>
        <p
          className="position-absolute top-100 start-0 translate-middle mt-5"
          style={{
            transform: "translate(-50%, calc(100% + 10px))",
            whiteSpace: "nowrap",
          }}
        >
          待購清單
        </p>
        <button
          type="button"
          className={`position-absolute top-0 start-50 translate-middle btn btn-sm  rounded-pill  ${stationTwo}`}
          style={{ width: "2rem", height: "2rem" }}
        >
          2
        </button>
        <p
          className="position-absolute top-100 start-50 translate-middle mt-5"
          style={{
            transform: "translate(-50%, calc(100% + 10px))",
            whiteSpace: "nowrap",
          }}
        >
          確認訂單
        </p>
        <button
          type="button"
          className={`position-absolute top-0 start-100 translate-middle btn btn-sm  rounded-pill   ${stationThree}`}
          style={{ width: "2rem", height: "2rem" }}
        >
          3
        </button>
        <p
          className="position-absolute top-100 start-100 translate-middle mt-5"
          style={{
            transform: "translate(-50%, calc(100% + 10px))",
            whiteSpace: "nowrap",
          }}
        >
          完成訂單
        </p>
      </div>
    </div>
  );
};

export default Progressbar;
