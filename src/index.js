import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Barchart from "./Barchart";
import Piechart from "./Piechart";
import ReactSlick from "./ReactSlick";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Barchart />
    <Piechart />
    <ReactSlick />
  </React.StrictMode>
);

reportWebVitals();
