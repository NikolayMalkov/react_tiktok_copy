import './../../css/Messages.css';
import './../../css/content.css';
import { NavLink } from 'react-router-dom';
import React from 'react';



function Messages(props) {

  
  const DialogItem = (props) => {
    return (
      <NavLink to={"/Messages/" + props.id}>
        <li>
        <div className="dialog-user">
          {<img src={props.img}></img>}
          {props.name}
        </div>
        </li>
      </NavLink>
    )
  }

  const Msg = (props) => {
    return (   
        <div className="dialog-message">
        {props.msgtext}
      </div>
    )
  }

  let dialogsElements = props.Dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.messages.map( m => <Msg msgtext={m.msgtext} />);

  let newMessage = props.newMessage;


  let setTextChange = (e) => {
    let body = e.target.value;
    props.textChange(body);
  }

  let setPostMessage = () => {
    props.postMessage();
  }

  return (


    <div className="content-dialog" >
      <div className="dialogs-area">
        <div className="dialogs-list">
          <ul>
            
            {dialogsElements}
            
            
          </ul>
        </div>
        <div className="dialog">
            
             {messagesElements}
            
        </div>
      
      </div>
     <div className="postMsg">
         <div className="textArea">
              <textarea onChange={setTextChange} value={newMessage}></textarea>
         </div>
         <div className="btnDialog">
              <button onClick={setPostMessage}>Отправить</button>
         </div>
     </div>
    </div>


  );
}

export default Messages;

