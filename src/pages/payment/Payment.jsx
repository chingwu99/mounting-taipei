import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PaymentInfo from "./components/PaymentInfo";
import Progressbar from "../../components/Progressbar";

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

  const getCart = async (orderId) => {
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
  };

  console.log("orderName", orderUser);

  useEffect(() => {
    getCart(orderId);
  }, [orderId]);

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <Progressbar />

      <div className="container mt-5 mb-3">
        <div className="row row-cols-12 w-100">
          <div className="col-8  ">
            <div className="container">
              <div>
                <div className="mb-3">
                  <h2>待購清單</h2>
                </div>
                <div className=" border-bottom border-3 border-dark my-2">
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
                <p className="fs-4 fw-bolder">請確認訂購人資訊</p>

                <div>
                  <PaymentInfo title="訂單編號" data={orderId} />
                  <PaymentInfo title="姓名" data={orderUser.name} />
                  <PaymentInfo title="Email" data={orderUser.email} />
                  <PaymentInfo title="電話" data={orderUser.tel} />
                  <PaymentInfo title="收件地址" data={orderUser.address} />
                  <PaymentInfo
                    title="付款狀態"
                    data={orderUser.is_paid ? "付款完成" : "未付款"}
                    classData="fs-4 text-success fw-bolder"
                  />
                </div>
                <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                  <button
                    type="submit"
                    className="btn cartpage-submit-button-color py-2 px-7 rounded-0 w-100"
                  >
                    確認付款
                  </button>
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
