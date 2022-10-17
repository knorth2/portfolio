import "../assets/css/Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
    <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Projects</Link>
      <Link to="/connect">Connect</Link>
    </div>
  );
};

export default Nav;
