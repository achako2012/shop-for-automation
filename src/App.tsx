import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { ProductPage } from "pages/product-page/ProductsPage";
import { ShoppingCart } from "pages/shopping-cart-page/ShoppingCart";

const App: React.FC = () => {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  // console.log(store);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
