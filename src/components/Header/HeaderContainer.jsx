import React from "react";
import {connect} from 'react-redux';
import {Logout} from '../../redux/auth-reducer';
import * as axios from 'axios';
import Header from "./Header";


class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}
const mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        side: state.app.side
    }
}
const mapDispatchToProps = {
    Logout,
   
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
