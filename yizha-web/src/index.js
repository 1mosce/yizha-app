import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expences";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
