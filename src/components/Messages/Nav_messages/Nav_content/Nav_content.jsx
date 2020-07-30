import React from "react";
import { NavLink } from "react-router-dom";
function Nav_content(props) {
  return (
    <div className="text_dialog_1">
      <ul>
        <li>
          <NavLink to ={"/Messages/" + props.id_message}>{props.id_user}</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav_content