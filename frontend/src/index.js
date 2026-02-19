import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root"); // MUST MATCH <div id="root">
const root = createRoot(container);
root.render(<App />);
