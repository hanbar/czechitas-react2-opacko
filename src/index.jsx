import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">XXXMuck</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
