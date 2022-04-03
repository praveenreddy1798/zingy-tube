import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { VideosProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideosProvider>
      <Router>
        <App />
      </Router>
    </VideosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
