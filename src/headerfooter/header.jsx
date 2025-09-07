




import "../index.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar">
      <Link to={"/"}>
        <img src="/images/headerLogo.png" alt="" className="headerLogo" />
      </Link>

      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>{" "}
        </Link>

        <Link to={"/shopAll/mens"}>
          <li>Men's</li>
        </Link>

        <Link to={"/shopAll/womens"}>
          <li>Women's</li>
        </Link>

        <Link to={"/shopAll/kids"}>
          <li>Kid's</li>
        </Link>

        <Link to={"/shopAll/jewelry"}>
          <li>Jewelry</li>
        </Link>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src="/images/searchIcon.svg" alt="search" />
      </div>

      <div className="navbarRight">
        <img
          /*onClick={openAccount}*/ className="accountIcon"
          alt="account"
          src="/images/account.svg"
        ></img>
        <Link to={"/cart"}>
          <img
            className="cartIcon"
            alt="shopping cart"
            src="/images/shoppingCart.svg"
          ></img>
        </Link>
      </div>

      {/*<img src="" alt="" className="toggle-icon" />*/}
    </header>
  );
};
