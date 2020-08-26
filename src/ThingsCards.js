import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./ThingsCards.css";
import things1 from "./images/things/things1.jpg"
import things2 from "./images/things/things2.jpg"
import things3 from "./images/things/things3.jpeg"

function ThingsCards() {
    return (
        <div>
            <div className="things_cards">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={things1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={things2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={things3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
            </div>
        </div>
    )
}

export default ThingsCards
