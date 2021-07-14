
import './../css/App.css';
import './../css/content.css';

import Animals from './../components/content_sheets/Animals';
import Games from './../components/content_sheets/Games';
import Humours from './../components/content_sheets/Humours';
import Music from './../components/content_sheets/Music';
import Sport from './../components/content_sheets/Sport';
import Related from './../components/content_sheets/Related';
import MessagesContainer from './../components/content_sheets/MessagesContainer';
import ProfileContainer from './../components/content_sheets/ProfileContainer';
import UsersContainer from './../components/content_sheets/UsersContainer';
import {Route} from "react-router-dom";

function Content(props) {
  return (

    
   
      <div className="content" >
        <div className="lenta">        
          <Route path='/Humours' component={Humours} />
          <Route path='/Animals' component={Animals} />
          <Route path='/Sport' component={Sport} />
          <Route path='/Games' component={Games} />
          <Route path='/Music' component={Music} />
          <Route path='/Related' component={Related} />
          <Route path='/Messages' render= { () => <MessagesContainer state={props.state}  dispatch={props.dispatch} /> } />
          <Route path='/Profile' render= { () => <ProfileContainer state={props.state}  dispatch={props.dispatch} /> } />
          <Route path='/Users' render= { () => <UsersContainer state={props.state}  dispatch={props.dispatch} /> } />
        </div>
    </div>
    


  );
}

export default Content;
