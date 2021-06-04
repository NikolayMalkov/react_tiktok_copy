
import './../App.css';
import './../header.css';
import './../content.css';
import './../sidebar.css';
import './../footer.css';

function Header() {
  return (

    
    <div className="header">

    <div className="header_logotype">
      <div className="header_logotext">GoShare</div>
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


  );
}

export default Header;
