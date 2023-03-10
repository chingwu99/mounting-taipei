import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LoadingContext } from "../../contexts/loadingContext";
import Loading from "../../components/Loading";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({});
  const { setLoadingState } = useContext(LoadingContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    setLoadingState(true);
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
      setLoadingState(false);
    } catch (error) {
      console.log(error);
      setLoginState(error.response.data);
      setLoadingState(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className=" py-5 d-flex justify-content-center align-items-center  mx-auto my-auto vh-100 ">
      <Loading />
      <div
        className="login-form-background "
        data-aos="fade-down"
        data-aos-duration="3000"
      >
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
              帳號密碼錯誤
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

            <div className="container d-flex w-100 justify-content-between">
              <button
                type="button"
                className="btn submit-button-color-reverse py-2 px-7 rounded-0 w-100  mx-1"
                onClick={handleBackToHome}
              >
                回到首頁
              </button>
              <button
                type="button"
                className="btn btn-primary py-2 px-7 rounded-0 w-100 mx-1"
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
