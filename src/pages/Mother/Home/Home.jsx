import React from "react";
import "./Home.css";
import CardArticle from "../../../component/article/Article";
import Slider from "../../../component/slider/Slider";
import Footer1 from "../../../component/Footer/Footer1";
import NavbarM from "../../../component/navbarMom/NavbarM";
import ArticleData from "../../../assets/data/article/ArticleData.json";

const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="navbar1">
          <NavbarM />
        </div>
        <div className="link-website">
          {" "}
          الموقع الرسمي لوزارة الصحة الفلسطينية
          <a href="https://site.moh.ps/">
            ->
            <span className="link-website-btn"> اضغط هنا</span>
          </a>
        </div>
       
        <div>
          <Slider />
        </div>
        <div className="articleCard">
          {ArticleData.entries.map((entry) => (
            <CardArticle
              key={entry.id}
              title={entry.title}
              paragraph={entry.paragraph}
              image={entry.image}
            />
          ))}
        </div>
        <div>
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
