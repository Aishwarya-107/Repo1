import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use createRoot instead of render
import App from "./App";
import "./App.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
