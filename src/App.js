import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Thingstodo from './Thingstodo';
import SearchNavbar from './SearchNavbar';
import Login from './Login';
import Event from './Event';
import back1 from "./images/back1.jpg";
import thingsbar1 from "./images/thingsbar1.jpg";
import Holiday from "./Holiday";
import holidaybanner from "./images/holidaybanner.jpg";
import eventbanner from "./images/eventbanner.jpg";
import Flights from './Flights';
import flightbanner2 from "./images/flightbanner4.jpg"
import Hotels from './Hotels';
import hotelbanner1 from "./images/hotelbanner1.jpg";
import Restaurant from './Restaurant';
import restaurantbanner from "./images/restaurantbanner.jpg";
import thingsbanner from "./images/thingsbanner.jpg";
import Footer from './Footer';
import SearchEngineResults from "./SearchEngineResults";


function App() {
  return (
    <Router>
    <div className='app'>
      <Switch>
      <Route exact path="/">
          <div className="upper_background_home" style={{backgroundImage: "url(" + back1 + ")"}}>
          <Header />
          <SearchNavbar/>
          </div>
          <Home />
        </Route> 
        <Route path="/thingstodo">
        <div className="upper_background_things" style={{backgroundImage: "url(" + thingsbanner + ")"}}>
          <Header />
          <SearchNavbar />
          </div>
          <Thingstodo />
        </Route>
        <Route path="/events">
        <div className="upper_background_events" style={{backgroundImage: "url(" + eventbanner + ")"}}>
        <Header/>
        <SearchNavbar/>
        </div>
        <Event/>
        </Route>
        <Route path="/holidays">
          <div className="upper_background_holidays" style={{backgroundImage: "url(" + holidaybanner + ")"}}>
          <Header/>
          <SearchNavbar/>
          </div>
          <Holiday/>
        </Route>
        <Route path="/flights">
        <div className="upper_background_flights" style={{backgroundImage: "url(" + flightbanner2 + ")"}}>
          <Header/>
          <SearchNavbar/>
          </div>
          <Flights/>
        </Route>
        <Route path="/hotels">
        <div className="upper_background_hotel" style={{backgroundImage: "url(" + hotelbanner1 + ")"}}>
          <Header/>
          <SearchNavbar/>
        </div>  
        <Hotels/>
        </Route>
        <Route path="/restaurants">
        <div className="upper_background_restaurants" style={{backgroundImage: "url(" + restaurantbanner + ")"}}>
        <Header/>
        <SearchNavbar/>
        </div>
        <Restaurant/>
        </Route>
        <Route path="/login">
          <Login/>
          <Footer/>
        </Route>
        <Route path="/SearchEngineResults">
          <SearchEngineResults/>
        </Route>
        <Route path="/blog">
          <h1>blog</h1>
        </Route>
        <Route path="/mytrips">
          <h1> my trips page </h1>
        </Route>
        <Route path="/myprofile">
          <h1> My Profile </h1>
        </Route>
        <Route path="/wishlist">
          <h1> Wishlist </h1>
        </Route>
        <Route path="/support">
          <h1> support </h1> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

