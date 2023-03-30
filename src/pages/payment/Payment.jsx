import { useContext, useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import PaymentInfo from "./components/PaymentInfo";
import Progressbar from "../../components/Progressbar";
import { CartContext } from "../../contexts/cartContext";
import PaymentListLg from "./components/PaymentListLg";
import PaymentListMobile from "./components/PaymentListMobile";
import { LoadingContext } from "../../contexts/loadingContext";
import Loading from "../../components/Loading";
import FrontMessage from "../../components/FrontMessage";
import {
  FrontMessageContext,
  handleSuccessMessage,
} from "../../contexts/frontMessageContext";

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
  const [, dispatch] = useContext(FrontMessageContext);

  const { fetchGetCart } = useContext(CartContext);
  const { setLoadingState } = useContext(LoadingContext);

  // const getPaymentCart = async (orderId) => {
  //   setLoadingState(true);
  //   const res = await axios.get(
  //     `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order/${orderId}`
  //   );
  //   // console.log("回來拉", res);
  //   setOrderData(res.data.order);
  //   setOrderUser({
  //     name: res.data.order.user.name,
  //     tel: res.data.order.user.tel,
  //     email: res.data.order.user.email,
  //     address: res.data.order.user.address,
  //     is_paid: res.data.order.is_paid,
  //   });

  //   fetchGetCart();
  //   setLoadingState(false);
  // };

  // // console.log("orderName", orderUser);

  // useEffect(() => {
  //   getPaymentCart(orderId);
  // }, [orderId]);

  const getPaymentCart = useCallback(
    async (orderId) => {
      setLoadingState(true);
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order/${orderId}`
      );
      // console.log("回來拉", res);
      setOrderData(res.data.order);
      setOrderUser({
        name: res.data.order.user.name,
        tel: res.data.order.user.tel,
        email: res.data.order.user.email,
        address: res.data.order.user.address,
        is_paid: res.data.order.is_paid,
      });

      fetchGetCart();
      setLoadingState(false);
    },
    [setLoadingState, setOrderData, setOrderUser, fetchGetCart]
  );

  useEffect(() => {
    getPaymentCart(orderId);
  }, [getPaymentCart, orderId]);

  const paySubmit = async () => {
    setLoadingState(true);
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/pay/${orderId} `
    );
    // console.log("付款完成了嗎", res);

    getPaymentCart(orderId);
    setLoadingState(false);
    handleSuccessMessage(dispatch, res);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <Loading />
      <FrontMessage />
      <Progressbar
        progresslength={orderUser.is_paid ? "100%" : "50%"}
        stationOne="btn-primary "
        stationTwo="btn-primary "
        stationThree={orderUser.is_paid ? "btn-primary " : "btn-warning"}
      />

      <div className="container mt-5 mb-3  d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-sm-12 col-lg-8 ">
            <PaymentListLg orderData={orderData} />
            <PaymentListMobile orderData={orderData} />
          </div>

          <div className="col-sm-12 col-lg-4 p-1">
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
