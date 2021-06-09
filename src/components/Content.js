
import './../css/App.css';
import './../css/content.css';

import Post from './../components/Post.js';
import Animals from './../components/content_sheets/Animals';
import Games from './../components/content_sheets/Games';
import Humours from './../components/content_sheets/Humours';
import Music from './../components/content_sheets/Music';
import Sport from './../components/content_sheets/Sport';
import Related from './../components/content_sheets/Related';
import Messages from './../components/content_sheets/Messages';
import Profile from './../components/content_sheets/Profile';
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
          <Route path='/Messages' render= { () => <Messages Dialogs={props.Dialogs} messages={props.messages} /> } />
          <Route path='/Profile' render= { () => <Profile Videos={props.Videos} /> } />
        </div>
    </div>
    


  );
}

export default Content;
