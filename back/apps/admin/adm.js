;'use strict';

(function AdmModule(moduleName) {
  
  const ce = React.createElement;
  
  try {
    
    let mylib;
    const initMylib = () => mylib = applicanter.initMyLib('adm');
    
    initMylib();
    
    const isAccessed = (action, elem = Object) => {
      if (isAllOperationsBlokced) return null;
      
      const rights = window.json ? window.json.cm_access_rights : [];
      const level = mylib.auth.level;
      const right = rights.find(right => right.action === action);
      if (right == null) mylib.alert(`Зарегистрировано правило на неизвестное действие ${action}`);
      return right ? right.level <= level ? elem : null : elem;
    };
    
    let refreshMoment = Date.now();
    
    applicanter.$listen('App.beforeApplicationRefresh', `${moduleName}-main-listener`, async event => {
      if (mylib.execs && mylib.execs.length) {
        
        if (Date.now() - refreshMoment > 500) {
          refreshMoment = Date.now();
          mylib.showToast('Сначала отправь изменения');
          return false;
        } else mylib.showToast('Обновление..');
      }
    });
    
    applicanter.$listen('App.onApplicationRefresh', `${moduleName}-main-listener`, async event => {
      mylib.dconsl('App.onApplicationRefresh event', event);
      
      if (event.value && event.value.val && event.value.val.some(comp => comp.app === moduleName)) {
        
      }
      initMylib();
    });
    
    let isAllOperationsBlokced = false;
    
    applicanter.$listen('App.onCheckUpdates', `${moduleName}-main-check-listener`, async event => {
      if (event.value && event.value.block) {
        isAllOperationsBlokced = true;
      }
    });
    
    class Admino extends React.Component {
      constructor() {
        super();
        
        this.state = {
          people: window.json.people,
          people_visits: window.json.people_visits
        };
        
        const resetPeopleOnline = () => {
          this.setState({people_visits: Object.assign({}, window.json.people_visits)});
          resetPeopleOnlineByTimeout();
        };
        const resetPeopleOnlineByTimeout = () => {
          clearTimeout(this.updatePeopleOnlineTimeout);
          this.updatePeopleOnlineTimeout = setTimeout(resetPeopleOnline, 60000);
        };
        
        resetPeopleOnlineByTimeout();
        
        applicanter.$listen('App.onApplicationRefresh:adm', `${moduleName}-main-listener`, async event => {
          const comps = event.value;
          mylib.dconsl('comps..', comps);
          
          if (comps && comps.length) {
            if (comps.some(comp => comp.name === 'people_visits')) {
              this.setState({
                people_visits: window.json.people_visits
              });
              
              resetPeopleOnlineByTimeout();
            }
            
            if (comps.some(comp => comp.name === 'people')) {
              this.setState({
                people: window.json.people
              });
            }
          }
          initMylib();
        });
        
      }
      
      fu() {
        this.forceUpdate();
      }
      
      render() {
        const visits = this.state.people_visits || {};
        
        try {
          return ce('div',
            {
              key: 'adm-wrapper'
            },
            ce('div',
              {
                className: 'mgroup msm',
              },
              ce('span',
                {
                  className: 'mbtn m-br',
                  onClick: () => applicanter.load('index')
                },
                'Назад'
              ),
              ce('span',
                {
                  className: 'mbtn m-ok',
                  onClick: () => {
                    mylib.modal({
                      key: 'global-var',
                      title: 'Глобальная переменная',
                      description: 'Необходимо быть осторожным с установлением глобальных переменных! Возможно по ошибке что-нибудь сломать.',
                      inputs: [
                        {
                          title: 'название переменной',
                          onInput: config => config.inputs[1].setVal(localStorage[config.input.value] || ''),
                        },
                        {
                          title: 'значение переменной',
                        }
                      ],
                      buttons: [
                        {
                          title: 'установить',
                          onClick: ({setError, dontClose, inputs}) => {
                            const name = inputs[0].value;
                            if (!inputs[0].value) {
                              dontClose();
                              setError('Пустое название');
                              return;
                            }
                            localStorage[name] = inputs[1].value || '';
                          }
                        }
                      ]
                    });
                  },
                },
                'установить глобальную переменную'
              ),
              window.json && window.json.index_messanger// && window.json.index_messanger.some(msg => !msg.read)
                ? ce('span',
                  {
                    className: 'mbtn m-ok',
                    onClick: () => {
                      let unread = window.json.index_messanger.filter(msg => !msg.read);
                      const openMessage = (index) => {
                        const message = unread[index];
                        if (message == null) return;
                        let hiddenActionFrames = true;
                        
                        mylib.modal({
                          key: 'message',
                          title: `Сообщение ${index - -1}${unread.length === 1 ? '' : `/${unread.length}`}`,
                          description: `${message.message}. \nПользователь: ${message.fio}`,
                          closeOnClick: false,
                          inputs: [
                            {
                              type: 'text',
                              value: `'${message.login}', '${message.at}'`,
                            },
                          ],
                          buttons: [
                            {
                              title: 'предыдущее',
                              onClick: () => openMessage(index - 1),
                              disabled: () => index === 0,
                              hidden: () => !hiddenActionFrames,
                            },
                            {
                              title: 'следующее',
                              onClick: () => openMessage(index - -1),
                              disabled: () => index === unread.length - 1,
                              hidden: () => !hiddenActionFrames,
                            },
                            {
                              title: 'прочитал',
                              disabled: message.read,
                              hidden: () => !hiddenActionFrames,
                              onClick: ({setError}) => {
                                setError('');
                                mylib.sendExecs({
                                  action: 'setAsReadMessage',
                                  args: {
                                    id: message.w
                                  }
                                },
                                resp => {
                                  if (resp.ok) {
                                    Android.showToast(`Сообщение прочитано`);
                                    unread.splice(index, 1);
                                    message.read = true;
                                    this.forceUpdate();
                                  } else setError(resp.error || 'Не получилось прочитать');
                                },
                                () => setError('ошибка отправки данных..'));
                              },
                            },
                            {
                              title: () => !hiddenActionFrames ? 'назад' : 'действия',
                              onClick: () => {
                                hiddenActionFrames = !hiddenActionFrames;
                              }
                            }
                          ]
                        });
                      };
                      openMessage(0);
                    }
                  },
                  'читать сообщения'
                )
              : null,
            ),
            ce('div',
              {
                key: 'people-list'
              },
              (this.state.people || []).sort((a, b) => visits[b.login] - visits[a.login]).map(user => {
                const diff = Date.now() - visits[user.login];
                const isOnline = diff < 60000;
                
                return ce('div',
                  {
                    key: `user:${user.login}`
                  },
                  ce('span',
                    {
                      key: `user-fio:${user.login}`
                    },
                    user.fio
                  ),
                  ce('span',
                    {
                      key: `user-lvl:${user.login}`
                    },
                    ` ${user.level}`
                  ),
                  isOnline
                    ? ce('span',
                        {
                          key: `user-visits:${user.login}`,
                          style: {
                            color: 'red'
                          }
                        },
                        ` Online`
                      )
                    : ce('span',
                        {
                          key: `user-offline:${user.login}`,
                          style: {
                            color: 'blue'
                          }
                        },
                        ' ' + (diff > inMonth * 3
                          ? 'Больше 3 мес.'
                          : diff > inMonth
                            ? 'Дольше мес.'
                            : diff > inWeek * 3
                              ? 'Дольше 3 нед.'
                              : diff > inWeek
                                ? 'Дольше нед.'
                                : diff > inDay * 3
                                  ? 'Дольше 3д.'
                                  : diff > inDay
                                    ? 'Дольше суток'
                                    : diff > inHour * 17
                                      ? 'Ок. 17ч. назад'
                                      : diff > inHour * 12
                                        ? 'Полдня'
                                        : diff > inHour * 5
                                          ? 'Дольше 5 ч.'
                                          : diff > inHour * 3
                                            ? 'Дольше 3 ч.'
                                            : diff > inHour
                                              ? 'Около часа'
                                              : diff > inMin * 30
                                                ? 'Полчаса'
                                                : diff > inMin * 5
                                                  ? 'Недавно'
                                                  : 'Только что')
                      )
                )
              })
            ),
            //window.WizardClient && ce(window.WizardClient)
          );
        } catch (error) {
          throw error;
        }
      }
    }
    
    const inSec = 1000;
    const inMin = inSec * 60;
    const inHour = inMin * 60;
    const inDay = inHour * 24;
    const inWeek = inDay * 7;
    const inMonth = inDay * 30;
    
    if (window.applicanter) {
      window.applicanter.register(moduleName, ce(Admino));
      
      if (window.isAdmLoaded)
        window.applicanter.load(moduleName);
      
      window.isAdmLoaded = true;
    }
    
    
  } catch (error) {
    if (window.isCheckingResourceMode) mylib.alert(error.stack);
    alert(error.stack);
    throw error;
  }
  
})('adm');




