
import './App.css';
import './header.css';
import './content.css';
import './sidebar.css';
import './footer.css';
import './components/Content.js';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (

    <div className="wrapper">

     <Header />

      <div className="grid-wrapper">




        <Sidebar />
        
        <Content />

        <Footer />


      </div>

    </div>



  );
}

export default App;
