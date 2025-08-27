import logo from "./images/headerLogo.png";
import searchIcon from "./images/searchIcon.svg";
import "./index.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="navbar footer">
        <Link to={'/'}>
      <img src={logo} alt="" className="headerLogo" />
      </Link>

     <h1>Created By Marquette Hanson</h1>

      <div className="search-box">
        <form>
            <input placeholder="Contact Us" type="text"></input>
        </form>
      </div>

      <img src="" alt="" className="toggle-icon" />
    </footer>
  );
};