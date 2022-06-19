import "./styles/App.scss";
import { Link, Outlet } from "react-router-dom";
import Logo from "./components/Logo/logo";

export default function App() {
 

  return (
    <div className="container">
      <nav className="navBar">
        <div className="navBar_logo">
            <Logo/>
        </div>
        <div className="navBar_links">
          <Link className="navBar_links-link" to="/home">Home</Link>
          <Link className="navBar_links-link" to="/menu">Restaraunts</Link>
          <Link className="navBar_links-link" to="/cart">Cart</Link>
          {/* <Link className="navBar_links-link" to="/menu">Language</Link>
          <Link className="navBar_links-link" to="/my-account">My Account</Link> */}
        </div>
        <div className="navBar_buttons">
          <button className="navBar_buttons-register">
            <Link to="/register">
            Register
            </Link>
          </button>
          <button className="navBar_buttons-yizha">
            Yizha App
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
