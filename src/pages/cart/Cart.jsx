import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../components/Progressbar";
import { CartContext } from "../../contexts/cartContext";
import { useForm } from "react-hook-form";
import { Input } from "../../components/FormElement";
import axios from "axios";

const Cart = () => {
  const { cartData, loadingItems, removeCartItem, updateCartItem } =
    useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, tel, address } = data;
    const form = {
      data: {
        user: {
          name,
          email,
          tel,
          address,
        },
      },
    };

    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/order`,
      form
    );
    console.log(res);

    navigate(`/payment/${res.data.orderId}`);
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
                            <select
                              name=""
                              className="form-select"
                              id=""
                              value={item.qty}
                              disabled={loadingItems.includes(item.id)}
                              onChange={(e) => {
                                updateCartItem(item, e.target.value * 1);
                              }}
                            >
                              {[...new Array(20)].map((i, num) => {
                                return (
                                  <option value={num + 1} key={num}>
                                    {num + 1}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={() => removeCartItem(item.id)}
                          >
                            刪除
                          </button>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center ">
                          <p>NT${item.final_total}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="d-flex justify-content-between my-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      className="rounded-0 border-1"
                      placeholder="請輸入優惠序號"
                    />
                    <button type="button" className="btn btn-primary">
                      使用優惠券
                    </button>
                  </div>
                  <div className=" fs-4">
                    <p>總金額 ${cartData.final_total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col p-1">
            <div className="col form-color p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <h4 className="fw-bold">填寫收件人資料</h4>

                  <div className="mb-2">
                    <Input
                      id="name"
                      type="text"
                      errors={errors}
                      labelText="姓名"
                      register={register}
                      rules={{
                        required: "姓名為必填",
                        maxLength: {
                          value: 10,
                          message: "姓名長度不超過 10",
                        },
                      }}
                    ></Input>
                  </div>
                  <div className="mb-2">
                    <Input
                      id="tel"
                      labelText="電話"
                      type="tel"
                      errors={errors}
                      register={register}
                      rules={{
                        required: "電話為必填",
                        minLength: {
                          value: 6,
                          message: "電話不少於 6 碼",
                        },
                        maxLength: {
                          value: 12,
                          message: "電話不超過 12 碼",
                        },
                      }}
                    ></Input>
                  </div>
                  <div className="mb-2">
                    <Input
                      id="email"
                      labelText="Email"
                      type="email"
                      errors={errors}
                      register={register}
                      rules={{
                        required: "Email 為必填",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email 格式不正確",
                        },
                      }}
                    ></Input>
                  </div>
                  <div className="mb-2">
                    <Input
                      id="address"
                      labelText="收件地址"
                      type="address"
                      errors={errors}
                      register={register}
                      rules={{
                        required: "收件地址為必填",
                      }}
                    ></Input>
                  </div>
                </div>
                <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                  <button
                    type="submit"
                    className="btn cartpage-submit-button-color py-2 px-7 rounded-0 w-100"
                  >
                    確認訂單
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
