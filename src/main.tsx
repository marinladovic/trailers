import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/antd-override.less";
import "./dayjs";

const container = document.getElementById("root");
if (!container) throw new Error("No root element found");
const root = createRoot(container);
root.render(<App />);
