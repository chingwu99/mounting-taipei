import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Mountingroute from "./pages/mountingroute/Mountingroute";
import { useEffect } from "react";
import axios from "axios";
import Login from "./pages/login/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
import Layout from "./Layout";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="mountingroute" element={<Mountingroute />}></Route>
          <Route path="productspage" element={<ProductsPage />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="payment/:orderId" element={<Payment />}></Route>
          <Route path="admin" element={<Dashboard />}>
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="coupons" element={<AdminCoupons />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
