import "./App.css";
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
      <h2>{token}</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
