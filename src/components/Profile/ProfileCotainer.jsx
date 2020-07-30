import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId){
        this.props.history.push('./login')
      }
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        profile={this.props.profile}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.Profile.profile,
    status: state.Profile.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = {
  getUsersProfile,
  getStatus,
  updateStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  AuthRedirect
)(ProfileContainer);
