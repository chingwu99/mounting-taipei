import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const Checkout = () => {
  const { cartData, submitData, setSubmitData } = useContext(CartContext);

  console.log("哈哈哈哈ㄏㄚ", submitData);

  const navigate = useNavigate();

  const onSubmit = async (submitData) => {
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order`,
      submitData
    );
    console.log("有成功購買嗎？", res);

    navigate(`/success/${res.data.orderId}`);

    setSubmitData({});
  };

  return (
    <div className="bg-light pt-5 pb-7 full-height">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          <div className="col-md-4">
            <div className="border p-4 mb-4">
              <h4 className="mb-4">您的清單</h4>
              {cartData?.carts?.map((item) => {
                return (
                  <div className="d-flex" key={item.id}>
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="me-2"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between fw-bold">
                        <p className="mb-0">{item.product.title}</p>
                        <p className="mb-0">x{item.qty}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          <small>NT$ {item.product.price}</small>
                        </p>
                        <p className="mb-0">NT$ {item.final_total}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">Total</p>
                <p className="mb-0 h4 fw-bold">NT$ {cartData.final_total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        type="button"
        className="btn btn-dark py-3 px-7 rounded-0"
        onClick={() => onSubmit(submitData)}
      >
        送出表單
      </div>
    </div>
  );
};

export default Checkout;
