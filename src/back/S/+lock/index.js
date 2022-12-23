;'use strict';

let st = 0;
const stage = num => {
  if (num != null) st = num;
  return st;
};

try {

(function IndexModule() {
  window.svg = window.svg || ((o, t) => t);
  
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  if (window.isIndexModuleRun) return; ////////////
  window.isIndexModuleRun = true; /////////////////
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  
  
  const origin = 'https://jesmyl.space';
  
  if (localStorage.host) {
    const url = new URL(localStorage.host);
    const originUrl = new URL(origin);
    originUrl.pathname = url.pathname;
    localStorage.host = originUrl.toString();
  } else localStorage.host = new URL(origin).toString();
  
  window.addEventListener('error', event => tryIt(() => {
    mylib && mylib.dconsl && mylib.dconsl(event.message, event).config({type: 0});
    reportErrorMessage(event);
  }));
  
  window.System = window.Android || window.System;
  window.Android = window.System || window.Android;
  
  [
    {
      name: 'checkStarterHref',
      func: () => location.href
    }, {
      name: 'copyToClipboard',
      func: (text) => navigator.clipboard.writeText(text),
    }, {
      name: 'scanExtDir'
    }
  ].forEach(({name, func}) => {
    if (typeof System[name] !== 'function') System[name] = func || (() => {});
  });
  
  System.isAndroid = () => navigator.userAgent && /android/i.test(navigator.userAgent);
  
  stage(1);
  
  window.useElement = (name, topId, cb, forceReborn = false, doc = document) => {
    const id = encodeURIComponent(topId).replace(/%/g, '_');
    const oldElement = doc.querySelector(`#${id}`);
    
    if (oldElement) {
      if (forceReborn) {
        oldElement.remove();
      } else {
        cb && cb(oldElement);
        return oldElement;
      }
    }
    
    const element = doc.createElement(name);
    
    element.id = id;
    const _serviceNode = 'service_node';
    let serviceNode = doc.querySelector(`#${_serviceNode}`);
    if (!serviceNode) {
      serviceNode = doc.createElement('div');
      serviceNode.id = _serviceNode;
      doc.body.appendChild(serviceNode);
    }
    serviceNode.appendChild(element);
    cb && cb(element);
    return element;
  };
  
  window.insertStyle = (id, text, doc) => useElement('style', mylib.normQuery(id), elem => elem.innerText = mylib.compileCss(text, id), false, doc);
  
  useElement('style', 'main-index-style', style => {
    style.innerText = `
      #index-refresh-button {
        --hleft: -20px;
        --left: 5px;
        --top: calc(100vh - 30px);
        position: absolute;
        left: var(--hleft);
        top: var(--top);
        color: var(--color-far);
        z-index: 9999999;
        transition: left .5s, color .3s;
      }
      
      #index-refresh-button.sending {
        left: var(--left);
        animation: rotate .5s linear infinite;
      }
      
      #index-refresh-button.active {
        left: var(--left);
      }
      
      #index-refresh-button.inactive {
        left: var(--hleft);
      }
      
      #index-refresh-button.error {
        left: var(--left);
        color: red;
        color: var(--color-ko-3);
      }
      
      #index-refresh-button.wait {
        left: var(--left);
        color: yellow;
        color: var(--color-br-6);
      }
      
      #index-refresh-button.offline {
        left: var(--left);
        color: blue;
        color: var(--color-no-5);
      }
      
      #index-refresh-button.fatal-error {
        left: var(--left);
        color: violet;
      }
      
      #index-refresh-button.jumping {
        left: var(--left);
        animation: jump-animation 1s linear forwards;
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }
      @keyframes jump-animation {
        from {
          top: var(--top);
          left: var(--left);
        }
        12% {
          top: calc(var(--top) - 20px);
          left: var(--left);
          transform: rotate(-90deg);
        }
        24% {
          top: var(--top);
          left: var(--left);
          transform: rotate(0deg);
        }
        36% {
          top: calc(var(--top) - 20px);
          left: var(--left);
          transform: rotate(-90deg);
        }
        50% {
          top: var(--top);
          left: var(--left);
          transform: rotate(0deg);
        }
        90% {
          left: var(--left);
        }
        to {
          left: var(--hleft);
        }
      }
      
    `;
  });
  /////////
  
  stage(2);
  
  System.onEventError = name => tryIt(() => mylib.dconsl('error on event', name));
  
  let errorMessage;
  
  class Modal extends React.Component {
    constructor(props) {
      super();
      
      this.state = {
        
      };
      this.config = {};
      const self = this;
      
      mylib.overlap(this.config, props, {
        closeModal() {
          g.Modal.close.apply(g.Modal, arguments);
          self.focusedElement = null;
        },
        setError: error => {
          errorMessage = error;
          this.forceUpdate();
        },
        regOnClose: g.Modal.regOnClose,
      });
    }
    
    observableProps(propns = [], context = Object) {
      const propDict = {};
      propns.forEach(propn => {
        propDict[propn] = context[propn] == null
          ? null
          : mylib.isFunc(context[propn])
            ? context[propn](this.config)
            : context[propn];
      });
      return propDict;
    }
    
    onActionClick(input, onClick, clickConfig) {
      if (input.modal != null) {
        if (typeof input.onClick !== 'function' || input.onClick(clickConfig))
          g.Modal.show(typeof input.modal === 'function' ? mylib.overlap({title: this.config.title}, input.modal(clickConfig)) : input.modal);
      } else if (typeof input.confirm === 'string') {
        const title = input[input.confirm] || input.confirm.replace('#', '');
        
        g.Modal.show({
          title: input.value || input.title || title,
          description: `Ты действительно хочешь ${title[0].toLowerCase()}${title.substr(1)}?`,
          buttons: [
            {
              title: 'да',
              onClick: inheritConfig => onClick(inheritConfig, clickConfig)
            }, 'нет'
          ]
        });
      } else onClick(clickConfig);
      if (input.closable) this.config.closeModal();
    }
      
    render() {
      const config = this.config;
      const defTheme = 'm-ok';
      const asFunc = (val) => mylib.func(val, () => val).call();
      
      return ce(
        'div',
        {
          key: 'app-modal-window',
          className: 'app-modal-window',
        },
        ce(
          'div',
          {
            key: 'app-modal',
            className: 'app-modal',
          },
  
          ce(
            'div',
            {
              key: 'app-modal-title',
              className: 'app-modal-title',
            },
            ce(
              'span',
              {
                key: 'app-modal-title-label',
                className: 'app-modal-title-label',
              },
              this.config.title
            ),
            this.config.withoutCloseButton ? null : ce(
              'span',
              {
                key: 'app-modal-title-close-icon',
                className: 'app-modal-title-close-icon',
                onClick: () => {
                  const res = this.config.onCloseButtonClick && this.config.onCloseButtonClick(this.config);
                  if (res !== false) {
                    g.Modal.close();
                    this.config.setError('');
                  }
                },
              },
              '×'
            )
          ),
  
          ce(
            'div',
            {
              key: `app-modal-body`,
              className: `app-modal-body${errorMessage ? ' with-error' : ''} ${this.config.theme || defTheme}`,
            },
  
            ce(
              'div',
              {
                key: 'app-modal-body-inner',
                className: `app-modal-body-inner ${this.config.theme || defTheme}`,
              },
  
              (this.config.description || this.config.descriptionHtml) &&
              ce(
                'div',
                {
                  key: 'app-modal-description',
                  className: 'app-modal-description',
                },
                ce(
                  'span',
                  {
                    key: 'app-modal-description-label',
                    className: 'app-modal-description-label',
                    dangerouslySetInnerHTML: this.config.description ? null : {__html: asFunc(this.config.descriptionHtml)},
                  },
                  this.config.descriptionHtml ? null : asFunc(this.config.description)
                )
              ),
          
              !this.config.inputs || !this.config.inputs.length ? null :
              ce(
                'div',
                {
                  key: 'app-modal-body-input-list',
                  className: 'app-modal-body-input-list',
                },
                this.config.inputs.map((input, inputi) => {
                  if (input == null) return;
                  input.set = (attrn, val) => {
                    if (input.element) input.element.setAttribute(attrn, val);
                    input[attrn] = val;
                  };
                  input.setVal = val => input.set('value', val);
                  
                  const isTextArea = input.type === 'textarea';
                  
                  return ce('label',
                    mylib.overlap({}, {
                      key: `app-modal-body-input-list-item=${inputi}`,
                      className: 'app-modal-body-input-list-item',
                    }, this.observableProps(['hidden'], input)),
                    (input.title || input.titleHtml) &&
                    ce(
                      'span',
                      mylib.overlap(
                        {
                          key: `app-modal-body-input-list-item-title=${inputi}`,
                          className: 'app-modal-body-input-list-item-title',
                        },
                        input.titleHtml ? {
                          dangerouslySetInnerHTML: {__html: input.titleHtml},
                          titleHtml: null
                        } : null
                      ),
                      input.titleHtml ? null : this.observableProps(['title'], input).title
                    ),
                    ce(
                      isTextArea ? 'textarea' : 'input',
                      mylib.overlap(isTextArea ? {rows: 3} : {}, input, {
                        style: mylib.func(input.style, () => input.style).call(),
                        key: `app-modal-body-input-list-item-input-${inputi}`,
                        className: `app-modal-body-input-list-item-input${input.className ? ` ${input.className}` : ''}`,
                        onInput: event => {
                          try {
                            input.value = event.target.value;
                            if (input.onInput) {
                              input.onInput(mylib.overlap({input, event}, config));
                            }
                            this.forceUpdate();
                          } catch (error) {
                            mylib.dcconsl(error.stack);
                            throw error;
                          }
                        },
                        onClick: event => {
                          try {
                            const clickConfig = mylib.overlap({input, event}, config);
                            
                            const onClick = () => {
                              if (input.onClick) {
                                input.onClick(clickConfig);
                                this.forceUpdate();
                              }
                            };
                            
                            this.onActionClick(input, onClick, clickConfig);
                            
                          } catch (error) {
                            mylib.dcconsl(error.stack);
                            throw error;
                          }
                        },
                        titleHtml: null,
                        title: null,
                        confirm: null,
                        modal: null,
                        ref: element => {
                          if (element && this.focusedElement == null && (config.focusOn === inputi || (config.focusOn == null && inputi === 0))) {
                            this.focusedElement = element;
                            element.focus();
                            element.select();
                          }
                          if (element) input.element = element;
                          input.ref && input.ref(element);
                        }
                      }, this.observableProps(['disabled', 'hidden', 'checked', 'min', 'max', 'value'], input)),
                      isTextArea ? input.value : null
                    )
                  );
                })
              )
            )
          ),
    
          ce(
            'div',
            {
              key: 'app-modal-footer',
              className: 'app-modal-footer ${this.config.theme || defTheme}'
            },
            errorMessage && ce(
              'div',
              {
                key: 'app-modal-footer-error',
                className: 'app-modal-footer-error',
              },
              errorMessage
            ),
    
            !this.config.buttons || !this.config.buttons.length ? null :
            ce(
              'div',
              {
                key: 'app-modal-footer-button-list',
                className: `app-modal-footer-button-list ${this.config.theme || defTheme}`,
              },
              ce(
                'div',
                {
                  key: 'app-modal-footer-button-list-inner',
                  className: 'app-modal-footer-button-list-inner ${this.config.theme || defTheme}',
                },
                this.config.buttons.map((button, buttoni) => {
                  if (button == null) return null;
                  if (typeof button === 'string') button = {title: button};
                  
                  return ce(
                    'button',
                    mylib.overlap({}, button, ({
                      key: `app-modal-footer-button-list-item${buttoni}`,
                      className: `app-modal-footer-button-list-item${button.className ? ` ${button.className}` : ''}`,
                      onClick: event => {
                        try {
                          let isClose = config.closeOnClick !== false && button.closable !== false;
                          const clickConfig = mylib.overlap({button, event}, config, {dontClose: () => isClose = false});
                          
                          const onClick = () => {
                            if (button.onClick) {
                              button.onClick(clickConfig);
                              
                              if (isClose) config.closeModal();
                              
                              this.forceUpdate();
                            } else this.config.closeModal();
                          };
                          
                          this.onActionClick(button, onClick, clickConfig);
                        } catch (error) {
                          mylib.dcconsl(error.stack);
                          throw error;
                        }
                      },
                      title: null,
                      modal: null,
                      confirm: null,
                    }), this.observableProps(['disabled', 'hidden'], button)),
                    this.observableProps(['title'], button).title
                  );
                })
              )
            )
          )
        )
      );
    }
  }
  
  stage(3);
  
  class Application extends React.Component {
    constructor(props) {
      super();
      
      this.loadApp = (app, name) => {
        if (app == null) {
          this.setState({
            currentApplication: ce('div',
              {},
              ce('h1', {style: {color: 'red'}}, `Неизвестное приложение ${name}`),
              ce('span', {
                style: {color: 'grey'},
                onClick: () => this.load('index'),
              }, 'Назад')
            ),
            currentApplicationName: name
          });
        } else
          this.setState({
            currentApplication: app,
            currentApplicationName: name
          });
      };
  
      const bag = {
        isShowModal: false,
      };
  
      this.config = {
        get bag() {
          return bag;
        }
      };
  
      const open = (isName) => {
        if (bag[isName]) {
          bag[isName] = false;
          this.forceUpdate()
          setTimeout(() => {
            bag[isName] = true;
            this.forceUpdate()
          }, 50);
        } else {
          bag[isName] = true;
          this.forceUpdate();
        }
      };
      
      let onCloseCbs = {};
      
      g.Modal = {
        show: (modalConfig, onClose) => {
          if (mylib.isFunc(onClose)) onCloseCbs.push(onClose);
          if (mylib.isFunc(modalConfig)) {
            let config = {};
            
            try {
              const newConfig = modalConfig(config);
              mylib.overlap(config, newConfig);
              bag.modalConfig = config;
            } catch (error) {
              tryIt(() => mylib.dconsl('конфиг инициализируется пустым объектом:', error.stack));
            }
          } else bag.modalConfig = modalConfig;
          
          if (bag.modalConfig.key != null) g.Modal.keys[bag.modalConfig.key] = bag.modalConfig;
          open('isShowModal');
        },
        load: key => g.Modal.show(g.Modal.keys[key]),
        close: () => {
          Object.keys(onCloseCbs).forEach(cbName => mylib.isFunc(onCloseCbs[cbName]) && onCloseCbs[cbName](bag));
          onCloseCbs = {};
          bag.isShowModal = false;
          this.forceUpdate();
        },
        regOnClose: (cb, id) => onCloseCbs[id] = cb,
        keys: {},
      };
      
      this.state = {
        currentApplication: null
      };
      
      props.onInit && props.onInit(this);
    }
    
    render() {
      return ce('div',
        {
          key: 'top-application',
          className: `app-container ${this.state.currentApplicationName} ${applicanter.localAuth.level || 0}-user-level`
        },
        this.config.bag.isShowModal ? ce(Modal, this.config.bag.modalConfig) : null,
        this.state.currentApplication
      );
    }
  }
  
  
  function tryIt() {
    let val;
    let prevError;
    const args = Array.from(arguments);
    
    args.some(arg => {
      if (typeof arg === 'function') {
        try {
          val = arg(prevError);
          return true;
        } catch (error) {
          prevError = error;
          return false;
        }
      } else {
        val = arg;
        return true;
      }
    });
    
    return val;
  };
  
  async function tryIta() {
    let val;
    let prevError;
    const args = Array.from(arguments);
    
    args.some(async arg => {
      if (typeof arg === 'function') {
        try {
          if ('then' in arg)
            val = await arg(prevError);
          else
            val = arg(prevError);
          return true;
        } catch (error) {
          prevError = error;
          return false;
        }
      } else {
        val = arg;
        return true;
      }
    });
    
    return val;
  };
  
  window.tryIt = tryIt;
  window.tryIta = tryIta;
  window.tryDc = (args, type) => tryIt(() => mylib.dconsl.apply(mylib, mylib.isFunc(args) ? args() : args).config({type}));
  
  class Applicanter {
    constructor() {
      this.applications = {};
      
      this.components = tryIt(() => JSON.parse(localStorage.appComponents), []);
      
      this.refreshButton = (() => {
        return useElement('b', 'index-refresh-button', button => {
          button.innerHTML = '&#8634;';
        });
      })();
      
      this.currentCheckUpdatesController = {};
      this.XHR = (window.XMLHttpRequest && ('onload' in new window.XMLHttpRequest())) ? window.XMLHttpRequest : window.XDomainRequest;
      
      this.localAuthContent = localStorage.auth;
      this.localAuth = tryIt(() => JSON.parse(this.localAuthContent), {}) || {};
      
      this.isFirstRequest = true;
      this.appProps = {};
      this.registeredApps = (localStorage.registeredApps || '').split(',').filter(appName => appName);
      this.customListeners = [];
      
      ['onCreate', 'onStart', 'onPause', 'onResume', 'onStop', 'onDestroy', 'onConsoleLog', 'onTouchDown?', 'onTouchUp?', 'onTouchEvent?']
        .forEach(eventName => {
          System[eventName] = this.systemListener(eventName);
        });
      
      this.scopes = {};
    }
    
    scope(appName, scope) {
      if (this.scopes[appName] == null && scope) {
        this.scopes[appName] = scope;
        scope.app = (window.json.apps || []).find(app => app.name === appName) || null;
      }
      
      return this.scopes[appName];
    }
    
    $listen(eventName, id, cb) {
      if (cb) {
        if (cb[Symbol.toStringTag] !== 'AsyncFunction') {
          tryIt(() => mylib.dconsl(`registered not async cb ${id} in ${eventName} event`).config({type: 0}));
        }
        const prevIndex = this.customListeners.findIndex(li => li.cb === cb || (li.id === id && li.eventName === eventName));
        if (prevIndex === -1) this.customListeners.unshift({eventName, cb, id});
        else this.customListeners[prevIndex] = {eventName, cb, id};
      }
    }
    
    $mute(eventName, id, cb) {
      this.customListeners = this.customListeners.filter(li => !(li.eventName === eventName && (li.id === id || li.cb === cb)));
    }
    
    async $emit(eventName, params = [], topEvent, context) {
      let returnValue = null;
      const event = topEvent || {
        get returnValue() {return returnValue;},
        values: params || null,
        value: params && params.length ? params[0] : null
      };
      
      return this.customListeners
        .filter(li => li.eventName === eventName && li.cb[Symbol.toStringTag] === 'AsyncFunction')
        .reduce(async (val, li) => {
          const ret = await tryIta(async () => await li.cb.apply(context, [event].concat(params)), error => mylib.dcconsl(error.stack).config({type: 0}));
          if (ret !== undefined) {
            returnValue = ret;
            return ret;
          } else return val;
        }, null);
    }
    
    systemListener(eventName) {
      const self = this;
      
      return async function(value) {
        const values = Array.from(arguments);
        try {
          const ret = await self.$emit(`Apk.${eventName}`, values, {value, returnValue: null, values});
          return typeof ret === 'string' ? ret : '';
        } catch (error) {
          tryIt(() => mylib.dconsl(error.stack, values).config({type: 0}));
          throw error;
        }
      };
    }
    
    notify() {
      Notification.requestPermission().then(result => {
        if (result === 'granted') {
          new Notification('Title', { body: 'Hello!' });
        }
      });
    }
    
    refreshesScript(cb, src) {
      return useElement('script', 'refreshes-script', script => {
        const complete = ok => cb && cb(ok, script);
        
        script.src = src;
        script.onload = () => complete(true);
        script.onerror = () => complete(false);
      }, true);
    }
    
    initWebBackPressed() {
      if (!this.isWebBackPressedInitialized && window.mylib && window.System) {
        this.isWebBackPressedInitialized = true;
        
        /*if (!window.System.isAndroid())
          mylib.preventWindowBackrun(this.systemListener('onBackPressed'));*/
      }
    }
    
    refreshState(state) {
      const unclickableStates = ['inactive', 'error', 'sending', 'jumping'];
      
      if (state && state !== 'reset') {
        const tmp = this.refreshButtonState;
        this.refreshButtonState = '' + state;
        
        setTimeout(() => {
          this.refreshButton.classList.remove(tmp);
          this.refreshButton.classList.add(state);
        });
        
        //if (state === 'active') tryIt(() => this.localAuth.level == 100 && System.showToast(':J'));
      }
      return unclickableStates.indexOf(state || this.refreshButtonState) < 0;
    }
    
    register(name, reactApp) {
      this.applications[name] = reactApp;
    }
    
    registerApp(appName) {
      if (appName === 'index') return;
      
      if (this.registeredApps.indexOf(appName) < 0) {
        this.registeredApps.push(appName);
        localStorage.registeredApps = this.registeredApps.join(',');
      }
    }
    
    reset() {
      this.currentApp = localStorage.currentApp = '';
      this.registeredApps.forEach(appName => this.appLastMod(appName, ''));
      this.checkUpdates({
        isForceIndex: true,
        isForceApp: true
      });
    }
    
    loadCurrent() {
      this.load(this.currentApp || localStorage.currentApp || 'index', 3);
    }
    
    load(name) {
      return new Promise((loadSuccess, loadFail) => {
        this.registerApp(name);
        
        const loadApp = () => {
          this.currentApp = name;
          if (name !== 'index') localStorage.currentApp = name;
          if (this.applications[name] == null) {
            const result = this.loadAppComponents(name);
            
            if (!result.ok) {
              tryIt(() => mylib.dconsl(result.errors, result));
              loadSuccess(result);
            } else {
              loadSuccess({ok: true, name});
              setTimeout(() => this.appContext.loadApp(this.applications[name], name));
            }
            
          } else {
            this.appContext.loadApp(this.applications[name], name);
            loadSuccess({ok: true, name});
          }
        };
        
        if (name === 'index' || this.components.some(comp => comp.app === name && comp.main)) {
          loadApp();
          if (name !== 'index') 
            this.checkUpdates({
              appName: name,
              isCheckEqName: true
            });
        } else {
          this.checkUpdates({
            isForceApp: true,
            appName: name,
            isCheckEqName: true,
            cb: (comps, conts, load) => {
              if (comps && conts
                && comps.some(comp => comp.app === name && comp.main)
                && conts.some(cont => cont.app === name && cont.main)
              ) {
                loadApp();
              } else {
                loadSuccess({ok: false, errors: ['Нет главного модуля']});
                return false;
              }
            }
          });
        }
      });
    }
    
    loadAppComponents(appName) {
      const appComps = this.components.filter(comp => comp.app === appName);
      
      if (!appComps.some(comp => comp.main))
        return {
          ok: false,
          errors: ['No main component'],
          error: 'no_main',
          stack: [],
        };
      
      const appContents = appComps.map(comp => Object.assign({content: System.readStorage(comp.name)}, comp));
      
      if (0) {
        const withoutContent = appContents.filter(comp => !comp.content);
        
        if (withoutContent.length)
          return {
            ok: false,
            errors: ['No content'],
            error: 'no_content',
            stack: withoutContent
          };
      }
      
      const failedContents = appContents.filter(comp => this.parseContent(comp));
      
      if (failedContents.length)
        return {
          ok: false,
          errors: ['There are failed contents'],
          error: 'failed_contents',
          stack: failedContents
        };
      
      return {ok: true};
    }
    
    parseContent(params) {
      try {
        const {content, ext, name} = params || {};
        
        if (content) {
          switch (ext) {
            case 'css':
              useElement('style', name, elem => elem.innerText = content);
              break;
            case 'scss':
              if (window.mylib) {
                const compiled = mylib.compileCss(content, name);
                useElement('style', name, elem => elem.innerText = compiled);
              }
              break;
            case 'json':
              window.json[name] = JSON.parse(content);
              break;
            case 'js':
              //eval(content);
              /*const look = parseInt(this.localAuth.level || 0);
              const reg = RegExp(`((/(\\*{4}):((=?)(\\d{1,3})(([-+])(\\d{1,3}))?)):([\\w\\W]*?)\\3/)([\\w\\W]*?)\\2;\\3/`, 'g');
              const js = content.replace(reg, (all, comment, firstCommentPart, stars, period, equal, firstNum, dashAndSName, dashType, secondNum, altInput, input) => {
                const fNum = firstNum && parseInt(firstNum);
                const sNum = secondNum && parseInt(secondNum);
                
                const ret = fNum == null
                  ? ''
                  : sNum == null
                    ? fNum <= look
                      ? input
                      : altInput || ''
                    : dashType === '+'
                      ? look <= fNum && look >= sNum
                        ? input
                        : altInput || ''
                      : look >= fNum && look <= sNum
                        ? input
                        : altInput || '';
                 return ret;
              });*/
              
              (new Function(content)).apply(window);
              break;
          }
        }
        
        return 0;
        
      } catch (error) {
        tryIt(() => mylib.consl(name, error.stack).config({type: 0}));
        console.error(error);
        return 1;
      }
    }
    
    lsTmVal(appName, setVal, postfix) {
      if (appName == null || setVal === null) return null;
      const name = `${appName}.${postfix}`;
      if (setVal != null) localStorage[name] = setVal;
      return localStorage[name];
    }
    
    appLastMod(appName, setVal) {
      return this.lsTmVal(appName, setVal, 'lastUpdate');
    }
    
    appLiveTm(appName, setVal) {
      return this.lsTmVal(appName, setVal, 'liveTm');
    }
    
    setRefreshedTimes(refreshes) {
      this.appLastMod('index', refreshes.indexLm);
      this.appLastMod(refreshes.appName, refreshes.appLm);
      
      this.appLiveTm('index', refreshes.indexLive);
      this.appLiveTm(refreshes.appName, refreshes.appLive);
    }
    
    someLastMod(appName) {
      const indexLm = this.appLastMod('index');
      return indexLm == null
        ? appName == null
          ? null
          : this.appLastMod(appName)
        : indexLm;
    }
    
    registerAppProps(appName, topProps) {
      let props = this.appProps[appName];
      if (props == null) props = this.appProps[appName] = [];
      
      [].concat(topProps).forEach(topProp => {
        const previ = props.findIndex(prop => prop.name === topProp.name);
        
        if (previ < 0) props.push(topProp);
        else props[previ] = topProp;
      });
    }
    
    appParams(appName, asDef = '') {
      const params = ((window.json.apps || []).find(app => app.name === appName) || []).params || [];
      
      const ret = params.reduce(({list, dict}, paramName) => {
        const name = paramName.split(':')[0];
        const val = this.appParam(appName, paramName);
        const value = val == null ? asDef : val;
        
        list.push(value);
        dict[name] = value;
        
        return {list, dict};
      }, {list: [], dict: {}});
      
      ret.str = (ret.list || []).join(',');
      
      return ret;
    }
    
    appParam(appName, paramName, val, attrs) {
      const paramAttrs = attrs != null ? attrs : this.paramAttrs(paramName);
      const name = `${appName}_param:${paramAttrs.name}`;
      let value;
      let props = this.appProps[appName];
      let prop = props && props.find(prop => prop.name === paramAttrs.name);
      const isStoraged = paramAttrs.attrs.indexOf('[runtime]') < 0;
      
      if (val !== undefined) {
        if (isStoraged)
          if (val == null) delete localStorage[name];
          else localStorage[name] = val;
        else {
          if (prop == null) {
            prop = {
              name: paramAttrs.name,
              val: this.parseType(val, paramAttrs.type)
            };
            props = this.appProps[appName] = [prop];
          } else {
            prop.val = this.parseType(val, paramAttrs.type);
            
            const prevPropi = props.findIndex(prop => prop.name === paramAttrs.name);
            
            if (prevPropi < 0) props.push(prop);
            else props[prevPropi] = prop;
          }
        }
        
        prop && prop.onUpdate && prop.onUpdate(val);
      } else {
        if (isStoraged) {
          value = this.parseType(localStorage[name], paramAttrs.type);
        } else {
          if (prop) {
            value = tryIt(() => this.parseType(prop.val || (prop.prop ? prop.prop(paramAttrs) : null), paramAttrs.type), null);
          }
        }
      }
      
      return value;
    }
    
    paramAttrs(paramName = 'name:#Type:[attr]') {
      const attrs = {
        attrs: []
      };
      paramName.split(':').forEach(part => {
        if (attrs.name == null) attrs.name = part;
        else {
          if (part[0] === '#') attrs.type = part;
          else attrs.attrs.push(part);
        }
      });
      
      return attrs;
    }
    
    parseType(value, type = '#Type|#type', div = ',', names = []) {
      if (typeof type !== 'string') return value;
      
      const lower = type.toLowerCase();
      if (lower === type && (value === '' || value == null)) return null;
      
      if (lower === '#bool') {
        return !!value;
      } else if (lower === '#boolean') {
        return value === 'true';
      } else if (lower === '#number') {
        if (!value) return 0;
        else {
          const val = parseFloat(value);
          
          return isNaN(val)
            ? null
            : val;
        }
      } else if (lower === '#list') {
        return value
          ? value.split(div)
          : [];
      } else if (lower === '#dict') {
        if (!value) return {};
        const res = {};
        const vals = value.split(div);
        const keys = typeof names === 'string'
          ? names.split(div)
          : names;
        
        keys.forEach((key, i) => {
          res[key] = vals[i];
        });
        
        return res;
      } else return value;
    }
    
    setAppParams(appName, paramDict = {}) {
      if (paramDict == null || appName == null) return;
      const params = ((window.json.apps || []).find(app => app.name === appName) || []).params || [];
      
      params.forEach(paramName => {
        const attrs = this.paramAttrs(paramName);
        const param = paramDict[attrs.name];
        
        if (param != null)
          this.appParam(appName, paramName, param, attrs);
      });
    }
    
    xhr(url, opts) {
      const xhr = new this.XHR();
      xhr.open((opts.method || 'GET').toUpperCase(), url, true);
      xhr.send();
      if (opts.ctrl) {
        opts.ctrl.abort = () => {
          opts.onAbort && opts.onAbort();
          xhr.abort();
        };
      }
      
      return new Promise((thenXhr, catchXhr) => {
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4) return;
          
          if (xhr.status !== 200) catchXhr(xhr);
          else thenXhr(tryIt(() => {
            const lines = xhr.responseText.split('\n');
            if (lines.length > 1) tryIt(() => mylib.dconsl('xhr WARNINGS', lines.slice(0, -1).join('\n')).config({ type: 0 }));
            return JSON.parse(lines[lines.length - 1]);
          }, () => catchXhr(xhr)));
        };
      });
    }
    
    refresh() {
      this.checkUpdates({
        isCheckEqName: false
      });
    }
    
    checkUpdates(props) {
      const {
        isForceIndex,
        isForceApp,
        cb,
        isCheckEqName,
        setInactive = true,
        isLive
      } = props || {};
      const appName = (props || {}).appName || localStorage.currentApp;
      
      if (appName !== 'index') {
        if (isCheckEqName && appName != null && appName === this.currentCheckUpdatesController.appName) return;
        this.currentCheckUpdatesController.appName = appName;
      }
      
      if (window.refreshes == null) window.refreshes = {};
      
      const refreshesWinName = `at_${Date.now()}`;
      const serialize = (obj) => Object.keys(obj).reduce((query, name) => query + `${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}&`, '?').slice(0, -1);
      
      let isAborted = false;
      this.currentCheckUpdatesController.prevAborted = false;
      
      if (this.currentCheckUpdatesController.abort) {
        this.currentCheckUpdatesController.prevAborted = true;
        this.currentCheckUpdatesController.abort();
        setInactive && setTimeout(() => this.refreshState('inactive'));
      }
      
      const path = (isCheck, includeRejected = false, isLive) => {
        const url = new URL(localStorage.host);
        url.pathname += 'updates';
        const params = url.searchParams;
        const list = [
          appName || '',
          isCheck ? 1 : '',
          System.isAndroid() ? 1 : '',
          (includeRejected ? localStorage.rejectedComponents || '' : '').split(',').filter(p=>p),
          (localStorage.registeredApps || '').split(',').filter(p=>p),
          isForceIndex
            ? 0
            : this.appLastMod('index') || '',
          isForceApp
            ? 0
            : this.appLastMod(appName) || '',
          `refreshes.${refreshesWinName}`,
          this.appLiveTm('index') || '',
          this.appLiveTm(appName) || '',
          this.appParams(appName).list,
          isLive ? 1 : '',
          this.isFirstRequest ? 1 : ''
        ];
        
        params.set('auth', localStorage.auth || '');
        params.set('params', list.join(';'));
        params.set('json', JSON.stringify(list));
        
        return url.toString();
      };
      
      const loadContents = isLive => {
        try {
          this.refreshesScript((ok, script) => {
            const refreshes = window.refreshes[refreshesWinName];
            tryIt(() => mylib.dconsl('refreshes', refreshes));
            if (refreshes == null) {
              tryIt(() => mylib.dconsl('refreshes load error', script.innerText).config({type: 0}));
              return;
            }
            const onError = () => {
              localStorage.rejectedComponents = refreshes.val.map(rfr => rfr.name).join(',');
              this.refreshState('error');
            };
            
            this.setAppParams(refreshes.appName, refreshes.props);
            
            if (refreshes && refreshes.ok) {
              this.isFirstRequest = false;
              if (localStorage.rejectedComponents)
                delete localStorage.rejectedComponents;
              
              if (refreshes.components) {
                this.components = refreshes.components;
                localStorage.appComponents = JSON.stringify(refreshes.components);
              }
              
              const refrWithError = refreshes.val.find(upd => {
                window.isCheckingResourceMode = true;
                const isError = this.parseContent(upd);
                window.isCheckingResourceMode = false;
                return isError;
              });
              
              if (refrWithError) {
                onError();
                System.showToast(`В новых данных найдены ошибки. Изменения локально не будут сохранены${localStorage.isDebug ? `: ${refrWithError.name}` : '.'}`);
              } else {
                const notWritted = refreshes.val.find(({name, content}) => !System.writeStorage(name, content || ''));
                
                if (notWritted) {
                  System.showToast(`Ошибка записи локально! ${notWritted.name}`);
                  onError();
                } else {
                  if (refreshes.indexLm || refreshes.appLm) {
                    const isCanUpdateLm = cb && cb(refreshes.components, refreshes.val);
                    
                    if (isCanUpdateLm !== false) {
                      if (!isLive) {
                        if (this.appLastMod(refreshes.appName) && refreshes.val.some(refr => refr.ext === 'js'))
                          this.refreshState('jumping');
                        else this.refreshState('inactive');
                      }
                      
                      this.setRefreshedTimes(refreshes);
                    }
                  }
                  
                  if (refreshes.appName != null) {
                    const appComps = refreshes.val && refreshes.val && refreshes.val.filter(comp => comp.app === refreshes.appName);
                    if (appComps && appComps.length)
                      this.$emit(`App.onApplicationRefresh:${refreshes.appName}`, [appComps]);
                  } else this.$emit('App.onApplicationRefresh', [refreshes]);
                  
                }
              }
              
              this.setRefreshedTimes(refreshes);
            } else {
              if (!window.isOnline()) this.refreshState('offline');
            }
            
            if (!isAborted)
              this.checkUpdates({setInactive: !isLive && this.currentCheckUpdatesController.prevAborted});
              
            setTimeout(() => window.refreshes[refreshesWinName] = null);
          }, path(false, true, isLive));
        } catch (error) {
          const message = 'Ошибка. Нужен перезапуск';
          const toast = () => System.showToast(message);
          this.refreshState('fatal-error');
          this.refreshButton.onclick = toast;
          toast();
          System.writeStorage('initial_script', '');
          throw error;
        }
      };
      
      this.refreshButton.onclick = async () => {
        if (this.refreshState()) {
          if (this.refreshButtonState === 'wait') {
            System.showToast('Нет возможности обновить данные.');
          } else if (this.refreshButtonState === 'offline') {
            System.showToast('Нет связи с Интернет.');
          } else {
            const ret = await this.$emit('App.beforeApplicationRefresh');
            
            if (ret === false) return;
            loadContents();
            this.refreshState('sending');
          }
        }
      };
      
      this.xhr(path(true, false, isLive), {
        ctrl: this.currentCheckUpdatesController,
        onAbort: () => isAborted = true,
      })
        .then(resp => {
          if (isAborted) return;
          
          tryIt(() => mylib.dconsl('xhr', resp));
          
          localStorage.isDebug = resp.isDebug;
          this.$emit('App.onCheckUpdates', [resp]);
          
          if (resp.toast) System.showToast(resp.toast);
          if (resp.alert) alert(resp.alert);
          if (resp.block) {
            this.refreshState('inactive');
            return;
          }
          
          if (resp.ok) {
            if (resp.isLive && this.appLastMod(appName)) {
              loadContents(resp.isLive);
              if (resp.isReady || resp.val) {
                this.refreshState('active');
                if (resp.observe)
                  this.checkUpdates({isLive: true, setInactive: false});
              }
            } else {
              if (resp.isReady || resp.val) {
                if (!this.appLastMod(appName)) {
                  loadContents();
                } else {
                  this.refreshState('active');
                }
                
                if (resp.observe)
                  this.checkUpdates({isLive: true, setInactive: false});
              } else this.checkUpdates();
            }
            
            
          } else {
            this.refreshState('wait');
            setTimeout(() => this.checkUpdates(), 10000);
          }
        })
        .catch(error => {
          console.error(error);
          const {status, statusText, responseText} = error;
          tryIt(() => mylib.dconsl(`xhr: ${status} (${statusText})`, this.appParams(appName), responseText).config({type: 0}));
          if (!isAborted)
            setTimeout(() => this.checkUpdates(), 10000);
        });
    }
    
    initMyLib(appName, args) {
      return new MyLib(Object.assign(this.getDefaultMyLibConfig(), appName == null ? null : { appName }, args));
    }
    
    getSvg(name, alt, fill, packName) {
      const pack = window.json.evaIconPack;
      
      let icon = (pack || {})[name];
      
      return icon == null
        ? alt
        : ce('svg',
          {
            width: 24,
            height: 24,
            viewBox: '0 0 24 24',
            fill: 'var(--svg-color)',
            dangerouslySetInnerHTML: { __html: icon }
          }
        );
    }
    
    getDefaultMyLibConfig() {
      
      return {
        host: localStorage.host,
        isDebug: () => localStorage.isDebug,
        showToast: msg => System.showToast(msg),
        showModal: top => {
          return typeof top === 'function' ? new Promise((res, rej) => g.Modal.show(top(res, rej))) : g.Modal.show(top || {});
        },
        alertModal: (message, title, okTitle) => {
          return new Promise((resolve, rej) => {
            g.Modal.show({
              title: title == null ? 'Важно!' : title,
              description: message,
              withoutCloseButton: true,
              buttons: [
                {
                  title: okTitle == null ? 'ОК' : okTitle,
                  closable: true,
                  onClick: () => {
                    resolve(null);
                  },
                }
              ]
            });
          });
        },
        confirmModal: (message, title, okTitle, cancelTitle) => {
          return new Promise((resolve, rej) => {
            g.Modal.show({
              title: title == null ? 'Подтверди!' : title,
              description: message,
              withoutCloseButton: true,
              buttons: [
                {
                  title: okTitle || 'ОК',
                  closable: true,
                  onClick: () => {
                    resolve(true);
                  },
                },
                {
                  title: cancelTitle || 'ОТМЕНА',
                  closable: true,
                  onClick: () => {
                    resolve(false);
                  },
                },
              ]
            });
          });
        },
        promptModal: (message, altVal, title, okTitle, cancelTitle) => {
          let newVal = null;
          
          return new Promise((resolve, rej) => {
            g.Modal.show(({
              title: title || 'Ответь!',
              description: message,
              withoutCloseButton: true,
              inputs: [
                {
                  placeholder: 'Текст',
                  defaultValue: altVal,
                  onInput: ({inputs, event}) => {
                    newVal = event.target.value;
                  }
                }
              ],
              buttons: [
                {
                  title: okTitle || 'ОК',
                  closable: true,
                  onClick: () => resolve(newVal == null ? altVal : newVal),
                  disabled: (config) => tryIt(() => mylib.dconsl(newVal == null || altVal === config.inputs[0].value, '123456678').val)
                },
                {
                  title: cancelTitle || 'ОТМЕНА',
                  closable: true,
                  onClick: () => resolve(null)
                },
              ]
            }));
          });
        }
      };
    }
    
    prepareStarterHref(name, json, host) {
      const url = new URL(host || localStorage.host);
      url.pathname = '/';
      url.searchParams.set('do', btoa(escape(JSON.stringify(json))));
      //url.pathname = name;
      return url.toString();
    }
    
    parseStarterHref(strUrl) {
      let search;
      
      try {
        const url = new URL(strUrl);
        search = url.searchParams.get('do');
        return {
          ok: true,
          val: JSON.parse(unescape(atob(search))),
        };
      } catch (error) {
        return {
          error,
          search,
          ok: false
        };
      }
    }
    
    init() {
      setTimeout(() => {
        this.initWebBackPressed();
      });
      
      window.svg = this.getSvg;
      
      const onInit = (appContext) => {
        this.appContext = appContext;
        
        this.loadAppComponents('index');
        
        if (localStorage.currentApp) {
          const loadAppResult = this.loadAppComponents(localStorage.currentApp);
          
          if (!loadAppResult.ok) {
            System.showToast(`Ошибка загрузки локальных данных! ${loadAppResult.error}`);
            this.checkUpdates({
              appName: localStorage.currentApp,
              req: loadAppResult.stack.join(',')
            });
          }
        }
        
        setTimeout(() => this.checkUpdates({isCheckEqName: true}));
        
        const href = System.checkStarterHref();
        if (href) {
          const json = this.parseStarterHref(href);
          
          
          if (json.ok) {
            const ls = json.val.setLs;
            Object.keys(ls || {}).forEach(key => localStorage[key] = ls[key]);
            
            const appAction = json.val.appAction;
            if (appAction) {
              setTimeout(() => this.$emit(`App.onAppStartAction:${appAction.app}`, [appAction]));
            }
          }
        }
      };
      
      ReactDOM.render(ce(Application, {onInit}), document.querySelector('#application'));
    }
  }
  
  stage(5);
  
  if (window.json == null)
    window.json = {
      get(name, asDef) {
        if (window.json[name] == null) return asDef;
        else return window.json[name];
      }
    };
  
  window.applicanter = new Applicanter();
  const g = applicanter.scope('index', {});
  applicanter.init();
  const reportErrorMessage = g.reportErrorMessage;
    
  
  ///if (localStorage.isDebug) applicanter.notify();
  
  stage(6);
  
  System.onBackPressed = async () => {
    const delegate = await applicanter.$emit('Apk.onBackPressed');
    if (delegate == null)
      applicanter.load('index', 1);
  };
  
  stage(7);
  
  System.onConsoleLog = (message, lineNum, source) => {
    //window.mylib && mylib.consl(`[${lineNum}]`, message);
  };
  
  window.ononline = () => {
    applicanter.$emit('App.onOnlineToggle', [false]);
  };
  
  window.onoffline = () => {
    applicanter.$emit('App.onOnlineToggle', [true]);
  };
  
  applicanter.$listen('App.beforeApplicationRefresh', 'index-listener', async () => g.Modal.close());
  
  window.isOnline = (cb, alt) => {
    const result = navigator.connection && navigator.connection.type ? (navigator.connection.type !== 'unknown' && navigator.connection.type !== 'none') : navigator.onLine;
    result ? cb && cb() : alt && alt();
    return result;
  };
  
  applicanter.$emit('App.onOnlineToggle', [isOnline()]);
  
  stage(8);
  
  window.isIndexLastLineGot = true;
})();


if (applicanter) {
  let isNeedReload = false;
  
  if (applicanter.scope == null) {
    const scopes = {};
    applicanter.scope = (app, dict) => {
      if (scopes[app] == null) scopes[app] = dict;
      
      return scopes[app];
    };
    applicanter.initMyLib = () => window.mylib;
    
    window.listen = applicanter.$listen = () => {};
    window.rmListen = applicanter.$mute = () => {};
    window.invokeListeners = applicanter.$emit = () => [];
    
    isNeedReload = true;
  }
  
  if (isNeedReload) System.showToast('Нужен перезапуск приложения');
}


} catch(error) {
  System.writeStorage('initial_script', '');
  System.showToast('Ошибка!');
  console.error(error);
  if (!window.isIndexLastLineGot) {
    alert(error.stack);
    alert(stage());
  }
  throw error;
}













