// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "/src/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
