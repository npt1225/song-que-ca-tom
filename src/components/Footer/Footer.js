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
                                <h1 className="footer-logo mb-0">Fruitables</h1>
                                <p className="footer-slogan">Fresh products</p>
                            </div>

                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <input
                                        className="form-control footer-input rounded-pill"
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                    />
                                    <button className="btn footer-btn rounded-pill">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="d-flex justify-content-lg-end gap-2">
                                    <Social icon="twitter" />
                                    <Social icon="facebook-f" />
                                    <Social icon="youtube" />
                                    <Social icon="linkedin-in" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="row g-5">
                        <FooterCol
                            title="Vì sao chọn chúng tôi?"
                            text="Hải sản tươi sống mỗi ngày, kiểm định chất lượng rõ ràng, giao nhanh nội thành."
                        />

                        <FooterLinks
                            title="Thông tin"
                            links={["Giới thiệu", "Liên hệ", "Chính sách", "Điều khoản", "Đổi trả", "Hỗ trợ"]}
                        />

                        <FooterLinks
                            title="Tài khoản"
                            links={[
                                "Tài khoản của tôi",
                                "Chi tiết shop",
                                "Giỏ hàng",
                                "Yêu thích",
                                "Lịch sử đơn",
                                "Đơn quốc tế",
                            ]}
                        />

                        <div className="col-lg-3 col-md-6">
                            <h4 className="footer-title">Liên hệ</h4>
                            <p>📍 1429 Netus Rd, NY 48247</p>
                            <p>📧 Example@gmail.com</p>
                            <p>📞 +0123 4567 8910</p>
                            <img src="img/payment.png" alt="" className="img-fluid mt-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            © {new Date().getFullYear()} Fruitables. All rights reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed by <a href="https://htmlcodex.com">HTML Codex</a>
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
                Xem thêm
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
            <style>
                {`
/* ================= FACT SECTION ================= */
.facts-section{
  background: linear-gradient(180deg,#f5fbff,#ffffff);
}

.facts-box{
  background:#eaf6ff;
}

.fact-card{
  background:#ffffff;
  box-shadow:0 14px 35px rgba(0,119,182,.15);
  transition:.3s ease;
  border:1px solid rgba(0,119,182,.12);
}

.fact-card:hover{
  transform:translateY(-8px);
  box-shadow:0 22px 45px rgba(0,119,182,.25);
}

.fact-icon{
  font-size:44px;
  color:#0077b6;
}

.fact-title{
  font-weight:700;
  color:#555;
  margin-bottom:6px;
}

.fact-value{
  font-weight:900;
  color:#023e8a;
}


/* ================= FOOTER ================= */
.footer-section{
  background:#0b1d2d;
  color:#bfc9d1;
}

.footer-top{
  border-bottom:1px solid rgba(255,255,255,.12);
}

.footer-logo{
  color:#00b4d8;
  font-weight:900;
}

.footer-slogan{
  color:#9aa9b6;
}

.footer-input{
  padding:14px 22px;
  border:none;
}

.footer-btn{
  position:absolute;
  top:0;
  right:0;
  height:100%;
  padding:0 30px;
  background:linear-gradient(90deg,#ff7a00,#ffd000);
  font-weight:800;
  border:none;
}

.footer-social{
  width:42px;
  height:42px;
  border-radius:50%;
  border:1px solid #00b4d8;
  color:#00b4d8;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:.25s ease;
}

.footer-social:hover{
  background:#00b4d8;
  color:#000;
}

.footer-title{
  color:#ffffff;
  font-weight:800;
  margin-bottom:14px;
}

.footer-links{
  list-style:none;
  padding:0;
}

.footer-links li{
  margin-bottom:8px;
  cursor:pointer;
  transition:.2s;
}

.footer-links li:hover{
  color:#00b4d8;
}

.footer-readmore{
  display:inline-block;
  margin-top:10px;
  color:#00b4d8;
  font-weight:700;
}

.copyright{
  background:#071521;
  color:#adb5bd;
}

.copyright a{
  color:#00b4d8;
}
`}
            </style>

        </div>
    );
}
