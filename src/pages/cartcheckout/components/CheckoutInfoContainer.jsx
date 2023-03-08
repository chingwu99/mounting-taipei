const CheckoutInfoContainer = ({ title, data, classData }) => {
  return (
    <div className="row row-cols-2 my-3 ">
      <div className="col">{title}:</div>
      <div className={`col ${classData}`}>{data}</div>
    </div>
  );
};

export default CheckoutInfoContainer;
