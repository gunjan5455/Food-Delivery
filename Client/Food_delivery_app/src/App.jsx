import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/ExploreMenu/Menu";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify/verify";
import MyOrders from "./pages/MyOrders/MyOrders";

function App() {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login isLoggedin={isLoggedin} setLoggedin={setLoggedin} />
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
