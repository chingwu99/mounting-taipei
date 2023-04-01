import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import axios from "axios";
import "./styles/index.css";
import { LoginProvider } from "./contexts/loginContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MountingrouteProvider } from "./contexts/mountingrouteContext";
import { CartProvider } from "./contexts/cartContext";
import { LoadingProvider } from "./contexts/loadingContext";
import { Provider } from "react-redux";
import { store } from "./store";

axios.defaults.baseURL = process.env.REACT_APP_SHOPAPI_URL;

// console.log("AAAAA", axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <LoadingProvider>
          <LoginProvider>
            <CartProvider>
              <MountingrouteProvider>
                <App />
              </MountingrouteProvider>
            </CartProvider>
          </LoginProvider>
        </LoadingProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
