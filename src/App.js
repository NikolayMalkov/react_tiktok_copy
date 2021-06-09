
import './css/App.css';
import './css/header.css';
import './css/content.css';
import './css/sidebar.css';
import './css/footer.css';
import './index.css';
import './components/Content.js';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (

    <BrowserRouter>
      <div className="wrapper">

        <Header />

        <div className="grid-wrapper">




          <Sidebar />

          <Content state={props.state} />

          <Footer />


        </div>

      </div>
    </BrowserRouter>



  );
}

export default App;
