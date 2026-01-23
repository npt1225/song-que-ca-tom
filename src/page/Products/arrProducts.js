import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachProducts } from "../../redux/actions/ProductsAction";
import { addToCart } from "../../redux/actions/cartAction";
import Swal from "sweetalert2";

export default function Menu() {
  const dispatch = useDispatch();
  const { arrProducts } = useSelector(
    (state) => state.ProductsReducer
  );

  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    dispatch(layDanhSachProducts());
  }, [dispatch]);

  // 👉 Filter logic
  const filteredProducts =
    filter === "ALL"
      ? arrProducts
      : arrProducts.filter((item) => item.tag === filter);

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Đã thêm vào giỏ hàng",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  return (
    <>
      <section className="container-fluid py-5 seafood-menu-section">
        <div className="container">

          {/* TITLE */}
          <div className="text-center mb-4">
            <h1 className="display-6 seafood-menu-title">MENU Sông Quê</h1>
            <p className="seafood-menu-sub">
              Hải sản & cá đồng tươi sống — đặt nhanh mỗi ngày
            </p>
          </div>

          {/* FILTER */}
          <div className="seafood-filter mb-5">
            {["ALL", "Cá", "Tôm", "Tép"].map((type) => (
              <button
                key={type}
                className={`filter-btn ${
                  filter === type ? "active" : ""
                }`}
                onClick={() => setFilter(type)}
              >
                {type === "ALL" ? "Tất cả" : type}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="row g-4 justify-content-center">
            {filteredProducts.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="seafood-menu-card rounded-4 overflow-hidden">

                  {/* Badge */}
                  <div className="seafood-menu-badge">
                    {item.tag || "MENU"}
                  </div>

                  {/* Image */}
                  <div className="seafood-menu-imgwrap">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="seafood-menu-img"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h5 className="seafood-menu-name">{item.name}</h5>
                    <div className="seafood-menu-subline">
                      {item.sub}
                    </div>

                    <div className="seafood-menu-price">
                      🔥 {item.price}
                    </div>

                    <div className="seafood-menu-note">
                      {item.note}
                    </div>

                    <button
                      className="seafood-menu-order"
                      onClick={() => handleAddCart(item)}
                    >
                      Đặt ngay
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`
        .seafood-menu-section{
          background: linear-gradient(180deg,#f8fdff,#fff);
        }

        .seafood-menu-title{
          font-weight:900;
          color:#023e8a;
        }

        .seafood-menu-sub{
          color:#607d8b;
          font-weight:600;
        }

        /* FILTER */
        .seafood-filter{
          display:flex;
          gap:12px;
          justify-content:center;
          flex-wrap:wrap;
        }

        .filter-btn{
          padding:8px 20px;
          border-radius:30px;
          border:1px solid rgba(0,180,216,.3);
          background:#fff;
          font-weight:700;
          color:#023e8a;
          transition:.25s;
        }

        .filter-btn:hover{
          background:rgba(0,180,216,.12);
        }

        .filter-btn.active{
          background:linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
          color:#fff;
          border:none;
        }

        /* CARD */
        .seafood-menu-card{
          background:#fff;
          border:1px solid rgba(0,180,216,.25);
          transition:.3s ease;
          height:100%;
        }

        .seafood-menu-card:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 40px rgba(0,119,182,.18);
        }

        .seafood-menu-badge{
          position:absolute;
          top:14px;
          left:14px;
          background:linear-gradient(90deg,#023e8a,#00b4d8);
          color:#fff;
          font-size:12px;
          font-weight:800;
          padding:4px 14px;
          border-radius:20px;
          z-index:2;
        }

        .seafood-menu-imgwrap{
          height:220px;
          overflow:hidden;
        }

        .seafood-menu-img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:.35s;
        }

        .seafood-menu-card:hover img{
          transform:scale(1.07);
        }

        .seafood-menu-name{
          font-weight:900;
          color:#023e8a;
          margin-bottom:4px;
        }

        .seafood-menu-subline{
          font-size:13px;
          color:#6c757d;
        }

        .seafood-menu-price{
          margin:12px 0;
          display:inline-block;
          padding:6px 14px;
          border-radius:20px;
          font-weight:800;
          color:#fff;
          background:linear-gradient(90deg,#ff7a00,#ffb703);
        }

        .seafood-menu-note{
          font-size:13px;
          color:#6c757d;
          margin-bottom:16px;
        }

        .seafood-menu-order{
          width:100%;
          padding:10px;
          border-radius:12px;
          border:none;
          font-weight:800;
          color:#fff;
          background:linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
        }

        .seafood-menu-order:hover{
          filter:brightness(1.05);
        }

        /* MOBILE */
        @media(max-width:768px){
          .seafood-menu-imgwrap{ height:180px; }
        }
      `}</style>
    </>
  );
}
