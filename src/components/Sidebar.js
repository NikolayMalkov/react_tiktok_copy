
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/sidebar.css';
import './../css/Messages.css';


function Sidebar() {
  return (


    
      <div className="sidebar" >

        <div className="categories_header">

          <h1>Категории</h1>

        </div>

        <div className="categories">
          <ul className="listStyle">
            <li><NavLink to="/Humours" activeClassName="active">Юмор</NavLink></li>
            <li><NavLink to="/Animals" activeClassName="active">Животные</NavLink></li>
            <li><NavLink to="/Sport" activeClassName="active">Спорт</NavLink></li>
            <li><NavLink to="/Games" activeClassName="active">Игры</NavLink></li>
            <li><NavLink to="/Music" activeClassName="active">Музыка</NavLink></li>
          </ul>
        </div>

        <div className="user_menu">
            <ul className="listStyle">
              <li><NavLink to="/Messages">Сообщения</NavLink></li>
            </ul>
        </div>


      </div>
    

  );
}

export default Sidebar;
