import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './CardChildDoc.css'
function CardChildDoc() {
  return (
    <div className="">
      <div className="conta-doc">
        <Card
          style={{ width: "18rem", height: "21rem" }}
          className="card-child"
        >
          <Card.Img
            variant="top"
            className="card-img"
            src="https://img.freepik.com/vetores-premium/desenho-de-rosto-de-menino-bonito_18591-41511.jpg?w=740"
          />
          <Card.Body>
            <Card.Title>اسم الطفل</Card.Title>
            <Card.Text>: رقم الهوية</Card.Text>
            <Card.Text>: العمر</Card.Text>
          </Card.Body>

          <Card.Body className="card-buttons buttons-card">
            <Button variant="success" className="btn-child-doc">
              <Link to="/" className="link-style">
                    التفاصيل
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardChildDoc;
