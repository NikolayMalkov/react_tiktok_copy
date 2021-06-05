
import './../css/App.css';
import './../css/content.css';

import Post from './../components/Post.js';
import Animals from './../components/content_sheets/Animals';
import Games from './../components/content_sheets/Games';
import Humours from './../components/content_sheets/Humours';
import Music from './../components/content_sheets/Music';
import Related from './../components/content_sheets/Related';
import Sport from './../components/content_sheets/Sport';
import {BrowserRouter, Route} from "react-router-dom";

function Content() {
  return (

    
    <BrowserRouter>
      <div className="content" >
        <div className="lenta">
          <Post author='anonymous' />
          <Post author='Nikolay' />
          <Route path='/Humours' component={Humours} />
          <Route path='/Animals' component={Animals} />
        </div>
    </div>
    </BrowserRouter>


  );
}

export default Content;
