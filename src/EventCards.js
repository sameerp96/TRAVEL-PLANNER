import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./EventCards.css";
import event1 from "./images/events/event1.jpg";
import event2 from "./images/events/event2.jpg";
import event3 from "./images/events/event3.jpg";

function EventCards() {
    return (
        <div>
            <div className="events_crads">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={event1} />
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
  <Card.Img variant="top" src={event2} />
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
  <Card.Img variant="top" src={event3} />
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

export default EventCards
