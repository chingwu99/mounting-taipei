import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
const CartListLg = () => {
  const { cartData, loadingItems, removeCartItem, updateCartItem } =
    useContext(CartContext);

  return (
    <div className="container d-none d-md-block">
      <div>
        <div className="mb-3">
          <h2>待購清單</h2>
        </div>
        <div className=" border-bottom border-3 border-dark my-2">
          <div className="row row-cols-12 fs-5 mb-2">
            <div className="col-6 ">商品內容</div>
            <div className="col-2 text-center">單價</div>
            <div className="col-2 text-center">數量</div>
            <div className="col-2 text-center">金額</div>
          </div>
        </div>
        {cartData?.carts?.map((item) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center  border-bottom border-3 border-secondary-subtle"
              key={item.id}
            >
              <div className="row row-cols-12  w-100 my-1">
                <div className="col-6 d-flex align-items-center ">
                  <div className="cartpage-img-container">
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="cartpage-object-fit"
                    />
                  </div>

                  <p className=" fw-bold mx-4">{item.product.title}</p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <p>${item.product.price}</p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center flex-column">
                  <div className="input-group  align-items-center">
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
                  <button
                    type="button"
                    className="btn btn-primary w-100 "
                    onClick={() => removeCartItem(item.id)}
                  >
                    刪除
                  </button>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <p>NT${item.final_total}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="d-flex justify-content-between my-3">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="rounded-0 border-1 h-75 mx-1 border-primary"
              placeholder="請輸入優惠序號"
            />
            <button type="button" className="btn btn-primary h-75">
              使用優惠券
            </button>
          </div>
          <div className=" fs-4">
            <p>總金額 ${cartData.final_total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListLg;
