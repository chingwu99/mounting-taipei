import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import Message from "../../components/Message";
import {
  MessageContext,
  MessageReducer,
  initState,
} from "../../contexts/messageContext";
import { LoginContext } from "../../contexts/loginContext";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const reducer = useReducer(MessageReducer, initState);

  const { setLoginState } = useContext(LoginContext);

  const logout = () => {
    document.cookie = "mountingTaipeiToken=;";
    setLoginState(null);
    navigate("/");
  };

  //取出Token
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("mountingTaipeiToken="))
    ?.split("=")[1];

  axios.defaults.headers.common["Authorization"] = token;

  useEffect(() => {
    if (!token) {
      setLoginState(null);
      return navigate("/");
    }
    (async () => {
      try {
        await axios.post("/v2/api/user/check");
        setLoginState(token);
      } catch (error) {
        if (!error.response.data.success) {
          setLoginState(null);
          navigate("/");
        }
      }
    })();
  }, [navigate, token, setLoginState]);

  return (
    <MessageContext.Provider value={reducer}>
      <Message />
      <nav className="navbar navbar-expand-lg bg-primary py-3">
        <div className="container-fluid ">
          <p className="text-white mb-0">爬爬台北 後台管理系統</p>

          <div className=" justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn  btn-light"
                  onClick={logout}
                >
                  登出
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="bg-light" style={{ width: "200px" }}>
          <ul className="list-group list-group-flush">
            <Link
              className="list-group-item list-group-item-action py-3"
              to="/admin/products"
            >
              <i className="bi bi-cup-fill me-2" />
              產品列表
            </Link>
            <Link
              className="list-group-item list-group-item-action py-3"
              to="/admin/coupons"
            >
              <i className="bi bi-ticket-perforated-fill me-2" />
              優惠卷列表
            </Link>
            <Link
              className="list-group-item list-group-item-action py-3"
              to="/admin/article"
            >
              <i className="bi bi-ticket-perforated-fill me-2" />
              消息列表
            </Link>
            <Link
              className="list-group-item list-group-item-action py-3"
              to="/admin/orders"
            >
              <i className="bi bi-ticket-perforated-fill me-2" />
              訂單列表
            </Link>
          </ul>
        </div>
        <div className="w-100">
          {/* Products */}
          {token && <Outlet />}
          {/* Products end */}
        </div>
      </div>
    </MessageContext.Provider>
  );
};

export default Dashboard;
