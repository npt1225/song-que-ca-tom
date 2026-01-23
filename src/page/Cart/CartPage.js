import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Swal from "sweetalert2";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../../redux/actions/cartAction";

export default function CartPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.CartReducer.cartItems
  );

  // "580K / KG" → 580000
  const parsePrice = (price = "") => {
    if (price.includes("K")) return parseInt(price) * 1000;
    return parseInt(price.replace(/\D/g, "")) || 0;
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + parsePrice(item.price) * item.quantity,
    0
  );

  // 🔥 Confirm xóa
  const confirmRemove = (slug) => {
    Swal.fire({
      title: "Xóa sản phẩm?",
      text: "Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(slug));
        Swal.fire("Đã xóa!", "Sản phẩm đã được xóa.", "success");
      }
    });
  };

  return (
    <>
      <Loader />
      <Navbar />
      <Search />

      {/* Header */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          Giỏ hàng
        </h1>
      </div>

      {/* Cart */}
      <div className="container-fluid py-5">
        <div className="container py-5">

          {/* Empty */}
          {cartItems.length === 0 && (
            <div className="text-center py-5">
              <h4>🛒 Giỏ hàng đang trống</h4>
            </div>
          )}

          {/* Table */}
          {cartItems.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th className="text-center">Số lượng</th>
                      <th>Tạm tính</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.slug}>
                        <td>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="rounded-circle"
                            style={{ width: 80, height: 80 }}
                          />
                        </td>

                        <td>
                          <strong>{item.name}</strong>
                          <div className="text-muted small">
                            {item.note}
                          </div>
                        </td>

                        <td>{item.price}</td>

                        {/* Quantity */}
                        <td className="text-center">
                          <div
                            className="d-flex align-items-center justify-content-center border rounded-pill px-2"
                            style={{ width: 120, height: 38 }}
                          >
                            <button
                              className="btn btn-sm px-2"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.slug))
                              }
                            >
                              –
                            </button>

                            <span className="mx-2 fw-bold">
                              {item.quantity}
                            </span>

                            <button
                              className="btn btn-sm px-2"
                              onClick={() =>
                                dispatch(increaseQuantity(item.slug))
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Total */}
                        <td className="fw-bold">
                          {(parsePrice(item.price) * item.quantity)
                            .toLocaleString()}đ
                        </td>

                        {/* Remove */}
                        <td>
                          <button
                            className="btn btn-sm btn-light border rounded-circle"
                            onClick={() =>
                              confirmRemove(item.slug)
                            }
                          >
                            <i className="fa fa-times text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="row justify-content-end mt-4">
                <div className="col-lg-4">
                  <div className="bg-light rounded p-4">
                    <h4 className="mb-3">Tổng tiền</h4>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Tạm tính</span>
                      <strong>
                        {cartTotal.toLocaleString()}đ
                      </strong>
                    </div>

                    <button className="btn btn-primary w-100 rounded-pill mt-3">
                      Tiến hành đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}
