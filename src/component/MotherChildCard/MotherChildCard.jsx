import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./MotherChildCard.css";

function MotherChildCard() {
  return (
    <Card style={{ width: "18rem", height: "30rem" }} className="card-child">
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
        <Button variant="success" className="btn-child">
          تطعيمات الطفل
        </Button>
        <Button variant="success" className="btn-child">
          <Link to="/mother/childCard" className="link-style">
            قياسات الطفل
          </Link>
        </Button>
        <Button variant="success" className="btn-child">
          مقارنة قياسات الطفل
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MotherChildCard;
