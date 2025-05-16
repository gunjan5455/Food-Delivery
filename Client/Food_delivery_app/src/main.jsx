import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FoodContextProvider from "./context/FoodContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </StrictMode>
);
