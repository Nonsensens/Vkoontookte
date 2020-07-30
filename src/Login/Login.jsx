import React from "react";
import { reduxForm, Field } from "redux-form";
import { requierd, maxLengthCreator } from "../Utils/Validators/validators";
import {Login} from '../redux/auth-reducer';
import { Inputarea } from "../common/FormsControls/formsControl";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import style from '../common/FormsControls/FormStyles.module.css' 
const maxLength10 = maxLengthCreator(30);

function Logins(props) {
  const onSubmit = (formData) =>{
    props.Login(formData.email, formData.password, formData.rememberMe);
  }


  if (props.isAuth){
    return <Redirect to = {'/Profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  );
}
function LoginForm(props) {

    return (
      <form onSubmit ={props.handleSubmit} action="">
        <div>
          <Field validate ={[requierd, maxLength10]} placeholder={"Email"} name ={'email'} component = {Inputarea} />
        </div>
        <div>
          <Field validate ={[requierd, maxLength10]} placeholder={"Password"} type={'password'} name ={'password'} component = {Inputarea}/>
        </div>
        <div className = 'input_flex'>
          <Field validate ={[ maxLength10]} type={"checkbox"} name ={'rememberMe'} component = {Inputarea}/> <div>Remember me</div>
        </div>
        {props.error && <div className = {style.error}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }


const LoginReduxForm = reduxForm({form: 'Loggins'})(LoginForm)

const mapStateToProps = (state) =>({
  isAuth : state.auth.isAuth
})


export default connect(mapStateToProps, {Login})(Logins);

