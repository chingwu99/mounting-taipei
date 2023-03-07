import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MountingrouteProvider } from "./contexts/mountingrouteContext";
import { CartProvider } from "./contexts/cartContext";

axios.defaults.baseURL = process.env.REACT_APP_SHOPAPI_URL;

console.log("AAAAA", axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <MountingrouteProvider>
          <App />
        </MountingrouteProvider>
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
