import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextprovider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  
    <AuthContextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextprovider>
  
  
  // </React.StrictMode>
);
