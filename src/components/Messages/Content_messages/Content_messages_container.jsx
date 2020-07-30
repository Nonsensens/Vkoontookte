import Content_messages from "./Content_messages";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    Messages: state.Messages,
  };
};
const Content_messages_container = connect(mapStateToProps)(Content_messages);
export default Content_messages_container;
