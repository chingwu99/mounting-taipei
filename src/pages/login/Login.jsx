import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    try {
      const res = await axios.post(`/v2/admin/signin`, data);
      console.log(res);
      const { token, expired } = res.data;

      document.cookie = `mountingTaipeiToken=${token}; expires=${new Date(
        expired
      )}`;
      //儲存Token
      if (res.data.success) {
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
      setLoginState(error.response.data);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className=" py-5 d-flex justify-content-center align-items-center  vh-100">
      <div className="login-form-background ">
        <div className="login-form d-flex  align-items-center ">
          <div className="col-md-6 w-100">
            <h2 className="text-center "> 爬爬台北</h2>
            <h6 className="text-center "> 管理者登入</h6>

            <div
              className={`alert alert-danger ${
                loginState.message ? `d-block` : `d-none`
              }`}
              role="alert"
            >
              錯誤訊息
            </div>
            <div className=" login-input-container ">
              <label htmlFor="email" className="form-label ">
                Email
                <input
                  id="email"
                  className="form-control  rounded-0"
                  name="username"
                  type="email"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className=" login-input-container">
              <label htmlFor="password" className="form-label ">
                密碼
                <input
                  type="password"
                  className="form-control  rounded-0"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="container w-100  d-flex   justify-content-between">
              <button
                type="button"
                className="w-50 py-1 back-button"
                onClick={handleBackToHome}
              >
                回到首頁
              </button>
              <button
                type="button"
                className="w-50 py-1 login-button "
                onClick={submit}
              >
                登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
