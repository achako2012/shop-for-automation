import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { ProductPage } from "pages/product-page/ProductsPage";
import { ShoppingCartPage } from "pages/shopping-cart-page/ShoppingCartPage";

const App: React.FC = () => {
  // const count = useSelector((state: RootState) => state.counterReducer.count);

  // const dispatch = useDispatch();

  // const handleIncrement = useCallback(() => {
  //   dispatch({ type: "INCREMENT_ASYNC" });
  // }, [dispatch]);

  // const handleDecrement = useCallback(() => {
  //   dispatch({ type: "DECREMENT_ASYNC" });
  // }, [dispatch]);

  return (
    <>
      {/* <div>
        <h1>Counter - Redux Saga Flow Example</h1>
        <button onClick={handleIncrement}>Increment + 1</button>
        <button onClick={handleDecrement}>Decrement - 1</button>
        <div>Count: {count}</div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
