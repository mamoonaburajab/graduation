import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./MotherChildCard.css";
import NavbarM from "../navbarMom/NavbarM";

function MotherChildCard() {
  const [childInfo, setChildInfo] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const url = `http://localhost:3121/api/mother/MotherChildCard/${userId}`;

    if (userId) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {
            setChildInfo(data);
          } else {
            console.log("No data found");
          }
        })
        .catch(error => console.error("Error fetching child data:", error));
    }
  }, []);

  const calculateAgeInMonths = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const months = (currentDate.getFullYear() - birthDate.getFullYear()) * 12;
    return months - birthDate.getMonth() + currentDate.getMonth();
  };

  if (childInfo.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavbarM />
      <div className="conta">
        {childInfo.map((child, index) => (
          <Card key={index} style={{ width: "15rem", height: "32em" }} className="card-child">
            <Card.Img
              variant="top"
              className="card-img"
              src={child.imageUrl || "https://img.freepik.com/vetores-premium/desenho-de-rosto-de-menino-bonito_18591-41511.jpg?w=740"}
            />
            <Card.Body>
              <Card.Title>{child.first_name} {child.last_name}</Card.Title>
              <Card.Text>رقم الهوية: {child.ID}</Card.Text>
              <Card.Text>العمر: {calculateAgeInMonths(child.DOB)} شهر</Card.Text>
            </Card.Body>
            <Card.Body className="card-buttons buttons-card">
              <Button variant="success" className="btn-child">
                <Link to="/mother/MotherChildCard/Vac" className="link-style">
                  تطعيمات الطفل
                </Link>
              </Button>
              <Button variant="success" className="btn-child">
                <Link to="/mother/MotherChildCard/childCard" className="link-style">
                  قياسات الطفل
                </Link>
              </Button>
              <Button variant="success" className="btn-child">
                مقارنة قياسات الطفل
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MotherChildCard;
