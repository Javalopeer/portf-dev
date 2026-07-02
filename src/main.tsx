import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.tsx";*/
import "./index.css";
/* import "./Study.ts"; */
import StudyPage from "./StudyPage.tsx";

import { Persona } from "./types/types.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StudyPage />
  </React.StrictMode>,
);
