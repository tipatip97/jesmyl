"use strict";

try{

const RAND_ID_LEN = 20;

//mylib.loadAuth();

const px = n => `${n}px`;
const em = n => `${n}em`;
const per = n => `${n}%`;

const _black = `#4a575c`;
const _red = `#933a3a`;
const _pink = `#f47d73`;
const _green = `#19845d`;
const _bgrey = `#e9e7eb`;
const _grey = `#666666`;
const _lgrey = `#f5f3f8`;

const jo = (all = [], by = ` `) => all.join(by);

const sli = (slis = []) =>
  slis.reduce((prev, curr) => {
    for (const i in curr) prev[i] = curr[i];
    return prev;
  }, {});

const answerBlank = [];

const letters = `abcdefghijklmnopqrstuvwxyz_1234567890-.`.repeat(100);
const randIdStorage = [];
const randomId = prevId => {
  if (prevId) prevId;
  const newId = letters.split('').sort((a, b) => mylib.random(-1, 1)).slice(0, RAND_ID_LEN).join('');
  return randIdStorage.indexOf(newId) < 0 ? randIdStorage[randIdStorage.length] = newId : randomId(newId);
};

class Storager {
  constructor(initStack) {
    this.stack = Array.isArray(initStack) ? initStack.slice(0).sort(() => Math.random() > 0.5 ? 1 : -1) : [];
  }
  
  findAll(g, t) {
    return this.stack.filter(field => field.g === g && field.t === t);
  }
  
  find(g, t, i) {
    return this.stack.find(field => field.g === g && field.t === t && field.i == i);
  }
  
  val(g, t, i, def) {
    const item = this.find(g, t, i);
    return item == null ? def : item.v;
  }

  write(g, t, i, v) {
    const item = this.find(g, t, i);
    i = i < 0 ? t === 'q' ? this.stack.filter(s => s.t === 'q').length : this.findAll(g, t).length : i;
    
    if (item != null) {
      item.v = v;
      
      mylib.setExecs([{
        track: [['adminstorage'], ['g', '==', g, 't', '==', t, 'i', '==', i], 'v'],
        value: v,
        method: `set`,
        reason: [0]
      }]);
      
    } else {
      const newexec = {g, t, i, v};
      if (i == null) delete newexec.i;
      this.stack.push(newexec);
      if (appctx.state.isRed)
        mylib.setExecs([{
          track: [[`adminstorage`]],
          value: newexec,
          method: `push`,
          reason: [0]
        }]);
      else
        mylib.setExecs([{
          track: ['userstorage', myMD5],
          value: us.stack,
          method: `set`,
          reason: [0]
        }]);
    }
    
    this.clean();
    appctx.fu();
    return {wrote: item == null};
  }
  
  clean() {
    this.stack = this.stack.filter(st => st.v != null);
  }
  
  load(cb) {
    mylib.loadExecs(cb, `@exb`, true);
  }
}

if (0) {
  mylib.setExecs([{
    track: [`userstorage`],
    value: {},
    method: `set`,
    reason: [0]
  }]);

  mylib.setExecs([{
    track: [[`adminstorage`]],
    value: [],
    method: `set`,
    reason: [0]
  }]);
}

let adminstorage = [];


const adminsettings = {}; // @#["adminsettings"] | {};;
const userstorage = []; // @#["userstorage","@$login;"] | [];;


/****:90:****/
const useranswers = {}; // @#["userstorage"] | {};;
const usersnames = {h: [0]}; // @#["/auth","users",{"pull":["login","fio"]}] | {h:[0]};;
/****:90;****/


/****:100:****/
//mylib.consl(usersnames);
//mylib.consl(adminstorage);
/****:100;****/



const myMD5 = '@$login;';

const as = new Storager(adminstorage);
const us = new Storager(userstorage);

let db = us;

/****:100:****/
/*
  
  t: type,
  q: question,
  v: variant,
  h: hidden,
  r: right,
  
*/
/****:100;****/

class Field extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const props = this.props;
    const tval = as.val(props.f.g, 't', null, 'none');
    const isShowQ = !as.val(props.f.g, 'h', null, false);
    
    return ce(
      `div`,
      {
        style: {
          margin: px(10),
          borderBottom: jo([`solid`, px(1), _pink]),
        }
      },
      !props.isRed ? null : 
      [
        as.val(props.f.g, 't') ?
          null :
          ce(
            'select',
            {
              key: `${props.f.g}-select${props.isRed ? '.red' : ''}`,
              defaultValue: tval,
              onChange: e => as.write(props.f.g, 't', null, e.target.value),
            },
            Object.keys(fieldType).map(fname => ce('option', {value: fname}, translate[fname]))
          ),
          ce(
            'label',
            {
              key: `${props.f.g}-is-show_q-label${props.isRed ? '.red' : ''}`,
              style: {
                float: 'right',
              },
              onClick: e => as.write(props.f.g, 'h', null, !isShowQ ? null : true) && appctx.fu(),
            },
            ce('span', {}, 'показывать вопрос? '),
            ce(
              'div',
              {
                className: `checkbox ${isShowQ ? 'checked' : ''}`,
              }
            )
          )
      ],
      ce(fieldType[tval], props)
    )
  }
}

class Varianted extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const props = this.props;
    const isRadio = as.val(props.f.g, 't') === 'r';
    let variants = as.findAll(props.f.g, 'v');
      variants = adminsettings.sv || props.isRed || props.checker ? variants.sort((a, b) => a.i - b.i) : variants;
      variants = props.isRed ? variants : variants.filter(v => v.v);
    const isTopDisabled = !props.isRed && (adminsettings.closed || (userstorage.filter(uansw => uansw.v != null).length !== 0 && (adminstorage || []).filter(uansw => uansw.t === 'r' && uansw.v != null).length <= userstorage.length));
    const storage = props.checker || db;
    const correct = isRadio ? as.val(props.f.g, 'r') : null;
    
    try{
    return [/****:90:****/
      props.isRed ?
        ce(
        'textarea',
        {
          key: `${props.f.g}-q-red`,
          rows: 4,
          cols: 50,
          placeholder: 'вопрос',
          style: {
            display: 'block',
          },
          onChange: e => as.write(props.f.g, 'q', props.f.i, e.target.value),
          defaultValue: as.val(props.f.g, 'q', props.f.i),
        }
      ) :/****:90;****/
      ce(
        'h3',
        {
          key: `${props.f.g}-q`,
        },
        as.val(props.f.g, 'q', props.f.i)
      ),/****:4:****/
      variants.map(variant => {
        const answer = isRadio ?
          storage.val(props.f.g, 'r') :
          storage.val(props.f.g, 'r', variant.i, false);
        
        const isChecked = isRadio ? answer === variant.i : answer;
        const isDisabled = props.checker || (!props.isRed && (isTopDisabled || ~userstorage.findIndex(item => item.g === props.f.g)));
        const correctCheckbox = as.val(props.f.g, 'r', variant.i);
        const isCorrect = isRadio ? answer === correct : answer === correctCheckbox;
        
        try{
        return ce(
          `div`,
          {
            key: `${props.f.g}-v-${variant.i}${props.isRed ? '.red' : ''}`,
            className: 'question-variant' + (isChecked && props.checker ? isCorrect ? ' correct' : ' incorrect' : ''),
            onClick: isRadio ?
              e => !isDisabled && db.write(props.f.g, 'r', null, variant.i) && appctx.fu() :
              e => !isDisabled && db.write(props.f.g, 'r', variant.i, !isChecked ? true : null) && appctx.fu(),
          },
          isRadio ? ce(
            `div`,
            {
              key: `${props.f.g}-r-${variant.i}${props.isRed ? '.red' : ''}`,
              className: `radio ${isChecked ? 'checked' : ''} ${isDisabled && !props.checker ? 'disabled' : ''} ${!props.isRed && correct === variant.i ? 'correct' : ''}`,
            }
          ) :
          ce(
            `div`,
            {
              key: `${props.f.g}-c-${variant.i}${props.isRed ? '.red' : ''}`,
              className: `checkbox ${isChecked ? 'checked' : ''} ${isDisabled && !props.checker ? 'disabled' : ''} ${!props.isRed && correctCheckbox ? 'correct' : ''}`,
            }
          ),/****:90:****/
          props.isRed ?
          ce(
            'textarea',
            {
              key: `${props.f.g}-new-v-s.red`,
              rows: 2,
              cols: 50,
              placeholder: 'новый варик',
              onClick: e => e.stopPropagation(),
              onChange: e => as.write(props.f.g, 'v', variant.i, e.target.value),
              style: {
                marginLeft: em(1)
              },
              defaultValue: variant.v
            }
          ) :/****:90;****/
          ce(
          `span`,
            {
              key: `${props.f.g}-new-v-s`,
              style: {
                marginLeft: em(1)
              }
            },
            variant.v
          ),
        );
        }catch(e){ra(e.stack);}
      }),/****:4;****//****:90:****/
      !props.isRed ? null : [
        as.findAll(props.f.g, 'r').length ?
          null :
          ce(
            'h4',
            {
              key: `${props.f.g}-not-label${props.isRed ? '.red' : ''}`,
              style: {
                color: 'red'
              }
            },
            isRadio ?
              'нет правильного варианта, а задать его нужно!' :
              'нет ни одного правильного варианта. уважаемый, хотя бы один, пожалуйста!',
          ),
          ce(
            'button',
            {
              key: `${props.f.g}-new-v-b${props.isRed ? '.red' : ''}`,
              className: 'btn btn-warning',
              onClick: e => as.write(props.f.g, 'v', -1, '')
            },
            'новый варик'
          ),
      ]/****:90;****/
    ];
    }catch(e){alert(e.stack);}
  }
}

class None extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  fu() {
    this.forceUpdate();
  }
  render() {
    return ce('div', {}, 'Выбери тип!');
  }
}

let appctx;

class App extends React.Component {
  constructor(props) {
    super();
    appctx = this;
    this.state = {
      isRed: false,
      checking: '',
      checker: null,
      showHelp: false,
      pastedExample: false,
    };
  }
  
  fu() {
    this.forceUpdate();
  }
  
  render() {
    const props = this.state;
    let qq = as.stack.filter(qfilter);
      qq = adminsettings.sq || this.state.isRed || this.state.checking ? qq.sort((a, b) => a.i - b.i) : qq;
    
    return [/****:90:****/
      ce(
        'div',
        {
          className: `checkbox ${this.state.isRed ? 'checked' : ''}`,
          onClick: e => {
            this.setState({isRed: !this.state.isRed});
            db = !this.state.isRed ? as : us;
          }
        }
      ),/****:90;****/
    ce(
        `div`,
        {
          style: {
            width: px(700),
            border: jo([`solid`, _pink, px(5)]),
            margin: `15px auto`
          }
        },
        qq.map(field => ce(Field, {
          isRed: this.state.isRed,
          f: field
        })),/****:90:****/
        this.state.isRed ?
        ce(
          'button',
          {
            className: 'mbtn m-ok',
            onClick: e => as.write(randomId(), 'q', -1, '') && this.fu()
          },
          'новый вопрос'
        ) : null,/****:90;****/
      ),/****:90:****/
      !this.state.isRed ? null : ce(
        `div`,
        {
          style: {
            width: px(700 - 30),
            border: jo([`solid`, _grey, px(5)]),
            margin: `15px auto`,
            padding: px(15)
          }
        },
        settingsList.map(setting =>
          ce(
            'label',
            {
              style: {
                display: 'block',
                fontSize: '20px',
              },
              onClick: e => {
                mylib.setExecs([{
                  track: [`adminsettings`, setting.n],
                  value: adminsettings[setting.n] = !adminsettings[setting.n],
                  method: `set`,
                  reason: [0]
                }]);
                appctx.fu();
              }
            },
            ce(
              'div',
              {
                key: `setting-${setting.n}${props.isRed ? '.red' : ''}`,
                className: `checkbox ${adminsettings[setting.n] ? 'checked' : ''}`,
              }
            ),
            ce(
              'span',
              {
                style: {
                  marginLeft: em(1)
                },
              },
              setting.t
            ),
          ),
        ),
      ),/****:90;****//****:4:****/
      appctx.state.isRed || !adminsettings.closed ?
        null :
        ce(
          'h3',
          {
            style: {
              textAlign: 'center',
              color: _green
            }
          },
          'опрос завершён.'
        ),
        !appctx.state.isRed && (adminstorage || []).filter(uansw => uansw.t === 'r' && uansw.v != null).length <= userstorage.filter(answ => answ.v != null).length ?
        ce(
          'h3',
          {
            style: {
              textAlign: 'center',
              color: _black
            }
          },
          userstorage.length ? // (
          'спасибо за участие в опросе :)' :
          'вопросы ещё не сформированы. подожди немножко'
        ) : adminsettings.closed && !appctx.state.isRed ? null :
        this.state.pastedExample ?
        ce(
          'button',
          {
            className: 'btn btn-warning btn-block',
            style: {
              width: px(700),
              margin: `auto`
            },
            onClick: e => {
              try{
              this.textHeap.value = '';
              mylib.execs = [];
              as.stack = [];
              us.stack = [];
              this.setState({pastedExample: false});
              }catch(e){ra(e.stack);}
            },
          },
          'очистить данные примера'
        ) :
        ce(
          'button',
          {
            className: 'mbtn mbtn-ok mblock',
            disabled: !mylib.execs.length,
            style: {
              width: px(700),
              margin: `auto`
            },
            onClick: e => db.load(r => this.fu() || mylib.consl(r))
          },
          'отправить'
        ),
      !this.state.isRed ? null : ce(
        `div`,
        {
          style: {
            width: px(700),
            border: jo([`solid`, _green, px(5)]),
            margin: `15px auto`
          }
        },
        (Object.keys(useranswers).length === 0) ?
        ce(
          'h3',
          {},
          'здесь будет инфа об ответах'
        ) :
        Object.keys(useranswers)
        .map(userid => {
          const answerList = myMD5 === userid ?
            useranswers[userid].concat(us.stack) :
            useranswers[userid];
          let score = 0;
          let general = 0;
          
          as.stack.forEach(quest => {
            if (quest.t === 'r' && quest.v != null && !as.val(quest.g, 'h')) {
              general++;
              score -= answerList.some(answ => answ.g === quest.g && answ.t === quest.t && answ.i == quest.i && answ.v === quest.v) ? -1 : 1;
            }
          });
          return {userid, score, general};
        })
        .sort((a, b) => b.score - a.score)
        .map(({userid, score, general}) => {
          const isChecking = this.state.checking === userid;
          
          return [ce(
            'div',
            {
              key: `${userid}-user-answer-label${props.isRed ? '.red' : ''}`,
              style: {
                fontWeight: isChecking ? 'bold' : 'normal',
                fontSize: '20px',
                margin: '.3em .5em',
              },
              onClick: e => this.setState({
                checking: isChecking ? '' : userid,
                checker: isChecking ? null : new Storager(useranswers[userid]),
              }),
            },
            ce(
              'span',
              {
                key: `${userid}-user-name${props.isRed ? '.red' : ''}`,
              },
              usersnames.find(user => user.login === userid).fio
            ),
            ce(
              'b',
              {
                key: `${userid}-user-answer-score${props.isRed ? '.red' : ''}`,
                style: {
                  marginLeft: em(1)
                }
              },
              `${score} / ${general}`
            ),
          ),
          !isChecking ?
            null :
            qq.map(field => ce(Field, {
              checker: this.state.checker,
              f: field
            }))
          ];
        }),
      ),
      !this.state.isRed || as.stack.length ? null : ce(
        'div',
        {
          className: `checkbox ${this.state.showHelp ? 'checked' : ''}`,
          style: {
            margin: '0 calc(50% - 1em / 2)',
          },
          onClick: e => this.setState({showHelp: !this.state.showHelp}),
        }
      ),
      !this.state.showHelp || !this.state.isRed || as.stack.length ? null : ce(
        'div',
        {
          style: {
            width: px(700),
            margin: `10px auto`,
            textAlign: 'justify'
          }
        },
        `каждый блок должен быть отделён двумя или более переносами строк.
          первая строка блока будет отображена как вопрос,
          следующие строки - варианты ответов.
          перед правильным ответом нужен плюс (+текст правильного варианта ответа).
          по умолчанию, если правильный вариант ответа один,
          пользователю будет дана возможность выбрать только один;
          изменить это поведение возможно, если перед текстом
          вопроса поставить точку (.текст вопроса).
          для загрузки примера введи в поле ввода ${brCount} переносов строк.
          для применения текста ctrl + enter или ${brCount}
          переносов строк в начале поля ввода.
        `
      ),
      !this.state.isRed ? //|| as.stack.length ?
      null :
      ce(
        'textarea',
        {
          style: {
            width: px(700),
            height: em(7),
            margin: `10px calc((100% - 700px) / 2)`,
          },
          ref: el => this.textHeap = el || this.textHeap,
          resize: 'vertical',
          placeholder: textFillerPlaceholder,
          onKeyUp: e => e.keyCode === 13 && (e.ctrlKey || e.target.value.search(RegExp(`^\n{${brCount}}`)) === 0) && (e.target.value.trim() ? packQuestions(e.target.value) : ((e.target.value = textFillerPlaceholder) && this.setState({pastedExample: true}))),
        }
      ),
      /****:90;****/
    ];
  }
}

const packQuestions = str => {
  str
    .trim()
    .split(/\n{2,}/)
    .forEach((qheap, qheapi) => {
      const g = randomId();
      let isTyped = 0;
      const rs = [];
      
      qheap
        .split(/\n/)
        .forEach((bit, biti) => {
          
          if (biti === 0) {
            isTyped = bit.startsWith('.') ? 2 : 0;
            
            db.write(g, 'q', -1, isTyped ? bit.slice(1) : bit);
          } else {
            const isRight = bit.startsWith('+');
            const writed = db.write(g, 'v', biti, isRight ? bit.slice(1) : bit);
            if (isRight) ++isTyped && rs.push(biti);
          }
        });
        
        if (rs.length === 1 && isTyped === 1) db.write(g, 'r', null, rs[0])
        else rs.forEach(ri => db.write(g, 'r', ri, true));
        db.write(g, 't', null, isTyped > 1 ? 'c' : 'r');
    });
  appctx.fu();
};

const qfilter = f => f.t === 'q' && (appctx.state.isRed ? true : f.v) && (appctx.state.isRed ? true : !as.stack.some(ff => ff.g === f.g && ff.t === 'h' && ff.v));

const brCount = 5;

const textFillerPlaceholder = `текст вопроса
первый вариант ответа
+второй (правильный вариант (где плюс))
третий варик
+четвёртый правильный

второй вопрос (каждый следующий через два переноса строки)
вар1
вар2
+вар3 right

.третий вопрос. если здесь один вариант ответа, но хочется, чтоб ответить возможно было несколькими, то вначале вопроса ставь точку
+вар1 правильный
вар2
вар3
вар4
`;

const settingsList =[
  {n: 'sq', t: 'сортировать вопросы?'},
  {n: 'sv', t: 'сортировать варики?'},
  {n: 'closed', t: 'закрыть опрос?'},
]

const fieldType = {
  none: None,
  r: Varianted,
  c: Varianted,
  //t: Text,
};

const translate = {
  none: 'скрыто',
  r: 'один вариант',
  c: 'несколько вариантов',
};

//ReactDOM.render(ce(App), document.querySelector(`.application`));

class Geometry extends React.Component {
  constructor() {
    super();
    applicanter.$listen('App.onApplicationRefresh:exb', 'exb-main-listener', async (event = {}) => {
      mylib.dconsl(123);
      this.forceUpdate();
    });
    
    this.state = {
      size: 500,
      kf: 1.5
    };
  }
  render() {
    return ce(
      'div',
      {
        style: {
          position: 'relative',
          width: px(this.state.size),
          height: px(this.state.size),
          border: 'solid 1px',
          boxSizing: 'border-box',
        }
      },
      ce('div',
        {
          
        },
        this.state.kf
      ),
      [
        [.001, .01, .1, .5],
        [.001, .01, .1, .5],
      ].map((nums, numsi) =>
        ce('div',
          {
            style: {
              display: 'inline-block',
              margin: '0 30px'
            }
          },
          nums.map(num => ce(
            'input',
            {
              type: 'button',
              style: {
                margin: px(10)
              },
              onClick: event => {
                event.preventDefault();
                mylib.dconsl(event.key);
                this.setState({kf: this.state.kf + (numsi || -1) * num});
              },
              value: (numsi || -1) * num
            }
          )))),
      [
        ['top', 'left'],
        ['bottom', 'right'],
      ].map(([vert, hor]) => ce(
        'div',
        {
          style: {
            position: 'absolute',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            border: 'solid 1px red',
            borderRadius: '50%',
            height: px(this.state.size / this.state.kf),
            width: px(this.state.size / this.state.kf),
            [vert]: 0,
            [hor]: 0,
          }
        }
      ))
    );
  }
}

window.applicanter.register('exb', ce(Geometry));
//window.applicanter.register('exb', ce(App));


}catch(e){alert(e.stack)}



