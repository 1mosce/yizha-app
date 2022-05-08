import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login/Login";

export default function App() {
  const [token, setToken] = useState();
  
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <h1>Yizha App - Modern,Fast and Tasty!</h1>
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
