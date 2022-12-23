;'use strict';
;(function BoardModule(debug) {
  
  try {
    
    window.System = window.Android || window.System;
    window.Android = window.System || window.Android;
    
    if (window.applicanter) {
      if (applicanter.initMyLib == null) applicanter.initMyLib = () => null;
    }
    
    const mylib = applicanter.initMyLib('index');
    
    window.reportErrorMessage = (error, cb) => {
      localAuth.level < 100 && mylib.sendExecs({
        action: 'sendErrorMessage',
        args: {
          msg: error.stack || error.message,
          lineno: error.lineno,
          login: localAuth.login,
          id: localStorage.myDeviceId,
          fio: localAuth.fio,
        }
      }, cb || (() => System.showToast('Был отправлен отчёт об ошибке')));
    };
    
    let localAuthContent = localStorage.auth;
    let localAuth = mylib.parse(localAuthContent, { level: 0 });
    if (!localAuth.login && !localStorage.myDeviceId) localStorage.myDeviceId = mylib.md5(`[${Date.now()}+${Math.random()}]`);
    const g = applicanter.scope('index', {});
    
    const appNavigationStorageName = 'appNavigation';
    
    const loadAppNavigation = () => {
      const initAppNavigation = {
        current: 'index',
        apps: [
          {
            name: 'index',
            componentName: 'index',
            reqStorageName: null,
          }
        ],
      };
      
      const appNavigationStr = System.readStorage(appNavigationStorageName);
      window.appNavigation = appNavigationStr == null ? initAppNavigation : mylib.parse(appNavigationStr);
    };
    
    const reportErrorMessage = g.reportErrorMessage;
    
    
    function reloadAppNavigation(cb) {
      cb && cb(window.appNavigation);
      System.writeStorage(appNavigationStorageName, JSON.stringify(appNavigation));
    }
    
    loadAppNavigation();
    
    class AppComponents extends React.Component {
      constructor() {
        super();
        
        this.state = {
          phase: 'apps',
          appsInProcess: [],
        };
        
        applicanter.$listen('App.onApplicationRefresh', 'board-listener', async (event) => {
          this.forceUpdate();
          if (event.value && event.value.val && event.value.val.some(ref => ref.name === 'index_messanger')) {
            System.showToast('Есть новые сообщения');
          }
        });
      }
      
      setAuthBody(auth, mode = 'check') {
        const body = new FormData();
        
        const fields = {
          check: ['login', 'at'],
          login: ['login', 'passw'],
          register: ['fio', 'login', 'passw', 'rpassw'],
        }[mode] || ['login', 'at'];
        
        fields.forEach(fieldName => {
          const fieldVal = this.state[fieldName] != null
            ? fieldName === 'fio'
              ? this.state[fieldName]
              : mylib.md5(this.state[fieldName])
            : auth[fieldName];
          if (fieldVal != null) {
            body.append(fieldName, fieldVal);
          }
        });
        
        return body;
      }
      
      sendLoginData(mode = 'check') {
        try {
          if (window.mylib == null) {
            this.setState({
              errorMessage: 'Отправка данных невозможна! Попробуй перезапустить приложение.',
              errorId: 'general',
            });
            return;
          } else
            this.setState({errorMessage: ''});
            
          
          return fetch(`${localStorage.host}/auth`, {
            method: 'POST',
            body: this.setAuthBody(localAuth, mode)
          })
            .then(resp => resp.json())
            .then(resp => {
              try {
                
                if (resp.ok && resp.mode != 'check') {
                  const {login, at, fio, level} = resp;
                  
                  localAuth = {login, at, fio, level};
                  localAuthContent = localStorage.auth = JSON.stringify(localAuth);
                  resp.mode === 'register'
                    ? System.showToast('Регистрация и вход прошли успешно!')
                    : System.showToast('Вход прошёл успешно!');
                  
                  window.applicanter.reset();
                } else this.setState({errorMessage: resp.errorMessage, errorId: resp.errorId});
                return resp;
              } catch (error) {
                mylib.dconsl(error.stack).set({type: 0});
              }
            })
            .catch(err => this.setState({errorMessage: 'Ошибка отправки данных.', errorId: 'general'}));
        } catch (error) {
          mylib.dconsl(error.stack);
        }
      }
      
      uploadContacts(cfg) {
        const storageName = 'user-contacts-list';
        
        cfg.rmListen = () => {
          applicanter.$mute('Apk.onTouchUp', storageName);
          applicanter.$mute('Apk.onContactsData', storageName);
        };
        
        applicanter.$listen('Apk.onTouchUp', storageName, async event => {
          try {
            if (!cfg.ok) return;
            applicanter.$mute('Apk.onTouchUp', storageName);
            System.showToast('В процессе...');
            g.Modal.close();
            return 'REQUEST_CONTACTS';
          } catch (error) {
            mylib.dconsl(error.stack);
          }
        });
        
        applicanter.$listen('Apk.onContactsData', storageName, (event, contacts) => {
          try {
            mylib.dconsl(contacts);
            applicanter.$mute('Apk.onContactsData', storageName);
            if (contacts.ok) {
              if (contacts.list) {
                const correct = contacts.list
                  .filter(contact => contact.phone)
                  .map(contact => {
                    contact.name = contact.name.replace(/%27/g, "'").replace(/%25/g, "%");
                    contact.phone = contact.phone.replace(/%27/g, "'").replace(/%25/g, "%").replace(/[^+\d]/g, '');
                    contact.md5 = mylib.md5(contact.phone);
                    return contact;
                  });
                window.contactList = correct;
                const isNew = !System.readStorage(storageName);
                System.writeStorage(storageName, JSON.stringify(correct));
                System.showToast(isNew ? 'Список контактов получен' : 'Контакты перезаписаны');
              } else System.showToast('Ошибка при обновлении контактов');
            } else System.showToast(contacts.errorMessage);
            
            g.Modal.close();
          } catch (error) {
            mylib.consl(error.stack);
          }
        });
      }
     
      render() {
        const errorMessager = errorId => 
          this.state.errorMessage && (errorId == null || errorId === this.state.errorId)
            ? ce(
                'div',
                {
                  style: {
                    color: 'red',
                  },
                },
                this.state.errorMessage
              )
            : null;
        
        return ce('div',
          {
            className: 'app-loader-screen',
          },
          localAuth && localAuth.fio
            ? ce('div',
              {
                key: 'uset-greets',
                className: 'user-greets'
              },
              `Привет, ${localAuth.fio}!`
            )
            : null,
          ce('div',
            {
              className: 'app-loader-window-wrapper',
            },
            ce('div',
              {
                className: 'app-loader-window',
              },
              {
                apps: [
                  ce('div',
                    {
                      className: 'phase-name',
                    },
                    'Приложения'
                  ),
                  window.json.apps && window.json.apps.map(app => {
                    const isDisabled = app.disabled;
                    
                    return app.hidden ? null : ce('div',
                      {
                        className: `app-item${isDisabled ? ' mdisabled' : ''}${~this.state.appsInProcess.indexOf(app.name) ? ' mprogressed' : ''}`,
                      },
                      ce('div',
                        {
                          className: 'app-title',
                          onClick: isDisabled ? null : () => window.applicanter.load(app.name),
                        },
                        ce('span',
                          {
                            className: 'text',
                          },
                          app.title
                        )
                      )
                      
                    );
                  }),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => {
                          this.setState({phase: 'settings'});
                        },
                      },
                      'инструменты'
                    )
                  ),
                ],
                settings: [
                  ce('div',
                    {
                      className: 'phase-name',
                    },
                    'Инструменты'
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => this.setState({phase: 'apps'}),
                      },
                      'назад'
                    )
                  ),
                  !localStorage || !localStorage.isDebug
                    ? null
                    : ce('div',
                      {
                        className: 'system-item',
                      },
                      ce('span',
                        {
                          className: 'text',
                          onClick: () => {
                            try {
                              window.contactList = mylib.parse(System.readStorage('user-contacts-list'), []);
                              
                              g.Modal.show({
                                title: 'Мои контакты',
                                description: window.contactList.length === 0 ? 'Контакты не были получены из телефонной книги' : 'Помеченные будут в списке просматриваемых',
                                inputs: window.contactList.length === 0 ? null : [{title: 'Поиск'}]
                                  .concat(window.contactList.map(contact => {
                                    return {
                                      title: `${contact.name || 'Нет имени'} (${contact.phone})`,
                                      type: 'checkbox',
                                      checked: () => ~(localStorage.observedUsers ? localStorage.observedUsers.indexOf(contact.md5) : -1),
                                      onChange: () => {
                                        if (localStorage.observedUsers) {
                                          if (~localStorage.observedUsers.indexOf(contact.md5)) {
                                            localStorage.observedUsers = localStorage.observedUsers.replace(contact.md5 + ',', '');
                                          } else localStorage.observedUsers += contact.md5 + ',';
                                        } else localStorage.observedUsers = contact.md5 + ',';
                                      },
                                      hidden: ({inputs}) => contact.name.search(inputs[0].value) < 0 && contact.phone.search(inputs[0].value) < 0
                                    };
                                  })
                                ),
                                buttons: [{
                                  title: window.contactList.length === 0 ? 'Считать контакты' : 'Обновить список',
                                  onClick: () => {
                                    const cfg = {};
                                    
                                    g.Modal.show({
                                      title: window.contactList.length === 0 ? 'Считывание' : 'Обновлениие контактов',
                                      description: 'Список контактов будет взят из записной книги устройства.',
                                      withoutCloseButton: true,
                                      buttons: [
                                        {
                                          title: 'Не обновлять',
                                          onClick: () => {
                                            cfg.rmListen();
                                          }
                                        },
                                        {
                                          title: 'Обновить',
                                          onClick: () => {
                                            cfg.ok = true;
                                            
                                            g.Modal.show({
                                              title: 'Обновлениие контактов',
                                              description: 'Для продолжения кликни в любом месте'
                                            });
                                          }
                                        }
                                      ]
                                    });
                                    this.uploadContacts(cfg);
                                  }
                                }]
                              });
                            } catch (error) {
                              mylib.consl(error.stack);
                            }
                          },
                        },
                        'мои контакты'
                      )
                    ),
                  localStorage.auth == null
                    ? ce('div',
                        {
                          className: 'system-item',
                        },
                        ce('span',
                          {
                            className: 'text',
                            onClick: () => this.setState({phase: 'login'})
                          },
                          'вход'
                        )
                      )
                    : ce('div',
                        {
                          className: 'system-item',
                        },
                        ce('span',
                          {
                            className: 'text',
                            onClick: () => {
                              g.Modal.show({
                                key: 'logout',
                                title: 'Выход',
                                description: 'Подтверди выход.',
                                buttons: [
                                  {
                                    title: 'Выйти',
                                    onClick: () => {
                                      delete localStorage.auth;
                                      
                                      window.applicanter.reset();
                                      this.forceUpdate();
                                    }
                                  },
                                  {
                                    title: 'Отмена'
                                  },
                                ]
                              });
                            },
                          },
                          'выход'
                        )
                      ),
                  ce('div',
                    {
                      key: 'setConfig-wr',
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        key: 'setConfig',
                        className: 'text',
                        onClick: async () => {
                          const b64 = await mylib.prompt('Конфигурационный ключ ввести здесь:', '', 'Конфигурация');
                          if (b64) {
                            const json = atob(b64);
                            const config = tryIt(() => JSON.parse(json), {});
                            const keys = Object.keys(config)
                            
                            keys.forEach(key => localStorage[key] = config[key]);
                            System.showToast(`Сконфигурировано ${keys.length}`);
                          }
                        }
                      },
                      'конфигурация'
                    )
                  ),
                  mylib.consl(localAuth).val.level < 3 ? null : ce('div',
                    {
                      key: 'message-to-developers.wr',
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        key: 'message-to-developers',
                        className: 'text',
                        onClick: () => {
                          
                          g.Modal.show({
                            key: 'message-to-developers',
                            title: 'Письмо разработчикам',
                            description: 'Постараемся отреагировать в кратчайшие сроки.',
                            inputs: [
                              {
                                type: 'textarea',
                                placeholder: 'Текст сообщения',
                                rows: 10,
                                onInput: ({setError}) => setError(''),
                              },
                              {
                                type: 'password',
                                title: 'Пароль',
                                placeholder: 'Пароль',
                                onInput: ({setError}) => setError(''),
                              },
                            ],
                            buttons: [
                              {
                                title: 'Отправить',
                                closable: false,
                                onClick: ({setError, closeModal, inputs}) => {
                                  
                                  const message = inputs[0].value;
                                  
                                  mylib.sendExecs(
                                    {
                                      action: 'writeToDevelopers',
                                      args: {
                                        message,
                                        id: Date.now(),
                                        login: localAuth.login,
                                        fio: localAuth.fio,
                                        at: localAuth.at,
                                      }
                                    },
                                    resp => {
                                      System.showToast('Сообщение отправлено!');
                                      closeModal();
                                    },
                                    () => System.showToast('Ошибка отправки сообщения!')
                                  );
                                  
                                  return;
                                  
                                  const passw = inputs[1].value;
                                  
                                  if (!passw) {
                                    setError('необходимо ввести пароль!');
                                    return;
                                  }
                                  
                                  if (!message) {
                                    setError('введи текст сообщения');
                                    return;
                                  }
                                  
                                  try {
                                    const rpassw = mylib.md5(passw);
                                    
                                    const checkBody = new FormData();
                                    checkBody.append('login', localAuth.login);
                                    checkBody.append('rpassw', rpassw);
                                    
                                    fetch(`${localStorage.host}/auth`, {
                                      method: 'POST',
                                      body: checkBody
                                    })
                                      .then(resp => resp.json())
                                      .then(resp => {
                                        mylib.dconsl(resp);
                                        if (!resp.ok) setError(resp.errorMessage);
                                        else {
                                          const execBody = new FormData();
                                          execBody.append('execs', JSON.stringify([{
                                            method: 'push',
                                            action: 'writeToDevelopers',
                                            value: {
                                              message,
                                              w: Date.now(),
                                              login: localAuth.login,
                                              passw: rpassw,
                                              fio: resp.fio,
                                              at: localAuth.at,
                                            }
                                          }]));
                                          execBody.append('auth', localAuthContent);
                                          
                                          fetch(`${localStorage.host}/execute`, {
                                            method: 'POST',
                                            body: execBody
                                          })
                                            .then(resp => resp.json())
                                            .then(resp => {
                                              
                                              if (resp.ok) {
                                                System.showToast('Сообщение отправлено!');
                                                closeModal();
                                              } else setError(resp.errorMessage);
                                              mylib.dconsl(resp);
                                            })
                                            .catch(error => {
                                              setError('Ошибка отправки сообщения.');
                                            });
                                            
                                        }
                                      })
                                      .catch(error => setError('ошибка проверки данных'));
                                    
                                    
                                  } catch (error) {
                                    setError('Ошибка.');
                                    mylib.dconsl(error.stack);
                                  }
                                },
                              },
                            ],
                          });
                        },
                      },
                      'написать разработчикам'
                    )
                  ),
                ],
                login: [
                  ce('div',
                    {
                      className: 'phase-name',
                    },
                    'Вход'
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => this.setState({phase: 'settings'}),
                      },
                      'назад'
                    )
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.login,
                        placeholder: 'Логин (+79876543210)',
                        onInput: event => this.setState({login: event.target.value}),
                      }
                    )
                  ),
                  errorMessager('login'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.passw,
                        placeholder: 'Пароль',
                        type: 'password',
                        onInput: event => this.setState({passw: event.target.value}),
                      }
                    )
                  ),
                  errorMessager('passw'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => {
                          if (!this.state.login) {
                            this.setState({errorMessage: 'Введи логин (Номер телефона)!', errorId: 'login'});
                            return;
                          }
                          if (!this.state.passw) {
                            this.setState({errorMessage: 'Введи пароль!', errorId: 'passw'});
                            return;
                          }
                          this.sendLoginData('login');
                        },
                      },
                      'войти'
                    )
                  ),
                  errorMessager('general'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => this.setState({phase: 'register'}),
                      },
                      'зарегистрироваться'
                    )
                  ),
                ],
                register: [
                  ce('div',
                    {
                      className: 'phase-name',
                    },
                    'Вход'
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce(
                      'span',
                      {
                        className: 'text',
                        onClick: () => this.setState({phase: 'settings'}),
                      },
                      'назад'
                    )
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.fio,
                        placeholder: 'Псевдоним',
                        onInput: event => this.setState({fio: event.target.value}),
                      }
                    )
                  ),
                  errorMessager('fio'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.login,
                        placeholder: 'Логин (+76543210123)',
                        onInput: event => this.setState({login: event.target.value}),
                      }
                    )
                  ),
                  errorMessager('login'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.passw,
                        placeholder: 'Пароль',
                        type: 'password',
                        onInput: event => this.setState({passw: event.target.value}),
                      }
                    )
                  ),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('input',
                      {
                        className: '',
                        value: this.state.rpassw,
                        placeholder: 'Повтор пароля',
                        type: 'password',
                        onInput: event => this.setState({rpassw: event.target.value}),
                      }
                    )
                  ),
                  errorMessager('passw'),
                  ce('div',
                    {
                      className: 'system-item',
                    },
                    ce('span',
                      {
                        className: 'text',
                        onClick: () => {
                          if (!this.state.login) {
                            this.setState({errorMessage: 'Введи логин (Номер телефона)!', errorId: 'login'});
                            return;
                          }
                          if (!this.state.passw) {
                            this.setState({errorMessage: 'Введи пароль!', errorId: 'passw'});
                            return;
                          }
                          if (this.state.passw !== this.state.rpassw) {
                            this.setState({errorMessage: 'Пароли не совпадают!', errorId: 'passw'});
                            return;
                          }
                          this.setState({errorMessage: ''});
                          this.sendLoginData('register');
                        },
                      },
                      'зарегистрироваться'
                    )
                  ),
                  errorMessager('general'),
                ]
              }[this.state.phase]
            )
          )
        );
      }
    }
    
    
    if (window.applicanter) {
      window.applicanter.register('index', ce(AppComponents));
      setTimeout(() => window.applicanter.loadCurrent());
    }
    
    
    
  } catch (error) {
    alert(error.stack);
    throw error;
  };
    
})();
    
    
    
    
    
    
    
    
    
