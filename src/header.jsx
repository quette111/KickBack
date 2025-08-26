import logo from "./images/headerLogo.png";
import searchIcon from "./images/searchIcon.svg";
import "./index.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="navbar">
      <img src={logo} alt="" className="headerLogo" />

      <ul>

         <Link to={'/'}> <li>Home</li> </Link>
        <li>Products</li>
        <li>Stuff</li>
        <li>More</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search" />
      </div>

      <img src="" alt="" className="toggle-icon" />
    </header>
  );
};