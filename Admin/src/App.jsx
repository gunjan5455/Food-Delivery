import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBer/SideBar"; // Ensure this path is correct for your project
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import { ToastContainer } from "react-toastify";
import Update from "./pages/Update/Update";

const App = () => {
  const url = "http://localhost:4000";
  // const url = "http://localhost:4000/api/food/food/";
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/order" element={<Order url={url} />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </main>
        <ToastContainer position="top-center" />
      </div>
    </BrowserRouter>
  );
};

export default App;
