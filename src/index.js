import React from "react";
import ReactDOM from "react-dom/client";
// Components
import { App } from "./App";


// Rendering
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
