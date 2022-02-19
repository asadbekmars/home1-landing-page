
import "../sass/App.css";
import  path from"../images/Path.svg";
import  blueImg from "../images/blue-box.svg"

function Header() {
  return (
      <header className="App-header">
        <img src={blueImg}></img>
        <div className="sign">
          <a href="#">Sign in</a>
          <a href="#">Sign up <img src={path}/> </a>
        </div>

      </header>
  );
}

export default Header;