import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiMountainRoad } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";

const Nav = () => {
  const { cartData } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 z-3 bg-warning shadow ">
      <div className="container-fluid row row-cols-3 mx-auto">
        <div className="row  ">
          <button
            className="navbar-toggler w-25"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active d-flex
    justify-content-center   align-items-center "
                  aria-current="page"
                >
                  <AiFillHome className="mx-1 fs-4" />
                  首頁
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mountingroute"
                  className="nav-link d-flex
    justify-content-center   align-items-center "
                >
                  <FaShoePrints className="mx-1 fs-4" />
                  查看路線
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/productspage"
                  className="nav-link d-flex
    justify-content-center   align-items-center "
                >
                  <GiConverseShoe className="mx-1 fs-4" />
                  產品列表
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="nav-link d-flex
    justify-content-center   align-items-center "
                >
                  <GiConverseShoe className="mx-1 fs-4" />
                  後台
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center">
          <NavLink
            to="/"
            className="navbar-brand  d-flex
    justify-content-center   align-items-center "
          >
            <GiMountainRoad className="mx-1 fs-4" />
            爬爬台北
          </NavLink>
        </div>

        <div className="row">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-end  flex-row">
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                <i className="bi bi-cart-fill fs-4"></i>
                <span className="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger">
                  {cartData?.carts?.length}
                </span>
              </NavLink>
            </li>

            <li className="nav-item  d-flex justify-content-center  align-items-center">
              <NavLink to="/login" className="nav-link ">
                管理者登入
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
