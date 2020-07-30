import React from "react";
import Post from "./Post";
import Posts, { FormPost } from "./Posts";
import  {connect}  from "react-redux";
import {  sendPostCreator,} from "../../../../redux/profileReducer";


let mapStateToProps = (state) => {
  return {
    Profile: state.Profile,
  };
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendPostCreator: (value_Arrea) => {
      dispatch(sendPostCreator(value_Arrea));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer


