import Eventer, {
  EventerCallback,
  EventerListeners,
  EventerValueCallback,
  EventerValueListeners,
} from '../../../back/complect/Eventer';

type ThrowEventKeyDownKey = 'Escape' | 'Enter';

class ThrowEventClass {
  private keyDownListens: Record<ThrowEventKeyDownKey, EventerListeners<KeyboardEvent>> = {
    Escape: [],
    Enter: [],
  };

  private windowFocusEvents: EventerValueListeners<boolean> = [];
  private windowOnlineEvents: EventerValueListeners<boolean> = [];

  constructor() {
    window.addEventListener('keydown', event => {
      if (this.keyDownListens[event.code as ThrowEventKeyDownKey])
        Eventer.invoke(this.keyDownListens[event.code as ThrowEventKeyDownKey], event);
    });

    window.addEventListener('focus', () => {
      Eventer.invokeValue(this.windowFocusEvents, true);
    });
    window.addEventListener('blur', () => {
      Eventer.invokeValue(this.windowFocusEvents, false);
    });

    window.addEventListener('online', () => {
      Eventer.invokeValue(this.windowOnlineEvents, true);
    });
    window.addEventListener('offline', () => {
      Eventer.invokeValue(this.windowOnlineEvents, false);
    });
  }

  listenKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
    return Eventer.listen(this.keyDownListens[key], cb);
  };

  muteKeyDown = (key: ThrowEventKeyDownKey, cb: EventerCallback<KeyboardEvent>) => {
    Eventer.mute(this.keyDownListens[key], cb);
  };

  listenIsOnline = (cb: EventerValueCallback<boolean>) => {
    cb(window.navigator?.onLine);
    return Eventer.listenValue(this.windowOnlineEvents, cb);
  };

  muteIsOnline = (cb: EventerValueCallback<boolean>) => {
    Eventer.muteValue(this.windowOnlineEvents, cb);
  };

  listenIsWinFocused = (cb: EventerValueCallback<boolean>) => {
    return Eventer.listenValue(this.windowFocusEvents, cb);
  };

  muteIsWinFocused = (cb: EventerValueCallback<boolean>) => {
    Eventer.muteValue(this.windowFocusEvents, cb);
  };
}

export const ThrowEvent = new ThrowEventClass();
