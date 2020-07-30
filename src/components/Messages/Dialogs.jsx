import React from "react";
import Nav_messages_container from "./Nav_messages/Nav_messages_container";
import Enter_messages_container from "./Enter_messages/Enter_messages_container";
import Content_messages_container from "./Content_messages/Content_messages_container";
import Nav from "../Sidebar/nav/nav";
import { Redirect } from "react-router-dom";

function Dialogs(props) {
  if (!props.isAuth) return <Redirect to = '/Login'/>
  return (
    <section className="Dialogs">
      <div className="main_wrapper_dialogs">
        <Nav_messages_container />
        <Content_messages_container />
      </div>
      <Enter_messages_container />
    </section>
  );
}



export default Dialogs;
