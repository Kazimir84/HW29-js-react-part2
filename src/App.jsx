import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

import Appointments from "./Appointments";
import Events from "./Events";
import Doctors from './Doctors';
import Clients from './Clients';
import {Nav} from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
 
function jumpSite() {
  return(
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st2.depositphotos.com/3113551/10520/v/950/depositphotos_105205124-stock-illustration-medical-and-hospital-icons.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st4.depositphotos.com/1756201/23202/v/1600/depositphotos_232020808-stock-illustration-doctor-nurse-team-illustration-icon.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st4.depositphotos.com/4679193/21960/v/1600/depositphotos_219607264-stock-illustration-medical-staff-professionals-group-in.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st3.depositphotos.com/9232710/13909/v/1600/depositphotos_139095634-stock-illustration-medical-team-group-of-doctors.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default function App() {
    return (
      <Router>
          <div>
            <Nav variant="pills" defaultActiveKey="/home">
             <Nav.Item>
               <Nav.Link href="/home">Home Page</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="link-1" href="/users">Users Page</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="link-2" href="/events">Events</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="disabled" disabled>
                 In Progress
               </Nav.Link>
             </Nav.Item>
            </Nav>               
            <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/doctors">
                  <Doctors />
                </Route>
                <Route path="/appointments">
                  <Appointments />
                </Route>
                <Route path="/clients">
                  <Clients />
                </Route>                    
            </Switch>
          </div>
          {jumpSite()}
      </Router>
    );
}


// export default App;