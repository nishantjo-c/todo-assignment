import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import { loadState, saveState } from "./redux/browser-storage.js";

store.subscribe(() => {
  setTimeout(() => {
    const states = store.getState();
    saveState(states.card);
  }, 800);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
