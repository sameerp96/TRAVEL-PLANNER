import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Thingstodo from './Thingstodo';
import SearchNavbar from './SearchNavbar';
import Login from './Login';
import Event from './Event';


function App() {
  return (
    <Router>
    <div className='app'>
      <Switch>
      <Route exact path="/">
          <div className="upper_background_home">
          <Header />
          <SearchNavbar/>
          </div>
          <div className="lower_background_home">
          <Home />
          </div>
        </Route> 
        <Route path="/thingstodo">
          <Header />
          <SearchNavbar />
          <Thingstodo />
        </Route>
        <Route path="/events">
        <Header/>
          <SearchNavbar/>
          <Event/>
        </Route>
        <Route path="/holidays">
          <h1>Holidays</h1>
        </Route>
        <Route path="/flights">
          <h1>FLights</h1>
        </Route>
        <Route path="/hotels">
          <h1>Hotels</h1>
        </Route>
        <Route path="/login">
          <Login/>
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
        <Route path="/restaurants">
          <h1> Restaurants </h1>
        </Route> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;

