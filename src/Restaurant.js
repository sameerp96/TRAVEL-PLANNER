import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Col, Row, Button } from 'react-bootstrap';
import "./Restaurant.css";
import Date from "./Date";
import Footer from './Footer';
import RestaurantCards from "./RestaurantCards";



function Restaurant() {
    return (
        <div>
            <div className="restaurant_searchbar6">

    <Form>
    <div className="first_field6">
    <Row>
    <Col>
    <Form.Control  as="select">
             <option value="" selected disabled> Where</option>
             <option>Place1</option>
            <option>Place2</option>
            <option>Place3</option>
            <option>Place4</option>
            <option>Place5</option>
    </Form.Control>
    </Col>
    </Row>
    </div>
    <div className="restaurant_date">
        <a>Select Date</a><Date/>
    </div>
<div className="second_field6">
<Row>
    <Col>
    <Form.Control as="select">
            <option value="" selected disabled>Cuisine</option>
            <option>Caribbean</option>
            <option>Indian </option>
            <option>Vietnamese </option>
            <option>Korean</option>
            <option>German</option>
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

    <Col>
    <Form.Control  as="select">
            <option value="" selected disabled>Select Time</option>
            <option>12:00 AM</option>
            <option>01:00 AM</option>
            <option>02:00 AM</option>
            <option>03:00 AM</option>
            <option>04:00 AM</option>
            <option>05:00 AM</option>
            <option>06:00 AM</option>
            <option>06:30 AM</option>
            <option>07:00 AM</option>
            <option>07:30 AM</option>
            <option>08:30 AM</option>
    </Form.Control>
    </Col>
    </Row>
    </div>
    </Form>

    <div className="search_button6">
    <Button variant="outline-secondary" className="search_button6" onClick >Search</Button>
    </div>   

    </div>

    <div>
    <h2 className="heading1"> Events </h2>
    <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
    </div>

    <div>
        <RestaurantCards/>
    </div>

    <div>
        <Footer/>
    </div>
        </div>
    )
}

export default Restaurant
