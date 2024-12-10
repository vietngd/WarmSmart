import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import DashBoard from "./components/dasboard/Dashboard.tsx";
import LayoutHeader from "./components/layout/LayoutHeader.tsx";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <LayoutHeader />
    <DashBoard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
