import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./ChildCard.css";
function ChildCard() {

  return (
    <Card style={{ width: "18rem", height: "36rem" }} className="card-child">
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
      <ListGroup className="list-group-flush">
        <ListGroup.Item>:الوزن</ListGroup.Item>
        <ListGroup.Item>:الطول</ListGroup.Item>
        <ListGroup.Item>: محيط الراس</ListGroup.Item>
        <ListGroup.Item>فيتامين A+D</ListGroup.Item>
        <ListGroup.Item>كبسولة فيتامين A</ListGroup.Item>
        <ListGroup.Item>: الحديد</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ChildCard;
