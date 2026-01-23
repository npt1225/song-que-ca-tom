import React from "react";
import { NavLink } from "react-router-dom";

export default function CarouselContact() {
  return (
    <section className="contact-hero">
      {/* Background carousel */}
      <div
        id="contactCarousel"
        className="carousel slide carousel-fade contact-bg"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/hero-img-1.png" alt="Hải sản tươi" />
          </div>
          <div className="carousel-item">
            <img src="img/hero-img-2.jpg" alt="Cá tươi" />
          </div>
          <div className="carousel-item">
            <img src="img/hero-img-3.jpg" alt="Tôm tươi" />
          </div>
        </div>

        {/* controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#contactCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#contactCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* overlay */}
      <div className="contact-overlay"></div>

      {/* content */}
      <div className="contact-content">
        <h4 className="fade-down">LIÊN HỆ HẢI SẢN TƯƠI</h4>
        <h1 className="fade-up">
          Sông Quê <br /> Hải Sản Miền Tây
        </h1>
        <p className="fade-up delay-1">
          Gửi trọn tươi ngon – Giữ trọn chữ tín
        </p>

        <div className="contact-actions fade-up delay-2">
          <NavLink to="/san-pham" className="btn btn-main">
            Xem Sản Phẩm
          </NavLink>
          <NavLink to="/lien-he" className="btn btn-outline">
            Gọi Ngay
          </NavLink>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        /* ===== CONTACT HERO ===== */
.contact-hero{
  position: relative;
  height: 70vh;
  min-height: 420px;
  max-height: 720px;
  overflow: hidden;
}
@media (max-width: 768px){
  .contact-hero{
    height: 52vh;
    min-height: 300px;
  }

  .contact-content{
    padding: 14px;
  }

  .contact-content h4{
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .contact-content h1{
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .contact-content p{
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 14px;
  }

  .contact-actions{
    gap: 10px;
  }

  .btn-main,
  .btn-outline{
    padding: 10px 22px;
    font-size: 14px;
  }
}


        /* background carousel */
        .contact-bg,
        .contact-bg .carousel-inner,
        .contact-bg .carousel-item{
          height: 100%;
        }

        .contact-bg img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* overlay */
        .contact-overlay{
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(2,62,138,0.85),
            rgba(0,180,216,0.65)
          );
          z-index: 2;
        }

        /* content */
        .contact-content{
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          color: #fff;
        }

        .contact-content h4{
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 12px;
          text-shadow: 0 6px 18px rgba(0,0,0,.5);
        }

        .contact-content h1{
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 14px;
          text-shadow:
            0 6px 18px rgba(0,0,0,.5),
            0 16px 40px rgba(0,0,0,.6);
        }

        .contact-content p{
          max-width: 520px;
          font-size: 18px;
          font-weight: 600;
          opacity: .95;
          text-shadow: 0 4px 12px rgba(0,0,0,.5);
        }

        /* buttons */
        .contact-actions{
          margin-top: 26px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-main{
          background: linear-gradient(90deg,#ffd000,#ff9f00);
          color: #023e8a;
          font-weight: 900;
          padding: 14px 34px;
          border-radius: 50px;
          box-shadow: 0 14px 30px rgba(0,0,0,.3);
        }

        .btn-outline{
          border: 2px solid #fff;
          color: #fff;
          padding: 14px 34px;
          border-radius: 50px;
          font-weight: 800;
          backdrop-filter: blur(6px);
        }

        .btn-outline:hover{
          background: #fff;
          color: #023e8a;
        }

        /* animations */
        .fade-up{
          animation: fadeUp .9s ease forwards;
        }

        .fade-down{
          animation: fadeDown .9s ease forwards;
        }

        .delay-1{ animation-delay: .2s; }
        .delay-2{ animation-delay: .4s; }

        @keyframes fadeUp{
          from{ opacity:0; transform:translateY(30px); }
          to{ opacity:1; transform:translateY(0); }
        }

        @keyframes fadeDown{
          from{ opacity:0; transform:translateY(-20px); }
          to{ opacity:1; transform:translateY(0); }
        }

        /* mobile */
        @media(max-width: 768px){
          .contact-hero{
            height: 50vh;
            min-height: 360px;
          }

          .contact-content p{
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
