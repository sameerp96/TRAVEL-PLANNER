import React from 'react';
import SearchNavbar from "./SearchNavbar";
import logo from "./images/logo.JPG";
import "./SearchEngineResults.css";
import { Link } from "react-router-dom";
import Footer from './Footer';
import searchback from "./images/searchback.jpg"
import ThingsCards from "./ThingsCards";
import EventCards from "./EventCards";
import HolidayCards from "./HolidayCards";
import HotelCards from "./HotelCards";
import RestaurantCards from "./RestaurantCards";



function SearchEngineResults() {
    return (
        <div>
            <div className="top_banner_search" style={{backgroundImage: "url(" + searchback + ")"}}>
            <div>
            <Link to="/"><img className="search_logo" src={logo} /></Link> 
            </div>
            <div>
            <SearchNavbar className="search_navbar"/>
            </div>
            </div>
            <div>
                <h1 className="main_title">Search Results</h1>
            </div>
            <div>
            <h2 className="s_title">Things To Do</h2>
            <h6 className="s_line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            <div>
                <ThingsCards/>
            </div>
            </div>
            <div>
            <h2 className="s_title">Events</h2>
            <h6 className="s_line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            <div>
                <EventCards/>
            </div>
            </div>
            <div>
            <h2 className="s_title">Holiday Packages</h2>
            <h6 className="s_line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            <div>
                <HolidayCards/>
            </div>
            </div>
            <div>
            <h2 className="s_title">Hotels</h2>
            <h6 className="s_line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            <div>
                <HotelCards/>
            </div>
            </div>
            <div>
            <h2 className="s_title">Restaurants</h2>
            <h6 className="s_line">_______________________________________________________________________________________________________________________________________________________________________________________________</h6>
            <div>
                <RestaurantCards/>
            </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default SearchEngineResults
