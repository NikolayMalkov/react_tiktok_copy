
import './../css/App.css';
import './../css/header.css';
import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { SetUserLogin } from '../store/auth_reducer';


class HeaderContainer extends React.Component {
  
  componentDidMount() {
    axios({
      method: 'get',
      url: `https://social-network.samuraijs.com/api/1.0/auth/me`, withCredentials: true,
      responseType: 'stream',
      headers: {
        'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
    }

    })
    .then( (response) => { if (response.data.resultCode === 0) {
                        let {userId, email, login} = response.data.data
                        this.props.SetUserLogin(userId, email, login)
                          }   
                        } )
  }

  render() {
    
    return (

    
    <Header login={this.props.login} />

  
  );
  }

  
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login
  }
}



export default connect( mapStateToProps, {SetUserLogin} ) (HeaderContainer);
