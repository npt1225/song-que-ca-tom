import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container-fluid fixed-top">
            {/* Topbar */}
            <div className="container topbar seafood-topbar d-none d-lg-block">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <a href="#">Chung cư An Sương Lô A3, Quận 12, TP.HCM</a>
                        </small>

                        <small className="me-3">
                            <i className="fas fa-phone me-2"></i>
                            <a href="tel:0981491456">0981 491 456</a>
                        </small>
                    </div>

                    <div className="top-link pe-2">
                        <a href="#"><small className="mx-2">Chính Sách Bảo Mật</small>/</a>
                        <a href="#"><small className="mx-2">Điều Khoản</small>/</a>
                        <a href="#"><small className="ms-2">Đổi Trả & Hoàn Tiền</small></a>
                    </div>
                </div>
            </div>



            {/* Main Navbar */}
            <div className="container px-0">
                <nav className="navbar navbar-expand-xl seafood-navbar">
                    <NavLink to="/" className="navbar-brand">
                        <h1 className="display-6">Hải Sản Tươi</h1>
                    </NavLink>

                    <button
                        className="navbar-toggler py-2 px-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                                end
                            >
                                Trang Chủ
                            </NavLink>

                            <NavLink
                                to="/gioi-thieu"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                            >
                                Giới Thiệu
                            </NavLink>

                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Danh Mục
                                </a>

                                <div className="dropdown-menu position-absolute m-0">
                                    <NavLink to="/ca-tuoi" className="dropdown-item">Cá Tươi</NavLink>
                                    <NavLink to="/tom-tuoi" className="dropdown-item">Tôm Tươi</NavLink>
                                    <NavLink to="/muc-tuoi" className="dropdown-item">Mực Tươi</NavLink>
                                    <NavLink to="/hai-san-khac" className="dropdown-item">Hải Sản Khác</NavLink>
                                </div>
                            </div>

                            <NavLink
                                to="/bai-viet"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                            >
                                Bài Viết
                            </NavLink>

                            <NavLink
                                to="/san-pham"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                            >
                                Sản Phẩm
                            </NavLink>

                            <NavLink
                                to="/lien-he"
                                className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                            >
                                Liên Hệ
                            </NavLink>
                        </div>

                        <div className="d-flex m-3 me-0 align-items-center">
                            <button
                                className="btn-search btn btn-md-square rounded-circle bg-white me-4"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            >
                                <i className="fas fa-search"></i>
                            </button>

                            <NavLink to="/gio-hang" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span
                                    className="position-absolute rounded-circle d-flex align-items-center justify-content-center px-1"
                                    style={{
                                        top: "-5px",
                                        left: "15px",
                                        height: "20px",
                                        minWidth: "20px",
                                    }}
                                >
                                    3
                                </span>
                            </NavLink>

                            <NavLink to="/tai-khoan" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </NavLink>
                        </div>
                    </div>
                </nav>

                {/* CSS thẳng vào */}
                <style>
                    {`
/* ===== SEAFOOD NAVBAR THEME ===== */
.seafood-navbar{
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 12px 18px;
  box-shadow: 0 12px 30px rgba(0, 119, 182, 0.18);
  border: 1px solid rgba(0, 180, 216, 0.18);
}

/* Logo */
.seafood-navbar .navbar-brand h1{
  margin: 0;
  font-weight: 900;
  color: #023e8a !important;
}

/* Nav link */
.seafood-navbar .nav-link{
  font-weight: 800;
  color: #023e8a !important;
  padding: 10px 14px !important;
  border-radius: 999px;
  transition: .25s ease;
}

/* Hover */
.seafood-navbar .nav-link:hover{
  background: rgba(0, 180, 216, 0.12);
  color: #0077b6 !important;
  transform: translateY(-1px);
}

/* Active */
.seafood-navbar .nav-link.active{
  background: linear-gradient(90deg,#023e8a,#0077b6,#00b4d8);
  color: #fff !important;
  box-shadow: 0 10px 22px rgba(0, 119, 182, 0.22);
}

/* Dropdown menu */
.seafood-navbar .dropdown-menu{
  border: 0;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.12);
  background: #ffffff;
}

/* Dropdown item */
.seafood-navbar .dropdown-item{
  font-weight: 800;
  color: #023e8a;
  border-radius: 12px;
  padding: 10px 12px;
  transition: .25s ease;
}

.seafood-navbar .dropdown-item:hover{
  background: rgba(0, 180, 216, 0.12);
  color: #0077b6;
}

/* Button search */
.seafood-navbar .btn-search{
  border: 2px solid rgba(0, 180, 216, 0.35) !important;
  transition: .25s ease;
}

.seafood-navbar .btn-search i{
  color: #0077b6 !important;
}

.seafood-navbar .btn-search:hover{
  background: rgba(0, 180, 216, 0.12) !important;
  transform: translateY(-1px);
}

/* Icons */
.seafood-navbar .fa-shopping-bag,
.seafood-navbar .fa-user{
  color: #023e8a;
  transition: .25s ease;
}

.seafood-navbar .fa-shopping-bag:hover,
.seafood-navbar .fa-user:hover{
  color: #00b4d8;
  transform: translateY(-1px);
}

/* Cart badge */
.seafood-navbar .position-relative span{
  background: linear-gradient(90deg,#ff7a00,#ffd000) !important;
  color: #111 !important;
  font-weight: 900;
  border: 2px solid #fff;
}

/* Toggler mobile */
.seafood-navbar .navbar-toggler{
  border: 2px solid rgba(0, 180, 216, 0.35);
  border-radius: 12px;
}

.seafood-navbar .navbar-toggler .fa-bars{
  color: #0077b6 !important;
}
`}
                </style>

            </div>

            <style>
                {`
/* ===== TOPBAR SEAFOOD ===== */
.seafood-topbar {
  background: linear-gradient(
    90deg,
    #023e8a 0%,
    #0077b6 45%,
    #00b4d8 100%
  );
  border-radius: 0 0 16px 16px;
  padding: 20px 18px;
  box-shadow: 0 8px 20px rgba(0, 119, 182, 0.35);
}

/* text */
.seafood-topbar a {
  color: #ffffff !important;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
}

/* hover */
.seafood-topbar a:hover {
  color: #ffe066 !important;
}

/* icon biển vàng */
.seafood-topbar i {
  color: #ffe066 !important;
  font-size: 14px;
}

/* link phải */
.seafood-topbar .top-link small {
  font-weight: 700;
}

/* mobile */
@media (max-width: 991px) {
  .seafood-topbar {
    border-radius: 0;
  }
    .seafood-navbar .navbar-collapse {
    background: #ffffff;
    margin-top: 12px;
    padding: 14px;
    border-radius: 16px;
    box-shadow: 0 14px 35px rgba(0, 119, 182, 0.18);
    border: 1px solid rgba(0, 180, 216, 0.18);
  }

  /* Cho menu item full width đẹp hơn */
  .seafood-navbar .navbar-nav .nav-link {
    justify-content: center;
    margin: 6px 0;
  }

  /* Dropdown menu trong mobile: không position absolute */
  .seafood-navbar .dropdown-menu {
    position: static !important;
    box-shadow: none;
    border: 1px solid rgba(0, 180, 216, 0.15);
    margin-top: 8px;
  }
}
`}
            </style>

        </div>
    );
}