import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { ProductPage } from "pages/product-page/ProductsPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
