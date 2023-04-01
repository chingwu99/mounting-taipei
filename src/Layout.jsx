import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MessageToast from "./components/MessageToast";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <MessageToast />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
