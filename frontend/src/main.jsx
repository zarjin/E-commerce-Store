import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </Provider>
);
