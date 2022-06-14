import "./styles/App.scss"
import { Link, Outlet } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";



export default function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <h1>Yizha App - Modern,Fast and Tasty!</h1>
      <nav
      >
        <Link to="/menu">Menu</Link>
        <Link to="/my-account">My Account</Link>
      </nav>
      <Outlet />
    </div>
  );
}
