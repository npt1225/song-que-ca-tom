import React from "react";
import { NavLink } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// CSS Swiper
import "swiper/css";
import "swiper/css/navigation";

export default function Promotions() {
  const promoData = [
    {
      badge: "HOT",
      badgeClass: "hot",
      name: "Tôm Càng Xanh",
      desc: "Giảm 20%",
      img: "./images/tom-cang-xanh.jpg",
      link: "/khuyen-mai/tom-cang-xanh",
    },
    {
      badge: "SALE",
      badgeClass: "sale",
      name: "Cá Ngát Tươi",
      desc: "Miễn phí vận chuyển",
      img: "./images/ca-ngat.jpg",
      link: "/khuyen-mai/ca-ngat",
    },
    {
      badge: "NEW",
      badgeClass: "new",
      name: "Cá Bống Tượng",
      desc: "Giảm 50.000đ",
      img: "./images/ca-bong-tuong.jpg",
      link: "/khuyen-mai/ca-bong-tuong",
    },
    {
      badge: "HOT",
      badgeClass: "hot",
      name: "Tép bạc đất",
      desc: "Giảm 10%",
      img: "./images/tep-bac-dat.jpg",
      link: "/khuyen-mai/tom-su",
    },
  ];

  return (
    <div className="promo-wrapper">
      <div className="container">
        {/* Title */}
        <div className="promo-title-wrap">
          <h2 className="promo-title">Khuyến Mãi Nổi Bật</h2>
          <p className="promo-sub">
            Ưu đãi trong ngày — sản phẩm tươi sống, giao nhanh
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          className="promo-swiper"
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={28} // ✅ khoảng cách card
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {promoData.map((item, index) => (
            <SwiperSlide key={index}>
              <NavLink to={item.link} className="promo-link">
                <div className="promo-card">

                  {/* ✅ 1 line chạy vòng quanh */}
                  <span className="line top"></span>
                  <span className="line right"></span>
                  <span className="line bottom"></span>
                  <span className="line left"></span>

                  {/* Badge */}
                  <span className={`promo-badge ${item.badgeClass}`}>
                    {item.badge}
                  </span>

                  {/* Image */}
                  <div className="promo-img-wrap">
                    <img src={item.img} alt={item.name} className="promo-img" />
                  </div>

                  {/* Content */}
                  <div className="promo-content">
                    <h5 className="promo-name">{item.name}</h5>
                    <p className="promo-desc">{item.desc}</p>
                    <span className="promo-btn">Xem ngay →</span>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ CSS nhét thẳng vào component */}
      <style>
        {`
          .promo-wrapper{
            padding: 60px 0;
            background:#f6f8fb;
          }

          .promo-title-wrap{
            text-align:center;
            margin-bottom:24px;
          }

          .promo-title{
            font-weight:900;
            color:#0d6efd;
            margin:0 0 6px 0;
          }

          .promo-sub{
            margin:0;
            font-weight:600;
            color:#6c757d;
          }

          .promo-link{
            text-decoration:none;
            display:block;
          }

          /* ===== CARD ===== */
          .promo-card{
            position:relative;
            border-radius:18px;
            overflow:hidden;
            background:#fff;
            box-shadow: 0 18px 45px rgba(0,0,0,.12);
            transition:.35s ease;
          }

          .promo-card:hover{
            transform: translateY(-7px);
            box-shadow: 0 30px 70px rgba(0,0,0,.18);
          }

          /* ===== IMAGE ===== */
          .promo-img-wrap{
            height:260px;
            overflow:hidden;
          }

          .promo-img{
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
            transition:.6s ease;
            filter: contrast(1.05) saturate(1.05);
          }

          .promo-card:hover .promo-img{
            transform: scale(1.12);
          }

          /* ===== CONTENT ===== */
          .promo-content{
            padding:18px 18px 20px;
          }

          .promo-name{
            font-size:18px;
            font-weight:900;
            margin:0 0 6px 0;
            color:#0f172a;
          }

          .promo-desc{
            margin:0 0 12px 0;
            font-size:14px;
            font-weight:700;
            color:#64748b;
          }

          .promo-btn{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            padding:10px 16px;
            border-radius:999px;
            font-weight:900;
            font-size:13px;
            background: rgba(13,110,253,.12);
            color:#0d6efd;
            transition:.25s ease;
          }

          .promo-card:hover .promo-btn{
            background:#0d6efd;
            color:#fff;
            transform: translateY(-1px);
          }

          /* ===== BADGE ===== */
          .promo-badge{
            position:absolute;
            top:14px;
            left:14px;
            padding:6px 14px;
            border-radius:999px;
            font-size:12px;
            font-weight:900;
            letter-spacing:1px;
            color:#fff;
            z-index:5;
            box-shadow: 0 10px 22px rgba(0,0,0,.18);
          }

          .promo-badge.hot{
            background: linear-gradient(90deg,#ff2d55,#ff6a00);
          }
          .promo-badge.sale{
            background: linear-gradient(90deg,#ff7a00,#ffd000);
            color:#111;
          }
          .promo-badge.new{
            background: linear-gradient(90deg,#00c389,#00e0ff);
            color:#111;
          }

          /* =================================================
              ✅ 1 LINE BORDER RUNNING (chạy 1 vòng quanh card)
             ================================================= */
          .promo-card .line{
            position:absolute;
            z-index:4;
            pointer-events:none;
          }

          /* TOP: trái -> phải */
          .promo-card .line.top{
            top:0;
            left:0;
            height:2px;
            width:100%;
            background: linear-gradient(90deg, transparent, #0d6efd, transparent);
            transform: translateX(-100%);
            animation: runTop 2.4s linear infinite;
          }

          /* RIGHT: trên -> dưới */
          .promo-card .line.right{
            top:0;
            right:0;
            width:2px;
            height:100%;
            background: linear-gradient(180deg, transparent, #0d6efd, transparent);
            transform: translateY(-100%);
            animation: runRight 2.4s linear infinite;
            animation-delay: .6s;
          }

          /* BOTTOM: phải -> trái */
          .promo-card .line.bottom{
            bottom:0;
            left:0;
            height:2px;
            width:100%;
            background: linear-gradient(270deg, transparent, #0d6efd, transparent);
            transform: translateX(100%);
            animation: runBottom 2.4s linear infinite;
            animation-delay: 1.2s;
          }

          /* LEFT: dưới -> trên */
          .promo-card .line.left{
            top:0;
            left:0;
            width:2px;
            height:100%;
            background: linear-gradient(0deg, transparent, #0d6efd, transparent);
            transform: translateY(100%);
            animation: runLeft 2.4s linear infinite;
            animation-delay: 1.8s;
          }

          @keyframes runTop{
            0%{ transform: translateX(-100%); }
            100%{ transform: translateX(100%); }
          }

          @keyframes runRight{
            0%{ transform: translateY(-100%); }
            100%{ transform: translateY(100%); }
          }

          @keyframes runBottom{
            0%{ transform: translateX(100%); }
            100%{ transform: translateX(-100%); }
          }

          @keyframes runLeft{
            0%{ transform: translateY(100%); }
            100%{ transform: translateY(-100%); }
          }

          /* ===== Swiper arrows ===== */
          .promo-swiper .swiper-button-next,
          .promo-swiper .swiper-button-prev{
            color:#111;
            width:42px;
            height:42px;
          }
          .promo-swiper .swiper-button-next:after,
          .promo-swiper .swiper-button-prev:after{
            font-size:18px;
            font-weight:900;
          }

          /* mobile */
          @media(max-width:576px){
            .promo-img-wrap{ height:220px; }
          }
        `}
      </style>
    </div>
  );
}
