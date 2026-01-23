import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachProducts } from "../../redux/actions/ProductsAction";
import { addToCart } from "../../redux/actions/cartAction";

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
      {/* Menu Sông Quê */}
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

                    <div className="seafood-menu-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill">
                      MENU
                    </div>

                    <div className="seafood-menu-imgwrap">
                      <img
                        src={item.img}
                        className="seafood-menu-img"
                        alt={item.name}
                      />
                    </div>

                    <div className="p-4 text-start">
                      <h5 className="mb-1 seafood-menu-name">{item.name}</h5>
                      <div className="seafood-menu-subline">{item.sub}</div>

                      <div className="seafood-menu-price d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3">
                        <span>🔥</span>
                        <span>{item.price}</span>
                      </div>

                      <div className="seafood-menu-note mt-3">{item.note}</div>

                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <span className="seafood-menu-detail">
                          Xem chi tiết →
                        </span>
                        <span
                          className="seafood-menu-order px-3 py-2 rounded-3"
                          onClick={(e) => {
                            e.preventDefault(); // chặn NavLink redirect
                            dispatch(addToCart(item));
                          }}
                        >
                          Đặt ngay
                        </span>
                      </div>
                    </div>

                    <div className="seafood-menu-overlay position-absolute top-0 start-0 w-100 h-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ CSS đồng bộ xanh biển - hài hòa */}
      <style>
        {`
          /* Wrapper */
          .seafood-menu-wrap{
            background: linear-gradient(180deg,#f8fdff,#ffffff);
          }

          .seafood-title{
            font-weight: 900;
            color: #023e8a;
          }

          .seafood-sub{
            color: #607d8b;
            font-weight: 600;
          }

          /* Tabs style */
          .seafood-tabs a{
            background: rgba(0,180,216,0.08);
            border: 1px solid rgba(0,180,216,0.20);
            color: #023e8a;
            font-weight: 900;
            transition: .25s ease;
          }

          .seafood-tabs a:hover{
            transform: translateY(-1px);
            background: rgba(0,180,216,0.14);
          }

          .seafood-tabs a.active{
            background: linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
            color: #fff !important;
            box-shadow: 0 12px 26px rgba(0,119,182,.22);
            border: none;
          }

          /* Card */
          .sq-card{
            background:#fff;
            border:1px solid rgba(0,180,216,.20);
            transition:.25s ease;
          }

          .sq-card:hover{
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0,119,182,.18) !important;
            border-color: rgba(0,180,216,.35);
          }

          .sq-img-wrap{
            height: 230px;
            overflow:hidden;
          }

          .sq-img{
            width:100%;
            height:100%;
            object-fit:cover;
            transition:.35s ease;
            filter: contrast(1.04) saturate(1.06);
          }

          .sq-card:hover img{
            transform: scale(1.07);
          }

          /* Badge MENU */
          .sq-menu-badge{
            background: linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
            color: white;
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 1px;
          }

          /* Tag theo loại */
          .sq-tag{
            font-weight: 900;
            font-size: 12px;
          }

          .sq-tag.tom{
            background: rgba(255,122,0,.14);
            color: #ff7a00;
          }

          .sq-tag.ca{
            background: rgba(0,180,216,.14);
            color: #0077b6;
          }

          .sq-tag.tep{
            background: rgba(25,135,84,.14);
            color: #198754;
          }

          /* Price */
          .sq-price{
            background: linear-gradient(90deg,#b51c1c,#ffcf4a);
            color: #fff;
            font-weight: 900;
            box-shadow: 0 8px 18px rgba(181,28,28,.18);
          }

          /* Buttons */
          .sq-btn-view{
            border: 2px solid rgba(0,180,216,.35) !important;
            color: #023e8a !important;
            font-weight: 900 !important;
          }

          .sq-btn-view:hover{
            background: rgba(0,180,216,.12) !important;
            transform: translateY(-1px);
          }

          .sq-btn-add{
            background: #fff !important;
            border: none !important;
            font-weight: 900 !important;
            box-shadow: 0 12px 22px rgba(0,119,182,.18);
          }

          .sq-btn-add:hover{
            filter: brightness(1.05);
            transform: translateY(-1px);
          }
        `}
      </style>
    </>
  );
}

function ProductCard({ product }) {
  const { img, tag, name, sub, desc, price, note, slug } = product;

  const tagClass =
    tag === "Tôm" ? "tom" : tag === "Cá" ? "ca" : tag === "Tép" ? "tep" : "";

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="sq-card rounded-4 overflow-hidden shadow-sm position-relative">
        {/* Badge MENU */}
        <div className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill sq-menu-badge">
          MENU
        </div>

        {/* Tag nhỏ góc phải */}
        <div
          className={`position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill sq-tag ${tagClass}`}
        >
          {tag}
        </div>

        {/* Image */}
        <div className="sq-img-wrap">
          <img src={img} alt={name} className="sq-img" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h5 className="mb-1" style={{ fontWeight: 900, color: "#023e8a" }}>
            {name}
          </h5>

          <div className="text-muted mb-2" style={{ fontSize: 13 }}>
            {sub}
          </div>

          <p className="mb-3 text-secondary" style={{ fontSize: 13 }}>
            {desc}
          </p>

          {/* Price */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 sq-price">
            <span>🔥</span>
            <span style={{ fontSize: 16 }}>{price}</span>
          </div>

          <div className="mt-2" style={{ fontSize: 12, color: "#6c757d" }}>
            {note}
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-4">
            <NavLink
              to={`/khuyen-mai/${slug}`}
              className="btn rounded-pill w-50 sq-btn-view"
            >
              Xem
            </NavLink>

            <button
              className="btn rounded-pill w-50 sq-btn-add text-while"
              onClick={() => console.log("Add to cart:", name)}
            >
              <i className="fa fa-shopping-cart me-2"></i>
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
