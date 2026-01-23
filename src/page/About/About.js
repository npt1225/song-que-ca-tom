import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Footer from "../../components/Footer/Footer";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Search />

      {/* ================= HERO ================= */}
      <div className="about-hero-wrap">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="about-hero-swiper"
        >
          <SwiperSlide>
            <div
              className="about-hero-slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
              }}
            >
              <div className="about-hero-overlay">
                <h1 data-aos="fade-down">Sông Quê</h1>
                <p data-aos="fade-up">
                  Hải sản tươi sống – đúng nghĩa từ con nước
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="about-hero-slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
              }}
            >
              <div className="about-hero-overlay">
                <h1>Tươi mỗi ngày</h1>
                <p>Thu mua trực tiếp – giao nhanh trong ngày</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="about-hero-slide"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1523413651479-597eb2da0ad6)",
              }}
            >
              <div className="about-hero-overlay">
                <h1>Giữ trọn chữ tín</h1>
                <p>Khách quay lại là thành công lớn nhất</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ================= STORY ================= */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="about-title">Câu chuyện bắt đầu từ con nước</h2>
              <p>
                <strong>Sông Quê</strong> không sinh ra từ một kế hoạch kinh doanh
                lớn, mà từ nhịp sống rất quen của miền sông nước – những buổi
                sáng theo ghe ra sông, những mẻ cá còn tươi roi rói.
              </p>
              <p>
                Ở miền Tây, cá ngon là cá đúng mùa. Tôm ngọt là tôm còn nhảy.
                Chúng tôi giữ nguyên điều đó – không thêm, không bớt.
              </p>
              <p className="about-highlight">
                Mang sự tươi thật từ sông nước lên bàn ăn mỗi gia đình.
              </p>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1504718855392-c0f33b0d6c4c"
                alt=""
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUE ================= */}
      <section className="about-section bg-soft">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="about-title">Giá trị Sông Quê giữ mãi</h2>
            <p className="text-muted">
              Dù bán một ký hay một tấn – vẫn là một chữ TÂM
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "🌊",
                title: "Tươi thật",
                desc: "Không đông lạnh dài ngày – tươi là phải thấy, phải cảm nhận.",
              },
              {
                icon: "📍",
                title: "Rõ nguồn",
                desc: "Biết rõ cá từ đâu, ai đánh bắt, khi nào lên ghe.",
              },
              {
                icon: "❤️",
                title: "Giữ chữ tín",
                desc: "Không bán một lần – mà bán cho nhiều năm sau.",
              },
            ].map((v, i) => (
              <div
                className="col-md-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="about-card">
                  <div className="about-card-icon">{v.icon}</div>
                  <h5>{v.title}</h5>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="about-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="about-title">Quy trình chọn hàng</h2>
            <p className="text-muted">Ngắn gọn – rõ ràng – không vòng vo</p>
          </div>

          <div className="row g-4">
            {[
              "Thu mua trực tiếp từ ghe, ao, hộ dân",
              "Chọn lọc – loại bỏ hàng yếu",
              "Giữ tươi – không trữ lâu",
              "Giao nhanh trong ngày",
            ].map((text, i) => (
              <div
                className="col-md-3"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="about-step">
                  <span>{`0${i + 1}`}</span>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="about-section bg-soft">
        <div className="container">
          <h3 className="text-center fw-bold mb-4" data-aos="fade-up">
            Hình ảnh thực tế từ nguồn hàng
          </h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2800 }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <SwiperSlide key={i}>
                <img
                  src={`https://source.unsplash.com/600x400/?river,fish,${i}`}
                  className="img-fluid rounded-4"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="container text-center" data-aos="zoom-in">
          <h3>Sông Quê – Tươi từ sông, ngon từ tâm</h3>
          <p>Không cần nói nhiều – hãy để bữa cơm trả lời</p>
          <a href="/menu" className="btn btn-light rounded-pill px-4 fw-bold">
            Xem menu hải sản
          </a>
        </div>
      </section>
      <Footer />

      {/* ================= CSS ================= */}
      <style>{`
/* HERO */
.about-hero-wrap { margin-top: 80px; }
.about-hero-swiper { height: 420px; }
.about-hero-slide {
  height: 420px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.about-hero-overlay {
  position:absolute; inset:0;
  background: linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.6));
  display:flex; flex-direction:column;
  align-items:center; justify-content:center;
  text-align:center; color:#fff;
}
.about-hero-overlay h1 {
  font-weight:900; font-size:3rem;
}
.about-hero-overlay p { opacity:.9 }

/* SECTION */
.about-section { padding: 80px 0; }
.bg-soft { background:#f2fbff; }

.about-title {
  font-weight:900;
  color:#0353a4;
}
.about-highlight {
  font-weight:700;
  color:#0077b6;
}

/* CARD */
.about-card {
  background:#fff;
  padding:32px;
  border-radius:20px;
  height:100%;
  box-shadow:0 10px 30px rgba(0,0,0,.08);
  text-align:center;
}
.about-card-icon { font-size:32px; }

/* STEP */
.about-step {
  text-align:center;
  border:2px dashed #90dbf4;
  padding:30px;
  border-radius:20px;
}
.about-step span {
  font-weight:900;
  color:#0077b6;
  font-size:28px;
}

/* CTA */
.about-cta {
  background: linear-gradient(90deg,#0077b6,#00b4d8);
  color:#fff;
  padding:80px 0;
}

/* MOBILE */
@media(max-width:768px){
  .about-hero-swiper,
  .about-hero-slide { height:300px }
  .about-hero-overlay h1 { font-size:2rem }
}
      `}</style>
    </>
  );
}
