import React from 'react'
import "./Thingstodo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Col, Row, Button } from 'react-bootstrap';
import Footer from './Footer';
import ThingsCards from "./ThingsCards";


function Thingstodo() {

    return (
            <div className="things_to_do">
            <div className="things_searchbar1">

            <Form>
                <div className="first_field1">
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
                </div>
            <div className="second_field1">
            <Row>
                <Col>
                <Form.Control as="select">
                        <option value="" selected disabled>Type</option>
                        <option>Adventurous</option>
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

                <Col>
                <Form.Control  as="select">
                        <option value="" selected disabled>Duration</option>
                        <option>0 min  - 30 min</option>
                        <option>30 min - 1 hr</option>
                        <option>30 min - 1 hr</option>
                        <option>30 min - 1 hr</option>
                        <option>30 min - 1 hr</option>
                </Form.Control>
                </Col>
            </Row>
            </div>
            </Form>

            <div className="search_button1">
            <Button variant="outline-secondary"  className="search_button"  >Search</Button>
            </div>   

            </div>

            <div>
            <h2 className="heading1"> Things to do </h2>
            <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            </div>

            <div id="sbtn">
                    <ThingsCards/>
            </div>

            <div>
                    <Footer/>
            </div>
            </div>


        
    )
}

export default Thingstodo
