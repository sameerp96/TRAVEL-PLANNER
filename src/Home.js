import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./Home.css";
import { Carousel, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Time from './Time';
import Footer from './Footer';
import { Link } from "react-router-dom";



function Home() {
    return (
        <div>
        <div className="search_bar">
        <div>
        <InputGroup className="mb-3" size="lg">
            <FormControl
            placeholder="Where to go?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-primary" >Search</Button>
            </InputGroup.Append>
        </InputGroup>
        </div>
        </div>

        <h2 className="travel_title">Travel Tool</h2>
        <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>

        {/* <div className="home_banner"> */}

        {/* <div className="image_slider">
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://i.ibb.co/cDHyN45/slide3.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
             <h3>First slide label</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
             </Carousel.Item>
            <Carousel.Item>
              <img
             className="d-block w-100"
             src="https://activitybucket.com/wp-content/uploads/2020/02/The-Traveller-guy-1024x682.jpg"
             alt="Third slide"
             />

             <Carousel.Caption>
             <h3>Second slide label</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
               className="d-block w-100"
                src="https://images.all-free-download.com/images/graphicthumb/travel_the_journey_of_picture_167829.jpg"
                 alt="Third slide"
                 />

             <Carousel.Caption>
              <h3>Third slide label</h3>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
             </Carousel.Item>
            </Carousel>
        </div> */}

        <div className="travel_tool_box">
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/Fs8C117/weather1.jpg" />
            <Card.Body>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/fXSB2Hv/currency1.jpg" />
            <Card.Body>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
            <Card.Body>
            <Card.Img style={{ width: '4rem' }} variant="top" src="https://i.ibb.co/dc02SJJ/623867-clock-256x256.png" />
            <Card.Title><h2 className="time_title">Time</h2></Card.Title>
            <h2 className="time_render"><Time/></h2>
            </Card.Body>
        </Card>

        </div>


        
        {/* </div> */}
        
        <h2 className="offer_heading"> Special Offers </h2>
        <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>

        <div className="offer_box">

            <Link className="offer_title">
            <div className="offer_element">
            <Image className="solo" src="https://i.ibb.co/Q6HySqx/1163881-200.png" fluid />
            <h4>Business</h4>
            </div>
            </Link>

            <Link className="offer_title">
            <div className="offer_element">
            <Image className="solo" src="https://i.ibb.co/hCgYFHm/solo-traveler-1539541-1306559.png" fluid />
            <h4 className="offer_image_title">Solo</h4>
            </div>
            </Link>

            <Link className="offer_title">
            <div className="offer_element">
            <Image className="solo" src="https://i.ibb.co/nzzsZfs/frns.jpg" fluid />
            <h4>Friends</h4>
            </div>
            </Link>

            <Link className="offer_title">
            <div className="offer_element">
            <Image className="solo" src="https://i.ibb.co/gtjvdph/Capture1.jpg" fluid />
            <h4>Family</h4>
            </div>
            </Link>
            
            <Link className="offer_title">
            <div className="offer_element">
            <Image className="solo" src="https://i.ibb.co/w40ndYb/Capture.jpg" fluid />
            <h4>Couple</h4>
            </div>
            </Link>
        

        </div>

        <h2 className="place_heading"> Trending Places Around </h2>
        <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>


        <div className="cards1">

        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/9vBp00V/photo-1469854523086-cc02fe5d8800.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/jgSzFZG/photo-1526772662000-3f88f10405ff.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" />
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


         <div className="cards2">

        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/9vBp00V/photo-1469854523086-cc02fe5d8800.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/jgSzFZG/photo-1526772662000-3f88f10405ff.jpg" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" />
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

         <div>
             <Footer/>
         </div>
        
        </div>
        
    )
}

export default Home
