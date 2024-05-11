import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import './Article.css';
import articlesData from '../../assets/data/article/ArticleData.json'; // Import your JSON data

const Article = () => {
  const [articles, setArticles] = useState(articlesData.entries); // Manage articles in state
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(""); // State to store custom image URL or use a default

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newId = articles.length + 1; // Auto-increment ID based on length
    const defaultImage = "https://via.placeholder.com/150"; // Placeholder image URL
    
    const newEntry = {
      id: newId,
      title: title,
      paragraph: paragraph,
      image: image || defaultImage, // Use provided image or default if none provided
      link: link
    };
    
    setArticles([...articles, newEntry]); // Update the articles state with new entry

    // Reset form fields after submission
    setTitle("");
    setParagraph("");
    setLink("");
    setImage("");
  };

  return (
    <div className="Article-container-article">
      <div className="Article-card-article">
        <h2 className="notes-heading-article">اضافة مقال جديد</h2>
        <Form onSubmit={handleSubmit} className="notes-form-article">
          <Form.Item className="form-item-article">
            <div className="custom-text-article">أدخل العنوان</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="أدخل العنوان"
              className="input-field-article"
            />
          </Form.Item>
          <Form.Item className="form-item-article">
            <div className="custom-text-article">المقال</div>
            <Input.TextArea
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              placeholder="أدخل المقال"
              rows={4}
              className="input-field-article"
            />
          </Form.Item>
          <Form.Item className="form-item-article">
            <div className="custom-text-article">أدخل رابط الصورة</div>
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="أدخل رابط الصورة أو اتركه فارغاً للصورة الافتراضية"
              className="input-field-article"
            />
          </Form.Item>
          <Form.Item className="form-item-article">
            <div className="custom-text-article">رابط ذي صلة</div>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="أدخل الرابط"
              className="input-field-article"
            />
          </Form.Item>
          <Form.Item className="form-item-article">
            <Button type="primary" htmlType="submit" className="submit-button-article">
              إضافة مقال
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Article;
