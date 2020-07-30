import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { AuthRedirect } from '../../HOC/AuthRedirect';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Preloader from './Spinner-1s-200px.svg'
import { compose } from 'redux';
import {getUsersList, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors'
import { Redirect } from "react-router-dom";
class UsersContainers extends React.Component{

    constructor(props){
      super(props);
    }
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) =>{
      this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render(){
      return <>{this.props.isFetching ? <div className ='loader'><img src ={Preloader}/></div> :null}<Users followingInProgress ={this.props.followingInProgress}  totalUsersCount ={this.props.totalUsersCount} pageSize = {this.props.pageSize} currentPage={this.props.currentPage} onPageChanged ={this.onPageChanged} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>   
    </>};
}


let mapStateToProps = (state) =>{
  return{
      users: getUsersList(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
  }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}

export default compose(AuthRedirect, connect(mapStateToProps, mapDispatchToProps))(UsersContainers)