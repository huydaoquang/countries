import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./Components/Store";
import App from "./App";
import { ThemeProvider } from "./Components/ThemeContext/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
