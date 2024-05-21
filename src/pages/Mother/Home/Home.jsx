import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "../../../component/slider/Slider";
import Footer1 from "../../../component/Footer/Footer1";
import NavbarM from "../../../component/navbarMom/NavbarM";
import CardArticle from "../../../component/ArticleD/CardArticle";

const Home = () => {
  const [articles, setArticles] = useState([]); // State to hold articles

  useEffect(() => {
    fetch("http://localhost:4804/api/Mother/home") // Adjusted to correct port and endpoint
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="home">
      <div>
        <div className="navbar1">
          <NavbarM />
        </div>
        <div className="link-website">
          الموقع الرسمي لوزارة الصحة الفلسطينية
          <a href="https://site.moh.ps/">
            -> <span className="link-website-btn"> اضغط هنا</span>
          </a>
        </div>
        <div>
          <Slider />
        </div>
        <div className="articleCard">
          {articles.map((article) => (
            <CardArticle
              key={article.id}
              title={article.Title}
              paragraph={article.text}
              image={article.image}
              Link={article.Link}
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
