import React from "react";
import {createRoot} from "react-dom/client";
import bgImage from "../assets/img/bg.png";
import "../styles/main.scss";
import App from "./Components/App";

document.body.style.backgroundImage = `url(${bgImage})`;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);