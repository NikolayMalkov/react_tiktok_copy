
import './../css/App.css';
import './../css/sidebar.css';


function Sidebar() {
  return (

    
    <div className="sidebar" >

          <div className="categories_header">

            <h1>Категории</h1>

          </div>

          <div className="categories">
            <ul>
              <li><a href="/Humours">Юмор</a></li>
              <li><a href="/Animals">Животные</a></li>
              <li><a href="/Sport">Спорт</a></li>
              <li><a href="/Games">Игры</a></li>
              <li><a href="/Music">Музыка</a></li>
            </ul>
          </div>



        </div>


  );
}

export default Sidebar;
