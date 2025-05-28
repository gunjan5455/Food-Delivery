import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import Update from "./pages/Update/Update";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Wrapper to use hooks outside Router
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  // const url = "http://localhost:4000";
  const url = "https://f00d-delivery-mern-bygunjan.onrender.com";
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar setIsLogged={setIsLogged} />}
      <div className="flex">
        {!isLoginPage && <Sidebar />}
        <main className={!isLoginPage ? "ml-64 p-6 w-full" : "w-full"}>
          <Routes>
            <Route
              path="/"
              element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
            />
            <Route
              path="/add"
              element={<Add url={url} isLogged={isLogged} />}
            />
            <Route
              path="/list"
              element={<List url={url} isLogged={isLogged} />}
            />
            <Route
              path="/order"
              element={<Order url={url} isLogged={isLogged} />}
            />
            <Route
              path="/update/:id"
              element={<Update isLogged={isLogged} />}
            />
          </Routes>
        </main>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default AppWrapper;
