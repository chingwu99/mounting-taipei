import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import CouponModal from "../../components/CouponModal";
import { Modal } from "bootstrap";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";
import { LoadingContext } from "../../contexts/loadingContext";

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});
  //type決定modal用途
  const [type, setType] = useState("create");
  const [tempCoupon, setTempCoupon] = useState({});

  const couponModal = useRef(null);
  const deleteModal = useRef(null);

  const { setLoadingState } = useContext(LoadingContext);

  const getCoupons = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/coupons?page=${page}`
      );

      setCoupons(res.data.coupons);
      setPagination(res.data.pagination);
      setLoadingState(false);
    },
    [setCoupons, setPagination, setLoadingState]
  );

  useEffect(() => {
    couponModal.current = new Modal("#productModal", {
      backdrop: "static",
    });

    deleteModal.current = new Modal("#deleteModal", {
      backdrop: "static",
    });

    getCoupons();
  }, [getCoupons]);

  const openCouponModal = (type, item) => {
    setType(type);
    setTempCoupon(item);

    couponModal.current.show();
  };

  const closeModal = () => {
    couponModal.current.hide();
  };

  const openDeleteModal = (tempProduct) => {
    setTempCoupon(tempProduct);
    deleteModal.current.show();
  };

  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  const deleteCoupon = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/coupon/${id}`
      );

      if (res.data.success) {
        getCoupons();
        deleteModal.current.hide();
      }
    } catch (error) {}
  };

  return (
    <div className="p-3 bg-white">
      <CouponModal
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      />
      <DeleteModal
        close={closeDeleteModal}
        text={tempCoupon.title}
        handleDelete={deleteCoupon}
        id={tempCoupon.id}
      />
      <h3>優惠券列表</h3>
      <hr />
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => openCouponModal("create", {})}
        >
          建立新優惠券
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">標題</th>
            <th scope="col">折扣</th>
            <th scope="col">到期日</th>
            <th scope="col">優惠碼</th>
            <th scope="col">啟用狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => {
            return (
              <tr key={coupon.id}>
                <td>{coupon.title}</td>
                <td>{coupon.percent}</td>
                <td>{new Date(coupon.due_date).toDateString()}</td>
                <td>{coupon.code}</td>
                <td>{coupon.is_enabled ? "啟用" : "未啟用"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openCouponModal("edit", coupon)}
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    onClick={() => openDeleteModal(coupon)}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination pagination={pagination} changePage={getCoupons} />
    </div>
  );
};

export default AdminCoupons;
