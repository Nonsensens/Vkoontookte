import React from "react";
import {reset} from 'redux-form';
import Post from "./Post";
import { reduxForm, Field } from "redux-form";
import {
  requierd,
  maxLengthCreator,
} from "../../../../Utils/Validators/validators";
import { Textarea } from "../../../../common/FormsControls/formsControl";

const maxLength10 = maxLengthCreator(10);


function Posts(props) {
  let state = props.Profile;
  let Post_info_main = state.Post_info.map((p) => (
    <Post message={p.message} id={p.id} likes={p.likes} store={props.store} />
  ));
  let onSendPost = (values, dispatch) => {
    props.sendPostCreator(values.value_Arrea);
    dispatch(reset('Profile'));
  };
  return (
    <div className="Posts">
      <h1>My posts</h1>
      <FormReduxPost onSubmit={onSendPost} />
      <div className="flex_like_post">{Post_info_main}</div>
    </div>
  );
}

export function FormPost(props) {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <Field
        validate={[ requierd, maxLength10]}
        component={Textarea}
        placeholder="your news..."
        name={"value_Arrea"}
        id="post_area"
        cols="30"
        rows="10"
      ></Field>
      <button className="but_post">Send</button>
    </form>
  );
}

const FormReduxPost = reduxForm({ form: "Profile" })(FormPost);

export default Posts;
