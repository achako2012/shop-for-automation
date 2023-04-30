import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { ProductPage } from "pages/ProductsPage";
import { ShoppingCartPage } from "pages/ShoppingCartPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
