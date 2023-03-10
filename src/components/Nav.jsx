import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiMountainRoad } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { CartContext } from "../contexts/cartContext";
import { BsFillCartFill } from "react-icons/bs";
import { LoginContext } from "../contexts/loginContext";

const Nav = () => {
  const { cartData } = useContext(CartContext);

  const { LoginState } = useContext(LoginContext);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 z-3 bg-warning shadow ">
      <div className="container-fluid row row-cols-3 mx-auto">
        <div className="col  ">
          <button
            className="navbar-toggler w-50 border-primary"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link active d-flex
       align-items-center  "
                  aria-current="page"
                >
                  <AiFillHome className="mx-1 fs-4 " />
                  首頁
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mountingroute"
                  className="nav-link d-flex
       align-items-center "
                >
                  <FaShoePrints className="mx-1 fs-4" />
                  查看路線
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/productspage"
                  className="nav-link d-flex
       align-items-center "
                >
                  <GiConverseShoe className="mx-1 fs-4" />
                  產品列表
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col text-center">
          <NavLink
            to="/"
            className="navbar-brand  d-flex
    justify-content-center   align-items-center "
          >
            <GiMountainRoad className="mx-1 fs-4" />
            爬爬台北
          </NavLink>
        </div>

        <div className="col">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-end  align-items-center flex-row">
            {LoginState !== null ? (
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="nav-link d-flex
       align-items-center mx-md-3"
                >
                  後台管理
                </NavLink>
              </li>
            ) : null}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                <BsFillCartFill className="fs-4" />
                <span className="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger">
                  {cartData?.carts?.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
