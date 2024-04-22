import React from "react";
import { Link } from "react-router-dom";
import "./Navbar_Manager.css";

const Navbar_Manager = () => {
  return (
    <div className="div-manager">
      <main className="content">
        <div className="info-box div-manager">
          <div className="options div-manager">
            <Link to="/administrative_Manager/home" className="option-btn">
              الصفحة الرئيسية
            </Link>
            <hr className="line" />
            <Link to="/administrative_Manager/adduser" className="option-btn">
              اضافة مستخدم
            </Link>
            <Link to="/manageappointments" className="option-btn">
              إدارة مواعيد العيادة
            </Link>
            <Link to="/edituser" className="option-btn">
              تعديل معلومات المستخدم
            </Link>
            <Link to="/managecontent" className="option-btn">
              إدارة المحتوى الثقافي
            </Link>
            <hr className="line" />
          </div>

          <Link to="/login" className="option-btn logout">
            تسجيل الخروج
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Navbar_Manager;
