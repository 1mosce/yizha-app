import "./styles/App.scss";
import { Link, Outlet } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";
import Logo from "./components/Logo/logo";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

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
            Register
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
