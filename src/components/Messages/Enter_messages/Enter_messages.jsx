import React from "react";
import { reduxForm, Field } from "redux-form";
import { requierd, maxLengthCreator } from "../../../Utils/Validators/validators";
import { Textarea } from "../../../common/FormsControls/formsControl";
import {reset} from 'redux-form';

const maxLength10 = maxLengthCreator(10);
function Enter_messages(props) {
  let state = props.Messages;
  let send_post = () => {
    props.sendMessageCreator();
  };
  let addNewMessages = (values, dispatch) => {
    props.sendMessageCreator(values.area_messages);
    dispatch(reset('Dialogs'))
  };
  return (
    <div className="enter_wrapper">
      <FormReduxMessages
        value={state.value_area_message}
        send_post={send_post}
        onSubmit={addNewMessages}
      />
    </div>
  );
}

function FormMessages(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate = {[requierd, maxLength10]}
        component= {Textarea}
        name="area_messages"
        value={props.value}
        placeholder="Enter your message..."
      ></Field>
      <button>Send</button>
    </form>
  );
}

const FormReduxMessages = reduxForm({ form: "Dialogs" })(FormMessages);

export default Enter_messages;
