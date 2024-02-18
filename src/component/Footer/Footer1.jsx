import React from 'react';
import './Footer.css';
const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} My Website</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
