import React from "react";

import "./Home.css";
import CardArticle from "../../../component/article/Article";
import Slider from "../../../component/slider/Slider";
import Footer1 from "../../../component/Footer/Footer1";
import NavbarM from "../../../component/navbarMom/NavbarM";

const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="navbar1">
          <NavbarM />
        </div>
        <div className="link-website">
          <a href="https://site.moh.ps/">
            الموقع الرسمي لوزارة الصحة الفلسطينية
          </a>
        </div>
        <div>
          <Slider />
        </div>
        <div className="articleCard">
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </div>
        <div>
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
