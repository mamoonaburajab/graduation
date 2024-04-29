import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useChild } from "../../assets/useRef/ChildContext"; 
import NavbarM from "../navbarMom/NavbarM";
import "./ChildCard.css";

function ChildCard() {
  const { childId } = useParams();
  const { setID } = useChild(); // Use setID to update the context with the new ID

  useEffect(() => {
    setID(childId); // Set the ID in the context when the component mounts or when childId changes
  }, [childId, setID]);

  return (
    <div>
      <NavbarM />
      <Card style={{ width: "18rem", height: "35rem" }} className="card-child">
        <Card.Img
        className="card-img"
          variant="top"
          src="https://img.freepik.com/vetores-premium/desenho-de-rosto-de-menino-bonito_18591-41511.jpg?w=740"
        />
        <Card.Body>
          <Card.Title>اسم الطفل :</Card.Title>
          <Card.Text>رقم الهوية: {childId}</Card.Text>
          <Card.Text>العمر:</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>الوزن: </ListGroup.Item>
          <ListGroup.Item>الطول: </ListGroup.Item>
          <ListGroup.Item>محيط الراس:</ListGroup.Item>
          <ListGroup.Item>فيتامين A+D: </ListGroup.Item>
          <ListGroup.Item>كبسولة فيتامين </ListGroup.Item>
          <ListGroup.Item>الحديد: </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default ChildCard;
