import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyAccount from "./routes/MyAccount";
import Menu from "./routes/Menu";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Menu" element={<Menu/>} />
        <Route path="my-account" element={<MyAccount />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
