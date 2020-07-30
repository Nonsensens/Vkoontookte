import React from "react";
import Container_content from "./Container_content/Container_content";
function Content_messages(props) {
  let state = props.Messages;
  let Container_main_content = state.Container_content.map((c) =>(<Container_content  content = {c.content} />))
  return (
    <div className="wrapper_dialog_2" id="content_messages">
      {Container_main_content}
    </div>
  );
}
export default Content_messages;
