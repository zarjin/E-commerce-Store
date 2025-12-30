import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
);
