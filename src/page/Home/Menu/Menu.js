import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { layDanhSachProducts } from "../../../redux/actions/ProductsAction";
import { addToCart } from "../../../redux/actions/cartAction";


export default function Menu() {
   const dispatch = useDispatch();

  const { arrProducts } = useSelector(
    (state) => state.ProductsReducer
  );

  useEffect(() => {
    dispatch(layDanhSachProducts());
  }, [dispatch]);

  return (
    <>
      {/* MENU Start */}
      <div className="container-fluid service py-5 seafood-menu-section">
        <div className="container py-5">
          {/* Title */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 650 }}>
            <h1 className="display-6 seafood-menu-title">MENU Sông Quê</h1>
            <p className="mb-0 seafood-menu-sub">
              Hải sản & cá đồng tươi sống — đặt nhanh qua Zalo / Hotline
            </p>
          </div>

          {/* Grid */}
          <div className="row g-4 justify-content-center">
            {arrProducts.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="seafood-menu-link"
                >
                  <div className="seafood-menu-card rounded-4 overflow-hidden position-relative">
                    {/* Badge MENU */}
                    <div className="seafood-menu-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill">
                      MENU
                    </div>

                    {/* Image */}
                    <div className="seafood-menu-imgwrap">
                      <img
                        src={item.img}
                        className="seafood-menu-img"
                        alt={item.name}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 text-start">
                      <h5 className="mb-1 seafood-menu-name">{item.name}</h5>
                      <div className="seafood-menu-subline">{item.sub}</div>

                      {/* Price */}
                      <div className="seafood-menu-price d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3">
                        <span style={{ fontSize: 14 }}>🔥</span>
                        <span style={{ fontSize: 16 }}>{item.price}</span>
                      </div>

                      <div className="seafood-menu-note mt-3">{item.note}</div>

                      {/* CTA */}
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <span className="seafood-menu-detail">
                          Xem chi tiết →
                        </span>

                       <button
                                                 type="button"
                                                 className="seafood-menu-order px-3 py-2 rounded-3"
                                                 onClick={() => {
                                                   console.log("CLICK OK");
                                                   dispatch(addToCart(item));
                                                     Swal.fire({
                             toast: true,
                             position: "top-end",
                             icon: "success",
                             title: "Đã thêm vào giỏ hàng",
                             showConfirmButton: false,
                             timer: 1500,
                             timerProgressBar: true
                           });
                                                 }}
                                               >
                                                 Đặt ngay
                                               </button>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="seafood-menu-overlay position-absolute top-0 start-0 w-100 h-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MENU End */}

      {/* ✅ CSS đồng bộ xanh biển */}
      <style>
        {`
        .seafood-menu-overlay {
  pointer-events: none;
}
          .seafood-menu-section{
            background: linear-gradient(180deg,#f8fdff,#ffffff);
          }

          .seafood-menu-title{
            font-weight: 900;
            color: #023e8a;
          }

          .seafood-menu-sub{
            color: #607d8b;
            font-weight: 600;
          }

          .seafood-menu-link{
            text-decoration: none;
            display:block;
          }

          /* CARD */
          .seafood-menu-card{
            background: #fff;
            border: 1px solid rgba(0,180,216,.20);
            box-shadow: 0 14px 30px rgba(0,119,182,.10);
            transition: .25s ease;
          }

          .seafood-menu-card:hover{
            transform: translateY(-7px);
            border-color: rgba(0,180,216,.38);
            box-shadow: 0 22px 55px rgba(0,119,182,.18);
          }

          /* BADGE */
          .seafood-menu-badge{
            background: linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
            color: #fff;
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 1px;
            z-index: 2;
            box-shadow: 0 10px 22px rgba(0,119,182,.20);
          }

          /* IMAGE */
          .seafood-menu-imgwrap{
            height: 230px;
            overflow: hidden;
          }

          .seafood-menu-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display:block;
            transition: .35s ease;
            filter: contrast(1.05) saturate(1.08);
          }

          .seafood-menu-card:hover .seafood-menu-img{
            transform: scale(1.07);
          }

          /* TEXT */
          .seafood-menu-name{
            font-weight: 900;
            color: #023e8a;
          }

          .seafood-menu-subline{
            font-size: 13px;
            color: #6c757d;
            font-weight: 600;
            margin-bottom: 14px;
          }

          /* PRICE */
          .seafood-menu-price{
            background: linear-gradient(90deg,#b51c1c,#ffcf4a);
            color:#fff;
            font-weight: 900;
            box-shadow: 0 8px 18px rgba(181,28,28,.18);
          }

          .seafood-menu-note{
            font-size: 13px;
            font-weight: 600;
            color: #607d8b;
          }

          /* CTA */
          .seafood-menu-detail{
            color: #0077b6;
            font-weight: 900;
          }

          .seafood-menu-order{
            background: linear-gradient(90deg,#ff7a00,#ffd000);
            color: #111;
            font-weight: 900;
            font-size: 13px;
            box-shadow: 0 10px 22px rgba(255,122,0,.18);
          }

          /* OVERLAY */
          .seafood-menu-overlay{
            background: linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.14) 100%);
            opacity: 0;
            transition: .25s ease;
          }

          .seafood-menu-card:hover .seafood-menu-overlay{
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
