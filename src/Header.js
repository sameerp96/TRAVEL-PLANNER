import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl} from 'react-bootstrap';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PlaceIcon from '@material-ui/icons/Place';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Form } from 'react-bootstrap';




function Header() {
    return (
        <nav className="header">
            {/*logo on left*/}

        <Link to="/">
            <img className="header__logo" alt='logo' src="https://i.ibb.co/tCTNZLz/logo.jpg" />
        </Link>

        <div className="icon_box">

        <div className="box1">
        <Tooltip title="Travel Tool">
        <IconButton aria-label="Travel Tool">
         <LocalMallIcon style={{ fontSize: 30 }} />
        </IconButton>
        </Tooltip>
        </div>

        <div className="box2">
        <Tooltip title="Special Offers">
        <IconButton aria-label="Special Offers">
         <LocalOfferIcon style={{ fontSize: 30 }} />
        </IconButton>
        </Tooltip>
        </div>

        <div className="box3">
        <Tooltip title="Places Around">
        <IconButton aria-label="Places Around">
         <PlaceIcon style={{ fontSize: 30 }} />
        </IconButton>
        </Tooltip>
        </div>

        </div>

        
       
         {/* 4 links on right */}

        <div className="header__nav">

            
                <div className="header__option">
                <Link to="/mytrips" ><Button variant="outline-primary" size="lg" >My Trips</Button></Link>
                 </div>
            

            
                <div className="header__option">
                <Link to="/support"><Button variant="outline-primary" size="lg">24X7 Support</Button></Link>
                </div>
            

            <div className="header__option">
                <DropdownButton id="dropdown-basic-button" title="My Account" size= "lg">
                <Link to="myprofile"><Dropdown.Item size="lg" href="/myprofile">My Profile</Dropdown.Item></Link>
                <Link to="wishlist"><Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item></Link>
                <Link to="login"><Dropdown.Item href="/login">Login/Signup</Dropdown.Item></Link>
                </DropdownButton>
            </div>

            <div className="country_select">
            <Form>
            <Form.Control as="select" size="lg">
                        <option value="" selected disabled>Select Country</option>
                        <option>UK</option>
                        <option>US</option>
                        <option>Asia</option>
            </Form.Control>
            </Form>
            </div>

            
            {/* <div className="search_btn">
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-primary">Search</Button>
            </InputGroup.Append>
            </InputGroup>
            </div> */}

        </div>

            {/* <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div> */} 

        </nav>

      
        
    )
}

export default Header
