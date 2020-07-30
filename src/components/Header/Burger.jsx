import React from "react";
import { setSidebar } from "../../redux/appReducer";

const Burger = (props) => {
  
  function seeSidebar(sides){
    alert('hi')
    setSidebar(true)
  }
 

  return (
    <div onClick ={seeSidebar} className="Burger">
      <span className="Pal1"></span>
      <span className="Pal2"></span>
      <span className="Pal3"></span>
    </div>
  );
};

export default Burger;
