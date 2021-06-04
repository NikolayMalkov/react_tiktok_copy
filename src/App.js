
import './App.css';
import './header.css';
import './content.css';
import './sidebar.css';
import './footer.css';

function App() {
  return (

    <div className="wrapper">

      <div className="header">

        <div className="header_logotype">
          <div className="header_logotext">GoWatch</div>
        </div>

        <div className="searchform">

          <form action="" method="get">
            <input name="s" placeholder="Введите запрос" type="search" className="searchinput"></input>
            <button className="searchbtn" type="submit">Поиск</button>
          </form>



        </div>

        <div className="login">

          <button className="loginbtn">Войти</button>

        </div>
      </div>

      <div className="grid-wrapper">




        <div className="sidebar" >

          <div className="categories_header">

            <h1>Категории</h1>

          </div>

          <div className="categories">
            <ul>
              <li>Юмор</li>
              <li>Животные</li>
              <li>Спорт</li>
              <li>Игры</li>
              <li>Музыка</li>
            </ul>
          </div>



        </div>
        <div className="content" >Three</div>
        <div className="footer">footer</div>


      </div>

    </div>



  );
}

export default App;
