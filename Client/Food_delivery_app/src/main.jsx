import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import FoodContextProvider from "./context/FoodContex.jsx";
import ScrollContextProvider from "./context/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollContextProvider>
        <FoodContextProvider>
          <App />
        </FoodContextProvider>
      </ScrollContextProvider>
    </BrowserRouter>
  </StrictMode>
);
