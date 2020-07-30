import React from "react";
import Body_Frofile_flex from "./body_Profile_Flex/body_Profile_Flex";
import Posts from "./Posts/Posts";
import  PostsContainer  from "./Posts/PostsContainer";

function Body_Profile(props) {
  return (
    <div className="body_Profile">
      <img
        src="http://wallpapers-image.ru/1920x1080/world/wallpapers/world-wallpapers-1920x1080-00013.jpg"
        alt=""
      />
      <Body_Frofile_flex status ={props.status} updateStatus ={props.updateStatus} profile ={props.profile}/>
      <PostsContainer />
    </div>
  );
}
export default Body_Profile;
