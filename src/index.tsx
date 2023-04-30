import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import App from "App";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import  { rootReducer } from "store";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const app = (
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
