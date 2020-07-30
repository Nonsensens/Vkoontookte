import React from "react";
import Body_Profile from "./body_Profile/body_Profile";
import { Redirect } from "react-router-dom";
function Profile(props) {
  return (
    <section className="Profile">
      <div className="wrpaper">
        <Body_Profile status ={props.status} updateStatus ={props.updateStatus} profile ={props.profile} />
      </div>
    </section>
  );
}
export default Profile;
