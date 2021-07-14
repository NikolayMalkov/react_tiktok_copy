
import '../../index.js';
import { ToggleFollowAC, SetUsers } from '../../usersPage_reducer.js';
import Users from './Users.js';
import {connect} from 'react-redux';


let mapStateToUsers = (state) => {

  return {
     users: state.usersPage.Users
     
  }
 
 }

 
 let mapDispatchToUsers = (dispatch) => {
     return {
       toggleFollow: (userId) => {
         dispatch(ToggleFollowAC(userId))
       },
       setUsers: (Users) => {
         dispatch(SetUsers(Users))
       }
       
     }
 }

const UsersContainer = connect(mapStateToUsers, mapDispatchToUsers)(Users);


export default UsersContainer;
