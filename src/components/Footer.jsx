import { useContext } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GiMountainRoad } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../contexts/loginContext";

const Footer = () => {
  const { LoginState } = useContext(LoginContext);
  return (
    <div
      className=" bg-warning shadow  d-flex   
    justify-content-start
    flex-column"
    >
      <div className="container my-5 ">
        <div className="row  ">
          <div
            className="col-sm-12 col-md-4  d-flex   flex-column
    justify-content-center   align-items-center"
          >
            <div>
              <div>
                <p className="font-weight-bold">爬爬台北 Mounting Taipei</p>
              </div>
              <div>
                <ul class="list-unstyled my-2">
                  <NavLink to="/" className=" text-black text-decoration-none">
                    <li className="my-2">首頁</li>
                  </NavLink>
                  <NavLink
                    to="/mountingroute"
                    className=" text-black text-decoration-none"
                  >
                    <li className="my-2">查看路線</li>
                  </NavLink>
                  <NavLink
                    to="/productspage"
                    className=" text-black text-decoration-none"
                  >
                    <li className="my-2">產品列表</li>
                  </NavLink>

                  {LoginState !== null ? (
                    <NavLink
                      to="/admin"
                      className=" text-black text-decoration-none"
                    >
                      <li className="my-2">後台管理</li>
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/login"
                      className=" text-black text-decoration-none"
                    >
                      <li className="my-2"> 登入後台</li>
                    </NavLink>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4  d-flex   
    justify-content-center   align-items-center my-4"
          >
            <div className="d-lg-flex">
              <div>
                Copyright © 2023 <GiMountainRoad className="mx-1 fs-1" />
              </div>
              <div> 爬爬台北 Mounting Taipei</div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4  d-flex   
    justify-content-center   align-items-center "
          >
            <div className="fs-3">
              <BsInstagram className="mx-2 " />
              <BsFacebook className="mx-2 " />
              <GoMail className="mx-2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
