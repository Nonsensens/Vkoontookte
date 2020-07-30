import React from "react";
import Nav_messages from "./Nav_messages";
import { connect } from "react-redux";
let mapStateToProps = (state) =>{
  return{
    Messages: state.Messages
  }
}
const Nav_messages_container = connect(mapStateToProps)(Nav_messages)
export default Nav_messages_container;
