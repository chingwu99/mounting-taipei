import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Mountingroute from "./pages/mountingroute/Mountingroute";
import { useEffect } from "react";
import axios from "axios";
import Login from "./pages/login/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";

function App() {
  useEffect(() => {
    console.log(
      process.env.REACT_APP_SHOPAPI_URL,
      process.env.REACT_APP_SHOPAPI_PATH
    );
    (async () => {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products/all`
      );
      console.log(res);
    })();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />}></Route>
          <Route path="mountingroute" element={<Mountingroute />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="admin" element={<Dashboard />}>
            <Route path="products" element={<AdminProducts />}></Route>
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="*" element={<Footer />}></Route>
      </Routes>
    </>
  );
}

export default App;
