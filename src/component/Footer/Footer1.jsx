import React from 'react';
import './Footer.css'; // Import CSS file

export default function Footer() {
  const footerStyle = {
    background: 'radial-gradient(circle at 53.4% -80.8%, rgba(9, 29, 85, 1) 0.2%, rgba(0, 0, 0, 1) 100.2%)',
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-container" dir="rtl">
        <div className="footer-column">
          <h2 className="footer-heading">حولنا</h2>
          <p className="footer-text">نحن ملتزمون بتحسين صحتك ورفاهيتك.</p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">اتصل بنا</h2>
          <p className="footer-text">البريد الإلكتروني: contact@example.com</p>
          <p className="footer-text">الهاتف: +1 (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">تابعنا</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" dir="rtl">
        <p className="footer-text">&copy; ٢٠٢٤ نظام إدارة الصحة. كل الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
