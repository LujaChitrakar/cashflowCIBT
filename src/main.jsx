import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "admin-lte/dist/js/adminlte.min";
import $ from "jquery";
import App from "./App";
import "./index.css";

// Make jQuery globally available
window.$ = $;
window.jQuery = $;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
