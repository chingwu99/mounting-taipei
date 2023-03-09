const PaymentListLg = ({ orderData }) => {
  return (
    <div className="container d-none d-md-block">
      <div>
        <div className="mb-3">
          <h2>待購清單</h2>
        </div>
        <div className=" border-bottom border-3 border-primary my-2">
          <div className="row row-cols-12 fs-5 mb-2">
            <div className="col-6 ">商品內容</div>
            <div className="col-2 text-center">單價</div>
            <div className="col-2 text-center">數量</div>
            <div className="col-2 text-center">金額</div>
          </div>
        </div>
        {Object.values(orderData?.products || {}).map((item) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center  border-bottom border-3 border-secondary-subtle"
              key={item.id}
            >
              <div className="row row-cols-12  w-100 my-1">
                <div className="col-6 d-flex align-items-center ">
                  <div className="cartpage-img-container">
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="cartpage-object-fit"
                    />
                  </div>

                  <p className=" fw-bold mx-4">{item.product.title}</p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <p>${item.product.price}</p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <p>{item.qty}</p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <p>NT${item.final_total}</p>
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

export default PaymentListLg;
