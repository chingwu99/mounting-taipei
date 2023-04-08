import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Mountingroute from "./pages/mountingroute/Mountingroute";
import { useEffect } from "react";
import axios from "axios";
import Login from "./pages/login/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
import AdminArticle from "./pages/admin/AdminArticle";
import Layout from "./Layout";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Article from "./pages/article/Article";
import ArticleDetail from "./pages/articledetail/ArticleDetail";
import AdminOrder from "./pages/admin/AdminOrder";
import Love from "./pages/love/Love";

function App() {
  useEffect(() => {
    (async () => {
      await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products/all`
      );
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
          <Route path="article" element={<Article />}></Route>
          <Route path="articledetail/:id" element={<ArticleDetail />}></Route>
          <Route path="love" element={<Love />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="payment/:orderId" element={<Payment />}></Route>
          <Route path="admin" element={<Dashboard />}>
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="coupons" element={<AdminCoupons />}></Route>
            <Route path="article" element={<AdminArticle />}></Route>
            <Route path="orders" element={<AdminOrder />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
