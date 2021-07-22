

import './../../css/users.css';
import '../../index.js';
import React from 'react';
import Users from './Users';
import Preloader from '../../common/Preloader';
import { axiosDeleteUsers, axiosGetUsers, axiosSubUsers } from '../../store/dal';

class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.ToggleFetching(true)
    axiosGetUsers(this.props.CurrentPage, this.props.PageSize)
      .then((data) => {
        this.props.ToggleFetching(false)
        this.props.SetUsers(data.items);
        this.props.GetTotalCount(data.totalCount)
      })

  }

  onChangePage = (CurrentPage) => {
    this.props.SetUsersPage(CurrentPage);
    this.props.ToggleFetching(true)
    axiosGetUsers(CurrentPage, this.props.PageSize)
      .then(data => {
        this.props.ToggleFetching(false)
        this.props.SetUsers(data.items);
      })
  }

// Подписка на пользователя
  subUsers = (id) => {

    axiosSubUsers(id).then(response => {
      if (response.data.resultCode === 0) {
        this.props.toggleFollow(id)
      }
    }).then(axiosGetUsers(this.props.CurrentPage, this.props.PageSize)
      .then((data) => {
        this.props.SetUsers(data.items);
        this.props.GetTotalCount(data.totalCount)
      }))

  }
// Отписка от пользователя
   deleteUsers = (id) => {

    axiosDeleteUsers(id).then(response => {
      if (response.data.resultCode === 0) {
        this.props.toggleFollow(id)
      }
    }).then(axiosGetUsers(this.props.CurrentPage, this.props.PageSize)
      .then((data) => {
        this.props.SetUsers(data.items);
        this.props.GetTotalCount(data.totalCount)
      }))

  }


  render() {


    return (<>

      {this.props.isFetching ? <Preloader /> : null}

      <Users users={this.props.users}
        CurrentPage={this.props.CurrentPage}
        onChangePage={this.onChangePage}
        SetUsersPage={this.props.SetUsersPage}
        toggleFollow={this.props.toggleFollow}
        UsersTotalCount={this.props.UsersTotalCount}
        PageSize={this.props.PageSize}
        setUsers={this.props.setUsers}
        GetTotalCount={this.props.GetTotalCount}
        deleteUsers={this.deleteUsers}
        subUsers={this.subUsers}
      />
    </>




    )
  }
}

export default UsersComponent;