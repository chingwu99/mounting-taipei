import { useNavigate } from "react-router-dom";
import Progressbar from "../../components/Progressbar";
import { useForm } from "react-hook-form";
import { Input } from "../../components/FormElement";
import axios from "axios";
import CartListLg from "./components/CartListLg";
import CartListMobile from "./components/CartListMobile";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../contexts/loadingContext";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setLoadingState } = useContext(LoadingContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoadingState(true);
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

    navigate(`/payment/${res.data.orderId}`);
    setLoadingState(false);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <Progressbar
        progresslength="0%"
        stationOne="btn-primary "
        stationTwo="btn-warning"
        stationThree="btn-warning"
      />

      <div className="container mt-5 mb-3  d-flex justify-content-center align-items-center ">
        <div className="row  w-100 ">
          <div className=" col-sm-12 col-lg-8 ">
            <CartListLg />
            <CartListMobile />
          </div>

          <div className=" col-sm-12 col-lg-4 p-1 ">
            <div className="col form-color p-4 ">
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
                    className="btn btn-primary py-2 px-7 rounded-0 w-100"
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
