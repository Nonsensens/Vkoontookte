import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Messages/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import {Auth} from '../src/redux/auth-reducer';
import ProfileContainer from "./components/Profile/ProfileCotainer";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import { compose } from "redux";
import {initializeApp, setSidebar} from './redux/appReducer'


class App extends React.Component {

  componentDidMount() {
    
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized){
      return <div className ='loader'></div>
    }

    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer />
          <div className="wrapper_main">
            {this.props.side && (<Sidebar />) }
            <Route
              path="/Profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/Messages" render={() => <DialogsContainer />} />
            <Route path="/Users" render={() => <UsersContainer />} />
            <Route path="/Login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
     initialized: state.app.initialized,
     side: state.app.side
  }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp, setSidebar}))(App);
