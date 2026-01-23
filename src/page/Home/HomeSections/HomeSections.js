import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeSections() {
  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section className="section-hero-seafood container-fluid my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content py-4">
                <h1 className="display-4 text-white hero-title">
                  Hải Sản Tươi Sống Mỗi Ngày
                </h1>

                <p className="fs-2 fw-normal text-white-50 mb-3 hero-subtitle">
                  Cá – Tôm – Mực – Ghẹ
                </p>

                <p className="mb-4 text-white hero-desc">
                  Hải sản được tuyển chọn mỗi sáng, bảo quản lạnh đúng chuẩn,
                  giao nhanh trong ngày – giữ trọn vị tươi ngon từ biển.
                </p>

                <NavLink
                  to="/shop"
                  className="hero-btn btn rounded-pill py-3 px-5"
                >
                  Xem sản phẩm
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image position-relative">
                <img
                  src="img/baner-1.png"
                  className="img-fluid w-100 hero-img"
                  alt="Hải sản tươi sống"
                />

                <div className="hero-price position-absolute d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h2 className="mb-0">Tôm sú</h2>
                    <span className="fw-bold">299k/kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS thêm thẳng vào component */}
        <style>
          {`
            /* ===== HERO SEAFOOD THEME ===== */
            .section-hero-seafood{
              background: linear-gradient(135deg,#003b73 0%, #0077b6 45%, #00b4d8 100%);
              position: relative;
              overflow: hidden;
              border-radius: 22px;
            }

            /* hiệu ứng ánh sáng */
            .section-hero-seafood::before{
              content:"";
              position:absolute;
              top:-120px;
              right:-120px;
              width: 320px;
              height: 320px;
              background: rgba(255,255,255,0.12);
              border-radius: 50%;
              filter: blur(10px);
            }

            /* hiệu ứng sóng nước phía dưới */
            .section-hero-seafood::after{
              content:"";
              position:absolute;
              bottom:-80px;
              left:0;
              width:100%;
              height:170px;
              background: rgba(255,255,255,0.18);
              border-radius: 60% 60% 0 0;
            }

            /* text */
            .hero-title{
              font-weight: 900;
              letter-spacing: 0.3px;
            }

            .hero-subtitle{
              font-weight: 700;
            }

            .hero-desc{
              line-height: 1.7;
              opacity: 0.95;
              max-width: 520px;
            }

            /* button */
            .hero-btn{
              background: #ffffff;
              color: #003b73;
              font-weight: 900;
              border: 2px solid rgba(255,255,255,0.7);
              transition: all 0.25s ease;
              box-shadow: 0 14px 30px rgba(0,0,0,0.20);
            }

            .hero-btn:hover{
              background: #00b4d8;
              color: #fff;
              transform: translateY(-2px);
            }

            /* image */
            .hero-img{
              border-radius: 22px;
              box-shadow: 0 22px 50px rgba(0,0,0,0.28);
              transition: .4s ease;
            }

            .hero-image:hover .hero-img{
              transform: scale(1.02);
            }

            /* price badge */
            .hero-price{
              width: 150px;
              height: 150px;
              top: 12px;
              left: 12px;
              border-radius: 50%;
              background: linear-gradient(135deg,#ff7a18,#ffb347);
              color: #fff;
              box-shadow: 0 18px 35px rgba(0,0,0,0.25);
              border: 4px solid rgba(255,255,255,0.6);
            }

            .hero-price h2{
              font-size: 18px;
              font-weight: 900;
            }

            .hero-price span{
              font-size: 16px;
              font-weight: 800;
            }

            /* responsive */
            @media(max-width:768px){
              .hero-title{
                font-size: 32px;
              }
              .hero-price{
                width: 120px;
                height: 120px;
              }
              .hero-price h2{
                font-size: 16px;
              }
              .hero-price span{
                font-size: 14px;
              }
            }
          `}
        </style>
      </section>
    </>
  );
}
