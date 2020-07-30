import React from "react";
function Container_content(props) {
  return (
    <div className="text_dialog_2">
      <ul>
        <li>{props.content}</li>
      </ul>
    </div>
  );
}
export default Container_content