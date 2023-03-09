import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
