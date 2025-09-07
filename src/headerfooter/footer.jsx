
//import searchIcon from "../images/searchIcon.svg";
import "../index.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="navbar footer">
      <div>
        <Link to={"/"}>
          <img src="/images/headerLogo.png" alt="" className="headerLogo" />
        </Link>
      </div>
      <div className="createdBy">
        {" "}
        <h1>Created By Marquette Hanson</h1>
      </div>

      <div className="search-box">
        <form>
          <input placeholder="Contact Us" type="text"></input>
        </form>
      </div>
    </footer>
  );
};
