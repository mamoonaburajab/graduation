import React, { useEffect, useState } from "react";
import CardArticle from "../../component/ArticleD/CardArticle";
import "./Guast.css";

const Guest = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4803/api/articles") // Full URL
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div>
      <nav className="navbar">
        <button className="nav-button">
          <a href="/login">تسجيل الدخول</a>
        </button>
      </nav>
      <div className="article-card">
        {" "}
        {articles.map((article) => (
          <CardArticle
            key={article.ID}
            title={article.Title}
            paragraph={article.text} 
            image={article.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Guest; 
