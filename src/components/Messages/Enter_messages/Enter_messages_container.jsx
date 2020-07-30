import React from "react";
import { sendMessageCreator } from "../../../redux/messagesReducer";
import Enter_messages from "./Enter_messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    Messages: state.Messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: (area_messages) => {
      dispatch(sendMessageCreator(area_messages));
    },
  };
};
const Enter_messages_container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Enter_messages);
export default Enter_messages_container;
