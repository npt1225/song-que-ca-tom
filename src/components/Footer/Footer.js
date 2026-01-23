import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-section pt-5 mt-5">
        <div className="container py-5">
          {/* Top */}
          <div className="footer-top pb-4 mb-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-3">
                <h1 className="footer-logo mb-0">SÔNG QUÊ</h1>
                <p className="footer-slogan">
                  Hải sản & cá đồng tươi sống mỗi ngày
                </p>
              </div>

              <div className="col-lg-6">
                <div className="position-relative">
                  <input
                    className="form-control footer-input rounded-pill"
                    type="email"
                    placeholder="Nhập email để nhận báo giá & ưu đãi"
                  />
                  <button className="btn footer-btn rounded-pill">
                    Đăng ký
                  </button>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="d-flex justify-content-lg-end gap-2">
                  <Social icon="facebook-f" />
                  <Social icon="youtube" />
                  <Social icon="tiktok" />
                  <Social icon="zalo" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="row g-5">
            <FooterCol
              title="Vì sao chọn Hải Sản Sông Quê?"
              text="Hải sản – cá đồng tươi sống, bắt trong ngày. Tuyển chọn kỹ, không hàng đông lạnh, giao nhanh nội thành."
            />

            <FooterLinks
              title="Danh mục"
              links={[
                "Tôm càng xanh",
                "Cá lóc – cá trê – cá rô",
                "Tép – cua – ốc",
                "Hải sản theo mùa",
                "Combo tiết kiệm",
                "Hàng đặt trước",
              ]}
            />

            <FooterLinks
              title="Hỗ trợ khách hàng"
              links={[
                "Hướng dẫn đặt hàng",
                "Thanh toán & giao hàng",
                "Chính sách đổi trả",
                "Câu hỏi thường gặp",
                "Liên hệ Zalo",
                "Hotline tư vấn",
              ]}
            />

            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">Liên hệ</h4>
              <p>📍 Chung cư An Sương – Lô A2, Quận 12, TP.HCM</p>
              <p>📧 haisansongque@gmail.com</p>
              <p>📞 / Zalo: <strong>0981 491 456</strong></p>
              <p>⏰ Giao hàng: 7h – 19h mỗi ngày</p>
              <img
                src="img/payment.png"
                alt="payment"
                className="img-fluid mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              © {new Date().getFullYear()} Hải Sản Sông Quê. Tươi sống mỗi ngày.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Thiết kế & vận hành bởi Sông Quê Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Social({ icon }) {
  return (
    <a className="footer-social" href="#">
      <i className={`fab fa-${icon}`} />
    </a>
  );
}

function FooterCol({ title, text }) {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="footer-title">{title}</h4>
      <p>{text}</p>
      <a href="#" className="footer-readmore">
        Xem chi tiết
      </a>
    </div>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="footer-title">{title}</h4>
      <ul className="footer-links">
        {links.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
