const PaymentInfo = ({ title, data, classData }) => {
  return (
    <div className="row row-cols-12 my-3 ">
      <div className="col-4">{title}:</div>
      <div className={`col-8 ${classData}`}>{data}</div>
    </div>
  );
};

export default PaymentInfo;
