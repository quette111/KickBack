
//import searchIcon from "../images/searchIcon.svg";
import "../index.css";
import { Link } from "react-router-dom";
import './footer.css'
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

      <div>
        <a href="https://github.com/quette111" target="_blank"
            rel="noopener noreferrer">
          <img className="github"
            src="/images/github.png"
            alt="github"
    
          ></img>
        </a>
      </div>
    </footer>
  );
};
