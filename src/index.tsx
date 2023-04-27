import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "App";

const app = (
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
