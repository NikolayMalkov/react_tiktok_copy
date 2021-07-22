import './../../css/users.css';
import '../../index.js';
import React from 'react';
import userPic from '../../img/catmask'
import { NavLink } from 'react-router-dom';






const Users = (props) => {


    let PagesCount = Math.ceil( props.UsersTotalCount / props.PageSize );
    PagesCount = PagesCount >= 10 ? 10 : PagesCount


    let pages = [];
    for (let i = 1; i <= PagesCount; i++) {
      pages.push(i)
    }


  let UsersDiv = (props) => {
    return (
  
      <div className="userDiv">
        <div className="userName">
          {props.username}
        </div>
        <NavLink to={"/Profile/" + props.id}>
          <img src={userPic} alt="users" />
        </NavLink>
        
        
          <button onClick={ props.followed ? (e) => props.deleteUsers(props.id) : (e) => props.subUsers(props.id) }>
            { props.followed ? <label>Отписаться</label> : <label>Подписаться</label>  }</button> 
    
      </div>
    )
  };



  return (
      <div>
         
         <div>
         {pages.map( p => { return <span className={props.CurrentPage === p && "changeActive"} onClick={ (e) => props.onChangePage(p) }> {p} </span>  } )}
         </div>
         
        {props.users.map( ( u => <UsersDiv key={u.id} id={u.id} username={u.name} followed={u.followed} 
                                           toggleFollow={props.toggleFollow} deleteUsers={props.deleteUsers} subUsers={props.subUsers} >
         </UsersDiv> ) )}
    </div>
  )
}

export default Users;

