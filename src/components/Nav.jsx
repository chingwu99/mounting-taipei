import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiMountainRoad } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { CartContext } from "../contexts/cartContext";
import { BsFillCartFill, BsNewspaper } from "react-icons/bs";
import { LoginContext } from "../contexts/loginContext";
import { AiOutlineHeart } from "react-icons/ai";
import { LoveContext } from "../contexts/loveContext";

const Nav = () => {
  const { cartData } = useContext(CartContext);

  const { LoginState } = useContext(LoginContext);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const [state] = useContext(LoveContext);

  const [loveList, setLoveList] = useState([]);

  useEffect(() => {
    setLoveList(state?.loveList);
  }, [state]);

  return (
    <nav className="navbar navbar-expand-xl position-fixed top-0 z-3 bg-warning shadow w-100">
      <div className="d-flex w-100 mx-3">
        <div className="col">
          <button
            className="navbar-toggler w-50 border-primary p-1"
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
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link  d-flex
       align-items-center text-nowrap "
                  aria-current="page"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  <AiFillHome className="me-1 fs-3 " />
                  首頁
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mountingroute"
                  className="nav-link d-flex
       align-items-center text-nowrap"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  <FaShoePrints className="me-1 fs-3" />
                  查看路線
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/productspage"
                  className="nav-link d-flex
       align-items-center text-nowrap"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  <GiConverseShoe className="me-1 fs-3 " />
                  產品列表
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/article"
                  className="nav-link d-flex
       align-items-center text-nowrap "
                  onClick={() => setIsNavCollapsed(true)}
                >
                  <BsNewspaper className="me-1 fs-3 " />
                  最新消息
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
            onClick={() => setIsNavCollapsed(true)}
          >
            <GiMountainRoad className="mx-1 fs-4" />
            爬爬台北
          </NavLink>
        </div>

        <div className="col">
          <ul className="navbar-nav me-auto d-flex justify-content-end  align-items-center flex-row">
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
            <li className="nav-item me-3">
              <NavLink
                to="/love"
                className="nav-link position-relative"
                onClick={() => setIsNavCollapsed(true)}
              >
                <AiOutlineHeart className="fs-4" />
                <span className="position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger">
                  {loveList?.length}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className="nav-link position-relative"
                onClick={() => setIsNavCollapsed(true)}
              >
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
