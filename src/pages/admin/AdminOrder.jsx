import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";
import { LoadingContext } from "../../contexts/loadingContext";
import OrdersModal from "../../components/OrdersModal";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({});
  const [tempOrders, setTempOrders] = useState({});

  const ordersModal = useRef(null);
  const deleteModal = useRef(null);

  const { setLoadingState } = useContext(LoadingContext);

  const getOrders = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const ordersRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/orders?page=${page}`
      );

      setOrders(ordersRes.data.orders);
      setPagination(ordersRes.data.pagination);
      setLoadingState(false);
    },
    [setOrders, setPagination, setLoadingState]
  );

  useEffect(() => {
    ordersModal.current = new Modal("#ordersModal", {
      backdrop: "static",
    });

    deleteModal.current = new Modal("#deleteModal", {
      backdrop: "static",
    });

    getOrders();
  }, [getOrders]);

  const openOrdersModal = (tempOrders) => {
    setTempOrders(tempOrders);

    ordersModal.current.show();
  };

  const closeOrdersModal = () => {
    ordersModal.current.hide();
  };

  const openDeleteModal = (tempOrders) => {
    setTempOrders(tempOrders);
    deleteModal.current.show();
  };

  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  const deleteOrder = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/order/${id}`
      );

      if (res.data.success) {
        getOrders();
        deleteModal.current.hide();
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="p-3 bg-white">
        <OrdersModal
          closeOrdersModal={closeOrdersModal}
          getOrders={getOrders}
          tempOrders={tempOrders}
        />
        <DeleteModal
          close={closeDeleteModal}
          text={tempOrders.id}
          handleDelete={deleteOrder}
          id={tempOrders.id}
        />
        <h3>產品列表</h3>
        <hr />

        <table className="table ">
          <thead>
            <tr>
              <th scope="col">訂單編號</th>
              <th scope="col">訂購日期</th>
              <th scope="col">訂購人</th>
              <th scope="col">金額</th>
              <th scope="col">付款狀態</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.create_at && typeof order.create_at === "number"
                      ? new Date(order.create_at * 1000)
                          .toISOString()
                          .slice(0, 10)
                      : null}
                  </td>
                  <td>{order?.user?.name}</td>
                  <td>{order.total}</td>
                  <td>{order.is_paid ? "已付款" : "未付款"}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => openOrdersModal(order)}
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => openDeleteModal(order)}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination pagination={pagination} changePage={getOrders} />
      </div>
    </>
  );
};

export default AdminOrder;
