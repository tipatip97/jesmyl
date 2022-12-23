;'use strict';  


(function ImModule() {
  try {
    const RC = React.Component;
    const ce = React.createElement;
    const getTime = () => {
     return new Date().getTime();
    }
    
    class IGame {
     constructor(o) {
      this.n = o && o.n || ``;
      this.w = o && o.w || getTime();
      this.I = o && o.I || [];
      this.win = o && o.win || null;
     }
    }
    
    class IImperia {
     constructor(o) {
      this.n = o && o.n || ``;
      this.o = o && o.o || ``;
      this.on = o && o.on || ``;
      this.w = o && o.w || getTime();
      this.ban = o && o.ban || false;
      this.p = o && o.p || [];
     }
    }
    
    class IMan {
     constructor(o) {
      this.n = o && o.n || ``;
      this.w = o && o.w || getTime();
     }
    }
    
    
    const Phase = {
     Start: `start`,
     Game: `game`,
     People: `people`,
     Tools: `tools`
    };
    
    const Button = {
     Secondary: `mbtn mblock`,
     Danger: `mbtn mblock m-ko`,
     Primary: `mbtn mblock m-no`,
     Success: `mbtn mblock m-ok`,
     Warning: `mbtn mblock m-br`,
     Info: `mbtn mblock m-no`,
     Dark: `mbtn mblock m-ok`,
     Light: `mbtn mblock`,
     Simple: `mbtn mblock`
    };
    
    if (window.im == null)
      window.im = {
       lsnames: {
        state: `imperia-state`,
        tools: `imperia-tools`
       },
       state: {},
       tools: {},
       init: {
        state: {
         phase: Phase.Start,
         games: [],
         people: [],
         w: 0
        },
        tools: [
         {
          q: 'similarsOnFinish',
          t: `Одинаковые названия Империй обнаружить только в конце`,
          a: true,
          d: true
         }
        ]
       },
       current: {
        imperia: new IImperia(),
        game: new IGame()
       },
       getTool: toolQuery => g.tools.find(tool => tool.q = toolQuery),
       ctxt: {
        Application: null,
        Tools: null
       },
       fu: () => {
        g.ctxt.Application.forceUpdate();
        mylib.setLS(g.lsnames.state, g.state);
        g.bindCurrents();
       },
       
       ss: (state, cb) => {
        for (const s in state) g.state[s] = state[s];
        g.bindCurrents();
        return g.fu();
       },
       
       st: () => {
        mylib.setLS(g.lsnames.tools, g.tools);
        g.ctxt.Tools.forceUpdate();
       },
       
       bindCurrents() {
        const w = g.state.w;
        
        switch (g.state.phase) {
         case Phase.Game: case Phase.People:
          g.current.game = g.state.games.find(gm => gm.w === w) || new IGame();
          break;
        }
       },
       
       dialog: {
        newGamePrompt: [
         `Как-нибудь назови Игру`,
         `Название для Игры:`,
         `Придумай название Игры`,
         `Как будет называться Игра?`,
         `Впиши название Игры`,
         `Игра будет называться:`,
         `Новая Игра, с названием:`
        ],
        newImperiaPrompt: [
         `Наименование твоей Империи:`,
         `Как назовёшь Империю?`,
         `Имя Империи впиши снизу`,
         `Как будет называться твоя Империя, напиши снизу!`,
         `Впиши наименование Империи!`,
         `Придумай наименование своей Империи, и запиши в поле снизу.`,
         `Имя своей Империи напиши здесь!`
        ],
        newManPrompt: [
         `Как тебя звать?`,
         `Впиши своё имя.`,
         `Имя впиши снизу.`,
         `Имя или псевдоним:`,
         `Как тебя назвали родители?`,
         `Впиши своё имя!`,
         `Имя.`,
         `Твоё имя:`,
         `Как зовут?`,
         `Ёр нейм, плиз`,
         `Как к тебе оращаются люди?`,
        ],
        winner: [
         `$ownerName, твоя Империя, $impName, разрослась до максимальных размеров! За тобой победа!`,
         `Горячие поздравления, $ownerName, ты - в рядах победителей!`,
         `Передайте Императору $ownerName поздравительные слова. Империя $impName победила!`,
         `Победа за Императором $ownerName! $impName - Империя победителя!`,
         `$ownerName, тобой было хорошо сыграно! Империя $impName под твоим командованием одержала победу!`
        ],
        inexclusiveName: [
         `Участник $n уже был внесён в список!`,
         `Имя $n уже зарезервировано!`,
         `В списке Участников имя $n уже записано!`,
         `Один из Участников уже имеет имя $n. Необходимо подобрать какое-то отличающее значение.`,
         `$n - зарегистрированное имя!`,
         `Такое имя, $n, уже занесено в список Участников!`
        ],
        inexclusiveGameName: [
         `Игра с названием $n уже существует`,
         `Придумай другое название для Игры. $n - уже есть в списке Игр.`,
         `Название $n для Игры уже есть. Придумай другое.`,
         `Одна из Игр называется $n, а совпадений быть не должно!`,
         `В списке уже есть Игра с названием $n. Выбери другое!`,
         `Игры должны иметь эксклюзивные названия. $n - уже используемое.`
        ],
        inexclusiveImperiaName: [
         `Кем-то было внесено такое же наименование Империи. Имя $n повторилось. Придумай другое, пожАлуйста!`,
         `Необходимо изменить название Империи, т.к. "$n" уже кто-то использовал.`,
         `Название Империи, придуманное тобой, неуникально. Придумай замену для "$n".`,
         `Такое название Империи взял кто-то другой. Имя "$n" необходимо поменять на другое!`,
         `Придумай альтернативу для "$n", потому, что такое название для Империи уже было использовано.`,
         `$n - не эксклюзивное название для Империи. Пожалуйста, придумай другое!`
        ],
        random: (dialogName, names) => g.dialog[dialogName][mylib.random(0, g.dialog[dialogName].length - 1)].replace(/\$(\w+)/g, (all, $1, $2) => names ? names[$1] || $1 : $1)
       },
       
       toUpper: txt => txt.replace(/[^a-zа-яё0-9 -]/ig, '')
        .toUpperCase()
        .replace(/A/gi, 'А')
        .replace(/O/gi, 'О')
        .replace(/E/ig, 'Е')
        .replace(/Y/gi, 'У')
        .replace(/T/gi, 'Т')
        .replace(/P/gi, 'Р')
        .replace(/H/gi, 'Н')
        .replace(/K/gi, 'К')
        .replace(/X/gi, 'Х')
        .replace(/C/gi, 'С')
        .replace(/B/gi, 'В')
        .replace(/M/gi, 'М'),
       
       isEx: (a, n) => a.every(o => n !== o.n),
       
       getNews: async ({promptName, stack, constructor, errMessageDialog, once = false}) => {
        let n = '';
        let onces = 1;
        
        while ((!once || onces--) && (n = await mylib.prompt(g.dialog.random(promptName), n))) {
         n = g.toUpper(n);
           
         if (g.isEx(stack, n)) {
          stack.push(new constructor({n}));
          g.fu();
          n = ``;
         } else {
          if (await mylib.alert(g.dialog.random(errMessageDialog, {n})));
          onces++;
          continue;
         }
        }
       }
      };
      
    const g = window.im;
    
    let mylib;
    
    g.initMylib = () => {
      if (g.mylib == null)
        g.mylib = mylib = applicanter.initMyLib('im');
      
      return mylib = g.mylib;
    }
    
    g.initMylib();
    
    g.state = mylib.getLS(g.lsnames.state) || g.init.state || {};
    g.tools = mylib.getLS(g.lsnames.tools) || g.init.tools || {};
    
    g.bindCurrents();
    
    
    ///// React
    
    class Ex extends RC {
     constructor() {
      super();
      this.state = {};
     }
     render() {
      return ce();
     }
    }
    
    class People extends RC {
     constructor() {
      super();
      this.state = {};
     }
     render() {
      try{
      return [
       ce(`div`, {
        className: Button.Secondary,
        onClick: e => {
         g.ss({phase: g.state.w === 0 ? Phase.Start : Phase.Game});
        }
       }, g.state.w === 0 ? `К Старту` : `Назад в ${g.current.game.n}`),
       
       ce(`div`, {
        className: Button.Danger,
        onClick: e => g.getNews({
         promptName: `newManPrompt`,
         stack: g.state.people,
         constructor: IMan,
         errMessageDialog: `inexclusiveName`
        })
       }, `Добавить Участников`),
       
       g.state.people.map(man => {
        const imperia = g.current.game.I.find(imp => imp.o === man.w);
        const checked = imperia && (!imperia.ban || imperia.p.some(imp => imp.o === man.w && imp.o !== man.w));
        
        return [
         ce(`div`, {
          className: Button.Simple + ` man-checking`,
          onClick: e => {
           if (imperia) imperia.ban = !!checked;
           else g.current.game.I.push(new IImperia({o: man.w, on: man.n}));
           g.fu();
          }
         },
         [
          !g.state.w
           ? null
           : ce(`input`, {
             className: `man-checkbox`,
             type: `checkbox`,
             checked
            }),
          ce(
           `span`,
           {},
           man.n
          )
         ])
        ];
       })
      ];
      } catch(e) {alert(e.stack)}
     }
    }
    
    class Game extends RC {
     constructor() {
      super();
      this.state = {selected: 0};
     }
     renameImperias(imperias, allImperias, hideImperias) {
      let stop = false;
      let n = ``;
      let timer = 0;
      
      if (hideImperias) {
       this.hideImperias = true;
       timer = 100;
      }
      
      allImperias = allImperias || imperias;
      
      this.forceUpdate();
      setTimeout(async () => {
       const similarsOnFinish = g.getTool('similarsOnFinish').a;
       
       renameImp:
        for (let i = 0; i < imperias.length; i++) {
         const imperia = imperias[i];
         const man = g.state.people.find(m => m.w === imperia.o);
       
         if (!await mylib.confirm(`Передай Книгу Записей Участнику ${man.n}!`, 'Переименование', 'передал', 'окончить') &&
              await mylib.confirm('Прервать процесс именования Империй?', null, 'да', 'нет')) break;
         
         n = await mylib.prompt(`${man.n}, напиши новое название для своей Империи.`, imperia.n || n);
         n = n && g.toUpper(n);
       
         if (n && (allImperias || imperias).some(imp => imp.n === n && imp.o !== man.w)) {
          i--;
          if (await mylib.alert(`Империя с таким названием уже существует. Придумай другое!`));
          continue renameImp;
         } else if (n === '' && await mylib.confirm(`Участником ${man.n} не было вписано имя Империи. Удалить его из списка Участников в этой Игре? Если нет, то Империя снова останется без названия!`)) {
          imperia.ban = true;
          continue;
         } else if (n == null) {
          if (await mylib.confirm(`Прервать процесс именования Империй?`)) {
           break;
          } else {
           i--;
           continue;
          }
         } else if (n != null) {
          imperia.n = n;
          g.fu();
          n = ``;
         }
        }
        if (await mylib.alert('Отдай Книгу Записей Ведущему!', 'Окей'));
       
        this.catchSimilars(allImperias, () => {
          this.hideImperias = false;
          this.forceUpdate();
        });
      }, timer);
     }
     
     catchSimilars(imperias, cb = f=>f) {
      const similarsOnFinish = g.getTool('similarsOnFinish').a;
      
      if (similarsOnFinish) {
        const ex = [];
        const similars = imperias.filter(imp => {
         if (ex.indexOf(imp.n) === -1) {
          ex.push(imp.n);
          return false;
         } else if (imp.n) {
          return true;
         }
        });
        const isThereSimilars = similars.length > 0;
        
        if (isThereSimilars) {
         this.hideImperias = true;
         this.forceUpdate();
         
         setTimeout(async () => {
          if (await mylib.alert('Есть совпадения в наименованиях Империй!', 'Внимание!'));
          for (let i = 0; i < similars.length; i++) {
           const simImp = similars[i];
           
           if (await mylib.alert('Игроком ${simImp.on} придумано уже существующее имя. Передайте Книгу Регистраци этому Игроку!', 'Важно!'));
           
           let n = await mylib.prompt(`${simImp.on}, тобой придумано неуникальное имя для Империи. Задай другое!`, simImp.n, 'Повторение');
           n = n && g.toUpper(n);
           
           if (!n || n === simImp.n || imperias.some(imp => imp.n === n && imp.w !== simImp.w)) {
            
            n == null ?
             await mylib.alert('Без наименования Империи невозможно играть! Придумай его!') :
             n === '' ?
              await mylib.alert('Имя пустым быть не может. Заполни поле!') :
              n === simImp.n ?
               await mylib.alert('Задать нужно другое имя!') :
               await mylib.alert('И такое название Империи уже существует!');
              
            i--;
            continue;
           } else {
            simImp.n = n;
            g.fu();
           }
          }
          if (await mylib.alert('Отдай Книгу Записей Ведущему!'));
          this.hideImperias = false;
          this.forceUpdate();
         }, 100);
        } else cb();
       } else cb();
     }
     
     render() {
      try{
      const currentGame = g.current.game;
      const imperias = currentGame.I;
      const allUnnamedImperias = imperias.filter(imperia => !imperia.ban);
      const unnamedImperias = allUnnamedImperias.filter(imperia => imperia.n === ``);
      const selectedIndex = imperias.findIndex(imperia => imperia.w === this.state.selected);
      const selectedImperia = selectedIndex === -1 ? null : imperias[selectedIndex];
      const isThereTheImpWithoutName = imperias.some(imperia => imperia.n === ``);
      
      return [
       ce(`div`, {
        className: Button.Secondary,
        onClick: e => g.ss({phase: Phase.Start, w: 0})
       }, `На Старт`),
       
       currentGame.win ?
        [
         ce(`div`, {
          className: Button.Primary,
          onClick: async e => {
           const name = await mylib.prompt('Тогда придумай название для новой Игры!', currentGame.n, 'Новая игра?');
           if (name && (name === currentGame.n)) {
            if (await mylib.alert('Ну сказано же, новое имя придумать! Короче, в следующий раз!'));
           } else if (name != null) {
            const {o, on, n, ban, p} = currentGame.win;
            const I = p.concat(new IImperia({n, on, o, ban}));
            
            g.state.games.push(new IGame({n: name, I}));
            g.fu();
           }
          }
         }, `Сыграть тем же составом..`)
        ] : [
         ce(`div`, {
          className: Button.Success,
          onClick: e => {
           g.ss({phase: Phase.People});
          },
          onClicfk: e => g.getNews({
           promptName: `newImperiaPrompt`,
           stack: imperias,
           constructor: IImperia,
           errMessageDialog: `inexclusiveImperiaName`
          })
         }, `Выбор Участников для ${g.current.game.n}`),
         
         g.current.game.I.length && !isThereTheImpWithoutName
          ? [
           ce(
            `div`,
            {
             className: Button.Danger,
             onClick: e => this.renameImperias(selectedImperia ? [selectedImperia] : allUnnamedImperias, imperias, true)
            },
            `Переименовать ${selectedImperia ? selectedImperia.n.slice(0, 25) : `все Империи`}`
           ),
         
           ce(
            `div`,
            {
             className: Button.Primary,
             onClick: e => {
              g.current.game.I = mylib.randomSort(imperias);
              g.fu();
             }
            }, `Перемешать Участников`)
           ]
          : null
        ],
        isThereTheImpWithoutName
         ? ce(
          `div`,
          {
           className: Button.Danger,
           onClick: e => this.renameImperias(unnamedImperias, allUnnamedImperias, false)
          },
          `Не все Империи имеют названия! Назначить имена.`)
         : this.hideImperias
          ? null
          : ce(
           `div`,
           {
            className: `im-list`
           },
           imperias.map(imperia => {
            return [
             imperia.ban ? null : ce(`div`, {
              className: (selectedImperia ? selectedImperia.w !== imperia.w ? Button.Warning : Button.Secondary : Button.Warning) + ` im-list-item`,
              onClick: async e => {
               const isSame = selectedImperia && (selectedImperia.w === imperia.w);
              
               if (selectedImperia && !isSame) {
                if (await mylib.confirm(`${selectedImperia.on} переходит под командование ${imperia.on}?`, 'Подчинение')) {
                 imperia.p.push(selectedImperia);
                 imperia.p = imperia.p.concat(selectedImperia.p);
                 
                 imperias.splice(selectedIndex, 1);
                 selectedImperia.p = [];
                 
                 if (imperias.length === 1) {
                  if (await mylib.alert(g.dialog.random('winner', {
                   impName: imperia.n,
                   ownerName: imperia.on
                  })));
                  currentGame.win = imperia;
                 }
                 g.fu();
                }
               } else {
                this.setState({selected: isSame ? 0 : imperia.w});
               }
              }
             }, [
              ce(`span`, {
               className: `imperia-view_name`
              }, imperia.n.slice(0,20)),
              ce(`span`, {
               className: `imperia-view_separator`
              }, `:`),
              ce(`span`, {
               className: `imperia-view_owner`
              }, imperia.on.slice(0, 20))
             ]),
             imperia.p.map(imp => ce(`div`, {
              className: Button.Simple
             }, `${imp.n.slice(0, 20)} : ${imp.on.slice(0, 20)}`))
            ];
           })
          )
      ];
      } catch(e) {alert(e.stack)}
     }
    }
    
    class Tools extends RC {
     constructor() {
      super();
      g.ctxt.Tools = this;
     }
     render() {
      return [
       ce(`div`, {
        className: Button.Secondary,
        onClick: () => g.ss({phase: Phase.Start})
       }, `К Старту`),
       
       ce(`div`, {
        className: Button.Danger,
        onClick: async () => {
         if (await mylib.confirm('Хочешь удалить все Игры?')) {
          g.state.games = [];
          g.state.w = 0;
          g.fu();
         }
        }
       }, `Удалить все Игры`),
       
       ce(`div`, {
        className: Button.Danger,
        onClick: async () => {
         if (await mylib.confirm('Хочешь удалить список Игроков?', null, 'да', 'нет')) {
          g.state.people = [];
          g.fu();
         }
        }
       }, `Почистить базу Игроков`),
       
       g.tools.map(tool =>
        ce(`label`, {
         className: Button.Simple
        }, [
         ce(`input`, {
          type: `checkbox`,
          checked: tool.a,
          onClick: e => {
           tool.a = !tool.a;
           g.st();
          }
         }),
         tool.t
        ])
       )
      ];
     }
    }
      
    class StartPage extends RC {
     constructor() {
      super();
     }
     render() {
      return [
       ce(`div`, {
        className: Button.Info,
        onClick: () => applicanter.load('index'),
       }, 'На главную'),
       
       ce(`div`, {
        className: Button.Info,
        onClick: () => g.ss({phase: Phase.Tools})
       }, `Настройки.`),
       
       ce(`div`, {
        className: Button.Warning,
        onClick: () => g.ss({phase: Phase.People})
       }, `Посмотреть список Игроков`),
       
       ce(`div`, {
        className: Button.Success,
        onClick: () => g.getNews({
         promptName: `newGamePrompt`,
         stack: g.state.games,
         constructor: IGame,
         errMessageDialog: `inexclusiveGameName`,
         once: true
        })
       }, `Добавить Игру`),
       
       g.state.games.map(game =>
        ce(`div`, {
         className: game.win ? Button.Secondary : Button.Primary,
         onClick: event => {
          g.ss({phase: Phase.Game, w: game.w});
         }
        }, game.win ? `${game.n} (${game.win.on})` : game.n))
      ];
     }
    }
    
    class Application extends RC {
     constructor() {
      super();
      g.ctxt.Application = this;
      this.state = g.state;
     }
     render() {
      switch (this.state.phase) {
       case Phase.Start: return ce(StartPage);
       case Phase.Game: return ce(Game);
       case Phase.People: return ce(People);
       case Phase.Tools: return ce(Tools);
      }
      return null;
     }
    }
    
    
    
    if (window.applicanter)
      window.applicanter.register('im', ce(Application));
    else ReactDOM.render(ce(Application), document.querySelector(`.application`));
  } catch (error) {
   // console.error(error);
    throw error;
  }
})();


  
  
  
  
  
  
