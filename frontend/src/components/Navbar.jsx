import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <div className="navBar">
      <div className="nav-brand">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
