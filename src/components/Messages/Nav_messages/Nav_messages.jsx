import React from "react";
import Nav_content from "./Nav_content/Nav_content";
function Nav_messages(props) {
  let state = props.Messages
  let Nav_main_messages = state.Nav_messages.map((m) =>(<Nav_content id_message = {m.id_message} id_user = {m.id_user}/> ))
  
  return (
    <div className="wrapper_dialog_1" id="nav_messages">
      {Nav_main_messages}
    </div>
    
  );
}
export default Nav_messages;
