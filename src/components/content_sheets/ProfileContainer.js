
import './../../index.js';
import { AddPostCreator, SetUserInfo } from '../../store/profilePage_reducer.js';
import ProfileComponent from './ProfileComponent.js';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


let mapStateToProfile = (state) => {

  return {
     Videos: state.profilePage.Videos,
     profileInfo: state.profilePage.profileInfo
  }
 
 }
 
 let mapDispatchToProfile = (dispatch) => {
     return {
       newPost: () => {
        dispatch(AddPostCreator(),"KEKLOL4eburek", "500");
       },
       SetUserInfo: (profileInfo) => {
         dispatch(SetUserInfo(profileInfo))
       } 
     }
 }
const withRouterProfileContainer = withRouter(ProfileComponent)

const profileContainer = connect(mapStateToProfile, mapDispatchToProfile)(withRouterProfileContainer);


export default profileContainer;
