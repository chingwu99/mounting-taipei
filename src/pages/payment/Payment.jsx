import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PaymentInfo from "./components/PaymentInfo";
import Progressbar from "../../components/Progressbar";
import { CartContext } from "../../contexts/cartContext";

const Payment = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [orderUser, setOrderUser] = useState({
    name: "",
    tel: "",
    email: "",
    address: "",
    is_paid: "",
  });

  const { getCart } = useContext(CartContext);

  const getPaymentCart = async (orderId) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order/${orderId}`
    );
    console.log("回來拉", res);
    setOrderData(res.data.order);
    setOrderUser({
      name: res.data.order.user.name,
      tel: res.data.order.user.tel,
      email: res.data.order.user.email,
      address: res.data.order.user.address,
      is_paid: res.data.order.is_paid,
    });

    getCart();
  };

  console.log("orderName", orderUser);

  useEffect(() => {
    getPaymentCart(orderId);
  }, [orderId]);

  const paySubmit = async () => {
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/pay/${orderId} `
    );
    console.log("付款完成了嗎", res);

    getPaymentCart(orderId);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <Progressbar
        progresslength={orderUser.is_paid ? "100%" : "50%"}
        stationOne="btn-primary "
        stationTwo="btn-primary "
        stationThree={orderUser.is_paid ? "btn-primary " : "btn-warning"}
      />

      <div className="container mt-5 mb-3">
        <div className="row row-cols-12 w-100">
          <div className="col-8  ">
            <div className="container">
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
                        <div className="col-2 d-flex justify-content-center align-items-center flex-column">
                          <div className="input-group  align-items-center">
                            {item.qty}
                          </div>
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
          </div>

          <div className="col p-1">
            <div className="col form-color p-4">
              <div>
                <p className="fs-4 fw-bolder">訂單資訊</p>
                <div>
                  <PaymentInfo title="訂單編號" data={orderId} />
                  <PaymentInfo
                    title="付款狀態"
                    data={
                      orderUser.is_paid
                        ? `已完成付款${orderData.total}`
                        : `尚未付款${orderData.total}`
                    }
                    classData={
                      orderUser.is_paid
                        ? `fs-4 text-success fw-bolder`
                        : `fs-4 text-danger fw-bolder`
                    }
                  />
                </div>
                <p className="fs-4 fw-bolder">訂購人資訊</p>
                <div>
                  <PaymentInfo title="姓名" data={orderUser.name} />
                  <PaymentInfo title="電話" data={orderUser.tel} />
                  <PaymentInfo title="Email" data={orderUser.email} />
                  <PaymentInfo title="收件地址" data={orderUser.address} />
                </div>
                <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                  {orderUser.is_paid ? (
                    <div className="d-flex w-100">
                      <Link
                        to="/mountingroute"
                        type="button"
                        className="btn submit-button-color-reverse py-2 px-7 rounded-0 w-100  mx-1"
                      >
                        查看路線
                      </Link>
                      <Link
                        to="/productspage"
                        type="button"
                        className="btn btn-primary py-2 px-7 rounded-0 w-100 mx-1"
                      >
                        繼續選購
                      </Link>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary py-2 px-7 rounded-0 w-100"
                      onClick={() => paySubmit()}
                    >
                      確認付款
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
