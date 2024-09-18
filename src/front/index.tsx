import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RuleSet, ThemeProvider } from 'styled-components';
import App from './app/App';
import { setPolyfills } from './complect/polyfills';
import './index.scss';
import './lib.scss';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import StyledGlobalStyles from './styledGlobalStyles';
import { styledDefaultTheme } from './styledTheme';
import { logFrontErrors } from './complect/error-catcher';

export const renderApplication = (reactNode: ReactNode, node: HTMLElement | null) => {
  createRoot(node).render(
    <React.StrictMode>
      <ThemeProvider theme={styledDefaultTheme}>
        <StyledGlobalStyles />
        {reactNode}
      </ThemeProvider>
    </React.StrictMode>,
  );
};
export const renderRootApp = () =>
  renderApplication(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );

export const renderComponentInNewWindow = (
  reactNode: ReactNode | ((win: typeof window) => ReactNode),
  url?: string | URL,
  target?: string,
  features?: string,
  htmlNode?: HTMLElement,
  addStyle?: RuleSet<object>,
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

  if (addStyle) style.innerText += Array.from(addStyle).join('');

  const win = window.open(url, target, features);
  if (win) {
    win.document.head.appendChild(style);
    win.document.head.appendChild(link);
    const div = document.createElement('div');
    div.classList.add('above-container');
    win.document.body.appendChild(div);

    if (htmlNode !== undefined) div.appendChild(htmlNode);
    else renderApplication(typeof reactNode === 'function' ? reactNode(win as never) : reactNode, div);
  }

  return win;
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
logFrontErrors();
