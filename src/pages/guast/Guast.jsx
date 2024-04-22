import React from "react";
import CardArticle from "../../component/article/Article";
import ArticleData from "../../assets/data/article/ArticleData.json";
import "./Guast.css"; // Make sure to create this CSS file

const Guast = () => {
  return (
    <div>
      <nav className="navbar">
        <button className="nav-button"><a href="/login">
            تسجيل الدخول
            </a></button>
      </nav>
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
    </div>
  );
};

export default Guast;
