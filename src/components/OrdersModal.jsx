import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  MessageContext,
  handleSuccessMessage,
  handleErrorMessage,
} from "../contexts/messageContext";

const OrdersModal = ({ closeOrdersModal, getOrders, tempOrders }) => {
  const [tempData, setTempData] = useState({
    create_at: 0,
    is_paid: false,
    message: "",
    products: {},
    user: {
      address: "",
      email: "",
      name: "",
      tel: "",
    },
    num: 0,
  });

  const [, dispatch] = useContext(MessageContext);

  useEffect(() => {
    setTempData({
      create_at: tempOrders.create_at,
      is_paid: tempOrders.is_paid,
      message: "",
      products: tempOrders.products,
      user: tempOrders.user,
      num: tempOrders.num,
    });
  }, [tempOrders]);

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "is_paid") {
      setTempData({ ...tempData, [name]: e.target.checked });
    } else {
      setTempData({ ...tempData, user: { ...tempData.user, [name]: value } });
    }
  };

  const submit = async () => {
    try {
      switch (true) {
        case !tempData?.user?.name:
          Swal.fire({
            icon: "warning",
            title: "姓名不得為空",
          });
          return;

        case !tempData?.user?.address:
          Swal.fire({
            icon: "warning",
            title: "地址不得為空",
          });
          return;
        case !tempData?.user?.email:
          Swal.fire({
            icon: "warning",
            title: "email不得為空",
          });
          return;
        case !tempData?.user?.tel:
          Swal.fire({
            icon: "warning",
            title: "電話不得為空",
          });
          return;

        default:
          break;
      }

      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/order/${tempOrders.id}`,
        { data: tempData }
      );

      handleSuccessMessage(dispatch, res);
      closeOrdersModal();
      getOrders();
    } catch (error) {
      handleErrorMessage(dispatch, error);
    }
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="ordersModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              編輯訂單：{tempOrders.id}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeOrdersModal}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="name">
                      <small className="text-danger">*</small>訂購姓名
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="請輸入訂購人"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData?.user?.name}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="address">
                      <small className="text-danger">*</small>地址
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="請輸入地址"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData?.user?.address}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="email">
                      <small className="text-danger">*</small>email
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="請輸入email"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData?.user?.email}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="tel">
                      <small className="text-danger">*</small>電話
                      <input
                        type="text"
                        id="tel"
                        name="tel"
                        placeholder="請輸入電話"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData?.user?.tel}
                      />
                    </label>
                  </div>
                </div>
                <hr />
                <div className="form-group mb-2">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="col">商品名稱</th>
                        <th className="col">數量</th>
                        <th className="col">原價</th>
                        <th className="col">折後金額</th>
                        <th className="col">優惠</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(tempOrders?.products || {}).map(
                        (product) => {
                          return (
                            <tr key={product?.id}>
                              <td>{product?.product?.title}</td>
                              <td>{product?.qty}</td>
                              <td>{product?.total}</td>
                              <td>{product?.final_total}</td>
                              <td>{product?.coupon?.title}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                  <p>消費金額：{tempOrders.total}</p>
                  <p>
                    訂購日期：
                    {tempOrders.create_at &&
                    typeof tempOrders.create_at === "number"
                      ? new Date(tempOrders.create_at * 1000)
                          .toISOString()
                          .slice(0, 10)
                      : null}
                  </p>

                  <p>
                    付款日期：
                    {tempOrders.paid_date &&
                    typeof tempOrders.paid_date === "number"
                      ? new Date(tempOrders.paid_date * 1000)
                          .toISOString()
                          .slice(0, 10)
                      : null}
                  </p>
                </div>

                <div className="form-group mb-2">
                  <div className="form-check">
                    <label className="w-100 form-check-label" htmlFor="is_paid">
                      是否付款
                      <input
                        type="checkbox"
                        id="is_paid"
                        name="is_paid"
                        className="form-check-input"
                        onChange={handleChange}
                        checked={Boolean(tempData.is_paid)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeOrdersModal}
            >
              關閉
            </button>
            <button type="button" className="btn btn-primary" onClick={submit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersModal;
