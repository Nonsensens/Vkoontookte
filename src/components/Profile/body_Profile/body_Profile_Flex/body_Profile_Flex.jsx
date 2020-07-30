import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
function Body_Frofile_flex(props) {
  if (!props.profile){
    return <div className ='loading' />
  }
  return (
    <div className="body_mini_flex_profile">
      <div className="imgssss">
        <img src={props.profile.photos.large} />
      </div>
      <div className="about_profile">
        <h1>{props.profile.fullName}</h1>
        <ProfileStatusWithHooks status ={props.status} updateStatus ={props.updateStatus}/>
        {props.profile.lookingForAJob ? <h2>Ищет дура <br/> Охуенный спец</h2> : <h2>Не ищет дура</h2>}
        <h2>{props.profile.contacts.github}</h2>
        <h2>{props.profile.contacts.vk}</h2>
        <h2>{props.profile.contacts.facebook}</h2>
        <h2>{props.profile.contacts.instagram}</h2>
        <h2>{props.profile.contacts.twitter}</h2>
        <h2>{props.profile.contacts.website}</h2>
        <h2>{props.profile.contacts.youtube}</h2>
        <h2>{props.profile.contacts.mainLink}</h2>
      </div>
    </div>
  );
}
export default Body_Frofile_flex;
