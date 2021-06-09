
import './../../css/content.css';
import { NavLink } from 'react-router-dom';


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


  return (


    <div className="content" >
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
    </div>


  );
}

export default Messages;

