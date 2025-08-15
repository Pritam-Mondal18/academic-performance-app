import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">
        <img src={logo} alt="logo" />
        Academic Predictor
      </Link>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/predict">Predict</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}
