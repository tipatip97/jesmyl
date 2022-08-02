import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import "./index.scss";
import "./lib.scss";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./shared/store";

export const renderApplication = (
  reactNode: ReactNode,
  node: HTMLElement | null
) => {
  createRoot(node).render(
    <React.StrictMode>
      <Provider store={store}>{reactNode}</Provider>
    </React.StrictMode>
  );
};
renderApplication(<App />, document.getElementById("root"));

export const renderComponentInNewWindow = (reactNode: ReactNode) => {
  const win = window.open();
  if (win) {
    const div = document.createElement("div");
    div.classList.add("above-container");
    let styles = "";
    win.document.body.appendChild(div);
    renderApplication(reactNode, div);
    Array.from(document.querySelectorAll("style")).forEach((box) => {
      styles += box.innerText;
    });
    const styleNode = document.createElement("style");
    styleNode.innerText = styles;
    win.document.body.appendChild(styleNode);
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(conso le.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
