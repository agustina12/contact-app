import React from "react";
import ReactDOM from "react-dom/client";
import ContactApp from "./components/ContactApp";

// styles
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>
);
