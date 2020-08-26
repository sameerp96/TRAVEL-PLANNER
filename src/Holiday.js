import React from 'react'
import "./Holiday.css";
import { Form , Col, Row, Button } from 'react-bootstrap';
import Date from "./Date";
import Footer from './Footer';
import HolidayCards from "./HolidayCards";




function Holiday() {

    return (
        <div>   
                <div className="holiday_searchbar3" >
                   
                <Form>
                <div className="first_field3">
                <Row>  
                <Col>
                <Form.Control  as="select">
                         <option value="" selected disabled> From </option>
                         <option>Place1</option>
                         <option>Place2</option>
                         <option>Place3</option>
                         <option>Place4</option>
                         <option>Place5</option>
                </Form.Control>
                </Col>
                <Col>
                <Form.Control  as="select">
                         <option value="" selected disabled> To </option>
                         <option>Place1</option>
                         <option>Place2</option>
                         <option>Place3</option>
                         <option>Place4</option>
                         <option>Place5</option>
                </Form.Control>
                </Col>
                </Row>
                </div>

                <div className="second_field3">
                <Row>
                <Col>
                <Form.Control as="select">
                        <option value="" selected disabled>Type</option>
                        <option>Type 1</option>
                        <option>Type 2 </option>
                        <option>Type 3 </option>
                        <option>Type 4</option>
                        <option>Type 5</option>
                </Form.Control>
                </Col>

                <Col>
                <Form.Control  as="select">
                         <option value="" selected disabled>No. of people</option>
                         <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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

                <div className="datepicker3">
                    <p className="dep">From Date</p>
                   <Date/>
                   <p className="arr">To Date</p>
                   <Date/>
                   </div>

                </Form>

                <div className="search_button_box">
                <Button variant="outline-secondary" className="search_button3" onClick >Search</Button>
                </div>
                </div>

                <div>
                    <h2 className="heading1"> Holidays </h2>
                    <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
                </div>

                <div>
                    <HolidayCards/>
                </div>

                <div>
                    <Footer/>
                </div>
       
        </div>
    
    )
    
}

export default Holiday;
