
import '../../index.js';
import { ToggleFollowAC, SetUsers, SetUsersPage, GetTotalCount,ToggleFetching, getUsers, follow, unfollow } from '../../store/usersPage_reducer.js';
import UsersComponent from './UsersComponent';
import {connect} from 'react-redux';


let mapStateToUsers = (state) => {

  return {
     users: state.usersPage.Users,
     UsersTotalCount: state.usersPage.UsersTotalCount,
     PageSize: state.usersPage.PageSize,
     CurrentPage: state.usersPage.CurrentPage,
     isFetching: state.usersPage.isFetching
  }
 
 }

 
 let mapDispatchToUsers = (dispatch) => {
     return {
       toggleFollow: (userId) => {
         dispatch(ToggleFollowAC(userId))
       },
       SetUsers: (Users) => {
         dispatch(SetUsers(Users))
       },
       SetUsersPage: (CurrentPage) => {
         dispatch(SetUsersPage(CurrentPage))
       },
       GetTotalCount: (TotalCount) => {
         dispatch(GetTotalCount(TotalCount))
       },
       ToggleFetching: (isFetching) => {
         dispatch(ToggleFetching(isFetching))
       },
      //  getUsers: (CurrentPage, PageSize) => {
      //    dispatch(getUsers(CurrentPage, PageSize))
      //  },
      //  follow: (id) => {
      //    dispatch(follow(id))
      //  },
      //  unfollow: (id) => {
      //    dispatch(unfollow(id))
      //  }
       
     }
 }

const UsersContainer = connect(mapStateToUsers, mapDispatchToUsers)(UsersComponent);


export default UsersContainer;
