import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="h-screen">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
