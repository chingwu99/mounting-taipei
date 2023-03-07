const CheckoutInfoContainer = ({ title, data }) => {
  return (
    <div className="row row-cols-2">
      <div className="col">{title}:</div>
      <div className="col">{data}</div>
    </div>
  );
};

export default CheckoutInfoContainer;
