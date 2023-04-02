import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MessageToast from "./components/MessageToast";
import Loading from "./components/Loading";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Loading />
      <MessageToast />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
