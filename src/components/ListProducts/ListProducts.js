import React from "react";
import { NavLink } from "react-router-dom";

export default function ListProducts() {
  const allProducts = [
    {
      tag: "Tôm",
      name: "Tôm Càng Xanh",
      sub: "Sông Hậu",
      desc: "Loại 8 con/kg - Tươi sống 100%, càng to, thịt săn chắc ngọt",
      price: "580K / KG",
      note: "Loại 8 con / 1kg",
      img: "img/songque/tom-cang-xanh.jpg",
      slug: "tom-cang-xanh",
    },
    {
      tag: "Cá",
      name: "Cá Ngát",
      sub: "Sông Hậu",
      desc: "Từ 1.5kg trở lên - Thịt chắc, ngọt tự nhiên, đặc sản miền Tây",
      price: "250K / KG",
      note: "Cá từ 1.5kg trở lên",
      img: "img/songque/ca-ngat.jpg",
      slug: "ca-ngat",
    },
    {
      tag: "Tép",
      name: "Tép Bạc Đất",
      sub: "Tươi sống",
      desc: "Tép bạc đất chính gốc miền Tây, ngọt thanh, làm lẩu cực ngon",
      price: "250K / KG",
      note: "Hàng mới mỗi ngày",
      img: "img/songque/tep-bac-dat.jpg",
      slug: "tep-bac-dat",
    },
    {
      tag: "Cá",
      name: "Cá Rô Phi Thái",
      sub: "Cá nước ngọt",
      desc: "Cá rô phi thái sạch sẽ, thịt trắng ngon, ít xương",
      price: "120K / KG",
      note: "Cá từ 2.5kg trở lên",
      img: "img/songque/ca-ro-phi-thai.jpg",
      slug: "ca-ro-phi-thai",
    },
    {
      tag: "Cá",
      name: "Cá Bống Tượng",
      sub: "Cá nước ngọt",
      desc: "Từ 1.5kg trở lên - Thịt dày, dai ngọt, đặc sản sông nước",
      price: "300K / KG",
      note: "Cá từ 1.5kg đến 2kg",
      img: "img/songque/ca-bong-tuong.jpg",
      slug: "ca-bong-tuong",
    },
  ];

  const tom = allProducts.filter((p) => p.tag === "Tôm");
  const ca = allProducts.filter((p) => p.tag === "Cá");
  const tep = allProducts.filter((p) => p.tag === "Tép");

  const renderProducts = (products) => {
    return products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  };

  return (
    <>
      {/* Menu Sông Quê */}
      <div className="container-fluid fruite py-5 seafood-menu-wrap">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5 text-start">
                <h1 className="mb-2 seafood-title">Menu Sông Quê</h1>
                <p className="mb-0 seafood-sub">
                  Hải sản sông nước miền Tây chính gốc — tươi sống mỗi ngày
                </p>
              </div>

              {/* Tabs */}
              <div className="col-lg-7 text-lg-end text-start">
                <ul className="nav nav-pills d-inline-flex text-center mb-0 mt-4 mt-lg-0 seafood-tabs">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-all"
                    >
                      <span style={{ width: "120px" }}>Tất Cả</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-tom"
                    >
                      <span style={{ width: "120px" }}>Tôm</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-ca"
                    >
                      <span style={{ width: "120px" }}>Cá</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-tep"
                    >
                      <span style={{ width: "120px" }}>Tép</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tabs content */}
            <div className="tab-content mt-5">
              <div id="tab-all" className="tab-pane fade show p-0 active">
                <div className="row g-4 justify-content-center">
                  {renderProducts(allProducts)}
                </div>
              </div>

              <div id="tab-tom" className="tab-pane fade show p-0">
                <div className="row g-4 justify-content-center">
                  {renderProducts(tom)}
                </div>
              </div>

              <div id="tab-ca" className="tab-pane fade show p-0">
                <div className="row g-4 justify-content-center">
                  {renderProducts(ca)}
                </div>
              </div>

              <div id="tab-tep" className="tab-pane fade show p-0">
                <div className="row g-4 justify-content-center">
                  {renderProducts(tep)}
                </div>
              </div>
            </div>
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
