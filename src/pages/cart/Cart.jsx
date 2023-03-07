import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Progressbar from "../../components/Progressbar";
import { CartContext } from "../../contexts/cartContext";

const Cart = () => {
  const { cartData, loadingItems, removeCartItem, updateCartItem } =
    useContext(CartContext);

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <Progressbar />

      <div className="container">
        <div className="row row-cols-12 w-100 bg-danger">
          <div className="col-8 bg-primary">
            <div className="container">
              <div>
                <div>
                  <h2>您的餐點</h2>
                </div>

                {cartData?.carts?.map((item) => {
                  return (
                    <div className="d-flex mt-4 bg-light" key={item.id}>
                      <img
                        src={item.product.imageUrl}
                        alt=""
                        style={{
                          width: "120px",
                        }}
                      />
                      <div className="w-100 p-3 position-relative">
                        <button
                          type="button"
                          className="position-absolute btn"
                          style={{ top: "16px", right: "16px" }}
                          onClick={() => removeCartItem(item.id)}
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                        <p className="mb-0 fw-bold">{item.product.title}</p>
                        <p
                          className="mb-1 text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          {item.product.content}
                        </p>
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <div className="input-group w-50 align-items-center">
                            <select
                              name=""
                              className="form-select"
                              id=""
                              value={item.qty}
                              disabled={loadingItems.includes(item.id)}
                              onChange={(e) => {
                                updateCartItem(item, e.target.value * 1);
                              }}
                            >
                              {[...new Array(20)].map((i, num) => {
                                return (
                                  <option value={num + 1} key={num}>
                                    {num + 1}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <p className="mb-0 ms-auto">NT${item.final_total}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex ">
                  <p>總金額 {cartData.final_total}</p>
                  <p>NT$</p>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-dark w-100 mt-4 rounded-0 py-3"
                >
                  確認餐點正確
                </Link>
              </div>
            </div>
          </div>

          <div className="col bg-success ">222</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
