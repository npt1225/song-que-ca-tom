import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import HeroCarousel from "../Home/HeroCarousel/HeroCarousel";
import CarouselContact from "./CarouselContact";

export default function Contact() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <div className="contact-page">
      <Loader />
      <Navbar />
      <Search />
               <HeroCarousel />

      {/* GIỚI THIỆU */}
      <section className="contact-intro container fade-up">
        <h2>Chúng tôi luôn sẵn sàng lắng nghe</h2>
        <p>
          Hải Sản Tươi không chỉ bán hải sản – chúng tôi gửi đi sự an tâm.
          Mỗi cuộc gọi, mỗi tin nhắn đều được tiếp nhận bằng sự chân thành
          và trách nhiệm.
        </p>
      </section>

      {/* THÔNG TIN LIÊN HỆ */}
      <section className="contact-info container fade-up">
        <div className="row">
          <div className="col-md-4">
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <h5>Địa chỉ</h5>
              <p>Chung cư An Sương Lô A3, Quận 12, TP.HCM</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box">
              <i className="fas fa-phone"></i>
              <h5>Hotline</h5>
              <p>0981 491 456</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <h5>Email</h5>
              <p>haisantuoi@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form container fade-up">
        <h2>Gửi tin nhắn cho chúng tôi</h2>

        <form>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Họ và tên" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Số điện thoại" />
            </div>
            <div className="col-12">
              <textarea rows="5" placeholder="Nội dung liên hệ"></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit">Gửi liên hệ</button>
            </div>
          </div>
        </form>
      </section>

      {/* CTA */}
      <section className="contact-cta fade-up">
        <h2>Đặt hải sản hôm nay – Tươi ngon ngay ngày mai</h2>
        <p>
          Chúng tôi giao nhanh – đúng loại – đúng cân – đúng giá
        </p>
      </section>

      <Footer />

      {/* CSS */}
      <style>{`
.contact-page{
  background:#f6fbff;
}

/* HERO */
.contact-hero {
  min-height: calc(100vh - var(--navbar-height));
  padding-top: var(--navbar-height);

  background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url("/images/contact-bg.jpg") center / cover no-repeat;

  display: flex;
  align-items: center;
}


.contact-hero h1{
  font-size: 46px;
  font-weight: 900;
}

.contact-hero p{
  font-size: 18px;
  margin-top: 12px;
}

/* INTRO */
.contact-intro{
  padding: 70px 0;
  text-align:center;
}

.contact-intro h2{
  font-weight: 900;
  color:#023e8a;
}

.contact-intro p{
  max-width: 760px;
  margin: 20px auto 0;
  color:#555;
}

/* INFO */
.contact-info{
  padding-bottom: 70px;
}

.info-box{
  background:#fff;
  border-radius:20px;
  padding:30px;
  text-align:center;
  box-shadow:0 15px 40px rgba(0,0,0,.08);
  transition:.3s;
}

.info-box i{
  font-size:32px;
  color:#00b4d8;
  margin-bottom:12px;
}

.info-box:hover{
  transform:translateY(-6px);
}

/* FORM */
.contact-form{
  background:#fff;
  border-radius:24px;
  padding:50px;
  box-shadow:0 20px 50px rgba(0,0,0,.08);
  margin-bottom:80px;
}

.contact-form h2{
  text-align:center;
  margin-bottom:30px;
  font-weight:900;
  color:#023e8a;
}

.contact-form input,
.contact-form textarea{
  width:100%;
  padding:14px 16px;
  margin-bottom:16px;
  border-radius:14px;
  border:1px solid #ddd;
  outline:none;
  transition:.25s;
}

.contact-form input:focus,
.contact-form textarea:focus{
  border-color:#00b4d8;
  box-shadow:0 0 0 3px rgba(0,180,216,.2);
}

.contact-form button{
  background:linear-gradient(90deg,#023e8a,#00b4d8);
  color:#fff;
  font-weight:800;
  padding:14px 40px;
  border:none;
  border-radius:999px;
  transition:.3s;
}

.contact-form button:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 30px rgba(0,180,216,.4);
}

/* CTA */
.contact-cta{
  background:linear-gradient(90deg,#023e8a,#0077b6);
  color:#fff;
  text-align:center;
  padding:70px 20px;
}

.contact-cta h2{
  font-weight:900;
}

/* ANIMATION */
.fade-up{
  opacity:0;
  transform:translateY(40px);
  transition:.8s ease;
}

.fade-up.show{
  opacity:1;
  transform:none;
}
      `}</style>
    </div>
  );
}
