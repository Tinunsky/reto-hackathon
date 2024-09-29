// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ActivityGeneratorProvider } from "./contexts/ActivityGeneratorContext.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ActivityGeneratorProvider>
    <App />
  </ActivityGeneratorProvider>
  // </StrictMode>,
);
