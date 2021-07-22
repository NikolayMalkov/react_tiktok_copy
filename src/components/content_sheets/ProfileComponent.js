

import './../../css/users.css';
import '../../index.js';
import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';


class ProfileComponent extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    console.log(this.props)
      axios({
        method: 'get',
        url: `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
        responseType: 'stream',
        headers: {
          'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
      }
  
      })
      .then( (response) => { this.props.SetUserInfo(response.data); } )
    
   }
  

  render() {

    

    return (


     <Profile state={this.props}/>
      
      

    )
} }

export default ProfileComponent;