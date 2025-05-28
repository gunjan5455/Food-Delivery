import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/ExploreMenu/Menu";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResertPassword/ResetPassword";

function App() {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
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
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
