import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";

import { connect } from "react-redux";

function Header(props) {

  
  return (
    <header>
      <Burger  />
      <h1>Vkoontookte</h1>
      <div className="loginBlock">
        {props.isAuth ? <div>{props.login} - <button onClick ={props.Logout}>Logout</button></div> : <NavLink to={"/Login"}>Login</NavLink>}
      </div>
    </header>
  );
}





export default Header