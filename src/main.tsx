import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import './index.css'

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);
