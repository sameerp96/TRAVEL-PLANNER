import React from 'react';
import "./Hotels.css";
import { Form , Col, Row, Button } from 'react-bootstrap';
import Date from "./Date";
import Footer from './Footer';
import HotelCards from "./HotelCards.js";



function Hotels() {
    return (
        <div>
            <div className="hotel_searchbar5" >
                   
                   <Form>
                   <div className="first_field5">
                   <Row>  
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled> Where </option>
                            <option>Place1</option>
                            <option>Place2</option>
                            <option>Place3</option>
                            <option>Place4</option>
                            <option>Place5</option>
                   </Form.Control>
                   </Col>
                   </Row>
                   </div>

                   <div className="datepicker5">
                    <p className="dep">Check In</p>
                   <Date/>
                   <p className="arr">Check Out</p>
                   <Date/>
                   </div>
   
                   <div className="second_field5">
                   <Row>
                   <Col>
                   <Form.Control as="select">
                           <option value="" selected disabled>No. of people</option>
                           <option>1</option>
                           <option> 2 </option>
                           <option> 3 </option>
                           <option> 4</option>
                           <option> 5</option>
                   </Form.Control>
                   </Col>

                   <Col>
                   <Form.Control as="select">
                           <option value="" selected disabled>No. of rooms</option>
                           <option>1</option>
                           <option> 2 </option>
                           <option> 3 </option>
                           <option> 4</option>
                           <option> 5</option>
                   </Form.Control>
                   </Col>
   
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled>Type</option>
                            <option>Single</option>
                           <option>Double</option>
                           <option>Suite</option>
                   </Form.Control>
                   </Col>
   
                   <Col>
                   <Form.Control  as="select">
                            <option value="" selected disabled>Budget</option>
                            <option>0-50 $</option>
                           <option>50-100 $</option>
                           <option>50-100 $</option>
                           <option>50-100 $</option>
                           <option>50-100 $</option>
                   </Form.Control>
                   </Col>
                   </Row>
                   </div>
   
                   
                   </Form>
   
                   <div className="search_button_box">
                   <Button variant="outline-secondary" className="search_button5" onClick >Search</Button>
                   </div>
                   </div>
   
                   <div>
                       <h2 className="heading1"> Hotels </h2>
                       <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
                   </div>


                   <div>
                       <HotelCards/>
                   </div>

                   <div>
                       <Footer/>
                   </div>
        </div>
    )
}

export default Hotels
