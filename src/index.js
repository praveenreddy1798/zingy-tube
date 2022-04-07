import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
  VideosProvider,
  AuthProvider,
  ToastProvider,
  ModalProvider,
} from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <VideosProvider>
        <ToastProvider>
          <ModalProvider>
            <Router>
              <App />
            </Router>
          </ModalProvider>
        </ToastProvider>
      </VideosProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
