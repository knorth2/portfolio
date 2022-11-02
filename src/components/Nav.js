import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
    
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/connect">Connect</Link>
    </div>
  );
};

export default Nav;
