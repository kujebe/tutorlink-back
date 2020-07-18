import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store/store";
import { SWRConfig } from "swr";

import App from "./App";

import "./theme/global-styles.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <SWRConfig value={{ fetcher }}>
            <App />
          </SWRConfig>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
