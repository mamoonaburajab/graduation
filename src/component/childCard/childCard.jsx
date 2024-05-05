import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useChild } from "../../assets/useRef/ChildContext";
import NavbarM from "../navbarMom/NavbarM";
import "./ChildCard.css";

function ChildCard() {
  const { childId } = useParams();
  const { setID } = useChild();
  const [measurements, setMeasurements] = useState({}); // State to store the fetched data

  useEffect(() => {
    setID(childId);
    fetch(
      `http://localhost:4001/api/mother/MotherChildCard/childCard/${childId}`
    )
      .then((response) => response.json())
      .then((data) => setMeasurements(data))
      .catch((error) => console.error("Error fetching measurements:", error));
  }, [childId, setID]);

  return (
    <div>
      <NavbarM />
      <Card style={{ width: "18rem", height: "auto" }} className="card-child">
        <Card.Img
          className="card-img"
          variant="top"
          src="https://img.freepik.com/vetores-premium/desenho-de-rosto-de-menino-bonito_18591-41511.jpg?w=740"
        />
        <Card.Body>
          <Card.Title>اسم الطفل :</Card.Title>
          <Card.Text>رقم الهوية: {childId}</Card.Text>
          <Card.Text>العمر: {measurements.age}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>الوزن: {measurements.weight}</ListGroup.Item>
          <ListGroup.Item>الطول: {measurements.height}</ListGroup.Item>
          <ListGroup.Item>
            محيط الراس: {measurements.head_circumference}
          </ListGroup.Item>
          <ListGroup.Item>
            فيتامين A+D: {measurements.vitamin_A_D}
          </ListGroup.Item>
          <ListGroup.Item>
            كبسولة فيتامين A: {measurements.vitamin_capsule_A}
          </ListGroup.Item>
          <ListGroup.Item>الحديد: {measurements.lron}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default ChildCard;
