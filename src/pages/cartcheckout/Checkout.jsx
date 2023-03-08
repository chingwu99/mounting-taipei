import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Progressbar from "../../components/Progressbar";
import CheckoutInfoContainer from "./components/CheckoutInfoContainer";

const Checkout = () => {
  const { cartData } = useContext(CartContext);

  console.log("車車", cartData);

  const localStorageBackdata = JSON.parse(
    localStorage.getItem("formData") || "{}"
  );

  const { address, tel, email, name } = localStorageBackdata.data.user;

  const navigate = useNavigate();

  const onSubmit = async (localStorageBackdata) => {
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order`,
      localStorageBackdata
    );
    console.log("有成功購買嗎？", res);

    navigate(`/success/${res.data.orderId}`);

    localStorage.setItem("formData", JSON.stringify({}));
  };

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
                {cartData?.carts?.map((item) => {
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
                    <p>總金額 ${cartData.final_total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col p-1">
            <div className="col form-color p-4">
              <div>
                <p className="fs-4 fw-bolder">請確認訂購人資訊</p>
                {/* <div>
                  <CheckoutInfoContainer title="訂購時間" data="訂購時間" />
                  <CheckoutInfoContainer
                    title="付款金額"
                    data={cartData.final_total}
                  />
                </div> */}
                <div>
                  <CheckoutInfoContainer title="姓名" data={name} />
                  <CheckoutInfoContainer title="Email" data={email} />
                  <CheckoutInfoContainer title="電話" data={tel} />
                  <CheckoutInfoContainer title="收件地址" data={address} />
                  <CheckoutInfoContainer
                    title="付款狀態"
                    data={`尚需付款$${cartData.final_total}`}
                    classData="fs-4 text-danger fw-bolder"
                  />
                </div>
                <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                  <button
                    type="submit"
                    className="btn cartpage-submit-button-color py-2 px-7 rounded-0 w-100"
                    onClick={() => onSubmit(localStorageBackdata)}
                  >
                    送出訂單
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

export default Checkout;
