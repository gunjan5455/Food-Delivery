import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/ContactUS/Contact";
import Menu from "./components/ExploreMenu/Menu";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoggedin, setLoggedin] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
