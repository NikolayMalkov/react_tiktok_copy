import './../../css/users.css';
import '../../index.js';
import * as axios from 'axios';
import React from 'react';
import userPic from '../../img/catmask'



class Users extends React.Component {

  getUsers = () => {
    axios({
      method: 'get',
      url: 'https://social-network.samuraijs.com/api/1.0/users',
      responseType: 'stream',
      headers: {
        'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
    }

    })
    .then( (response) => { this.props.setUsers(response.data.items)  } )
  };

  UsersDiv = (props) => {
      return (

        <div className="userDiv">
          <div className="userName">
            {props.username}
          </div>
          <img src={userPic} alt="users" />
          
            <button onClick={ () => props.toggleFollow(props.id)}>{ props.followed ? <label>Отписаться</label> : <label>Подписаться</label>  }</button> 
             
         
        </div>
      )
    };

  render() {

    return (

     
      
      <div>
         <div>
         <button onClick={this.getUsers}>Get users</button>
         </div>
          {this.props.users.map( ( u => <this.UsersDiv key={u.id} id={u.id} username={u.name}   followed={u.followed} toggleFollow={this.props.toggleFollow} >
           </this.UsersDiv> ) )}
      </div>

    )
} }

export default Users;