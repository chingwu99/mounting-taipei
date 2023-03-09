const PaymentListMobile = ({ orderData }) => {
  return (
    <div className="container d-md-none">
      <div>
        <div className="mb-3">
          <h2>待購清單</h2>
        </div>
        <div className=" border-bottom border-3 border-dark my-2">
          <div className="row row-cols-12 fs-5 mb-2">
            <div className="col-6 ">商品內容</div>
          </div>
        </div>
        {Object.values(orderData?.products || {}).map((item) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center  border-bottom border-3 border-secondary-subtle"
              key={item.id}
            >
              <div className="row w-100 my-1 ">
                <div className="col-5   d-flex align-items-center ">
                  <div className="cartpage-img-container">
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="cartpage-object-fit"
                    />
                  </div>
                </div>
                <div className="col-7 d-flex justify-content-center flex-column ">
                  <p>{item.product.title}</p>
                  <p>${item.product.price}</p>
                  <p>數量：{item.qty}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="d-flex justify-content-end my-3">
          <div className=" fs-4">
            <p>總金額 ${orderData.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListMobile;
