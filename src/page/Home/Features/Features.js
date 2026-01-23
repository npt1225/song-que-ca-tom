import React from "react";

export default function Features() {
    return (
        <>
            {/* Phần Tính Năng / Dịch Vụ Start */}
            <div className="container-fluid features py-5 seafood-features">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="features-item text-center rounded p-4">
                                <div className="features-icon mb-4 mx-auto">
                                    <i className="fas fa-car-side"></i>
                                </div>
                                <div className="features-content">
                                    <h5>Miễn Phí Vận Chuyển</h5>
                                    <p className="mb-0">Miễn phí ship nội thành</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="features-item text-center rounded p-4">
                                <div className="features-icon mb-4 mx-auto">
                                    <i className="fas fa-user-shield"></i>
                                </div>
                                <div className="features-content">
                                    <h5>Thanh Toán An Toàn</h5>
                                    <p className="mb-0">100% bảo mật thông tin</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="features-item text-center rounded p-4">
                                <div className="features-icon mb-4 mx-auto">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <div className="features-content">
                                    <h5>Đổi Trả Dễ Dàng</h5>
                                    <p className="mb-0">Đổi trả trong 30 ngày</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="features-item text-center rounded p-4">
                                <div className="features-icon mb-4 mx-auto">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="features-content">
                                    <h5>Hỗ Trợ 24/7</h5>
                                    <p className="mb-0">Tư vấn nhanh chóng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STYLE */}
            <style>
                {`
/* ===== SEAFOOD FEATURES ===== */
.seafood-features{
  background: linear-gradient(180deg,#f8fdff,#ffffff);
}

/* Card */
.seafood-features .features-item{
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(0,119,182,.12);
  border: 1px solid rgba(0,180,216,.18);
  transition: .35s ease;
  height: 100%;
}

/* Hover card */
.seafood-features .features-item:hover{
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0,119,182,.25);
}

/* Icon circle */
.seafood-features .features-icon{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,#023e8a,#0077b6,#00b4d8);
  box-shadow: 0 10px 25px rgba(0,119,182,.35);
}

/* Icon */
.seafood-features .features-icon i{
  font-size: 34px;
  color: #fff;
}

/* Title */
.seafood-features h5{
  font-weight: 800;
  color: #023e8a;
  margin-bottom: 6px;
}

/* Text */
.seafood-features p{
  color: #555;
  font-size: 15px;
}

/* Hover icon glow */
.seafood-features .features-item:hover .features-icon{
  background: linear-gradient(135deg,#00b4d8,#48cae4);
}
`}
            </style>
            {/* Phần Tính Năng / Dịch Vụ End */}
        </>
    );
}
