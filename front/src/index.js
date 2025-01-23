import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
