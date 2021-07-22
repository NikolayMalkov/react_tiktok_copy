import './../../css/Messages.css';
import './../../css/content.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { AddSendMessageCreator } from '../../store/dialogsPage_reducer';
import { UpdateMessageCreator } from '../../store/dialogsPage_reducer';
import Messages from './Messages.js';

 

let mapStateToProps = (state) => {
  return {
    newMessage: state.newMessage,
    Dialogs: state.dialogsPage.Dialogs,
    messages: state.dialogsPage.messages 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    textChange: (body) => {
      dispatch(UpdateMessageCreator(body));
    },
    postMessage: () => {
      dispatch(AddSendMessageCreator())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;

