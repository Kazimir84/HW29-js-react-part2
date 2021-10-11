import React from "react";
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Doctors from "./Doctors";
import Clients from "./Clients";
import { Figure } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";



function Users() {
  let match = useRouteMatch();
  return (
    <div>
      <h2 style={{
        textAlign:"center", 
        color:"green",
        fontWeight: "bolder",
        textDecoration: "underLine",
        fontFamily: "cursive",
        }}>
            User Page!
      </h2>      
      <ul style={{textAlign:"center", color:"red", listStyle:"none"}}>
         <li>
             <Link to={`${match.url}/doctors`}>Doctors 
             <Figure>
                <Figure.Image style={{
                  maxWidth: 3+"%",
                  height: "auto",
                  position: "absolute",
                }}
                  width={171}
                  height={180}
                  src="https://st.depositphotos.com/1507819/4858/v/950/depositphotos_48584735-stock-illustration-medical-syringe-on-white-background.jpg"
                />
              </Figure>
             </Link>
         </li>
         <li>
             <Link to={`${match.url}/clients`}>Clients
              <Figure>
                 <Figure.Image style={{
                   maxWidth: 2+"%",
                   height: "auto",
                   position: "absolute",
                 }}
                   width={171}
                   height={180}
                   src="https://serg-ver.com/wp-content/uploads/2015/07/0_211.jpg"
                 />
              </Figure>
             </Link>
         </li>
      </ul>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXyejCnj2bM3ofdvnnUUWZ48V1lJGXjaTFw&usqp=CAU" alt="Medicine" style={{display:"block", margin:"0 auto"}}/>
      <Switch>
         <Route path={`${match.path}/:userId`}> 
             <User />
             <Check />
         </Route>    
      </Switch>
    </div>
  );
}

function User() {
  let { userId } = useParams();          
  return <h3>Requested user ID: { userId }</h3>  
}
function Check() {
  let { userId } = useParams(); 
  if( userId === "doctors") {
    return <Doctors />
  } else if( userId  === "clients") {
    return <Clients />
  } else {
    return <h3>Requested user ID: { userId }</h3>
  }
}

export default Users;