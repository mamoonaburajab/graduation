import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CardChildDoc.css";

function CardChildDoc({ name, age }) {
  return (
    <div className="">
      <div className="conta-doc">
        <Card
          style={{ width: "18rem", height: "30rem" }}
          className="card-child"
        >
          <Card.Img
            variant="top"
            className="card-img"
            src="https://img.freepik.com/vetores-premium/desenho-de-rosto-de-menino-bonito_18591-41511.jpg?w=740"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {/* Render the name of the child */}
            <Card.Text>: رقم الهوية</Card.Text>
            {/* This line represents the ID, adjust as needed */}
            <Card.Text>Age: {age}</Card.Text>
            {/* Render the age of the child */}
          </Card.Body>

          <Card.Body className="card-buttons buttons-card">
            <Button variant="success" className="btn-child-doc">
              <Link to="//doctor/vac" className="link-style">
                التطعيمات
              </Link>
            </Button>
            <Button variant="success" className="btn-child-doc">
              <Link to="/doctor/measurement" className="link-style">
                القياسات
              </Link>
            </Button>
            <Button variant="success" className="btn-child-doc">
              <Link to="/doctor/measurement" className="link-style">
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
