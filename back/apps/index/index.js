try{

const ce = React.createElement;
mylib.loadAuth();
const g = {
 auth: mylib.getLS(`auth`) || {},
 dateFormat: {
  weekday:`short`,
  year: `numeric`,
  month: `short`,
  day: `numeric`,
  hour: `2-digit`,
  minute: `numeric`,
  second: `2-digit`
 },
 getFormattedDate: ts => {
  return new Date(parseInt(ts * 1000)).toLocaleDateString(`ru-RU`, g.dateFormat);
 },
 context: {
  Header: null,
  Index: null
 },
 binds: context => {
  context.fu = news => {
   for (const n in news) context[n] = news[n];
   context.forceUpdate();
  };
  
  context.ss = state => {
   context.setState(state);
  };
 },
 forms: {
  main: () => [
   {
    name: `login`,
    placeholder: `Логин`,
    type: `text`,
    required: true,
    valid: /^ *[\w-]{3,50} *$/,
    invalidMessage: `Только латинские буквы, цифры, символ подчёркивания и тире. Минимум 3 знака, максимум - 50.`,
   }, {
    name: `fio`,
    placeholder: `ФИО`,
    type: `text`,
    ignore: g.phase.Header.Login,
    required: false,
    valid: /^ *(([А-ЯЁ][а-яё-]{1,19} ?){3})|(([A-Z][a-z-]{1,19} ?){2,3}) *$/,
    invalidMessage: `ФИО должно состоять из трёх слов с больших букв. Каждое из которых должно состоять от 2 до 20 символов. Допускаются тире. Не совмещайте латиницу и кирилицу.`,
   }, {
    name: `passw`,
    placeholder: `Пароль`,
    type: `password`,
    required: true,
    valid: /^.{2,150}$/,
    invalidMessage: `Пароль может содержать любые символы кроме знака переноса строки, в количестве от 2 до 150 символов.`,
   }, {
    value: `ПОЙТИ`,
    type: `button`,
   }
  ]
 },
 phase: {
  Header: {
   Login: `log_in`,
   Register: `register`
  }
 },
 reasons: {
  0: 'были изменения',
  1: `Пользователь $1 переименован на "$2"`,
  1.1: `LEVEL Пользователя $1 изменён на $2`,
  1.2: `У Пользователя $1 удалён код доступа с $2`,
  1.3: `Пользователь $1 удалён`,
  2: `В приложении $1 измено значение поля $2 на $3`,
  2.1: `В приложении $1 измено значение видимости`
 }
};

const apps = @#[["/S/apps"],{"filter":["vislevel","<=",@$looklevel;]}] | [];;

class FormBlock {
 constructor(formFields) {
  if (!Array.isArray(formFields))
   throw new Error(`FormBlock value must be an Array type`);
  
  this.formFields = (formFields || [])
   .map(field => new FormField(field));
  
  this.length = formFields.length;
  return this.formFields;
 }
 isAllValid() {
  return this.formFields.every(field => field.isValid());
 }
}

class FormField {
 constructor(props) {
  for (const propName in props) {
   this[propName] = props[propName];
  }
 }
 isValid() {
  return this.valid.test(this.value);
 }
}

class Header extends React.Component {
 constructor(props) {
  super(props);
  g.context.Header = this;
  g.binds(this);
  this.fields = {};
  this.state = {
   form: new FormBlock(g.forms.main()),
  };
 }
 fu() {
  this.forceUpdate();
 } 
 auth(S) {
  const {
   value = this.fields,
   success = ()=>{},
   error = ()=>{}
  } = S;
  
  mylib.execute({
   path: ``,
   exec: {value, method: `auth`},
   responseType: `json`,
   success, error
  });
 }
 writeMessage(msg, type, target) {
  if (target) {
   target.classList[type === 0 ? `add` : `remove`](`invalid`);
  }
  this.isInvalidMessage = type === 0;
  this.message = msg;
  this.fu();
 }
 render() {
  return [
   ce(`div`, {key: `header`, className: `main-header`},
    ce(`span`, {
     key: `header.actions`,
     className: `main-header_unit main-header_action`,
     onClick: ev => {
      const reg = g.phase.Header.Register;
      this.fu({phase: this.phase === reg ? `` : reg});
     }
    }, g.auth.login ? `${g.auth.fio} - ${g.auth.login}` : `АВТОР`)
   ),
   !this.phase
   ? null
   : ce(`div`, {key: `header.form`, className: `main-header_form`},
    g.auth.login && g.auth.at
    ? ce(`input`, {
      key: `header.form.input`,
      className: `main-header_form_field button`,
      value: `ВЫЙТИ`,
      type: `button`,
      onClick: () => {
       this.auth({
        value: mylib.consl(g.auth),
        success: resp => {
         mylib.consl(resp);
         mylib.delLS(`auth`);
         location.reload();
        },
        error: mylib.consl
       });
      }
     })
    : [
     this.state.form.map((field, fieldi) =>
      field.ignore && field.ignore === this.phase
       ? null
       : ce(`div`, {key: `header.field.${fieldi}`, className: `main-header_form_field_wrapper`},
        field.type === `button`
        ? ce(`input`, {
          key: `header.field.${fieldi}.input`,
          className: `main-header_form_field button`,
          value: field.value,
          type: field.type,
          disabled: !this.fields.login || !this.fields.passw,
          onClick: ev => {
           this.auth({
            success: resp => {
             mylib.consl(resp);
             if (resp.registered == null && !resp.ok) {
              this.writeMessage(`Повтори попытку чуть позднее..`);
             } else if (!resp.registered && !this.fields.fio) {
              this.writeMessage(`Незарегистрированные пользователи должны ввести ФИО`);
             } else if (resp.registered && this.fields.fio) {
              this.writeMessage(`Этот логин занят.`);
             } else if (resp.registered && !resp.ok) {
              this.writeMessage(`Неверные данные.`);
             } else if (resp.auth && resp.auth.at && resp.auth.login) {
              mylib.setLS(`auth`, resp.auth);
              location.reload();
             }
            },
            error: resp => this.writeMessage(`Ошибка отправки данных.`)
           })
          }
         })
        : ce(`input`, {
          key: `header.field.${fieldi}.input.plus`,
          className: `main-header_form_field`,
          placeholder: field.placeholder ? `${field.placeholder}${field.required ? ` *` : ``}` : ``,
          type: field.type,
          onInput: event => {
           const target = event.target;
           const value = target.value;
             
           field.value = value;
           const allRight = (value === `` && !field.required) || field.isValid();
             
           if (allRight) {
            this.fields[field.name] = value;
            this.writeMessage(``, 1, target);
           } else {
            this.writeMessage(field.invalidMessage, 0, target);
           }
       
           this.fu();
          }
         })
        )
       ),
       ce(`div`, {
        key: `header.field.reg.description`,
        className: `main-header_form_message ${this.isInvalidMessage ? `invalid` : ``}`
       }, this.message || `* - обязательные поля`)
     ])
    ];
 }
}

/****:3:****/

class Body extends React.Component {
 constructor(props) {
  super(props);
  g.context.Body = this;
  g.binds(this);
  this.state = {
   users: []
  };
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  return [/****:100:****/
   //ce('div', {}, JSON.stringify(apps)),
   ce(`button`, {
    key: `body.access`,
    className: `mbtn mbtn-no mblock`,
    disabled: !Object.keys(mylib.execs).length,
    onClick: ev => {
     mylib.loadExecs(resp => {
      mylib.consl(resp);
      this.fu();
     }, ``);
    }
   }, `Принять данные`),
   ce(`ul`, {key: `body.ul`},
    mylib.execs.map((exec, execi) =>
     ce(`li`, {key: `body.exec.${execi}`}, mylib.getReason(exec.reason, g.reasons))
    )
   ),
   ce(`hr`),/****:100;****/
   ce(
    `div`,
    {
     className: ``
    },
    apps.map(app => {
    
     return ce(
      `div`,
      {
       className: `app-imagine`
      },
      [
       ce(`img`,
        {
         key: `app.${app.name}.icon`,
         src: `http://jesmyl.space/apps/${app.name}/${app.name}.jpg`,
         className: `icon`
        }
       ),/****:3-99:****/
       ce(`a`,
        {
         key: `app.${app.name}.icon`,
         href: `http://jesmyl.space/@${app.name}`,
         className: `ma`
        },
        app.title
       ),/****:3-99;****//****:100:****/
       ce(
        `div`,
        {
         className: `control`
        },
        Object.keys(app).sort((b, a) => a > b ? 1 : a < b ? -1 : 0).map(fieldName => {
         return ['number', 'string'].indexOf(typeof app[fieldName]) === -1 ? null : ce(
          `strong`,
          {
           key: `app.${fieldName}.field`,
           className: `field ${fieldName}`,
           onClick: ev => {
            const newv = prompt(`Новое значение для поля ${fieldName}`, app[fieldName]);
            const nv = isNaN(parseInt(newv)) ? newv : parseInt(newv);
            
            if (newv != null) {
             mylib.setExecs([{
              track: [`/S/apps`, [`name`, app.name], fieldName],
              prev: app[fieldName],
              value: nv,
              method: `set`,
              reason: [2, app.name, fieldName, nv]
             }]);
             app[fieldName] = nv;
             this.fu();
            }
           },
          },
          `${fieldName}: ${app[fieldName]}`
         );
        }),
        (visits => {
         if (visits == null) return null;
         return ce('div', {}, 'visits: ' + Object.keys(visits)
          .reduce((count, login) => count += (visits[login] && visits[login].length || 0), 0));
        })(app.visits),
        ce(
         `a`,
         {
          className: `mbtn btn-secondary`,
          href: `https://jesmyl.space/@${app.name}`,
          target: `_blank`
         },
         `HREF`
        ),
        ce(
         `a`,
         {
          className: `mbtn btn-primary`,
          href: `https://jesmyl.space/apps/${app.name}/${app.name}.html.zip`,
          target: `_blank`
         },
         `DOWN`
        ),
        ce(
         `button`,
         {
          className: `mbtn btn-success`,
          onClick: e => {
           e.target.disabled = true;
           mylib.doIt({
            exec: [{
             app: app.name,
             do: `printAppHTML`,
            }],
           });
          },
         },
         `HTML`
        ),
       ),/****:100;****/
      ]
     );
    })
   ),/****:100:****/
   ce(`button`, {
    key: `body.open.users`,
    className: `mbtn btn-success mblock`,
    onClick: ev => {
     mylib.execute({
      path: ``,
      auth: mylib.auth,
      exec: {
       track: [`auth`],
       method: `get`,
       value: `users`
      },
      responseType: `json`,
      success: resp => {
       if (resp.ok && resp.value) this.setState({users: resp.value, ts: resp.ts});
       else mylib.consl(resp);
      },
      error: code => alert(`Ошибка!`)
     });
    }
   }, `Пользователи`),
   this.state.users.map((user, useri) =>
    [
    ce(`div`,
     {
      key: `user.block.${useri}`,
      className: `mbtn mgroup mblock`,
     },
     [
      ce(`button`, {
       key: `user.block.remb.${useri}`,
       className: `mbtn mbtn-${user.removed ? `no` : `ok`}`,
       disabled: user.removed,
       onClick: ev => {
        const fio = prompt(`FIO для Пользователя ${user.fio}:`, user.fio);
        
        if (!fio) return;
        
        mylib.setExecs([{
         track: [`auth`, `users`, [`login`, user.login], `fio`],
         prev: user.fio,
         value: fio,
         method: `set`,
         reason: [1, user.fio, fio]
        }]);
        user.fio = fio;
        this.fu();
       }
      }, user.fio),
      ce(`button`, {
       key: `user.block.tsb.${useri}`,
       className: `mbtn mbtn-ok`,
       disabled: user.level === 100 || user.removed,
       onClick: ev => {
        const level = parseInt(prompt(`LEVEL для Пользователя ${user.fio}:`, user.level) || `0`);
        
        if (!level) return;
        
        mylib.setExecs([{
         track: [`auth`, `users`, [`login`, user.login], `level`],
         prev: user.level,
         value: level,
         method: `set`,
         reason: [1.1, user.fio, level]
        }]);
        user.level = level;
        this.fu();
       }
      }, `LEVEL: ${user.level}`),
      ce(`button`, {
       key: `user.block.atsb.${useri}`,
       className: `mbtn mbtn-ko`,
       disabled: user.removed,
       onClick: event => {
        const atsBox = document.getElementById(user.login);
        atsBox.hidden = !atsBox.hidden
       }
      }, `ATS: ${Object.keys(user.ats).length}`),
      user.la == null
       ? null
       : ce(`span`, {key: `user.block.la.${useri}`, className: `mbtn mbtn-ok`}, g.getFormattedDate(user.la)),
      ce(`button`, {
       key: `user.block.remuserb.${useri}`,
       className: `mbtn mbtn-no`,
       disabled: user.level === 100 || user.removed,
       onClick: ev => {
        if (!confirm(`Удалить Пользователя "${user.fio}"?`)) return;
        
        mylib.setExecs([{
         track: [`auth`, `users`],
         prev: null,
         value: [`login`, user.login],
         method: `removeBy`,
         reason: [1.3, user.fio]
        }]);
        user.removed = true;
        this.fu();
       }
      }, `×`)
     ]),
      ce(`div`, {key: `user.ats`, id: user.login, hidden: true},
       Object.keys(user.ats).map((at, ati) => 
        ce(`div`, {key: `user.block.atgroup.${useri}.${ati}`, className: `btn mgroup mblock`}, [
         ce(`button`, {
          key: `user.block.atgroup.remb.${useri}.${ati}`,
          className: `mbtn mbtn-ko`,
          onClick: ev => {
           const fromFormat = g.getFormattedDate(user.ats[at]);
           if (!confirm(`Удалить код доступа с "${fromFormat}" у Пользователя ${user.fio}`)) return;
           mylib.setExecs([{
            track: [`auth`, `users`, [`login`, user.login], `ats`],
            prev: null,
            value: at,
            method: `del`,
            reason: [1.2, user.fio, fromFormat]
           }]);
           delete user.ats[at];
           this.fu();
          }
         }, `×`),
         ce(`button`, {key: `user.block.atgroup.dateb.${useri}.${ati}`, className: `mbtn mbtn-ko`}, g.getFormattedDate(user.ats[at]))]))),
   ]),/****:100;****/
  ];
 }
}

/****:3;****/

class Index extends React.Component {
 constructor(props) {
  super(props);
  g.context.Index = this;
  g.binds(this);
  this.state = {};
 }
 render() {
  return [
   ce(Header, {key: `index.header`}),/****:3:****/
   ce(Body, {key: `index.body`}),/****:3;****/
  ];
 }
}


ReactDOM.render(ce(Index), document.querySelector(`.application`));



}catch(e){alert(e.stack)}




