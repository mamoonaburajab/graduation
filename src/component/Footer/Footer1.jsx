import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.css";
// Reusable SocialIcon component for displaying social media icons
const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon" size={30} />
);

// Simplified Footer component
const SimpleFooter = () => {
  return (
    <div className="footer">
      <div className="brand-section">
        <div className="social-icons-container">
          <div className="icons">
            <SocialIcon icon={FaFacebookSquare} />
            <SocialIcon icon={FaInstagram} />
            <SocialIcon icon={FaTwitterSquare} />
            <SocialIcon icon={FaDribbbleSquare} />
          </div>
          <div>
            {" "}
            <h1>جميع الحقوق &copy; محفوظة لوزارة الصحة الفلسطينية</h1>
          </div>
          <div>
            {" "}
            <h1 className="footer-text"> نسعى لتقديم العناية الفائقة لاطفالكم </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleFooter;
