import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "./routes/MyAccount";
import Menu from "./routes/Menu";
import Restaraunt from "./routes/Restaraunt";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Register from "./routes/Register";
import Login from "./routes/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          {/* <Route path="my-account" element={<MyAccount />} /> */}
          <Route path="restaraunt/:id" element={<Restaraunt />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
