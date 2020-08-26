import React from 'react';
import "./Flights.css";
import { Form , Col, Row, Button } from 'react-bootstrap';
import Date from "./Date";
import Footer from './Footer';


function Flights() {
    return (
        <div>
            <div className="flights_searchbar4" >
                   
                   <Form>
                   <div className="first_field4">
                   <Row>  
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled> From city</option>
                            <option>Place1</option>
                            <option>Place2</option>
                            <option>Place3</option>
                            <option>Place4</option>
                            <option>Place5</option>
                   </Form.Control>
                   </Col>
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled> To city</option>
                            <option>Place1</option>
                            <option>Place2</option>
                            <option>Place3</option>
                            <option>Place4</option>
                            <option>Place5</option>
                   </Form.Control>
                   </Col>
                   </Row>
                   </div>

                   <div className="datepicker4">
                    <p className="dep">Departure</p>
                   <Date/>
                   <p className="arr">Arrival</p>
                   <Date/>
                   </div>
   
                   <div className="second_field4">
                   <Row>
                   <Col>
                   <Form.Control as="select">
                           <option value="" selected disabled>Travellers</option>
                           <option>1</option>
                           <option> 2 </option>
                           <option>3 </option>
                           <option> 4</option>
                           <option>5</option>
                   </Form.Control>
                   </Col>
   
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled>Class</option>
                            <option>Economy</option>
                           <option>Premium Economy</option>
                           <option>Business</option>
                           <option>First class</option>
                   </Form.Control>
                   </Col>
   
                   </Row>

                   </div>
   
                   </Form>
   
                   <div className="search_button_box">
                   <Button variant="outline-secondary" className="search_button4" onClick >Search</Button>
                   </div>
                   </div>
   
                   <div>
                       <h2 className="heading1"> Flights </h2>
                       <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
                   </div>

                   <div>
                       <Footer/>
                   </div>
          
        </div>
    )
}

export default Flights
