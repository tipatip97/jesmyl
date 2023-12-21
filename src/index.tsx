import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setPolyfills } from './back/complect/polyfills';
import App from './front/app/App';
import './front/index.scss';
import './front/lib.scss';
import reportWebVitals from './front/reportWebVitals';
import * as serviceWorkerRegistration from './front/serviceWorkerRegistration';
import { store } from './front/shared/store';
import GlobalStyles from './globalStyles';

export const renderApplication = (reactNode: ReactNode, node: HTMLElement | null) => {
  createRoot(node).render(
    <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>{reactNode}</Provider>
    </React.StrictMode>,
  );
};
renderApplication(<App />, document.getElementById('root'));

export const renderComponentInNewWindow = (
  reactNode: ReactNode | ((win: typeof window) => ReactNode),
  url?: string | URL,
  target?: string,
  features?: string,
) => {
  const linkNode = document.querySelector("link[href][rel='stylesheet']") as HTMLLinkElement | null;

  const style = document.createElement('style');
  const link: HTMLLinkElement = document.createElement('link');

  if (linkNode) {
    link.href = linkNode.href;
    link.rel = 'stylesheet';
  } else {
    let styles = '';
    Array.from(document.querySelectorAll('style')).forEach(box => {
      styles += box.innerText;
    });
    style.innerText = styles;
  }

  const win = window.open(url, target, features);
  if (win) {
    win.document.head.appendChild(style);
    win.document.head.appendChild(link);
    const div = document.createElement('div');
    div.classList.add('above-container');
    win.document.body.appendChild(div);

    renderApplication(typeof reactNode === 'function' ? reactNode(win as never) : reactNode, div);
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

setPolyfills();
