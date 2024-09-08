import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateProvider from './context/StateProvider'



ReactDOM.render(
  <BrowserRouter>
  <StateProvider >
  <App />
  </StateProvider>
 
  </BrowserRouter>,
  document.getElementById("root")
);