import React from "react";
import ReactDOM from "react-dom";
import "./styles/fonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
