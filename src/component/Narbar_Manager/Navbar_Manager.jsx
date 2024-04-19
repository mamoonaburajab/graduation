import React from "react";
import "./Navbar_Manager.css";

const Navbar_Manager = () => {
  return (
    <div className="div-manager">
      <main className="content">
        <div className="info-box div-manager">
          <div className="options div-manager">
            <h3 className="option-btn">الصفحة الرئيسية</h3>
            <hr className="line" />
            <button className="option-btn"> اضافة مستخدم</button>
            <button className="option-btn">إدارة مواعيد العيادة</button>
            <button className="option-btn">تعديل معلومات المستخدم</button>
            <button className="option-btn">إدارة المحتوى الثقافي</button>
            <hr className="line" />
          </div>

          <a href="/login" className="option-btn logout">
            تسجيل الخروج
          </a>
        </div>
      </main>
    </div>
  );
};

export default Navbar_Manager;
