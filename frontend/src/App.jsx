import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductCreate from "./pages/ProductCreate";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-create" element={<ProductCreate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
}
