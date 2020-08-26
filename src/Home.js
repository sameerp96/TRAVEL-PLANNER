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
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudIcon from '@material-ui/icons/Cloud';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { IconButton } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import ReactWeather from 'react-open-weather';



function Home() {
    return (
        <div>

        <div>

        </div>

        <div className="search_bar">
        <div>
        <InputGroup className="mb-3" size="lg">
            <FormControl
            placeholder="Where to go?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Link to="/SearchEngineResults"><Button variant="outline-secondary" >Search</Button></Link>
            </InputGroup.Append>
        </InputGroup>
        </div>
        </div>

        <h2 className="travel_title">Travel Tool</h2>
        <h6 className="line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>


        <div className="travel_tool_box">
        <Link><Card className="travel_tool_card_border" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/Fs8C117/weather1.jpg" />
            <Card.Body>
            </Card.Body>
        </Card></Link>

        <Link><Card className="travel_tool_card_border" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/fXSB2Hv/currency1.jpg" />
            <Card.Body>
            </Card.Body>
        </Card></Link>

        <Link style={{color:"black"}}><Card className="travel_tool_card_border" style={{ width: '20rem' }}>
            <Card.Body>
            <Card.Img style={{ width: '4rem' }} variant="top" src="https://i.ibb.co/dc02SJJ/623867-clock-256x256.png" />
            <Card.Title><h2 className="time_title">Time</h2></Card.Title>
            <h2 className="time_render"><Time/></h2>
            </Card.Body>
        </Card></Link>

        </div>

        
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
        <Link><Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "40%" }}>Tower Bridge</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="secondary" style={{ fontSize: 28 }}/></IconButton>
        </div>
        </Card.Body>
        </Card>
        
        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/9vBp00V/photo-1469854523086-cc02fe5d8800.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "44%" }}>Mount Bale</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's  
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/jgSzFZG/photo-1526772662000-3f88f10405ff.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "45%" }}>Baner Hills</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/m6JYVNk/pexels-photo-338504.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "36%" }}>Eagleton resort</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's  
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

         </div>

         <div className="cards2">
        
        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/Htt6Bk3/6.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "40%" }}>Tower Bridge</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="secondary" style={{ fontSize: 28 }}/></IconButton>
        </div>
        </Card.Body>
        </Card>
        
        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/9vBp00V/photo-1469854523086-cc02fe5d8800.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "44%" }}>Mount Bale</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's  
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/jgSzFZG/photo-1526772662000-3f88f10405ff.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "45%" }}>Baner Hills</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

        <Card style={{ width: '20rem'}}>
        <Link><Card.Img variant="top" src="https://i.ibb.co/m6JYVNk/pexels-photo-338504.jpg" /></Link>
        <Card.Body>
        <div className="card_div">
        <Card.Title style={{marginRight: "36%" }}>Eagleton resort</Card.Title><CloudIcon style={{ fontSize: 35 }} color="action"/>
        </div>
        <div className="card_div">
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/>
        <StarIcon style={{ color: 'gold'}}/><StarIcon style={{ color: 'gold'}}/><StarBorderIcon/>
        </div>
        <Card.Text className="card_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's  
        </Card.Text>
        <div className="more_btn_icon_box">
        <Button className="more_button" variant="primary">More </Button><IconButton><ShareIcon style={{ fontSize: 28 }}/></IconButton>
        <IconButton><FavoriteIcon color="action" style={{ fontSize: 28 }}/></IconButton>
        </div>        </Card.Body>
        </Card>

         </div>

         <div>
         <ReactWeather forecast="today" apikey="YOUR_API_KEY" type="auto" />
         </div>

         <div>
             <Footer/>
         </div>
        
        </div>
        
    )
}

export default Home
