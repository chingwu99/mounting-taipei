import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import Loading from "../../../components/Loading";
const CartListMobile = () => {
  const { cartData, loadingItems, removeCartItem, updateCartItem } =
    useContext(CartContext);

  return (
    <div className="container  d-md-none">
      <Loading />
      <div>
        <div className="mb-3">
          <h2>待購清單</h2>
        </div>
        <div className=" border-bottom border-3 border-dark my-2">
          <div className="row row-cols-12 fs-5 mb-2">
            <div className="col-6 ">商品內容</div>
          </div>
        </div>
        {cartData?.carts?.map((item) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center  border-bottom border-3 border-secondary-subtle"
              key={item.id}
            >
              <div className="row w-100 my-1 ">
                <div className="col-5   d-flex align-items-center ">
                  <div className="cartpage-img-container">
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="cartpage-object-fit"
                    />
                  </div>
                </div>
                <div className="col-7 d-flex justify-content-center flex-column ">
                  <p>{item.product.title}</p>
                  <p>${item.product.price}</p>
                  <div className="input-group  align-items-center">
                    數量：
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
                    className="btn btn-primary w-100  my-1"
                    onClick={() => removeCartItem(item.id)}
                  >
                    刪除
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="fs-4  ">
          <p className="text-end">總金額 ${cartData.final_total}</p>
        </div>

        <div className="my-3 d-flex justify-content-center align-items-center">
          <div className="row   d-flex justify-content-center ">
            <div className="col-7 ">
              <input
                type="text"
                className="rounded-0 border-1 border-primary h-100 "
                placeholder="請輸入優惠序號"
              />
            </div>
            <div className="col-5 ">
              <button type="button" className="btn btn-primary ">
                使用優惠券
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListMobile;
