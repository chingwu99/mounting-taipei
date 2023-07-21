import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MessageToast from "./components/MessageToast";
import Loading from "./components/Loading";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="layout pt-5 mt-2">
      <Nav />
      <Loading />
      <MessageToast />
      <Outlet />
      <Footer />

      <BsFillArrowUpCircleFill
        className="navigate-to-top-button"
        style={{ display: showButton ? "block" : "none" }}
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default Layout;
