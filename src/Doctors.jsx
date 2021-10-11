import React from "react";
import { Figure } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Appointments from "./Appointments";
import Events from "./Events";


function Doctors() {
    return (
      <div>
        <h2 style={{
          textAlign:"center", 
          color:"yellow", 
          fontWeight: "bolder",
          textDecoration: "underLine",
          }}>
            Doctors Page.
          <Figure>
            <Figure.Image style={{
              maxWidth: 10 + "%",
              height: "auto",
              position: "absolute",
              top: 385 + "px",
              left: 430 + "px",
            }}
              width={171}
              height={180}
              src="https://i.pinimg.com/564x/37/a7/42/37a7429d955720774b6529b9f5766a49.jpg"
            />
          </Figure>  
        </h2>

        <Router>
          <nav>
            <ul>
             <li>
                 <Link to="/events">Events</Link>
             </li>
             <li>
                 <Link to="/appointments">Appointments</Link>
             </li>
            </ul>
          </nav>

        <p>
          <ol>
            <h4>Список взрослых врачей:</h4>

            <li>Терапевт</li>
            <li>Терапевт участковый</li>
            <li>Хирург</li>
            <li>Офтальмолог</li>
            <li>Уролог</li>
            <li>Акушер-гинеколог</li>
            <li>Врач общей практики (семейный врач)</li>
            <li>Оториноларинголог</li>
            <li>Стоматолог-терапевт</li>
            <li>Стоматолог-хирург</li>
          </ol>
          <ol>
            <h4>Список детских врачей:</h4>
          
            <li>Педиатр</li>
            <li>Педиатр участковый</li>
            <li>Хирург</li>
            <li>Стоматолог</li>
            <li>Офтальмолог</li>
            <li>Оториноларинголог</li>
          </ol>
        </p>


          <Switch>
             <Route path="/events">
                 <Events />
             </Route>    
             <Route path="/appointments">
                 <Appointments />
             </Route>      
          </Switch>  
        </Router>
      </div>
    );
  }

export default Doctors;