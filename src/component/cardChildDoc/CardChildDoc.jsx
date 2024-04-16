import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CardChildDoc.css";

function CardChildDoc({ first_name, last_name, BOD, ID }) {
  // Calculate age in months based on BOD
  const calculateAgeInMonths = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let months = (today.getFullYear() - birth.getFullYear()) * 12;
    months -= birth.getMonth();
    months += today.getMonth();
    return months < 0 ? 0 : months; // in case the BOD is in the future, return 0
  };

  const ageInMonths = calculateAgeInMonths(BOD);  // Use BOD to calculate age in months

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
            <Card.Title>
              {first_name} <span> </span> {last_name}
            </Card.Title>
            {/* Render the name of the child */}
            <Card.Text>{ID}</Card.Text>
            {/* This line represents the ID, adjust as needed */}
            <Card.Text>العمر: {ageInMonths} شهر</Card.Text>
            {/* Render the age of the child in months */}
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
