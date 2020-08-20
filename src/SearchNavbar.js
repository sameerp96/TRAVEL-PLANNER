import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./SearchNavbar.css";


function SearchNavbar() {
    return (
       

        <div className="navbar_below_header"> 
            <Link to="/thingstodo"><Button variant="outline-primary" className="button1" size="lg" >Things to do</Button>{'             '}</Link>
            <Link to="/events"><Button variant="outline-primary" className="button1" size="lg">Events</Button>{'             '}</Link> 
            <Link to="/holidays"><Button variant="outline-primary" className="button1" size="lg">Holidays</Button>{'             '}</Link>
            <Link to="/flights"><Button variant="outline-primary" className="button1" size="lg">Flights</Button>{'             '}</Link>
            <Link to="/hotels"><Button variant="outline-primary" className="button1" size="lg">Hotels</Button>{'             '}</Link>
            <Link to="/restaurants"><Button variant="outline-primary" className="button1" size="lg">Restaurants</Button>{'             '}</Link>
        </div>
        
        
        
    )
}

export default SearchNavbar
