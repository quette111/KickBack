import logo from "./images/headerLogo.png";
import searchIcon from "./images/searchIcon.svg";
import shoppingCart from "./images/shoppingCart.png";
import account from "./images/account.png";

import "./index.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
  
    <header className="navbar">
      <img src={logo} alt="" className="headerLogo" />

      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>{" "}
        </Link>
        <li>Men's</li>
        <li>Women's</li>
        <li>Kid's</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search" />
      </div>

<div className="navbarRight">
<img alt="account" src={account}></img>
<img className="cartIcon" alt="shopping cart" src={shoppingCart}></img>
</div>

      <img src="" alt="" className="toggle-icon" />
    </header></>
  );
};