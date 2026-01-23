import React from "react";

export default function Facts() {
  return (
    <div className="container-fluid py-5 facts-section">
      <div className="container">
        <div className="facts-box rounded-4 p-5">
          <div className="row g-4 justify-content-center">
            <FactItem icon="fa-users" title="Khách hàng hài lòng" value="1963+" />
            <FactItem icon="fa-award" title="Chất lượng dịch vụ" value="99%" />
            <FactItem icon="fa-certificate" title="Chứng nhận chất lượng" value="33" />
            <FactItem icon="fa-box-open" title="Sản phẩm sẵn có" value="789+" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FactItem({ icon, title, value }) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-3">
      <div className="fact-card text-center p-5 rounded-4">
        <i className={`fa ${icon} fact-icon mb-3`} />
        <h4 className="fact-title">{title}</h4>
        <h1 className="fact-value">{value}</h1>
      </div>
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
