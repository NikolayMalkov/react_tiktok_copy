
import './../../index.js';
import { AddPostCreator } from '../../profilePage_reducer';
import Profile from './Profile.js';
import {connect} from 'react-redux';


let mapStateToProfile = (state) => {

  return {
     Videos: state.profilePage.Videos
  }
 
 }
 
 let mapDispatchToProfile = (dispatch) => {
     return {
       newPost: () => {
        dispatch(AddPostCreator(),"KEKLOL4eburek", "500");
       } 
     }
 }

const profileContainer = connect(mapStateToProfile, mapDispatchToProfile)(Profile);


export default profileContainer;
