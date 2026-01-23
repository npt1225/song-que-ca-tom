import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroCarousel() {
  return (
    <>
      {/* Hero Start - Phần Banner Chính */}
      <div className="container-fluid py-5 mb-5 hero-header hero-sea">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 hero-kicker">
                100% Tươi Sống Từ Sông Nước
              </h4>

              <h1 className="mb-5 display-3 hero-title">
                Sông Quê - Hải Sản Miền Tây Chính Gốc
              </h1>

              <div className="position-relative mx-auto hero-search-wrap">
                <input
                  className="form-control border-2 hero-input w-75 py-3 px-4 rounded-pill"
                  type="search"
                  placeholder="Tìm kiếm hải sản, cá, tôm..."
                />
                <button
                  type="submit"
                  className="btn hero-search-btn border-2 py-3 px-4 position-absolute rounded-pill text-white h-100"
                  style={{ top: 0, right: "25%" }}
                >
                  Tìm Kiếm
                </button>
              </div>
            </div>

            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img
                      src="img/hero-img-1.png"
                      className="img-fluid w-100 h-100 hero-img bg-secondary rounded"
                      alt="Cá tươi sống"
                    />
                    <NavLink
                      to="/ca-tuoi"
                      className="btn px-4 py-2 hero-pill text-white rounded position-absolute"
                      style={{
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Cá Tươi
                    </NavLink>
                  </div>

                  <div className="carousel-item rounded">
                    <img
                      src="img/hero-img-2.jpg"
                      className="img-fluid w-100 h-100 hero-img rounded"
                      alt="Tôm tươi ngon"
                    />
                    <NavLink
                      to="/tom-tuoi"
                      className="btn px-4 py-2 hero-pill text-white rounded position-absolute"
                      style={{
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Tôm Tươi
                    </NavLink>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ CHỈ CSS MÀU - KHÔNG ĐỔI SIZE */}
        <style>
          {`
            /* ===== THEME XANH BIỂN - GIỮ NGUYÊN BỐ CỤC ===== */
            .hero-sea{
              background: linear-gradient(
                135deg,
                #023e8a 0%,
                #0077b6 45%,
                #00b4d8 100%
              );
              border-radius: 22px;
              overflow: hidden;
              position: relative;
            }

            /* làm chữ sáng + nổi hơn */
            .hero-kicker{
              color: rgba(255,255,255,0.85) !important;
              font-weight: 800;
            }

            .hero-title{
              color: #e6fbff !important;
              font-weight: 900;
              text-shadow: 0 12px 30px rgba(0,0,0,0.25);
            }

            /* input */
            .hero-input{
              background: rgba(255,255,255,0.12) !important;
              border-color: rgba(255,255,255,0.35) !important;
              color: #fff !important;
              font-weight: 700;
              backdrop-filter: blur(10px);
            }

            .hero-input::placeholder{
              color: rgba(255,255,255,0.75) !important;
            }

            /* button search */
            .hero-search-btn{
              background: linear-gradient(90deg,#ff7a00,#ffd000) !important;
              border-color: rgba(255,255,255,0.25) !important;
              color: #111 !important;
              font-weight: 900;
              box-shadow: 0 14px 28px rgba(0,0,0,0.18);
            }

            .hero-search-btn:hover{
              filter: brightness(1.05);
            }

            /* ảnh carousel nhìn "tươi" hơn */
            .hero-img{
              filter: contrast(1.05) saturate(1.08);
            }

            /* nút Cá Tươi / Tôm Tươi */
            .hero-pill{
              background: rgba(255,255,255,0.18) !important;
              border: 1px solid rgba(255,255,255,0.35);
              backdrop-filter: blur(10px);
              font-weight: 800;
            }

            .hero-pill:hover{
              background: #ffffff !important;
              color: #023e8a !important;
              border-color: #ffffff;
            }

            /* mũi tên carousel đậm rõ hơn */
            .carousel-control-prev-icon,
            .carousel-control-next-icon{
              filter: drop-shadow(0 8px 18px rgba(0,0,0,.35));
            }
          `}
        </style>
      </div>
      {/* Hero End */}
    </>
  );
}
