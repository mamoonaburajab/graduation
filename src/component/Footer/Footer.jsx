// Footer.jsx

import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>نظام إدارة الصحة</p>
        <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
