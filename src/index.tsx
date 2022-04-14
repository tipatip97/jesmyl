import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";

// const { createRoot } = require('react-dom/client');
// const container = document.getElementById('root');
// const root = createRoot(container);
export const renderApplication = (reactNode: ReactNode, node: HTMLElement | null) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        {reactNode}
      </Provider>
    </React.StrictMode>,
    node
  );
};
renderApplication(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(conso le.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
