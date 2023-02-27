const filterButtonArray = [
  { buttonName: "所有步道" },
  { buttonName: "南港區" },
  { buttonName: "內湖區" },
  { buttonName: "士林區" },
  { buttonName: "文山區" },
  { buttonName: "信義區" },
  { buttonName: "中山區" },
  { buttonName: "北投區" },
];

const ButtonGroup = ({ filterHandler }) => {
  return (
    <div className="container my-3 d-flex justify-content-center align-items-center ">
      {filterButtonArray.map((i) => {
        return (
          <button
            className="btn btn-primary my-3 mx-3"
            key={i.buttonName}
            onClick={filterHandler}
            value={i.buttonName}
          >
            {i.buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
