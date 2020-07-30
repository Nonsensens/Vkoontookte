import React from "react";
function Post(props) {
  return (
    <div className="Post" id = {props.id}>
      <div className="flex_posts">
        <img
          src="https://st2.depositphotos.com/5266903/8135/v/450/depositphotos_81358350-stock-illustration-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0.jpg"
          alt=""
        />
        <h1>{props.message}</h1>
        <span>Likes {props.likes}</span>
      </div>
    </div>
  );
}
export default Post;
