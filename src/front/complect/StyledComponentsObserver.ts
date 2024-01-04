import Eventer, { EventerValueCallback, EventerValueListeners } from '../../back/complect/Eventer';

class StyledComponentsObserver {
  observer?: MutationObserver;
  private listeners: EventerValueListeners<string> = [];

  mute = (cb: EventerValueCallback<string>) => {
    Eventer.muteValue(this.listeners, cb);

    if (this.listeners.length === 0) {
      this.observer?.disconnect();
      delete this.observer;
    }
  };

  listen = (cb: EventerValueCallback<string>): (() => void) => {
    Eventer.listenValue(this.listeners, cb);

    if (this.observer !== undefined) return () => this.mute(cb);

    const node = document.querySelector('style[data-styled][data-styled-version]');

    if (node === null) throw Error('<style> not found');

    this.observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes[0]?.textContent)
            Eventer.invokeValue(this.listeners, mutation.addedNodes[0].textContent);
        }
      }
    });

    this.observer.observe(node, { childList: true });

    return () => this.mute(cb);
  };
}

export const styledComponentsObserver = new StyledComponentsObserver();
