
import './../css/App.css';
import './../css/header.css';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Header(props) {
  return (

    
    <div className="header">
      

    <div className="header_logotype">
      <div className="header_logotext"><NavLink to="/Related">GoShare</NavLink></div>
    </div>

    <div className="searchform">

      <form action="" method="get">
        <input name="s" placeholder="Введите запрос" type="search" className="searchinput"></input>
        <button className="searchbtn" type="submit"><FaSearch /></button>
      </form>



    </div>

    <div className="login">

    <div>{props.login}</div>

      <NavLink to="/login">  <button className="loginbtn"> Войти </button> </NavLink>
  

    </div>
    
  </div>


  );
}

export default Header;
