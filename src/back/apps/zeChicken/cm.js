"use strict";
try{

const ls_ = {
 albums: `cm_albums`,
 marks: `cm_marks`,
 settings: `cm_settings`,
 navigation: `cm_navigation`,
}

/****:100:****/
try{
window.SR = window[mylib.takePref(`SpeechRecognition`)] || window.SpeechRecognition;
if (window.SR) {
 const rec = new SR();
 
 var grammar = `#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige |
  bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia |
   ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender |
    lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid |
     peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal |
      thistle | tomato | turquoise | violet | white | yellow ;`
 var speechRecognitionList = new webkitSpeechGrammarList();
 speechRecognitionList.addFromString(grammar, 1);
 rec.grammars = speechRecognitionList;
 // rec.continuous = true;
 rec.lang = `ru-RU`;
 rec.interimResults = false;
 rec.maxAlternatives = 2;
 rec.onresult = event => {
  mylib.consl(event.results[0][0].transcript);
 }
 rec.onstart = ev => {
  
  
  setTimeout(()=>document.title = `START`, 200);
 }
 rec.onend = ev => {
  document.title = `stop`;
  rec.start();
 }
 // rec.start();
}
}catch(e){alert(e.stack)}

/****:100;****/

const g = {
 db: {},
 context: {},
 _: {
  savedExecsLsName: `savedExecs`,
  onErrorTarget: `chordsMaster_on_error_target`,
  make: {
   errorTarget: type => `${g._.onErrorTarget}:${ls_[type]}`
  }
 },
 init: {
  albums: {
   s: []
  },
  navigation: {
   phase: 2,
   2: 0,
   3: 0,
   v: 0
  },
  composit: {
   t: ``,
   c: ``
  },
  com: {
   n: ``, // name
   w: 0, // writed
   m: 0, // modified
   c: [], // chords
   t: [], // texts
   o: [], // order
  },
  settings: {
   navigation: {
    sortAlbums: `n`,
    sortSongs: `n`,
    sortAlbumsRev: false,
    sortSongsRev: false,
   },
   styleBoxes: {
    one: {
     chords: {},
     texts: {}
    },
    two: {
     chords: {},
     texts: {}
    },
    bridge: {
     chords: {},
     texts: {}
    },
   }
  }
 },
 partsRules: [],
 partRule: {
  clap: 0
 },
 sortFields: {
  sortAlbums: [`n`, `w`, `m`],
  sortSongs: [`n`, `w`, `m`]
 },
 blockedStyles: {
  chords: [`marginLeft`],
  texts: []
 },
 ss: newState => {
  if (mylib.isObj(newState)) {
   g.drop(`navigation`, newState);
   g.context.navigation.setState(newState);
   
   mylib.setLS(ls_.navigation, g.db.navigation);
  } else g.context.navigation.forceUpdate();
  return newState;
 },
 drop: (type, state) => {
  for(let news in state)
   g.db[type][news]= state[news];
 },
 Trim: txt => txt.replace(RegExp(`^${reg.ssimbol}+`), ``).replace(RegExp(`${reg.ssimbol}+$`), ``),
 BReplaceVariants: [{f: `B`, t: `H`}, {f: `B`, t: `A#`}, {f: `Bb`, t: `A#`}],
 isChordsIncludes: txt => txt.match(/[A-H][m#7]?/) != null,
 Phase: {
  Cats: 1,
  Cat: 2,
  Com: 3,/****:3:****/
  News: 4,
  Translations: 5,/****:3;****//****:50:****/
  Settings: 10,
  Editor: 11,
  Qwe: 12,
  Changes: 13,
  ChordCardEditor: 14,/****:50;****/
 },
 translate: {
  cols: {
   c: `Аккорды`,
   t: `Тексты`
  },
  phases: {/****:50:****/
   14: `Ред.Аккорд`,
   13: `Изменения`,
   12: `Предложения`,
   10: `Настройки`,
   11: `Редактор`,/****:50;****/
   1: `Категории`,
   2: `Содержание`,
   3: `Песня`,/****:3:****/
   4: `Обновления`,
   5: `Трансляции`,/****:3;****/
  },
  sortAlbums: `Сортировать Категории`,
  sortSongs: `Сортировать песни`,
  sortAlbumsRev: `Порядок сортировки Категорий`,
  sortSongsRev: `Порядок сортировки песен`,
  sortUp: `по убыванию`,
  sortDown: `по возрастанию`,
  n: `имя`,
  t: `текст`,
  c: `аккорды`,
  w: `дата создания`,
  m: `дата изменения`
 },
 reasons: {
  0: `Были изменения`,
  
  0.1: `Добавлен Аккорд "$1"`,
  0.11: `Аккорд "$1" был изменён`,
  
  1: `Добавлена новая Категория "$1"`,
  1.1: `Категория "$1" переименована на "$2"`,
  1.2: `Категория "$1" удалена`,
  1.3: `Установка времени модификаций Категории "$1"`,
  
  2: `К Категории "$2" прикреплена Песня "$1"`,
  2.1: `Песня "$1" переименована на "$2"`,
  2.2: `В Песне "$1" к $2-му тексту прикреплён $3-й блок аккордов`,
  2.3: `Установка времени модификаций Песни "$1"`,
  2.4: `Изменён набор аккордов в Песне "$1"`,
  2.5: `В Песне "$1" изменена тональность`,
  2.6: `Песня "$1" удалена`,
  2.7: `В Песне "$1" изменены $2 ($3-й блок)`,
  2.8: `В Песне "$1" добавлены $2`,
  2.9: `Изменился порядок отображения текстов в Песне "$1"`,
  2.01: `В Песне "$1" у $2-го блока изменён стиль отображения на $3`,
  2.11: `В Песню "$1" добавлен новый $2`,
  2.12: `Добавлена новая Песня`,
  2.13: `К Категории "$1" прикреплена новая Песня`,
  2.14: `К Категории "$1" прикреплена Песня "$2"`,
  2.15: `Песня "$2" откреплена от Категории "$1"`,
  2.16: `К Песне "$1" прикреплен mp3 трек`,
  
  4: `Инициализация Трекинга Песни "$1"`,
  4.1: `Изменение Трека в Песне "$1"`,
  
  10.1: `Изменён принцип сортировки`,
  10.2: `Изменён порядок сортировки`,
  10.3: `Добавлен новый стиль отображения блоков`,
  10.4: `Изменён параметр "$1" для блока $2 у стиля "$3"`,
 },
 withTrack: (coln = `Cat` || `Com`, end = []) => [`cols`, coln.toLowerCase() + `s`, [`w`, g.db.navigation[g.Phase[coln]]]].concat(end)
};

g.isPhase = function() {
 const currentPhase = g.db.navigation.phase;
 for (let i = 0; i < arguments.length; i++)
  if (arguments[i] === currentPhase) return true;
 return false;
}

mylib.loadAuth();

g.def = (val, def) => val == null ? def : val;

g.db.settings = @#["settings"];;
g.db.cols = @#["cols"];;

g.news = {};
g.chords = @#["chords"];;
/****:50:****/
g.db.admin = @#["admin"];;
/****:50;****/

const reg = {
 ssimbol: `[-.,?;:"'~\`!@#$/^&*()\\\][}{><|_%=+ \n]`
};

const momentType = '${Year}${Month}${Day}${Hour}${Minute}${Second}${Ms}';

const getMoment = (type, parseFunc, p1, p2) => {
 const dt = new Date();
 const date = {};
 date.Year = dt.getFullYear().toString();
 date.year = date.Year.substr(2);
 date.month = (dt.getMonth() + 1).toString();
 date.Month = date.month.padStart(2, `0`);
 date.day = dt.getDate().toString();
 date.Day = date.day.padStart(2, `0`);
 date.hour = dt.getHours().toString();
 date.Hour = date.hour.padStart(2, `0`);
 date.minute = dt.getMinutes().toString();
 date.Minute = date.minute.padStart(2, `0`);
 date.second = dt.getSeconds().toString();
 date.Second = date.second.padStart(2, `0`);
 date.ms = dt.getMilliseconds().toString();
 date.Ms = date.ms.padStart(3, `0`);
 
 let moment = (type || momentType).replace(/\$\{(\w+)\}/gi, (all, $1)=> date[$1] || all);
 return parseFunc ? parseFunc(moment, p1, p2) : moment;
}

g.momentNow = () => getMoment(null, parseInt, 10);
// (getMoment(`${Year}-${year}-${Month}-${month}-${Day}-${day}-${Hour}-${hour}-${Minute}-${minute}-${Second}-${second}-${ms}-${Ms}'));

g.db.navigation = mylib.getLS(ls_.navigation) || g.init.navigation || {};
g.marks = mylib.getLS(ls_.marks) || {s: []};

g.sync = {
 mtime: 0,
 ts: g.db.navigation.ts || 0
};

mylib.execSync(() => g.sync, r => {
 /****:100:****///mylib.consl(r);/****:100;****/
 g.sync.mtime = r.mtime || 0;
 if (r.value && r.value.length) {
  g.sync.ts = r.ts;
  g.news.execs = g.news.execs || [];
  r.value.forEach(exec => (/****:0-40:****/[1, 2, 1.1, 1.2, 2.1, 2.6].indexOf(exec.reason[0]) > -1 && /****:0-40;****/!g.news.execs.some(ex => ex.ts === exec.ts)) && g.news.execs.push(exec))
  /****:100:****/// mylib.applyExecs(r.value, g.db);/****:100;****/
  g.context.navigation.fu();
 }
 g.db.navigation.ts = r.ts;
 mylib.setLS(ls_.navigation, g.db.navigation);
 // setTimeout(() => { g.sync.ping(); }, 2000);
});

/****:50:****/
let errors = [];
let warnings = [];

try {
const notRuLetter = `[^а-яА-ЯёЁ]`;
const r = (r, f) => RegExp(`(?<b>^|${notRuLetter})(?<t>${r})(?<a>${notRuLetter}|$)`, f || `g`);

errors = [
 r(`ии?сус([ауе]|ом)?`),
 r(`господ([ауьи]|ом|нем?)`),
 r(`спасител([юяье]|ем)`),
 r(`христ([еау]|о[мвс])`),
 r(`саваофа?`),
 r(`бог([еау]|ом)?`)
];

warnings = [
 r(`ты`),
 r(`тобо[йю]`),
 r(`теб[яе]`),
 r(`его`),
 r(`он`),
 r(`н([её]м|его)`),
 r(`([тс]во|мо)([ийеёюя]|его|ими?|их|ей)`),
 r(`цар([ья]|[её]м)`),
 r(`(сын|дух)([ауе]|ом)`),
 r(`свят([ыо]й|[ао]го)`),
 r(`меня`)
];
} catch (e) {
 warnings = errors = [];
}
/****:50;****/


g.tag = {
 styleBox: document.querySelector(`#settings-style`)
}

const prefix= {
 styleBox: `style-box-`
}
const getStyleBoxSheet = () => {
 try {
 let styleText= ``;
 Object.keys(g.db.settings.styleBoxes || {})
  .forEach(styleBoxName => {
   let styleBox = g.db.settings.styleBoxes[styleBoxName];
   Object.keys(styleBox).forEach(boxPart => {
    styleText += `.${prefix.styleBox}${styleBoxName}-${boxPart}{`;
    Object.keys(styleBox[boxPart]).forEach(partUnit=> styleText+= partUnit.replace(/([A-Z])/g, `-$1`)+`:`+styleBox[boxPart][partUnit]+`;`);
    styleText += `}`;
   });
  });
 return styleText;
 } catch(e) {alert(e.stack);}
}
const drawStyles = styleBox => {
 (styleBox || g.tag.styleBox).innerText = getStyleBoxSheet();
}

drawStyles();

const styles= {
 fontStyle: {
  label: `I`,
  type: `cb`,
  true: `italic`,
  false: `normal`
 },
 fontWeight: {
  label: `B`,
  type: `cb`,
  true: `bold`,
  false: `normal`
 },
 textDecoration: {
  label: `U`,
  type: `cb`,
  true: `underline`,
  false: `normal`
 },
 fontSize: {
  label: `fontSize:`,
  type: `group`,
  variants: {
   S: `.5em`,
   M: `.7em`,
   N: `1em`,
  // L: `1.2em`
  },
  false: `1em`
 },
 marginLeft: {
  label: `fontSize:`,
  type: `group`,
  variants: {
   Z: `0`,
   S: `.5em`,
   M: `1em`,
   L: `1.5em`
  },
  false: `0`
 }
};

const ce = React.createElement;

g.current = (coln = `Cat`, state = {}) => {
 const col = g.db.cols[coln.toLowerCase()+`s`].find(c => c.w === g.db.navigation[g.Phase[coln]]);
 for(const s in state) col[s] = state[s];
 return col;
}

g.sort = coln => g.sortObjectBy(g.db.cols[coln.toLowerCase()], g.db.settings.navigation.sortAlbums || `w`, g.db.settings.navigation.sortAlbumsRev || false);

g.sortObjectBy = (o, by, rev)=> {
 o.sort((a, b)=> {
  const sa = typeof a[by] === `string` ? a[by].replace(/[^a-zа-я]/ig, ``).toLowerCase() : a[by];
  const sb = typeof b[by] === `string` ? b[by].replace(/[^a-zа-я]/ig, ``).toLowerCase() : b[by];
  
  return sa < sb ? 1 : sa > sb ? -1 : a.n < b.n ? -1 : a.n > b.n ? 1 : 0
 });
 return rev ? o.reverse() : o;
}


////// Interfaces:

class IOrder {
 constructor(obj = {}) {
  this.t = g.def(obj.t, -1);
  this.c = g.def(obj.c, -1);
  this.cp = g.def(obj.cp, []);
  this.sb = g.def(obj.sb, 'one');
  this.in1 = g.def(obj.in1, false);
 }
}

class ICom {
 constructor(obj = {}, isNew = false) {
  const now = g.momentNow();
  
  this.n = g.def(obj.n, '?');
  this.w = g.def(obj.w, now);
  this.m = g.def(obj.m, now);
  this.c = g.def(obj.c, []);
  this.t = g.def(obj.t, []);
  this.o = g.def(obj.o, []);
  
  if (isNew) {
   const {n, w, m, c, t, o} = this;
   
   mylib.setExecs([{
    track: [`cols`, `coms`],
    value: {n, w, m, c, t, o},
    method: `push`,
    reason: [2.12],
   }]);
  }
 }
 
 add(fieldn, value) {
  
  if (!mylib.isArr(value)) value = [value];
  
   this[fieldn] = this[fieldn].concat(value);
   
   mylib.setExecs([{
    track: [`cols`, `coms`, ['w', '==', this.w], fieldn],
    value: value,
    method: `concat`,
    reason: fieldn === 'o' ? [2.9, this.n] : [2.11, this.n, fieldn === 't' ? 'Текстовые блоки' : 'блоки Аккордов'],
   }]);
  
  return this;
 }
 
 change(fieldn, value) {
  mylib.setExecs([{
   track: [`cols`, `coms`, ['w', '==', this.w], fieldn],
   prev: this[fieldn],
   value,
   method: `set`,
   reason: [[2.1, this[fieldn], value], [2.3]][['n', 'm'].indexOf(fieldn)] || [0],
  }]);
  
  this[fieldn] = value;
  
  return this;
 }
}




g.db.cols.coms = g.db.cols.coms.map(com => new ICom(com));



///// Components:


class Cats extends React.Component {
 constructor() {
  super();
  g.context.albums = this;
  this.state = {};
 }
 render() {
  try {
  const cats = g.db.cols.cats;
  const struct = cats.filter(cat => RegExp(this.state.searchText || ``, `i`).test(cat.n));
  
  return ce(
   `div`,
   {},/****:50:****/
   ce(`button`,
    {
     key: `new-cat-button`,
     className: `mbtn mbtn-ok mblock btn`,
     disabled: g.checkNameExist(`Cat`, this.state.searchText || ``),
     onClick: event => {
      let n = event.target.nextSibling.value.replace(/[^-a-zа-яё_\n ]+/gi, ``);
      if (/^.{0,1}$/.test(n)) {
       prompt(`"${n}" - Не верное название для Категории!\n\nОно должно содержать только буквы, тире и символы подчёркивания! И состоять минимум из двух символов.`)
       return;
      }
      const now = g.momentNow();
      const newCat = {n, s: [], w: now, m: now};
      
      cats.push(newCat);
      
      mylib.setExecs([{
       track: [`cols`, `cats`],
       value: Object.assign({}, newCat),
       method: `push`,
       reason: [1, n]
      }]);
      g.ss({
       phase: g.Phase.Cat,
       [g.Phase.Cat]: now
      });
      event.target.nextSibling.value = ``;
     },
    },
    `Новая Категория: `
   ),
   ce(`input`,
    {
     key: `cat-filter-input`,
     type: `text`,
     className: `minput-ok minput mblock filter-input btn`,
     onInput: event => {
      let searchText = convertForRegExp(event.target.value);
      this.setState({searchText});
     }
    }
   ),/****:50;****/
   struct.map((cat, cati) => {
    return cat == null ?
     null :
      ce(`button`, 
       {
        key: `cat-face-button-${cati}`,
        id: cat.w,
        className: `mbtn mblock mupper mbtn-ok btn btn-default`,
        style: {
         backgroundColor: cat.removed ? `red` : ``
        },
        onClick: event => {
         mylib.loc({
          cat: cat.w
         });
         g.ss({
          phase: g.Phase.Cat,
          [g.Phase.Cat]: cat.w
         })
        }
       },
       ce(`span`, {key: `${cati}-cat-name`}, cat.n),
      )
     
    })
  );
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}

const convertForRegExp = text => text[0] === `%` ? text.substr(1) : text.replace(/([?*$^/.\\][{}()])/g, `\\$1`);
g.breakWorgRegExp = beg => `(?:${beg}|[^а-яёіїєґ])`;

class Cat extends React.Component {
 constructor(props) {
  super();
  g.context.cat = this;
  this.state = props.ccat;
 }
 search(event) {
  const target = event.target || event;
  this.setState({
   searchText: convertForRegExp(target.value),/****:3:****/
   equalField: this.searchField.value,/****:3;****/
  });
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  try {
  const ccat = this.props.ccat;
  const ccom = this.props.ccom;
  let searchText = this.state.searchText || ``;
  let struct = g.sort(`Coms`).filter(com => !ccat.w ? true : ~ccat.s.indexOf(com.w));
  
  if (searchText) {
   const equalField = this.state.equalField || `n`;
   
   const searchBits = searchText
    .replace(/ {1,}/g, `  `)
    .replace(/[-,_]+/g, `  `)
    // .replace(/(?: |^)([а-яё]{1,2})(?: |$)/gi, ` (\\s|^)$1(\\s|$) `)
    .replace(/[её]/gi, `[её]`)
    .replace(/[ыіi]/gi, `[ыі]`)
    .replace(/[ъїi]/gi, `[ъї]`)
    .replace(/[эє]/gi, `[эє]`)
    .replace(/[гґ]/gi, `[гґ]`)
    .replace(/ {2,}/g, ` `)
    .trim().split(/ +/);
   
   searchText = searchBits.reduce((text, word) => `${text}|${word.replace(/\[.+?]/g, `#`).length > 2 ? word : `${g.breakWorgRegExp(`^`)}${word}${g.breakWorgRegExp(`$`)}`}`.trim().toLowerCase(), ``).slice(1);
   
   let regSearchText;
   let regTranslatedSearchText;
   let translatedSearchText = searchText.toLowerCase().replace(/./gi, l => lettersTranslator[l] || l);
   const beatsLen = mylib.unique(searchBits).length;
   const regSimbols = /([()[\]{}?.*^$+/])/g;
   
   try {
    regSearchText = RegExp(searchText, `gi`);
   } catch(e) {
    regSearchText = RegExp(searchText.replace(regSimbols, `\\$1`), `gi`);
   }
   try {
    regTranslatedSearchText = RegExp(translatedSearchText, `gi`);
   } catch(e) {
    regTranslatedSearchText = RegExp(translatedSearchText.replace(regSimbols, `\\$1`), `gi`);
   }
  
   struct = struct
    .map((com, comi, coma) => {
     const field = com[equalField];
     
     return !searchText.trim() || (/^\d+$/.test(searchText)
      && (comi + 1).toString().startsWith(searchText)) ? com : mylib.isStr(field) ?
      mylib.unique(field.match(regSearchText) || []).length >= beatsLen || mylib.unique(field.match(regTranslatedSearchText) || []).length >= beatsLen ? com : null :
        mylib.isArr(field) ?
         field.some(bit => mylib.unique(bit.match(regSearchText) || []).length === beatsLen || mylib.unique(bit.match(regTranslatedSearchText) || []).length === beatsLen) ? com : null :
          com;
    });
  }
  return !ccat ? null : ce(`div`, {},
   [
    ce(`h2`, /****:50:{}****/
     {
      style: {
       backgroundColor: ccat.removed ? `red` : ``
      },
      className: `pointer mupper`,
      onClick: event => {
       let n;
       if (n = prompt(`Переименовать "${ccat.n}" на :`, ccat.n)) {
        const name = n.toLowerCase().replace(/[^а-яё -]/g, ``);
        const fcat = g.db.cols.cats.find(cat => cat.n.toLowerCase().replace(/[^а-яё -]/g, ``) === name);
        if (fcat && fcat.w !== ccat.w && !alert(`Одна из Категорий уже имеет такое название. Не гоже!`)) return;
        
        mylib.setExecs([{
         track: g.withTrack(`Cat`, [`n`]),
         prev: ccat.n,
         value: n,
         method: `set`,
         reason: [1.1, ccat.n, n]
        }]);
        if (ccat.w)
         mylib.setExecs([{
          track: g.withTrack(`Cat`, [`m`]),
          prev: ccat.m,
          value: g.momentNow(),
          method: `set`,
          reason: [1.3, ccat.n]
         }]);
        
        ccat.n = n;
        g.ss();
        this.setState({n});
       }
      }
     }/****:50;****/, ccat.n),
    /****:70:****/
    ce(`button`,
     {
      className: `mbtn mbtn-no`,
      onClick: e => {
       if (confirm(`Удалить "${ccat.n}"${ccat.s.length > 0 ? `. К ней относятся некоторые Композиции! ` : ``}?`)) {
        ccat.removed = true;
        mylib.setExecs([{
         track: [`cols`, `cats`],
         value: [`w`, ccat.w],
         method: `removeBy`,
         reason: [1.2, ccat.n]
        }]);
        g.ss();
       }
      }
     },
     `Удалить "${ccat.n}"`
    ),/****:70;****/
    ce(`div`, {className: `btn-group`}, [
     /****:50:****/
     ce(`button`,
      {
       className: `mbtn btn`,
       disabled: !this.state.searchText, // g.checkNameExist(`Com`, this.state.searchText || ``),
       onClick: event => {
        const com = new ICom({n: this.searchInput.value}, true);
        
        g.db.cols.coms.push(com);
        g.ss({
         phase: g.Phase.Editor,
         [g.Phase.Com]: com.w
        });
       },
      },
      `Новая ${g.translate.phases[g.Phase.Com]}: `
     ),/****:50;****//****:3:****/
     ce(`select`,
      {
       ref: el => el && (this.searchField = el),
       className: `minput minput-ok mblock btn`,
       defaultValue: `n`,
       onChange: event => this.search(event.target.previousSibling)
      },
      [`n`, `t`, `c`, `w`, `m`].map(label => ce(`option`, {key: `sort-by-option-${label}`, value: label}, g.translate[label]))
     ),/****:3;****/
     ce(`input`,
      {
       type: `text`,
       className: `filter-input minput minput-ok mblock`,
       onInput: event => this.search(event),
       ref: el => el && (this.searchInput = el),
      }
     ),
    ]
   ),
    ce(`div`, {
     className: `component-list`
    },
    struct.map((com, comi) =>
     com == null
      ? null
      : ce(`div`, {key: `com-face-${com.w}`},
       ce(`button`, 
        {
         key: `com-face-button-${com.w}`,
         id: com.w,
         className: `mbtn mbtn-ok mblock btn`,
         onClick: event=> {
          mylib.loc({
           com: com.w,
           cat: ccat.w
          });
          g.ss({
           phase: g.Phase.Com,
           [g.Phase.Com]: com.w
          });
         },
         style: {
          backgroundColor: com.removed ? `red` : ``,
         }
        },
        ce(`span`, {}, `${comi + 1}. ${com.n}`)
       ))
     )
    )
   ].filter((part, parti) => ccat.removed ? parti === 0 : true)
  );
  } catch (e) {
   alert(e.stack);
  }
 }
}

g.tryExistance = () => {
 const coms = g.db.cols.coms;
 const cats = g.db.cols.cats;
 
 const nav = g.db.navigation;
 const pcat = g.Phase.Cat;
 const pcom = g.Phase.Com;
 
 const catw = nav[pcat];
 const comw = nav[pcom];
 
 if (!cats.some(cat => cat.w === catw)) {
  nav[pcat] = 0;
  nav[pcom] = 0;
  if (g.isPhase(pcom, pcat)) nav.phase = g.Phase.Cats;
 } else if (!coms.some(com => com.w === comw)) {
  nav[pcom] = 0;
  if (g.isPhase(pcom)) nav.phase = pcat;
 }
}

let jumpFields = obj => {
 let ret = mylib.isArr(obj) ? [] : {};
 for(let o in obj)
  if(typeof obj[o] === `object`) ret[o] = jumpFields(obj[o]);
  else ret[o] = obj[o];
 return ret;
}

let getPreviousChordPoss = (order, currentPos, section) => {
 for(let i=currentPos-1; i>=0; i--)
  if(mylib.isArr(order[i].cp) && g.currentSong().t[order[i].o].s === section) return order[i].cp;
 return [];
}

const replaceDashes = text => text.replace(/((?!=\\)_+)/g, `<i class="transparent-text">$1</i>`);

mylib.makeCssPrefs();

class ComCtrlPannel extends React.Component {
 constructor() {
  super();
 }
 render() {
  const ccom = this.props.ccom;
  const ccat = this.props.ccat;
  const coms = g.sort(`Coms`).filter(com => !ccat.w ? true : ~ccat.s.indexOf(com.w));
  const ccomi = coms.findIndex(s => s.w === ccom.w);
  const nav = g.db.navigation;
 
  return ce(`div`,
   {className: `chord-ctrl`},
   
   ce(`button`, {
    className: `mbtn msm btn btn-sm btn-${!g.marks.s.some(comw => comw === ccom.w) ? `secondary` : `success mbtn-ok`} song-number`,
    onClick: ev => {
    
     const index = g.marks.s.findIndex(comw => ccom.w === comw);
     if (!~index) g.marks.s.push(ccom.w);
     else g.marks.s.splice(index, 1);
     g.marks.s = g.marks.s.filter(w => w);
     mylib.setLS(ls_.marks, g.marks);
     
     g.ss();
    }
   }, `#${ccomi - -1}`),
   ce(`div`, {className: `mgroup btn-group chord-binding`},
    [`нет`, `мин`, `макс`].map((label, v) =>
     ce(`button`,
      {
       key: `navigation-v-${v}`,
       className: `mbtn msm mbtn-ok btn btn-sm btn-secondary ${nav.v === v ? `mactive active` : ``}`,
       onClick: event => {
        g.ss({v});/****:50:****/
        if (g.isPhase(g.Phase.Editor)) g.context.editor.fu(); else/****:50;****/
        this.fu();
       }
      },
      label
     )
    )
   ),
   ce(
    `div`,
    {
     className: `mgroup btn-group transport`
    },
    [`-`, `+`].map(sign =>
     ce(`button`,
      {
       key: `transport-${sign}`,
       className: `mbtn mbtn-ok msm btn btn-sm btn-warning`,
       disabled: !nav.v,
       onClick: event => {
        try{
        const tl = g.chordsTranspnationLine;
        const prev = ccom.c;
        const c = prev.map(chBlock => chBlock.replace(/[CDEFGAH]#?/g, f => tl[tl.indexOf(f) - (sign === `+` ? -1 : 1)] || tl[tl.lastIndexOf(f) - 1]));
        /****:50:****/
        if (g.isPhase(g.Phase.Editor)) {
         mylib.setExecs([{
          track: g.withTrack(`Com`, [`c`]),
          prev,
          value: c,
          method: `set`,
          reason: [2.5, ccom.n]
         }, {
          track: g.withTrack(`Com`, [`m`]),
          prev: null,
          value: g.momentNow(),
          method: `set`,
          reason: [2.3, ccom.n]
         }]);
         g.ss();
         g.context.editor.setState({c});
        }/****:50;****/
        ccom.c = c;
        g.ss();
        }catch(e){ra(e.stack);}
       }
      },
      sign
     )
    )
   ),
  );
 }
}

class Com extends React.Component {
 constructor(props) {
  super();
  g.context.Com = this;
  
  this.largeInterval = 100000000000;
  document.addEventListener(mylib.takePref(`fullscreenchange`, true), () => {
   const isFull = this.state.onFullScreen;
   isFull && (this.currentPartBox.style.fontSize = `initial`);
   this.setState({onFullScreen: !isFull});
  });
  this.fronts = [1, 2, 3, 4, 5];
  this.isChordsImagineBlockOpened = false;
  this.state = {currTracei: 0, currFront: 2};
  
  // this.state.k && (this.state.k.f = this.state.k.f == null ? 1 : this.state.k.f);
 }
 fu() {
  this.forceUpdate();
 }
 updateInterval() {
  const k = this.props.ccom.k;
  k.i = k.i || 1500;
  k.i = Date.now() - (k.i < this.largeInterval ? 0 : k.i);
  delete this.props.ccom.k.p;
  
  if (k.i < this.largeInterval && g.isPhase(g.Phase.Editor)) this.setKara();
  
  this.setState({k});
 }
 
 setKara(before) {
  before && before();
  g.ss();
  this.fu();/****:50:****/
  
  if (!g.isPhase(g.Phase.Editor)) return;
  mylib.setExecs([{
   track: g.withTrack(`Com`, [`k`]),
   prev: null,
   value: Object.assign({}, this.props.ccom.k),
   method: `set`,
   reason: [4.1, this.props.ccom.n]
  }]);
  mylib.setExecs([{
   track: g.withTrack(`Com`, [`m`]),
   prev: null,
   value: g.momentNow(),
   method: `set`,
   reason: [2.3, this.props.ccom.n]
  }]);
  /****:50;****/
 }
 
 insertKaraTrace(trace) {
  if (this.currentKaraTimeout || (this.props.ccom.currTracei === 0 && this.props.ccom.k && this.props.ccom.k.t.length > 1 && !confirm(`Курсор установлен в начало. Продолжить?`))) return;
  if (this.props.ccom.k == null) this.props.ccom.k = {t: [], i: 1500, f: 1};
  const currTracei = this.state.currTracei;
  this.props.ccom.k.t.splice(currTracei - -1, 0, trace);
  this.setState({k: this.props.ccom.k, currTracei: currTracei - -1});
  
  this.setKara();/****:50:****/
  setTimeout(() => {
   const node = this.karaTrack.childNodes[currTracei - -1] || this.karaTrack.childNodes[currTracei];
   if (node) this.karaTrack.scrollLeft = node.offsetLeft - this.karaTrack.clientWidth / 2 + node.clientWidth * .3;
  }, this.karaTrack && this.karaTrack.childNodes.length ? 0 : 300);/****:50;****/
  
 }
 resizePart(isCurrentPart, el) {
  const resize = () => {
   if (document.body.clientWidth > el.clientWidth + document.body.clientWidth * .25) {
    el.style.fontSize = `${(parseInt((el.style.fontSize || `12`), 10) || 12) + 1}px`;
    resize();
   }
  };
  if (el) {
   if (isCurrentPart) {
    this.currentPartBox = el;
    if (this.state.onFullScreen) resize();
   } else if (!this.state.onFullScreen) el.style.fontSize = `initial`;
  }
 }
 fullscreenToggle() {
  if (this.state.onFullScreen) document[mylib.takePref(`ExitFullscreen`)]();
  else g.appBox[mylib.takePref(`RequestFullscreen`)]();
 }
 isTraced(bi, li, ii) {
  return this.props.spec === 0 || !this.props.ccom.k
   ? false
   : this.props.spec === 2 && this.props.ccom.k.t.some(t => t[0] === bi && t[1] === li && t[2] === ii);
 }
 
 isCurrTrace(bi, li, ii) {
  const isChords = this.props.spec === 1;
  const isEditor = g.isPhase(g.Phase.Editor);
  
  if ((isChords && isEditor) || (!isEditor && !this.currentKaraTimeout) || !this.props.ccom.k || this.isThereCurrTrace) return false;
  const currTracei = this.state.currTracei;
  const currTrace = this.props.ccom.k.t[currTracei];
  ///return this.isThereCurrTrace = currTrace != null && currTrace[0] === bi && currTrace[1] === li && currTrace[2] === ii;
 }
 
 scrollKaraTo(index) {
  const node = this.karaTrack.childNodes[index];
  this.karaTrack.scrollLeft = (node.offsetLeft - this.karaTrack.clientWidth / 2) + .3 * node.clientWidth;
 }
 
 resetTrace() {
  this.setState({currTracei: 0, currIndex: 0});/****:50:****/
  if (g.isPhase(g.Phase.Editor)) this.scrollKaraTo(0);/****:50;****/
 }
 
 stopKaraTimeout(inZero) {
  clearTimeout(this.currentKaraTimeout);
  delete this.currentKaraTimeout;
  if (inZero) this.resetTrace();
  else this.fu();
 }
 
 karaPlay() {
  if (this.currentKaraTimeout) {
   this.stopKaraTimeout();
  } else {
   const isThereNotLongTrack = !this.longTrack;
   const track = this.props.ccom.k.t;
   let longTrack = [];
   track.forEach((trace, tracei) => {
    const takeInners = (itrace, len, isSetPar = true) => {
     // 2 - ожидание набора; 1 - набор; 0 - конец набора: отбрасывание кандидатов;
     let untilPhase = 2;
     
     const innerTrack = track.map((tr, tri) =>
      (tr.length === len &&
       (tr[0] === itrace[0] && tr[1] === itrace[1]) &&
        (untilPhase !== 0 && (untilPhase = 1))) ||
      (untilPhase === 1 && (untilPhase = 0))
      ? [tri] : null)
      .filter(tr => tr != null);
     
     if (isSetPar) innerTrack[0] = innerTrack[0].concat([tracei]);
     return innerTrack;
    };
    
    if (trace.length === 3) {
     longTrack.push([tracei, tracei]);
    } else if (trace.length === 2) {
     longTrack = longTrack.concat(takeInners(trace, 3));
    } else {
     let untilPhase = true;
     let isFirst = true;
     
     const innerTrack = track.map((tr, tri) =>
      (tr.length > 1 && (tr[0] === trace[0]) && (untilPhase !== 0 && (untilPhase = 1)))
      || (untilPhase === 1 && (untilPhase = 0))
       ? tr.length === 3
        ? isFirst && !(isFirst = false)
         ? [tri, tracei]
         : [tri]
        : takeInners(tr, 3, false)
       : null);
     
     innerTrack.forEach((itr, itri) => {
      if (itr == null) return;
      if (mylib.isNum(itr[0])) longTrack.push(itr);
      else itr.forEach(tr => longTrack.push(tr));
     });
    }
   });
   
   let indx = 0;
   const index = this.state.currIndex == null ? this.state.currTracei : this.state.currIndex;
   let currIndex = isThereNotLongTrack ? longTrack.findIndex(ltrace => ltrace.length === 2 && index === indx++) : index;
   const pick = () => {
    const isLargeInterval = this.props.ccom.k.i > this.largeInterval;
    this.currentKaraTimeout = setTimeout(() => {
     const currLongTrace = longTrack[currIndex];
     /****:50:****/
     const two = currLongTrace.length === 2;
     if (two && this.props.spec === 2) this.scrollKaraTo(currLongTrace[1]);/****:50;****/
     this.setState({currTracei: currLongTrace[0], currFlag: two ? currLongTrace[1] : this.state.currFlag, currIndex: currIndex});
     if (!isLargeInterval) currIndex++;
     pick();
     if (longTrack.length === currIndex) this.stopKaraTimeout(true);
    }, isLargeInterval ? 10 : this.props.ccom.k.i);
   };
   this.longTrack = longTrack;
   pick();
  }
 }
 
 render() {
  try {
  const ccom = this.props.ccom;
  if (ccom == null) return ce('div', {}, 'Песня не выбрана');
  
  const spec = g.def(this.props.spec, 1);/****:50:****/
  const editorPhase = g.isPhase(g.Phase.Editor);/****:50;****/
  const prefxs = [`chord`, `kara`];
  const keyPrefix = prefxs[spec - 1];
  const usedChords = {};
  const ccat = this.props.ccat;
  
  const nav = g.db.navigation;
  
  this.isThereCurrTrace = false;
  
  return ce(`div`,
   {},
   [
    ce(`div`, {
     className: `song-ctrl-pannel ${this.state.isShowKaraPannel ? `show` : ``}`
    }, [
    spec !== 2 ? ce(ComCtrlPannel, {ccom, ccat}) : null,/****:50:****/
    nav.phase === g.Phase.Editor
    ? null
    : ce(
     'button',
     {
      className: 'mbtn mbtn-ok msm',
      onClick: e => {
       bufferList.register(ccom.w);
       g.ss({phase: g.Phase.Editor});
      },
     },
     'R'
    ),/****:50;****//****:999:****//****:3:****/
    ccom.k
     ? ce(`div`,
       {
        className: `kara-ctrl`
       },
       [
        ce(
         `div`,
         {
          className: `btn-group kara-pannel`
         },
         [
          ce(`button`, {
            className: `btn btn-sm btn-${this.currentKaraTimeout ? `success` : `secondary`}`,
            onClick: ev => this.karaPlay()
           }, this.currentKaraTimeout ? `стоп` : `старт`),
           ce(`button`, {
            className: `btn btn-sm btn-${this.state.currTracei === 0 ? `success` : `secondary`}`,
            disabled: this.currentKaraTimeout,
            onClick: ev => this.resetTrace()
           }, `начало`),
           null && ce(`button`, {
            className: `btn btn-sm btn-warning`,
            disabled: ccom.k.f < 1,
            onClick: ev => this.setKara(() => ccom.k.f--)
           }, ccom.k.f - 1),
           null && ce(`button`, {
            className: `btn btn-sm btn-warning`,
            disabled: ccom.k.f > 9,
            onClick: ev => this.setKara(() => ccom.k.f++)
           }, ccom.k.f - -1),
           ce(`button`, {
            className: `btn btn-sm btn-${ccom.k.i < this.largeInterval ? `secondary` : `success`}`,
            onClick: ev => this.updateInterval()
           }, ccom.k.i < this.largeInterval ? ccom.k.i : `####`),
           null && ce(`button`, {
            className: `btn btn-sm btn-${this.state.onFullScreen ? `success` : `secondary`}`,
            disabled: false,
            onClick: ev => this.fullscreenToggle()
           }, `весь`),
         ]
        ),/****:50:****/
        spec === 2 
         ? ce(`div`, {
          className: `kara-track-wrapper${this.currentKaraTimeout ? ` shadowed` : ``}`
         },
         [
          ce(`div`, {
           className: `kara-track`,
           ref: el => !this.karaTrack && (this.karaTrack = el),
           onScroll: event => {
            if (this.currentKaraTimeout) return;
            const target = event.target;
            const parent = target.parentNode;
            const halfw = parent.clientWidth / 2;
            const sleft = target.scrollLeft;
            let trace;
            let prev;
            
            target.childNodes.forEach((node, nodei) => {
             const center = sleft + halfw;
             const left = node.offsetLeft;
             const right = left + node.clientWidth;
             const id = `${prefxs[1]}_${ccom.k.t[nodei].join(`.`)}`;
             
             if (!trace && center > left && center < right) {
              let currIndex = nodei;
              let indx = 0;
              if (this.longTrack) {
               currIndex = this.longTrack.findIndex(ltrace => ltrace.length === 2 && nodei === indx++);
              }
              this.setState({currTracei: nodei, currIndex});
             }
            });
            
           }
          },
          ccom.k.t
           .map((track, tracki) =>
            ce(`button`, {
             key: `kara-track-unit-${track.join(`-`)}-${tracki}`,
             className: `btn btn-sm btn-${[`primary`, `warning`, `success`][track.length - 1]}`,
             onClick: ev => {
              if (this.currentKaraTimeout) return;
              ccom.k.t.splice(tracki, 1);
              this.setState({k: ccom.k});
              g.ss();
             }
            },
            track.join(`.`)))),
          ce(`div`, {className: `center-fig`})
         ]) : null,/****:50;****/
       ]) : null/****:3;****//****:999;****/
      ]),
    ccom.o && ccom.o.length ?
     ccom.o.map((theOrder, theOrderi) => {
      
      let cp;
      
      let orderUnit = ccom.o[theOrderi];
      
      if (mylib.isNum(orderUnit)) orderUnit = ccom.o.find(ou => ou.t === orderUnit);
      
      const chordsLines = (ccom.c[orderUnit.c] || ``).split(/\s*\n+\s*/);
      const styleBoxName = orderUnit.sb;
      const textsStyle = g.db.settings.styleBoxes[styleBoxName]|| {};
      
      let textOnRepeat = ``;
      let lastIndexes = [];
      let text = ccom.t[orderUnit.t] || ``;
      let chordsPositions = cp = orderUnit.cp;
      
      if(!chordsPositions && orderUnit.c > -1)
       chordsPositions = cp = orderUnit.cp = [];
      
      
      const nextTrace = this.longTrack && this.longTrack[this.state.currIndex - -this.fronts[ccom.k.f]];
      
      const isCurrentPart = nextTrace ? (ccom.k.t[nextTrace[0]] || [-1])[0] === theOrderi : !theOrderi;
      const isWithChords = orderUnit.c - -1 && (nav.v === 2 || (nav.v === 1 && theOrder.in1));
      
      return [
       ce(`div`, {
        className: `song-part-wrapper${isCurrentPart ? ` current` : ``}`,
        onClick: ev => {
         this.setState({isShowKaraPannel: !this.state.isShowKaraPannel});
        }
       },
       this.state.onFullScreen && ((!nextTrace || this.state.currIndex === 0) || (this.state.currFlag === 0 && nav.v === 0 && ccom.k.t[0].length < 3)) ? ce(`b`, {className: `song-part`, ref: el => this.resizePart(isCurrentPart, el)}, ccom.n) : 
       ce(`div`, {
         className: `song-part ${isWithChords ? `` : `without-chords`} ${prefix.styleBox+styleBoxName}-texts`,/****:999:****/
         ref: el => this.resizePart(isCurrentPart, el),/****:999;****/
        },
        isWithChords
        ? [/****:50:****/
          spec === 2 ? ce(`button`, {
           className: `btn btn-primary kara-block-adder${this.isCurrTrace(theOrderi) ? ` current-trace` : ``}${this.currentKaraTimeout ? ` shadowed` : ``}`,
           onClick: ev => this.insertKaraTrace([theOrderi])
          }, `#`) : null,/****:50;****/
          text.split(/\s*\n+\s*/).map((textLine, textLinei, a) => {
           let chordsLabels = (chordsLines[textLinei]|| ``).replace(/A#/g, `B`).split(/ +/).map(chordSchema => {chordSchema.split(/[^#A-Z0-9/]+/i).forEach(c => usedChords[c] = ``);return chordSchema;});
           let chordIndex = 0;
           let originPositions = chordsPositions[textLinei] || [];
           let linePoss = (originPositions.length > 0 ? jumpFields(originPositions) : lastIndexes.length > 0 ? jumpFields(lastIndexes) : []).sort((a, b) => a - b);
           let letters = [];
           let countChordeds = originPositions.length;
           let maxCountChordeds = chordsLabels.length;
           let preLineChord = linePoss.indexOf(-1) > -1;
           let postLineChord = linePoss.indexOf(-2) > -1;
           let firstCutLineIndex = 2 - (preLineChord ? 1 : 0) - (postLineChord ? 1 : 0);
           let cutLine = linePoss.slice(firstCutLineIndex);
           let nextTextIndex = 0;
           
           lastIndexes = [];
           for(let i=0; i < linePoss.length; i++) lastIndexes[i] = linePoss[i];
           
           /****:50:****/
           const checkAndSave = spec === 1 ? (bi, li, ii, and) => {
            if (!cp[li]) linePoss = [];
            
            and();
            linePoss.sort((a, b) => a - b);
            const prevO = JSON.parse(JSON.stringify(ccom.o));
            
            if (linePoss.length === 0) delete cp[li];
            else cp[li] = linePoss;
            
            linePoss.sort((a, b) => a - b)
            
            mylib.setExecs([{
             track: g.withTrack(`Com`, [`o`]),
             prev: prevO,
             value: ccom.o.slice(0),
             method: `set`,
             reason: [2.9, ccom.n]
            }, {
             track: g.withTrack(`Com`, [`m`]),
             prev: null,
             value: g.momentNow(),
             method: `set`,
             reason: [2.3, ccom.n]
            }]);
            g.ss();
            this.setState({o: ccom.o});
           } : spec === 2 ? (bi, li, ii, and) => this.insertKaraTrace([bi, li, ii]) : f=>f;
           /****:50;****/
           
           return ce(`div`, {key: `song-line-${theOrderi}-${textLinei}`},
            [/****:50:****/
             spec === 2 ? ce(`button`, {
              className: `btn btn-sm btn-warning ${this.isCurrTrace(theOrderi, textLinei) ? `current-trace` : ``}${this.currentKaraTimeout ? ` shadowed` : ``}`,
              onClick: ev => this.insertKaraTrace([theOrderi, textLinei])
             }, `》`) : null,
             editorPhase && spec ? ce(`span`,
              {
               key: `${keyPrefix}_${theOrderi}.${textLinei}.-1`,
               id: `${keyPrefix}_${theOrderi}.${textLinei}.-1`,
               className: `pre-post-chords-binder ${this.isTraced(theOrderi, textLinei, -1) ? `traced` : ``} ${this.isCurrTrace(theOrderi, textLinei, -1) ? `current-trace` : ``}`,
               onClick: event => {
                const chordPos = linePoss.indexOf(-1);
                checkAndSave(theOrderi, textLinei, -1, () => chordPos > -1 ? 
                 linePoss.splice(chordPos, 1) :
                 linePoss.push(-1)
                );
               }
              }
             ) : null,/****:50;****/
             ((letters = g.searchAll(/[уеыаоэяиёюіїє ]/i, textLine)) && letters.length ? letters : []).map((index, indexi, indexa)=> {
              let lastindex = indexi === indexa.length - 1;
              let firstindex = indexi === 0;
              let chorded = linePoss.indexOf(indexi) > -1;
              let chordLabel = (chorded ? chordsLabels[chordIndex++ - (preLineChord ? -1 : 0)] || `` : ``);
              let firstTextBit = firstindex ? replaceDashes(textLine.slice(0, index)) : ``;
              let baseTextBit = replaceDashes(textLine.slice(index, indexa[indexi + 1]));
              let prBaseTextBit = indexi && textLine.slice(indexa[indexi - 1], index);
              let testText = (firstindex ? firstTextBit : ``) + baseTextBit;
              let chordedFirst = firstindex && preLineChord && firstTextBit === ``;
              let chordedLast = lastindex && postLineChord;
              const twice = chorded && lastindex && postLineChord;
              
              return [firstTextBit !== `` ?
               ce(`span`,
                {
                 key: `song-letterbit-${theOrderi}-${textLinei}-${indexi}`,
                 className: `${preLineChord ? `chorded pre` : ``}${textOnRepeat}`,
                 dangerouslySetInnerHTML: {__html: firstTextBit},
                 chord: chordsLabels[0]
                }
               ) : null,
               ce(`span`,
                {
                 key: `${keyPrefix}_${theOrderi}.${textLinei}.${indexi}`,
                 id: `${keyPrefix}_${theOrderi}.${textLinei}.${indexi}`,
                 className: 
                  `${ chorded || chordedFirst || chordedLast ? `chorded` : ``
                  }${ chordedLast ? ` post` : ``
                  }${ chordedFirst ? ` pre` : ``
                  }${ twice ? ` twice` : `` /****:50:****/
                  }${ spec === 1 && editorPhase && chorded ?
                   originPositions.indexOf(indexi) > -1 ?
                    ` mark-origin-letter` :
                    ` mark-driven-letter` :
                   ``
                  }${ this.isTraced(theOrderi, textLinei, indexi) ? ` traced ` : ``/****:50;****/
                  }${ this.isCurrTrace(theOrderi, textLinei, indexi) ? ` current-trace ` : ``
                  }${ textOnRepeat
                  }`,
                 chord:
                  chordedFirst ?
                   chordsLabels[0] :
                   lastindex && postLineChord ?
                    chordsLabels[chordsLabels.length - 1] :
                    chordLabel,
                 achord:
                  twice ?
                   chordsLabels[chordsLabels.length - 2] :
                   ``,/****:50:****/
                 onClick: editorPhase ? event => {
                  let chordPos = linePoss.indexOf(indexi);
                  checkAndSave(theOrderi, textLinei, indexi, () => chordPos > -1 
                   ? linePoss.splice(chordPos, 1)
                   : linePoss.push(indexi)
                  );
                 } : null,/****:50;****/
                 dangerouslySetInnerHTML: {__html: baseTextBit}
                }
               )
              ];
             }),/****:50:****/
             editorPhase && spec ? ce(`span`,
              {
               key: `${keyPrefix}_${theOrderi}.${textLinei}.-2`,
               id: `${keyPrefix}_${theOrderi}.${textLinei}.-2`,
               className: `pre-post-chords-binder ${this.isTraced(theOrderi, textLinei, -2) ? ` traced` : ``} ${this.isCurrTrace(theOrderi, textLinei, -2) ? `current-trace` : ``}`,
               onClick: event => {
                let chordPos = linePoss.indexOf(-2);
                checkAndSave(theOrderi, textLinei, -2, () => chordPos > -1 ? 
                 linePoss.splice(chordPos, 1) :
                 linePoss.push(-2)
                )
               }
              }
             ) : null,
             spec === 1 && editorPhase && countChordeds !== maxCountChordeds ?
              ce(`span`,
               {className: countChordeds > maxCountChordeds ? `errorText` : ``},
               ` [${countChordeds}/${maxCountChordeds}]`
              )
             : null/****:50;****/
            ]
           );
         })
        ] : text.split(/\s*\n+\s*/).map((textLine, textLinei) => ce(`div`, {key: `song-woc-part-${theOrderi}-${textLinei}`, dangerouslySetInnerHTML: {__html: textLine.replace(/_/g, ``)}})))
     )]
    })
    : null,
    !g.isPhase(g.Phase.Com) || !nav.v ? null : ce(`div`, {},
     [
      ce(`button`, {
       className: `mbtn mbtn-ok msm btn btn-primary`,
       onClick: e => {
        this.isChordsImagineBlockOpened = !this.isChordsImagineBlockOpened;
        this.forceUpdate();
       }
      }, `${this.isChordsImagineBlockOpened ? `Скрыть` : `Показать`} изображения аккордов`),
      this.isChordsImagineBlockOpened ? ce(`div`, {},
       Object.keys(usedChords)
        .filter(c=>c)
        .map(chordName => {
        
         return ce(`div`, {
          key: `chord-${chordName}`,
          className: `chord-application`,/****:70:****/
          onClick: ev => {
           g.ss({phase: g.Phase.ChordCardEditor});
           setTimeout(() => {
            const chord = document.getElementById(chordName);
            
            if (chord) {
             chord.scrollIntoView();
             chord.style.backgroundColor = `blue`;
             chord.style.color = `white`;
            } else {
             
            }
           }, 1000);
          }/****:70;****/
         },
         ce(ChordCard, {chordName}));
       })
      ) : null
     ]
    ),
  ]);
  } catch (e) {alert(e.stack);}
 }
}

/****:100:****/
//window.history.pushState("pop", "Title", "/new-url");

/****:100;****/

class SuperCordsBox extends React.Component {
 constructor(){
  super();
 }
 render(){
  let pro= this.props.pro;
  
  return ce(`span`, {className: `chord-super-space`},
   ce(`span`, 
    {
     className:
      `chord-super-span ${prefix.styleBox+pro.styleBoxName}-chords${
       pro.preLineChord ? 
        ` pre-takt-chord`
       : pro.postLineChord ?
         ` post-takt-chord`
       : ``
      }`,
     dangerouslySetInnerHTML: {__html:replaceDashes(pro.chordLabel)}
    }
   )
  )
 }
}


g.chordLike = /^[A-H][#b]?m?(7\/6)?7?(m|sus4|maj|dim7?)?[69]?\+?$/;
g.chordsTranspnationLine = [`C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `H`, `C`];
g.cleanChords = [`A`, `C`, `D`, `E`, `F`, `G`, `H`];

const makeCleanName = name => name.trim().replace(/[^a-z0-9а-яёіґєї -]/gi, ``).replace(/ {2,}/g, ` `);
const makeCorrectChords = (text, BReplaceVariant) => {
 let txt = text
  .replace(/С/g, `C`)
  .replace(/Д/g, `D`)
  .replace(/Е/g, `E`)
  .replace(/А/g, `A`)
  .replace(/Н/g, `H`)
  .replace(/В/g, `B`)
  .replace(/[ьъ]/ig, `b`);
 if (BReplaceVariant) txt = txt.replace(RegExp(g.BReplaceVariants[BReplaceVariant].f, `g`), g.BReplaceVariants[BReplaceVariant].t);
 return txt;
}

g.checkNameExist = (col, n, curr) => {
 const name = n.toLowerCase().replace(/[^-a-zа-яё_\n ?]/g, ``);
 const fc = g.db.cols[`${col.toLowerCase()}s`].find(c => name === c.n.toLowerCase().replace(/[^а-я]/g, ``));
 return !!(curr ? fc && fc.w !== curr.w : fc);
}

/****:50:****/

g.getRevizionList = O => [
 [`Неверный порядок Текстов`, O && O.t && O.o && O.t.filter(t => t).length > O.o.length], 
 [`Не ко всем текстам прикреплены Аккорды`, O && O.o && O.o.some(ord => ord.c == null || !~ord.c)],
 [`Не ко всем текстам прикреплены Стилевые группы`, O && O.o && O.o.some(ord => !ord.sb)],
 [`Неверное количество Минимумов`, O && O.c && O.o && O.c.filter(a=>a).length !== O.o.reduce((len, ord) => len + (ord.in1 ? 1 : 0), 0)],
];

class Editor extends React.Component {
 constructor() {
  super();
  drawStyles();
  g.context.editor = this;
  
  this.state = {
   currentEPhase: 'a',
  };
 }
 
 changeChordsStick(event, i) {
  const c = parseInt(event.target.value);
  const ccom = this.props.ccom;
  
  mylib.setExecs([{
   track: g.withTrack(`Com`, [`o`, i, `c`]),
   prev: ccom.o[i].c,
   value: c,
   method: `set`,
   reason: [2.2, ccom.n, 1+i, 1+c]
  }, {
   track: g.withTrack(`Com`, [`m`]),
   prev: null,
   value: g.momentNow(),
   method: `set`,
   reason: [2.3, ccom.n]
  }]);
  o[i].c = c;
  g.ss();
  this.setState({o});
 }
 setO(cb = ()=>{}) {
  return event => {
   const ccom = this.props.ccom;
   const prevO = JSON.parse(JSON.stringify(ccom.o));
   
   cb(event);
   
   mylib.setExecs([{
    track: g.withTrack(`Com`, [`o`]),
    prev: prevO,
    value: ccom.o.slice(0),
    method: `set`,
    reason: [2.9, ccom.n]
   }, {
    track: g.withTrack(`Com`, [`m`]),
    prev: null,
    value: g.momentNow(),
    method: `set`,
    reason: [2.3, ccom.n]
   }]);
   this.setState({o});
   g.ss();
  }
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  try {
  const ccat = this.props.ccat;
  const ccom = this.props.ccom;
  const coms = g.sort(`Coms`);
  const cats = g.sort(`Cats`);
  const comIndex = ccom == null ? -1 : coms.findIndex(c => c.w === ccom.w);
  
  const revizionList = g.getRevizionList(ccom);
  
  return ccom == null ?
   ce(
    'h1',
    {
     style: {
      color: 'red'
     }
    },
    'ERROR'
   )
   : [
   ce(`div`, {},
    [
     ce(`h2`,
      {
       className: `pointer`,
       style: {
        backgroundColor: ccom.removed ? `red` : ``
       },
       onClick: event => {
        if (ccom.removed) {
         if (confirm(`Восстановить Композицию "${ccom.n}"?`))
          mylib.removeExecs([g.withTrack(`Com`, [`s`])]);
          ccom.removed = false;
        } else {
         let n;
         if (n = prompt(`Переименовать "${ccom.n}" на :`, ccom.n)) {
          if (g.checkNameExist(`Com`, n, ccom) && !alert(`Такая Песня уже есть!`)) return;
          
          if (n === ccom.n) return;
          mylib.setExecs([{
           track: g.withTrack(`Com`, [`n`]),
           prev: ccom.n,
           value: n,
           method: `set`,
           reason: [2.1, ccom.n, n]
          }, {
           track: g.withTrack(`Com`, [`m`]),
           prev: null,
           value: g.momentNow(),
           method: `set`,
           reason: [2.3, ccom.n]
          }]);
          ccom.n = n;
          this.setState({n});
          g.ss();
         }
        }
       }
      },
      `#${comIndex - -1}. ${ccom.n}`
     ),
     ce(
      'div',
      {
       className: 'binds-list-wrapper'
      },
      ce(
       'div',
       {
        className: 'binds-list mgroup'
       },/****:70:****/
       ce(`button`,
        {
         className: `mbtn mbtn-no msm btn btn-danger`,
         onClick: event => {
          if(confirm(`Удалить Песню "${ccom.n}"?`)) {
           ccom.removed = true;
           mylib.setExecs([{
            track: [`cols`, `coms`],
            value: [`w`, ccom.w],
            method: `removeBy`,
            reason: [2.6, ccom.n]
           }]);
           g.ss();
          }
         }
        },
        `Удалить`
       ),/****:70;****/
       cats.map(cat => {
        return !cat.w ? null :
         ce(
          `button`,
          {
           key: `cat-for-bind-${cat.w}`,
           className: `mbtn msm mbtn-ok btn ${~cat.s.indexOf(ccom.w) ? `btn-secondary mactive` : ` btn-default`}`,
           onClick: ev => {
            const index = cat.s.indexOf(ccom.w);
            let reasonNum, method;
          
            if (!~index) {
             cat.s.push(ccom.w);
             reasonNum = 2.14;
             method = `push`;
            } else {
             cat.s.splice(index, 1);
             reasonNum = 2.15;
             method = `remove`;
            }
          
            mylib.setExecs([{
             track: [`cols`, `cats`, [`w`, cat.w], `s`],
             prev: null,
             value: ccom.w,
             method,
             reason: [reasonNum, cat.n, ccom.n]
            }]);
            this.fu();
            g.ss();
           }
          }, cat.n)
        }),
      ),
     ),
     1 || ccom.o.length ? null : ce(`div`, {className: `flex-centers`},
      ce(`div`, {},
       [
        ce(`h3`, {}, `Вставьте текст:`),
        ce(`textarea`,
         {
          className: `editor_text-heap`,
          defaultValue: ``,
          rows: 15
         }
        ),
        ce(`input`,
         {
          type: `button`,
          className: `btn btn-block`,
          value: `Разобрать текст`,
          onClick: event => {
           const textHeap = event.target.previousSibling.value.trim();
           const chords = [];
           const texts = [];
           const currentChordsIndex = 0;
           const ccom = g.current(`Com`) || g.init.com;
           const parts = textHeap.replace(/^ *([\w\W]+?) *$/gm, `$1`).split(/ *\n+ *\n+ */);
           
           let firstLine = ``;
           let breakParse = false;
           
           g.partsRules = [];
           
           parts.forEach((part, parti, parta) => {
            if (breakParse) return;
            const lines = part.split(/ *\n */);
            const fLine = lines[0];
            const sLine = lines[1];
            const isFCh = g.isChordsIncludes(fLine);
            const isSCh = g.isChordsIncludes(sLine);
            
            const clap = 
             (!isFCh && !isSCh) ? 0 :
              (isFCh && isSCh) ? 1 : 2;
            
            let chordsLine = clap === 1 ? part : ``;
            let textsLine = clap === 0 ? part : ``;
            
            g.partsRules.push({clap});
            
            if (firstLine === `` && clap !== 1) firstLine = (clap === 2) ? sLine : fLine;
            
            if (clap === 2) {
             lines.forEach((line, linei, linea) => {
              if (!(linei%2)) chordsLine += (linei ? `\n` : ``) + line;
              else textsLine += (linei - 1 ? `\n` : ``) + line;
             });
            }
             
            if (clap === 0 || clap === 2)
             texts.push(textsLine.replace(/ {2,}/g, ` `));
            
            if (clap === 1 || clap === 2) {
             if (/[bьЬъЪ]/.test(chordsLine) && !confirm(`Есть аккорды с бемолями. В этом случае они будуть заменены на соответствующие аккорды с диезами. Продолжить?`)) {
              breakParse = true;
              return;
             }
             chords.push(
              chordsLine
               .trim()
               .replace(/[ьъ]/gi, `b`)
               .replace(/[A-G]b/g, all => g.transportChords[all])
               .replace(/ {2,}/g, ` `)
               .replace(/\b *([^a-z]+) *\b/ig, "$1")
             );
            }
           });
           const isBIncludes = chords.some(chline => /B/.test(chline));
           
           let bReplaceVariant = ``;
           if (breakParse || isBIncludes &&
             !(bReplaceVariant =
              prompt(`В аккордах содержится аккорд "В". Его необходимо заменить. Выберите вариант замены:${
               g.BReplaceVariants.map((v, i) => `\n${i}. ${v.f} => ${v.t}`)}`, 0))) return;
           
           const exclusiveChords = [];
           const exclusiveTexts = [];
           const filteredChords = chords.filter(chline => exclusiveChords.some(c => c === chline) ? false : exclusiveChords.push(chline) + 1);
           const filteredTexts = texts.filter(txtline => {
            const cuttext = txtline.toLowerCase().replace(/[^а-я]+/g, ``);
            return exclusiveTexts.some(t => t === cuttext) ? false : exclusiveTexts.push(cuttext) + 1;
           });
           const isWasFiCh = filteredChords.length !== chords.length;
           const isWasFiTxt = filteredTexts.length !== texts.length;
           
           if (isWasFiTxt || isWasFiCh) alert(`Были обнаружены одинаковые блоки ${isWasFiTxt ? `текстов` : ``}${isWasFiTxt && isWasFiCh ? ` и ` : ``}${isWasFiCh ? `аккордов` : ``}. Все повторяющиеся были отсеяны!`);
           
           const heapResult = {
            c: filteredChords.map(chordsPart => makeCorrectChords(chordsPart, bReplaceVariant)),
            t: filteredTexts
           };
           
           const execs = [
            {
             track: g.withTrack(`Com`, [`c`]),
             value: heapResult.c,
             method: `set`,
             reason: [2.8, firstLine, `Аккроды`]
            }, {
             track: g.withTrack(`Com`, [`t`]),
             value: heapResult.t,
             method: `set`,
             reason: [2.8, firstLine, `Тексты`]
            }
           ]
           
           
           if (ccom.n === `?`) {
            firstLine = makeCleanName(firstLine) || `?`;
            
            const com = g.db.cols.coms.find(a => a.n === firstLine);
           
            if (com != null && ccom.w !== com.w && firstLine === com.n) {
             alert(`Такое имя уже существует!`);
            }
            
            if (firstLine !== `?`) 
             execs.unshift({
              track: g.withTrack(`Com`, [`n`]),
              prev: ccom.n,
              value: firstLine,
              method: `set`,
              reason: [2, firstLine, ccat.n]
             });
            ccat.n = firstLine;
           }
           
           if (textHeap !== ``) ccom.o = [];
           
           mylib.setExecs(execs);
           this.setState({c: heapResult.c, t: heapResult.t, n: ccat.n});
           g.ss();
           
          }
         }
        ),
        g.partsRules.map((partRule, partRulei) => ce(`div`, {key: `part-rule-${partRulei}`},
         [`t,t,t,t...`, `a,a,a,a...`, `a,t,a,t...`]
          .map((clap, clapi) => ce(`label`, {}, [
           ce(`input`, {
            key: `part-rule-clap-${partRulei}-${clapi}`,
            type: `radio`,
            name: `clap-radio-${partRulei}`,
            checked: partRule.clap === clapi,
            onChange: ev => {
             g.partsRules[partRulei].clap = clapi;
             this.forceUpdate();
            }
           }),
           ce(`span`, {}, clap)
          ]))
        ))
       ]
      )
     ),/*
      ccom.o && ccom.o.length > 0 && ccom.t.length > 0 ?
       ccom.o.map((theOrder, theOrderi, theOrdera) => {
        
        const orderUnit = mylib.isNum(theOrder) ? theOrdera.find(ou => ou.t === theOrder) : theOrder;
        const styleBoxName = orderUnit.sb;
        const textsStyle = (g.db.settings.styleBoxes[styleBoxName] || {} ).texts|| {};
  
        delete textsStyle.fontSize;
  
        return  [
         ce(`div`, {key: `order-line-${theOrderi}`, className: `btn-block btn-group`},[
          ce(`button`,
           {
            key: `order-deleter-${theOrderi}`,
            className: `btn btn-success btn-sm text-align-left`,
            style: textsStyle,
            onClick: this.setO(event => {
             const ccom = this.props.ccom;
             
             if (!mylib.isNum(ccom.o[theOrderi])) {
              for (let i = ccom.o.length - 1; i >= 0; i--) {
               const ou = ccom.o[i];
               if (mylib.isNum(ou) && ou === orderUnit.o) ccom.o.splice(i, 1);
              }
             }
             ccom.o.splice(theOrderi, 1);
            })
           },
           `${orderUnit.t + 1}. ${(ccom.t[orderUnit.t] || ``).split(/\s*\n\s * /)[0]}`
          ),
          ce(`button`,
           {
            className: `btn btn-primary btn-sm ${orderUnit.in1 ? `active` : ``}`,
            onClick: this.setO(event => ccom.o[theOrderi].in1 = !orderUnit.in1)
           },
           `мин`
          ),
          theOrderi > 0 ? ce(`a`,
           {
            className: `btn btn-warning btn-sm`,
            onClick: this.setO(event => {
             const ccom = this.props.ccom;
             [ccom.o[theOrderi], ccom.o[theOrderi-1]] = [ccom.o[theOrderi-1], ccom.o[theOrderi]];
            })
           },
           `↑`
          ) : ce(`a`,
           {
            className: `btn btn-warning btn-sm`,
            onClick: this.setO(event => {
             const ccom = this.props.ccom;
             [ccom.o[theOrderi], ccom.o[theOrderi+1]] = [ccom.o[theOrderi+1], ccom.o[theOrderi]];
            })
           },
           `↓`
          ),
         ]),
         ce(`div`, {style: {float: `right`}},
          [
           ce(`select`,
            {
             className: `btn btn-secondary`,
             value: orderUnit.c,
             onChange: event => this.changeChordsStick(event, theOrderi)
            },
            [
             ce(`option`, {value: `-1`}, `Без Аккордов`),
             ccom.c.map((chords, chordsi) => ce(`option`, {key: `choose-chords-${chordsi}`, value: chordsi}, `${chordsi + 1} : ${chords.match(/[\w\W]{1,7}/)}...`))
            ]
           ),
           ce(`select`,
            {
             key: `block-style-selector-${theOrderi}`,
             className: `btn btn-default`,
             onChange: event => {
              const com = g.current(`Com`);
              const sb = event.target.value;
              
              mylib.setExecs([{
               track: g.withTrack(`Com`, [`o`, theOrderi, `sb`]),
               prev: com.o[theOrderi].sb,
               value: sb,
               method: `set`,
               reason: [2.01, com.n, theOrderi, sb]
              }, {
               track: g.withTrack(`Com`, [`m`]),
               prev: null,
               value: g.momentNow(),
               method: `set`,
               reason: [2.3, com.n]
              }]);
              com.o[theOrderi].sb = sb;
              this.setState({s: com});
              g.ss();
             },
             value: orderUnit.sb
            },
            [
             ce(`option`, {key: `chooser-style-block-option-${-1}`, value: ``}, `Стиль блока`),
             Object.keys(g.db.settings.styleBoxes).map(boxName => ce(`option`, {key: `chooser-style-block-option-${boxName}`, value: boxName}, boxName))
            ]
           )
          ]
         )
        ]
       })
      : null*/
           
    ].filter((part, parti) => ccom.removed ? parti === 0 : true)
   ),
   /*ccom.removed ? null :
   ce(`div`, {className: `flex-centers`},
    [
     ce(`table`, {},
       [
        ce(`tr`, {},
         [`c`, `t`].map(coln => ce(`th`, {key: `coln-thead-${coln}`}, [
          g.translate.cols[coln] + `:`,
          ccom[coln][ccom[coln].length - 1] === `` ? null : ce(`div`, {
           className: `btn btn-success`,
           onClick: event => {
            const kindBlock = coln === `t` ? `Текстовый блок` : `блок Аккордов`;
            
            if (!confirm(`Добавить новый (${ccom[coln].length + 1}-й) ${kindBlock}?`)) return;
            ccom[coln].push(``);
            
            mylib.setExecs([{
             track: g.withTrack(`Com`, [coln]),
             prev: null,
             value: ``,
             method: `push`,
             reason: [2.11, ccom.n, kindBlock]
            }, {
             track: g.withTrack(`Com`, [`m`]),
             prev: null,
             value: g.momentNow(),
             method: `push`,
             reason: [2.3, ccom.n]
            }]);
            this.setState({
             [coln]: ccom[coln]
            });
            g.ss();
           }
          }, `+`),
         ]))),
        ce(`tr`, {},
         [`c`, `t`].map(coln =>
          ce(`td`, {key: `col-tdump-${coln}`},
           ccom[coln].map((content, contenti, contenta) =>
            ce(`div`, {key: `content-col-${contenti}`, className: `flex-centers`},
             [
              ce(`textarea`,
               {
                key: `content-textarea-${contenti}`,
                className: `halfw`,
                onChange: event => {
                 mylib.setExecs([{
                  track: g.withTrack(`Com`, [coln, contenti]),
                  prev: ccom[coln][contenti],
                  value: event.target.value,
                  method: `set`,
                  reason: [2.7, ccom.n, g.translate.cols[coln], contenti - -1]
                 }, {
                  track: g.withTrack(`Com`, [`m`]),
                  prev: null,
                  value: g.momentNow(),
                  method: `set`,
                  reason: [2.3, ccom.n]
                 }]);
                 
                 ccom[coln][contenti] = event.target.value;
                 this.setState({
                  [coln]: ccom[coln]
                 });
                 g.ss();
                },
                onBlur: event => {
                 const value = event.target.value.replace(/ {2,}/g, ` `);
                 ccom[coln][contenti] = coln === `t` ? value.replace(/\n +/g, `\n`) : makeCorrectChords(value);
                 const fixed = {[coln]: ccom[coln]};
               
                 this.setState(fixed);
                },
                rows: ccom[coln][contenti].split(`\n`).length,
                value: content
               }
              ),
              1?null:ce(`button`, {
               key: `content-deller-${contenti}`, 
               className: `btn btn-danger`,
               onClick: ev => {
                const isTextBlock = coln === `t`;
                
                if (!confirm(`Удалить ${contenti + 1}-й ${isTextBlock ? `текстовый блок` : `блок аккордов`}?\nЭто может привести к нежелаемому результату!`)) return;
                ccom[composit].splice(contenti, 1);
               
                this.setState({
                 [coln]: ccom[coln]
                });
               }
              }, `-`),
             ]
            )
           )
          )
         )
        )
      ]
     ),
     
     revizionList.some(rli => rli[1]) ? [
      ce(`hr`, {style: {border: `solid red 1px`}}),
      ce(
       `div`,
       {},
       revizionList.map(unit => unit[1] ? ce(`div`, {}, unit[0]) : null)
      )
     ] : null
    ]
   ),*/
   ce(
    'div',
    {
     className: 'com-editor-wrapper'
    },
    (coln =>
     
      coln === 't' || coln === 'c' ?
       ce(ComEditor, {ccom, ccat, coln}) :
      coln === 'a' ?
       ce(
        'div',
        {
         className: `com-editor fade-in`
        },
        ce(Com, {spec: 1, ccom, ccat})
       ) :
      ce(ComOrder, {ccom, ccat})
     
    )(this.state.currentEPhase),
   ),
   ce(
    'div',
    {
     className: 'mgroup'
    },
    Object.keys(g.editPhase).map(ephasen => {
     return ce(
      'button',
      {
       className: `mbtn mbtn-ok ${this.state.currentEPhase === ephasen ? 'mactive' : ''} msm`,
       onClick: e => {
        this.setState({currentEPhase: ephasen});
       },
      },
      g.editPhase[ephasen]
     );
    })
   )
  ]
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}

g.editPhase = {
 a: 'аппликатура',
 t: 'текст',
 c: 'аккорды',
 o: 'порядок',
};

class ComEditor extends React.Component {
 constructor() {
  super();
  
  this.prev = null;
 }
 
 splitBlocks(e) {
  return (e.clipboardData || window.clipboardData)
   .getData('text')
   .trim()
   .split(/\n\s*\n/);
 }
 
 addBlocks(blocks) {
  try{
  const ccom = this.props.ccom;
  
  const chords = [];
  const trombs = [];
  const texts = [];
  const cclen = ccom.c.length;
  const ctlen = ccom.t.length;
  let isMoved = true;
  
  blocks.forEach((block, blocki) => {
   trombs.push({arr: []});
   const ctromb = trombs[blocki];
   const lines = block.trim().split(/\n/);
   
   let schords = '';
   let stexts = '';
   
   lines.forEach((line) => {
    const trimmedLine = line.trim().replace(/\s+/g, ' ');
    if (/^([-./A-Hm#b_|2-9+]|\s|dim|sus)+$/.test(line)) {
     schords += (schords ? '\n' : '') + trimmedLine;
     ctromb.in1 = true;
     ctromb.index = chords.length;
    } else {
     if (ccom.n === '?') ccom.change('n', trimmedLine);
     
     stexts += (stexts ? '\n' : '') + trimmedLine;
     ctromb.arr.push(trimmedLine.match(/[аеёиоуэыяюaeouiіїє]/gi).length);
    }
   });
   
   ctromb.str = JSON.stringify(ctromb.arr);
   ctromb.len = ctromb.arr.length;
   
   if (schords) chords.push(schords);
   if (stexts) texts.push(stexts);
  });
  
  texts.forEach((text, texti) => {
   const ctromb = trombs[texti];
   let t = ctlen + texti, c, sb, in1 = ctromb.in1;
   
   if (chords.length)
   if (chords.length === 1) {
    c = cclen;
    sb = t % 2 ? 'one' : 'third';
   } else if (chords.length === texts.length) {
    c = cclen + texti;
    sb = c === 0 ? 'one' : c === 1 ? 'two' : 'bridge';
   } else { 
    c = ((trombs.find(tromb => tromb.in1 && tromb.str === ctromb.str) || {}).index + 1 || 1) - 1;
    
    if (c === 0) isMoved = !isMoved;
    else isMoved = true;
    
    sb = c === 0 ? isMoved ? 'third' : 'one' : c === 1 ? 'two' : 'bridge';
   }
   
   ccom.add('o', {t, c, sb, in1});
  });
  
  ccom.add('c', chords);
  ccom.add('t', texts);
  g.ss();
  } catch(e) {ra(e.stack);}
 }
 
 render() {
  try {
  const ccom = this.props.ccom;
  const ccoln = this.props.coln;
  const istcoln = ccoln === 't';
  const ccols = ccom[ccoln];
  
  return ce(
   'div',
   {
    className: `com-editor fade-in`
   },
   ccols.length === 0 ?
   ce(
    'textarea',
    {
     className: `empty com-editor-textarea`,
     rows: 1,
     onPaste: e => {
      this.addBlocks(this.splitBlocks(e));
     },
    }
   ) :
   ccols.map((col, coli) => {
    try{
    return ce(
     'textarea',
     {
      key: `com-editor-textarea.${ccoln}.${coli}`,
      className: `com-editor-textarea ${col.trim() === '' ? 'empty' : ''}`,
      value: col,
      ref: el => el && coli === ccols.length - 1 && this.newBlock && (el.focus() || (this.newBlock = false)),
      rows: col.split('\n').length,
      onKeyDown: e => this.prev = e.target.value,
      onInput: e => {
       try {
        const prev = this.prev;
        const curr = e.target.value;
        
        if (prev !== curr) {
         const valnum = curr.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
         const diffnum = prev.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
         const letter = String.fromCharCode(valnum - diffnum);
         const isNewBlock = coli === ccom[ccoln].length - 1 && letter === '\n' && prev[prev.length - 1] === '\n';
         
         if (isNewBlock) {
          const txt = istcoln ? 'Текстовый блок' : 'блок Аккордов';
          if (!confirm(`Добавить новый блок ${txt}?`)) return;
          
          ccom[ccoln].push('');
          
          mylib.setExecs([{
           track: g.withTrack('Com', [ccoln]),
           prev: null,
           value: '',
           method: `push`,
           reason: [2.11, ccom.n, txt]
          }]);
          
          this.newBlock = true;
         }
         
         const value = isNewBlock ? curr.replace(/\n+$/, '') : curr;
         
         mylib.setExecs([{
          track: g.withTrack('Com', [ccoln, coli]),
          prev,
          value,
          method: `set`,
          reason: [2.7, ccom.n, g.translate.cols[ccoln], coli + 1],
         }]);
         
         ccom[ccoln][coli] = value;
         g.ss();
        }
       } catch(e) {ra(e.stack);}
      },
      onPaste: e => {
       try {
        const prev = this.prev;
        const blocks = this.splitBlocks(e);
        
        if (blocks.length > 1) {
         if (prev !== '') {
          e.preventDefault();
          alert('Вставлять многоблочный текст возможно только в пустые блоки.');
          return;
         } else {
          e.preventDefault();
          this.addBlocks(blocks);
         }
        }
        
       } catch(e) {ra(e.stack);}
      },
     },
    );}catch(e){ra(e.stack);}
   })
  );
  } catch(e) {ra(e.stack);}
 }
}

window.onresize = e => {
 e.preventDefault();
};

class ComOrder extends React.Component {
 constructor(props) {
  super();
  
  this.state = {};
 }
 
 setO(cb = ()=>{}) {
  return event => {
   const ccom = this.props.ccom;
   const prevO = JSON.parse(JSON.stringify(ccom.o));
   
   cb(event);
   
   mylib.setExecs([{
    track: g.withTrack(`Com`, [`o`]),
    prev: prevO,
    value: ccom.o.slice(0),
    method: `set`,
    reason: [2.9, ccom.n]
   }]);
   ccom.o = ccom.o.slice(0);
   g.ss();
  };
 }
 
 render() {
  const ccom = this.props.ccom;
  const ccat = this.props.ccat;
  
  return ccom.t.filter(t => t.trim()).length === 0 ?
   ce(
    'h3',
    {
     className: `fade-in`,
    },
    'нет данных для отображения'
   ) :
  ce(
   'div',
   {
    key: `com-order-panel`,
    className: `com-order-panel fade-in`,
   },
   ccom.t.map((text, texti) => {
    return ce(
     'div',
     {
      key: `com-order-panel-i-${texti}`,
      className: `mbtn msm mbtn-ok add-order-button ${ccom.o.some(o => o.t === texti) ? 'mactive' : ''}`,
      onClick: this.setO(e => ccom.o.push(new IOrder({t: texti})))
     },
     `${texti + 1}.${text.split('\n')[0]}`,
    );
   }),
   ce(
    'hr',
    {}
   ),
   ccom.o.map((ord, ordi) => {
    return ce(
     'div',
     {
      key: `com-order-panel-i-${ordi}`,
      className: `mgroup`
     },
     ce(
      'div',
      {
       key: `com-order-panel-i-${ordi}.rem`,
       className: `mbtn msm mbtn-no rem-order-button`,
       onClick: this.setO(e => ccom.o.splice(ordi, 1)),
      },
      `${ord.t + 1}.${ccom.t[ord.t].split('\n')[0]}`
     ),
     ce(
      'div',
      {
       key: `com-order-panel-i-${ordi}.in1`,
       className: `mbtn msm mbtn-ok ${ord.in1 ? 'mactive' : ''}`,
       onClick: this.setO(e => ord.in1 = !ord.in1),
      },
      'мин'
     ),
     ce(
      'select',
      {
       key: `com-order-panel-i-${ordi}.sb`,
       className: `mbtn msm minput-br`,
       onChange: this.setO(e => ord.sb = e.target.value),
       defaultValue: ord.sb
      },
      Object.keys(g.db.settings.styleBoxes).map(boxName => {
       return ce(
        'option',
        {
         key: `option.${boxName}`
        },
        boxName
       );
      })
     ),
     ce(
      'select',
      {
       key: `com-order-panel-i-${ordi}.chb`,
       className: `mbtn msm minput-ko chord-bind-button`,
       onChange: this.setO(e => ord.c = parseInt(e.target.value)),
       defaultValue: ord.c
      },
      ccom.c.map((c, ci) => {
       return ce(
        'option',
        {
         key: `option.chord.bind.${ci}`,
         value: ci
        },
        `${ci + 1}.${c.split('\n')[0]}`
       );
      })
     ),
     ce(
      'div',
      {
       key: `com-order-panel-i-${ordi}.replace`,
       className: `mbtn msm mbtn-no`,
       onClick: this.setO(e => ordi ? [ccom.o[ordi], ccom.o[ordi - 1]] = [ccom.o[ordi - 1], ccom.o[ordi]] : [ccom.o[ordi], ccom.o[ordi + 1]] = [ccom.o[ordi + 1], ccom.o[ordi]]),
      },
      ordi ? '↑' : '↓'
     ),
    );
   }),
   ce('hr'),
   ce(Com, {spec: 0, ccom, ccat}),
  );
 }
}

/****:100;****/
class ComEditor1 extends React.Component {
 constructor() {
  try{
  super();
  this.state = {
   set cposition([clinei, cletteri] = [0, 0]) {
    this._cp = [clinei < 0 ? 0 : clinei, cletteri < -1 ? -1 : cletteri];
   },
   get cposition() {
    return this._cp || [];
   },
   coln: 't',
  };
  this.input = null;
  this.idiff = '';
  this.lines = [];
  }catch(e){ra(e);}
 }
 fu() {
  this.forceUpdate();
 }
 isFocused(linei, letteri) {
  const [clinei, cletteri] = this.state.cposition;
  return (clinei === linei && cletteri === letteri) || ((this.lines[clinei] < cletteri) && clinei === linei && this.lines[clinei] - 1 === letteri);
 }
 editText(e) {
  try{
  if (e.key === 'Control') return;
  
  const ccom = this.props.ccom;
  const cposition = this.state.cposition.slice(0);
  const oldposition = this.state.cposition.slice(0);
  const [clinei, cletteri] = cposition;
  
  const isFline = clinei === 0;
  const isFletter = cletteri === -1;
  
  const isLline = clinei === this.lines.length - 1;
  const isLletter = cletteri === this.lines[clinei] - 1;
  
  const clinelen = this.lines[clinei];
  let isRedacted = false;
  const coln = this.state.coln;
  const istcoln = coln === 't';
  const buffer = bufferList.get(ccom.w, coln);
  const blocks = ccom[coln];
  let isBufferOperation = false;
  
  switchEKey:
  switch(e.key) {
   case 'ArrowLeft':
    if (isFletter) {
     if (!isFline) {
      cposition[0]--;
      cposition[1] = this.lines[clinei - 1] - 1;
     }
    } else {
     if (clinelen - 1 < cletteri) {
      cposition[1] = clinelen - 2;
     } else cposition[1]--;
    }
    break;
   case 'ArrowRight':
    if (isLletter) {
     if (!isLline) {
      cposition[0]++;
      cposition[1] = -1;
     }
    } else {
     if (clinelen - 1 < cletteri) {
      if (!isLline) {
       cposition[0]++;
       cposition[1] = -1;
      }
     } else cposition[1]++;
    }
    break;
   case 'ArrowDown':
    if (isLline) {
     cposition[1] = clinelen - 1;
    } else cposition[0]++;
    break;
   case 'ArrowUp':
    if (isFline) {
     cposition[1] = -1;
    } else cposition[0]--;
    
    break;
   
   default:
    
    const valnum = e.target.value.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
    const diffnum = this.idiff.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
    const letter = String.fromCharCode(valnum - diffnum);
    let pasteText = '';
    
    let sum = 0;
    const blockLens = blocks.map((t, i, a) => {
     const len = t.split('\n').length;
     sum += len;
     return {len, sum};
    });
    const blocki = blockLens.findIndex(tlen => tlen.sum > clinei);
    const blockVlen = blockLens[blocki].len;
    const blockLinei = clinei - blockLens[blocki].sum + blockVlen;
    const prevText = blocks[blocki];
    
    let newtext = blocks[blocki];
    
    if (e.type === 'paste') {
     pasteText = (e.clipboardData || window.clipboardData).getData('text');
     isRedacted = true;
    } else if (e.ctrlKey) {
     let props = null;
     
     switch (e.key.toLowerCase()) {
      case 'z':
      case 'я':
       props = e.shiftKey ? buffer.redo() : buffer.undo();
       break;
      case 'y':
      case 'н':
       props = buffer.redo();
       break;
      case 'v':
      case 'м':
       return;
       break;
     }
     
     if (props) {
      blocks[props.blocki] = props.text;
      cposition[0] = props.pos[0];
      cposition[1] = props.pos[1];
      
      mylib.setExecs([{
       track: g.withTrack('Com', ['t', props.blocki]),
       prev: prevText,
       value: props.text,
       method: `set`,
       reason: [2.7, ccom.n, g.translate.cols[coln], props.blocki + 1]
      }]);
      break switchEKey;
     }
     
    }
    
    if (!isRedacted || pasteText)
    switch (e.key) {
     case 'Backspace':
      
      if (!(this.currentLineIndex === 0 && cletteri === -1)) {
       const regt = cletteri === -1 ?
        `((.*\n){${this.currentLineIndex - 1}}(.*))\n` :
        `((.*\n){${this.currentLineIndex}})(.{${cletteri}}).`;
       const t = cletteri === -1 ? '$1' : '$1$3';
       newtext = newtext.replace(RegExp(regt), t);
       
       if (isFletter) {
        cposition[0]--;
        cposition[1] = this.lines[clinei - 1] - 1;
       } else cposition[1]--;
       isRedacted = true;
      }
      break;
     case 'Enter':
     default:
      
      const symbol = e.key === 'Enter' ? '\n' : '';
      
      if (valnum - diffnum > 0 || symbol || pasteText) {
       const reg = RegExp(`^((.*\n){${this.currentLineIndex - (isFletter && blockLinei !== 0 ? 1 : 0)}})((\\w|\\W){${cletteri + 1 || (blockLinei === 0 ? 0 : this.lines[clinei - 1] + 1)}})`);
       
       newtext = newtext.replace(reg, `$1$3${pasteText || symbol || letter}`);
       
       if (pasteText) {
        //cposition[0]???
        cposition[1] += pasteText.length;
       } else if (symbol === '\n') {
        cposition[0]++;
        cposition[1] = -1;
       } else {
        cposition[1]++;
       }
       isRedacted = true;
      }
      break;
    }
    
    if (isRedacted) {
     const isThereBR = newtext.match(/\n+ *\n+/);
     const isThereLastBR = newtext.match(/\n+ *\n+$/);
     
     if (isThereBR || isThereLastBR) {
      
      if (this.blocks.length - 2 === blocki && !blocks[blocks.length - 1].trim()) {
       alert('Уже существует пустой блок!');
       return;
      } else if (this.blocks.length - 1 === blocki) {
       
       if (pasteText) {
       
        if (blockVlen - 1 !== blockLinei || !isLletter) {
         alert('Вставка текста с разрывом строк возможна только в самый конец!');
         return;
        }
        const blocksInPaste = pasteText.split(/\n+ *\n+/).map(t => t.trim());
        
        const message = blocksInPaste.length === 2 ?
         'Вставляемый текст содержит разрыв строк. Добавить новый блок?' :
         'Вставляемый текст содержит несколько разрывов строк. Добавить новые блоки?';
        if (!confirm(message)) return;
        
        
        let nblocki;
        
        blocksInPaste.forEach((tblock, tblocki) => {
         const pos = oldposition.slice(0);
         let text;
         
         
         if (tblocki === 0) {
          text = prevText + tblock;
          
          mylib.setExecs([{
           track: g.withTrack('Com', [coln, blocki]),
           prev: prevText,
           value: text,
           method: `set`,
           reason: [2.7, ccom.n, g.translate.cols[coln], blocki + 1]
          }]);
          
          blocks[blocki] = text;
          nblocki = blocki;
          
          buffer.next({
           pos: oldposition,
           text: prevText,
           blocki
          }, {
           pos,
           text,
           blocki: nblocki
          });
         } else {
          text = tblock;
          
          mylib.setExecs([{
           track: g.withTrack('Com', [coln]),
           prev: null,
           value: text,
           method: 'push',
           reason: [2.11, ccom.n, istcoln ? 'Текстовый блок' : 'блок Аккордов']
          }]);
          
          blocks.push(text);
          nblocki = blocki - tblocki;
          
          buffer.next({
           pos: oldposition,
           text: prevText,
           blocki
          }, {
           pos,
           text,
           blocki: nblocki
          });
         }
         const tlines = tblock.split(/\n/);
         
         if (tlines.length > 1) {
          pos[0] += tlines.length - 1;
          pos[1] = tlines[tlines.length - 1].length;
         }
        
        });
        
        g.ss();
        return;
       } else if (confirm('Добавить новый текстовый блок?')) {
        blocks.push('');
        newtext = newtext.replace(/\n\n$/, '');
        
        cposition[0]++;
        cposition[1] = -1;
        mylib.setExecs([{
         track: g.withTrack('Com', [coln]),
         prev: null,
         value: '',
         method: 'push',
         reason: [2.11, ccom.n, istcoln ? 'Текстовый блок' : 'блок Аккордов']
        }]);
       } else return;
      } else {
       !alert('Разрыв между строками можно делать только в последнем блоке в конце последней строки!');
       return;
      }
     }
     blocks[blocki] = newtext;
     
     mylib.setExecs([{
      track: g.withTrack('Com', [coln, blocki]),
      prev: prevText,
      value: newtext,
      method: `set`,
      reason: [2.7, ccom.n, g.translate.cols[coln], blocki + 1]
     }]);
     
     buffer.next({
      pos: oldposition,
      text: prevText,
      blocki
     }, {
      pos: cposition,
      text: newtext,
      blocki
     });
    }
    
    break;
  }
  
  this.setState({cposition});
  g.ss();
  }catch(e){alert(e.stack);}
 }
 setCposition(e, linepos, letteri) {
  this.setState({cposition: [linepos, letteri]});
  this.input.style.left = `${e.target.offsetLeft}px`;
  this.input.style.top = `${e.target.offsetTop}px`;
  this.input.focus();
 }
 render() {
  const ccom = this.props.ccom;
  const ccat = this.props.ccat;
  const coln = this.state.coln;
  const istcoln = coln === 't';
  const blocks = ccom[coln];
  
  let linecounter = 0;
  this.lines = [];
  this.blocks = [];
  
  return ce(
   'div',
   {
    className: 'com-editor',
   },
   ce(ComCtrlPannel, {ccom, ccat}),
   ce(
    'input',
    {
     className: 'hidden-input',
     style: {
      top: this.state.iy,
      left: this.state.ix,
     },
     ref: el => this.input = el || this.input,
     onKeyDown: e => this.idiff = e.target.value,
     onKeyUp: e => this.editText(e),
     onPaste: e => this.editText(e),
     onBlur: e => this.setState({cposition: []}),
    }
   ),
   ce(
    'div',
    {
     key: `text-editor.${coln}`,
     className: `text-editor`
    },
    blocks.map((block, blocki) => {
     const lines = block.split('\n');
     this.blocks[blocki] = [];
     
     return ce(
      'div',
      {
       key: `text-block-${coln + blocki}`,
       className: `text-block ${block.trim() === '' ? 'empty' : ''}`,
      },
      lines.map((line, linei) => {
       const linepos = linecounter++;
       this.lines.push(line.length);
       this.blocks[blocki].push(line.length);
       
       const isZeroFocused = this.isFocused(linepos, -1);
       if (isZeroFocused) {
        this.currentLineIndex = linei;
       }
       return ce(
        'div',
        {
         key: `linei-${coln + blocki}-${linei}`,
        },
        ce(
         'span',
         {
          key: `z-line-${coln + blocki}-${linei}`,
          className: `letter zero ${isZeroFocused ? 'focused' : ''}`,
          onClick: e => this.setCposition(e, linepos, -1),
         }
        ),
        line.split('').map((letter, letteri) => {
         const isFocused = this.isFocused(linepos, letteri);
         if (isFocused) {
          this.currentLineIndex = linei;
         }
         return ce(
          'span',
          {
           key: `letter-${coln + blocki}-${linei}-${letteri}`,
           className: `letter ${isFocused ? 'focused' : ''} ${letter === ' ' ? 'space' : ''}`,
           onClick: e => this.setCposition(e, linepos, letteri),
          },
          letter
         );
        }),
       );
      })
     );
    })
   ),
   ce(
    'div',
    {
     className: 'mgroup',
    },
    ce(
     'button',
     {
      className: `mbtn msm mbtn-ok ${istcoln ? 'mactive' : ''}`,
      onClick: e => this.setState({coln: 't'})
     },
     'Тексты'
    ),
    ce(
     'button',
     {
      className: `mbtn msm mbtn-ok ${!istcoln ? 'mactive' : ''}`,
      onClick: e => this.setState({coln: 'c'})
     },
     'Аккорды'
    ),
   ),
   ce(
    'pre',
    {},
    JSON.stringify(bufferList.get(ccom.w, 't')).replace(/\},\{/g, '},\n{').replace(/,"([^"]+)"/g, ',\n"$1"').replace(/\\n/g, '\n'),
   )
  );
 }
}

class Buffer {
 constructor(name) {
  this.name = name;
  this.cursor = -1;
  this.stack = [];
 }
 next(prev, curr) {
  const cursor = ++this.cursor;
  this.stack[cursor] = prev;
  this.stack[cursor + 1] = curr;
  this.stack.length = cursor + 2;
 }
 current() {
  return this.stack[this.cursor + 1];
 }
 undo() {
  return this.cursor !== -1 ?
   this.stack[this.cursor--] :
   null;
 }
 redo() {
  return this.cursor < this.stack.length - 2 ?
   this.stack[++this.cursor + 1] :
   null;
 }
}

class BufferList {
 constructor() {
  this.dict = {};
 }
 register(w) {
  if (w == null || this.dict[w] != null) return false;
  
  this.dict[w] = {
   t: new Buffer(`texts:${w}`),
   c: new Buffer(`chords:${w}`),
  };
 }
 get(w, coln) {
  if (this.dict[w] == null || this.dict[w][coln] == null) return null;
  return this.dict[w][coln];
 }
}

const bufferList = new BufferList();
/****:100:****/

/****:70:****/
class ChordCardEditor extends React.Component {
 constructor() {
  super();
  this.currentFchord = g.cleanChords[0];
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  try {
  const chordNames = Object.keys(g.chords).sort();
  
  return [
   ce(`button`, {
    className: `btn btn-secondary`,
    onClick: ev => {
     const chordName = prompt(`Введите название аккорда`);
     if (chordName == null) return;
     
     g.chords[chordName] = g.chords[chordName] || [0];
     mylib.setExecs([{
      track: [`chords`, chordName],
      value: g.chords[chordName],
      method: `set`,
      reason: [0.1, chordName]
     }]);
          
     g.ss();
    }
   },`Новый, ${chordNames.length + 1}-й аккорд`),
   ce(`div`, {},
    [
     ce(`div`, {className: `btn btn-group`},
      g.cleanChords.map(chord => ce(`button`, {
       className: `btn btn-${this.currentFchord === chord ? `primary` : `secondary`}`,
       onClick: ev => {
        this.currentFchord = chord;
        this.fu();
       }
      }, chord))),
     chordNames.filter(chordName => chordName[0] === this.currentFchord).map(chordName =>
      ce(`div`,
       {
        key: chordName,
        id: chordName,
        className: `chord-application`,
        style: {
         backgroundColor: g.chords[chordName].length === 1 ? `green` : `rgba(0,0,0,0)`
        }
       },
       [
       // ce(`img`, {src: `apps/cm/chords/${chordName}.jpg`}),
       ce(ChordCard, {
        isRedaction: true,
        chordName
       })
       ]
      )
     )
    ]
   )
  ];
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}
/****:70;****/

/****:50;****/

class ChordCard extends React.Component {
 constructor() {
  super();
  this.stringsCount = 6;
 }/****:50:****/
 fu(prev) {
  const chordName = this.props.chordName;
  const track = g.chords[chordName].slice(0);
  
  while (track.length > 1 && !track[track.length - 1]) {
   track.length--;
  }
  
  mylib.setExecs([{
   track: [`chords`, chordName],
   prev,
   value: track,
   method: `set`,
   reason: [0.11, chordName]
  }]);
  this.forceUpdate();
  g.ss();
 }/****:50;****/
 getPoints(poss, i) {
  const x = i * this.betweenLad - this.betweenLad / 2;
  if (!~poss)
   return ce(`polyline`, {
    className: `chord-point`,
    points: `${x},${this.betweenStr / 2} ${x},${this.betweenStr * this.stringsCount - this.betweenStr / 2}`
   });
  const isNum = mylib.isNum(poss)
  if (isNum) poss = [poss];
  
  const points = [];
  const chordName = this.props.chordName;
  const track = g.chords[chordName] || [0];
  
  poss.forEach((pos) => {
   const y = this.betweenStr * pos - this.betweenStr / 2;
   points.push(
    ce(`polyline`, {
     className: `chord-point`,
     points: `${x},${y} ${x},${y}`,/****:50:****/
     onClick: this.props.isRedaction ? ev => {
      const prev = track.slice(0);
      if (isNum) {
       track[i] = 0;
      } else {
       track[i].splice(track[i].indexOf(pos), 1);
       if (track[i].length === 0) track[i] = 0;
       else if (track[i].length === 1) track[i] = track[i][0];
      }
      this.fu(prev);
     } : ()=>{}/****:50;****/
    }));
  });
  return points;
 }
 render() {
  try {
  const chordName = this.props.chordName || `?`;
  const track = g.chords[chordName.replace(/B/, `A#`)] || [0];
  
  this.betweenStr = 10 + (track[0] * .3);
  this.betweenLad = 50 - (track[0] * .7);
  const isFLad = track[0] === 0;
  
  /****:50:****/
  const isRedaction = this.props.isRedaction;/****:50;****/
  const strings = [];
  const lads = [];
  
  for (let i = 1; i <= this.stringsCount; i++)
   strings.push(i);
  
  for (let i = 1; i <= (track.length > 4 ? track.length - 1 : 3); i++)
   lads.push(i);
  
  const stringLength = this.betweenLad * lads.length;
  const ladHeight = this.stringsCount * this.betweenStr;
  
  return [
    ce(`span`, {
     className: `first-lad-counter`,/****:50:****/
     onClick: en => {
      const prev = track.slice(0);
      const lad = prompt(`Стартовый лад:`, track[0] + 1);
      if (lad == null) return;
      track[0] = (Math.abs(parseInt(lad)) || 1) - 1;
      this.fu(prev);
     }/****:50;****/
    }, chordName + (track[0] ? ` [${track[0] + 1}]` : ``)),
   ce(`svg`,
   {
    className: `chord-board`,
    style: {
     width: stringLength + 3.5,
     height: this.betweenStr * this.stringsCount/****:50:****/ + (isRedaction ? this.betweenLad / 5 + 3 : 0)/****:50;****/
    }
   },
   [
    ce(`polyline`, { // zero line
     points: `2,0 2,${this.betweenStr * this.stringsCount}`,
     className: !isFLad ? `chord-lad` : `chord-zero-line`,
    }),
    lads.map(ladPos => {
     const x = this.betweenLad * ladPos;
     
     return ce(`polyline`, {
      points: `${x},0 ${x},${this.betweenStr * this.stringsCount}`,
      className: `chord-lad`,
     });
    }),
    strings.map(stringPos => {
     const y = this.betweenStr * stringPos - this.betweenStr / 2;
     
     return ce(`polyline`, {
      points: `0,${y} ${stringLength + 3.5},${y}`,
      className: `chord-string`,
      strokeWidth: .5 + stringPos / 5
     })
    }),
    track.map((stage, stagei) => stagei === 0 || !stage ? null : this.getPoints(stage, stagei)),
    /****:50:****/!isRedaction
     ? null
     : [
      lads.map((lad) => {
       const x1 = lad * this.betweenLad - this.betweenLad / 2;
       const y1 = ladHeight;
       const wt = this.betweenLad / 5;
       const x2 = x1 - wt / 2;
       const y2 = y1 + wt;
       const x3 = x1 + wt / 2;
       const isBare = !~track[lad];
       const color = isBare ? `white` : `red`;
       
       return ce(`polygon`, {
        key: `chord-bare-adder-${lad}`,
        className: `chord-bare-adder`,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y2}`,
        style: {
         fill: color,
         stroke: color
        },
        onClick: event => {
         const prev = track.slice(0);
         track[lad] = isBare ? 0 : -1;
         this.fu(prev);
        }
       })
      }),
      strings.map((strNum, strNumi, strNuma) => {
       return lads.map(ladNum => {
        const lad = track[ladNum];
        
        if (lad == null || !~lad || mylib.isNum(lad) ? lad === strNum : ~lad.indexOf(strNum)) return null;
        const x = ladNum * this.betweenLad - this.betweenLad / 2;
        const y = strNum * this.betweenStr - this.betweenStr / 2;
        
        return ce(`polyline`, {
         key: `chord-shadow-point-${ladNum}-${strNumi}`,
         className: `chord-shadow-point`,
         points: `${x},${y} ${x},${y}`,
         onClick: ev => {
          const prev = track.slice(0);
          if (track[ladNum + 1] == null) track[ladNum + 1] = 0;
          
          if (lad == null || lad < 1) track[ladNum] = strNum;
          else if (mylib.isNum(lad)) track[ladNum] = lad === 0 ? strNum : [track[ladNum], strNum];
          else {
           lad.push(strNum);
           lad.sort((a, b) => a - b);
          }
          this.fu(prev);
         }
        })
       })
      })
     ]/****:50;****/
   ])
  ];
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}

g.transportChords = {
 Ab: `G#`,
 Bb: `A#`,
 Cb: `H`,
 Db: `C#`,
 Eb: `D#`,
 Fb: `E`,
 Gb: `F#`,
 Hb: `A#`,
}

class AreaLine extends React.Component {
 constructor(props){
  super();
  this.State = g.db.settings.styleBoxes[props.boxName][props.areaName];
  this.state = this.State;
 }
 onclick(key, val, del) {
  this.setState({
   [key]: val
  });
  mylib.setExecs([{
   track: [`settings`, `styleBoxes`, this.props.boxName, this.props.areaName, key],
   prev: this.state[key],
   value: val,
   method: `set`,
   reason: [10.4, key, this.props.areaName === `chords` ? `аккордов` : `текстов`, this.props.boxName]
  }]);
  this.state[key] = this.State[key] = val;
  g.ss();
 }
 render(){
  return ce(`div`, {},
   [
    ce(`h4`, {}, `${this.props.areaName}:`),
    Object.keys(styles).map(styleName => {
     if(g.blockedStyles[this.props.areaName].indexOf(styleName)> -1) return null;
     
     switch(styles[styleName].type){
      case `cb`:
       return ce(`button`,
        {
         key: styleName,
         className: `btn btn-${this.state[styleName] === styles[styleName].true ? `success` : `secondary`}`,
         onClick: () => this.onclick(styleName, styles[styleName][!(this.state[styleName] === styles[styleName].true)]),
         style: {[styleName]: styles[styleName].true}
        },
        styles[styleName].label
       );
      case `group`:
       return ce(`div`,
        {
         key: styleName,
         className: `btn btn-group`
        },
        Object.keys(styles[styleName].variants).map(variantLabel =>
         ce(`button`,
          {
           key: `${styleName}-${variantLabel}`,
           className: `flex-centers btn btn-${this.state[styleName] === styles[styleName].variants[variantLabel] ? `success` : `secondary`}`,
           onClick: () => this.onclick(styleName, styles[styleName].variants[variantLabel]),
           style: {[styleName]: styles[styleName].variants[variantLabel]}
          },
          ce(`span`, {}, variantLabel)
         )
        )
       );
     }
    })
   ]
  );
 }
}

/****:50:****/
class StyleBox extends React.Component {
 constructor(props){
  super();
  this.state = g.db.settings.styleBoxes[props.boxName];
 }
 render(){
  return ce(`div`,
   {style: {border: `1px solid grey`}},
    [
     ce(`h3`, {}, this.props.boxName),
     Object.keys(this.state).map(areaName =>
      ce(AreaLine,
       {
        key: `style-box-${this.props.boxName}-${areaName}`,
        boxName: this.props.boxName,
        areaName: areaName
       }
      )
     )
    ]
   );
 }
}

/****:70:****/

class Settings extends React.Component {
 constructor() {
  super();
  this.state = g.db.settings;
 }
 render() {
  try {
  let navigation = g.db.settings.navigation;
  
  return ce(`div`,
   {},
    [
     ce(`h3`, {}, `Сортировка`),
     Object.keys(this.state.navigation).map(nav =>
      ce(`div`, {},
       [
        g.translate[nav],
        mylib.isStr(this.state.navigation[nav]) ?
         ce(`select`,
          {
           className: `btn`,
           onChange: event => {
            mylib.setExecs([{
             track: [`settings`, `navigation`, nav],
             prev: navigation[nav],
             value: event.target.value,
             method: `set`,
             reason: [10.1]
            }]);
            navigation[nav] = event.target.value;
            this.setState({navigation});
            g.ss();
           },
           defaultValue: navigation[nav]
          },
          g.sortFields[nav].map(field => ce(`option`, {value: field}, g.translate[field]))
         ) :
        ce(`button`,
         {
          className: `btn`,
          onClick: event => {
           
           mylib.setExecs([{
            track: [`settings`, `navigation`, nav],
            prev: !!navigation[nav],
            value: !navigation[nav],
            method: `set`,
            reason: [10.2]
           }]);
           navigation[nav] = !navigation[nav];
           this.setState({navigation});
           g.ss();
          }
         },
         g.translate[navigation[nav] ? `sortUp` : `sortDown`]
        )
       ]
      )
     ),
     ce(`h3`, {}, `Стили`),
     ce(`div`, {className: `btn-group`},
      [
       ce(`button`,
        {
         className: `btn btn-primary glyphicon glyphicon-plus`,
         onClick: event => {
          let styleBoxes = g.db.settings.styleBoxes;
          styleBoxes[event.target.nextSibling.value] = {chords: {}, texts: {}};
          
          mylib.setExecs([{
           track: [`settings`, `styleBoxes`, event.target.nextSibling.value],
           value: {chords: {}, texts: {}},
           method: `set`,
           reason: [10.3]
          }]);
          event.target.nextSibling.value = ``;
          this.setState({styleBoxes});
          g.ss();
         }
        }, `add`
       ),
       ce(`input`,
        {
         className: `btn`,
         style: {
          border: `solid 1px grey`
         }
        }
       )
      ]
     ),
     Object.keys(g.db.settings.styleBoxes).map(boxName => ce(StyleBox, {key: boxName, boxName: boxName}))
    ]
   );
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}

/****:70;****/

class Changes extends React.Component {
 constructor() {
  super();
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  const execs = mylib.execs;
   
  return [
    ce(`input`,
     {
      type: `button`,
      className: `mbtn mblock msm btn btn-sm btn-success`,
      value: `Отправить отмеченные изменения`,
      disabled: execs.length === 0 || !execs.some(ex => !ex.del),
      onClick: event => {
       mylib.loadExecs((r)=> {
        if (!r.ok) mylib.consl(r);
        setTimeout(()=>{
         if (mylib.execs.some(ex => ex.del) && confirm(`Сбросить неотмеченные изменения?`)) mylib.execs = [];
         g.ss();
         this.fu();
         mylib.setLS(g._.savedExecsLsName, null);
        },10);
       }, `@cm`, g._.savedExecsLsName);
       mylib.setLS(ls_.navigation, g.db.navigation);
      }
     }
    ),
   execs.map(exec => {
    return ce(`div`,
     {
      onClick: ()=> {
       exec.del = !exec.del;
       this.fu();
      }
     },
     [
      ce(`input`, {
       type: 'checkbox',
       checked: !exec.del
      }),
      ce(
       'label',
       {},
       mylib.getReason(exec.reason, g.reasons))
     ])
   })
  ];
 }
}

/****:50;****/
/****:3:****/

g.translations = {
 viewDefaults: [
  {
   styleName: `overflow`,
   name: ``,
   value: `visible`,
   type: null,
   post: ``,
  },
  {
   styleName: `fontWeight`,
   name: ``,
   value: `bold`,
   type: null,
   post: ``,
  },
  {
   styleName: `textAlign`,
   name: ``,
   value: `center`,
   type: null,
   post: ``,
  },
  {
   styleName: `whiteSpace`,
   name: ``,
   value: `pre`,
   type: null,
   post: ``,
  },
  {
   styleName: `fontFamily`,
   name: `Шрифт`,
   value: `calibri, georgia, times, serif, verdana, arial`,
   type: `text`,
   post: ``,
  },
  {
   styleName: `background`,
   name: `Фон`,
   value: `black`,
   type: `color`,
   post: ``,
  },
  {
   styleName: `color`,
   name: `Цв. шрифта`,
   value: `white`,
   type: `color`,
   post: ``,
  },
  {
   styleName: `lineHeight`,
   name: `Меж.строк`,
   type: null,
   value: 1.5,
   min: 1,
   max: 2,
   step: .1,
   post: ``,
  },
  {
   styleName: `fontSize`,
   name: `Размер шрифра`,
   type: null,
   value: .09,
   min: .01,
   max: .3,
   step: .01,
   post: `px`
  },
 ],
 stack: [],
 currWini: 0,
};

g.styleCurr = {
 winBlock: {
  dis: 'rgba(0,0,0,0)',
  able: 'blue',
 }
};

class IWindow {
 constructor(name, e) {
  this.win = window.open(undefined, `win-${name}`, `top=${e.view.screenTop + e.clientY + 70},left=${e.view.screenLeft + e.clientX - 95},width=100,height=100`);
  this.doc = this.win.document;
  
  this.win.onclick = () => this.doc.body[mylib.takePref(`RequestFullScreen`)]();
  
  this.oscreen = document.createElement(`div`);
  this.screen = document.createElement(`div`);
  
  this.doc.body.appendChild(this.oscreen);
  this.oscreen.appendChild(this.screen);
  
  this.doc.body.style.margin = 0;
  this.doc.body.style.background = `black`;
  
  this.oscreen.style.width = `100vw`;
  this.oscreen.style.height = `100vh`;
  this.oscreen.style.display = `flex`;
  this.oscreen.style.justifyContent = `space-around`;
  
  this.screen.style.alignSelf = `center`;
  
  this.name = name;
  this.initName = name;
  this.view = {};
  
  this._visible = true;
  this._equiv = true;
  
  g.translations.viewDefaults.forEach(({styleName, value, post}) => {
   this.screen.style[styleName] = `inherit`;
   this.view[styleName] = value;
  });
  
  this.win.addEventListener(`resize`, () => this.resizeDiv.call(this, true));
  this.win.addEventListener(`unload`, () => this.onclose.call(this));
  window.addEventListener(`resize`, () => this.resizeDiv.call(this, false));
  window.addEventListener(`unload`, () => this.close.call(this));
 }
 
 setAsCurrWin() {
  const nextd = window[`id_block.${this.initName}`];
  
  if (nextd) {
   const currd = window[`id_block.${g.translations.currWini}`];
   currd && (currd.style.borderColor = g.styleCurr.winBlock.dis);
   
   nextd.style.borderColor = g.styleCurr.winBlock.able;
   const y = parseInt(window.scrollY);
   const top = nextd.offsetTop;
   const ch = nextd.clientHeight;
   const vh = window.innerHeight;
   const pkf = .1;
   
   if (vh >= ch && (y + vh < top + ch * pkf || y > top + ch - ch * pkf)) nextd.scrollIntoView();
  }
  g.translations.currWini = parseInt(this.initName);
  
 }
 
 setCurrCom(comw) {
  const com = g.sort('Coms').find(c => c.w === comw);
  
  this.list = com.t;
  this.tot(0);
  this.currComw = comw;
  this.listView.forceUpdate();
 }
 
 set curri(next = 0) {
  this._curri = next < 1 ? 0 : next >= this.list.length ? this.list.length - 1 : next;
 }
 
 get curri() {
  return this._curri || 0;
 }
 
 set list(next = []) {
  if (!this._list || this._list[0] !== next[0]) {
   this._list = next;
   this.curri = 0;
  }
 }
 
 get list() {
  //// win.list = com.o.map(o => g.compactText(com.t[o.t]));
  return this._list || [];
 }
 
 nextt() {
  this.tot(this.curri + 1);
 }
 
 prevt() {
  this.tot(this.curri - 1);
 }
 
 firstt() {
  this.tot(0);
 }
 
 lastt() {
  this.tot(this.list.length - 1);
 }
 
 tot(next = this._curri) {
  const nextd = window[`id_win.${this.initName}.${next}`];
  
  if (nextd) {
   this.curri = next;
   this.text = this.text;
  
   this.listView.fu();
   const nextParent = nextd.parentElement;
   nextParent.scrollLeft = nextd.offsetLeft + nextd.clientWidth / 2 - nextParent.clientWidth / 2;
  }
 }
 
 visiblet(cb = e=>e) {
  this._visible = !this._visible;
  this.text = this.text;
  cb(this._visible);
  g.context.translations.fu();
 }
 
 equiv(cb = e=>e) {
  this._equiv = !this._equiv;
  this.text = this.text;
  cb(this._equiv);
  g.context.translations.fu();
 }
 
 set div(element) {
  if (element) {
   this._div = element;
   
   setTimeout(() => this.resizeDiv(), 10);
   g.translations.viewDefaults.forEach(({styleName, value, post}) => {
    this.div.style[styleName] = `inherit`;
   });
  }
 }
 
 get div() {
  return this._div;
 }
 
 set text(text = this.text) {
  const ntext = text.replace(/_/g, ``);
  
  if (this._equiv) this.screen.innerText = ntext;
  
  this.div.innerText =
   this._text = ntext;
  this.upView();
 }
 
 get text() {
  return this._visible ? this.list[this.curri] : ``;
 }
 
 resizeDiv(isUpViewReq) {
  if (!g.isPhase(g.Phase.Translations)) return;
  const {
   offsetParent: {
    clientHeight: parenth,
    clientWidth: parentw
   }
  } = this._div;
  
  const winw = this.win.innerWidth;
  const winh = this.win.innerHeight;
  
  const ls = winw > winh;
  
  const neww =  ls ? parentw : parentw * (winw / winh);
  const newh = !ls ? parenth : parenth * (winh / winw);
  
  this.odiv.style.width = `${neww}px`;
  this.odiv.style.height = `${newh}px`;
  this.upView(null, isUpViewReq);
 }
 
 upView(updates = null, isReq) {
  try{
  if (!g.isPhase(g.Phase.Translations) || !this.oscreen || !this.odiv) return;
  
  if (!this._div) throw Error(`There is not Div in "${this._name}" screen`);
  const isReset = updates == null;
  
  g.translations.viewDefaults.forEach(({styleName, post}) => {
   if (!isReset && !(styleName in updates)) return;
   const indicator = `clientWidth`;
   const max = .9;
   
   let sfs = 0;
   let dfs = 0;
   
   if (styleName === `fontSize`) {
    const ds = parseFloat(this.odiv.style.fontSize);
    const dw = ((this.odiv.clientWidth * max) * ds) / this.div.clientWidth;
    const dh = ((this.odiv.clientHeight * max) * ds) / this.div.clientHeight;
    
    const ss = parseFloat(this.oscreen.style.fontSize);
    const sw = ((this.oscreen.clientWidth * max) * ss) / this.screen.clientWidth;
    const sh = ((this.oscreen.clientHeight * max) * ss) / this.screen.clientHeight;
    
    dfs = dw > dh ? dh : dw;
    sfs = sw > sh ? sh : sw;
   }
   
   const upvalue = isReset
    ? this.view[styleName] == null
     ? view.value
     : this.view[styleName]
    : updates[styleName];
   
   this.odiv.style[styleName] = post ? `${dfs || upvalue * this.odiv[indicator]}${post}` : upvalue;
   
   if (isReq == null ? this._equiv : isReq) this.oscreen.style[styleName] = post ? `${sfs || upvalue * this.oscreen[indicator]}${post}` : upvalue;
   
   this.view[styleName] = upvalue;
  });
  }catch(e){alert(e.stack);throw e;}
 }
 
 onclose() {
  window.setTimeout(() => g.context.translations.fu(), 10);
  window.removeEventListener(`resize`, this.resizeDiv);
  window.focus();
 }
 
 close() {
  this.win.close();
  this.onclose();
 }
 
 focus() {
  this.win.focus();
 }
 
 set win(o) {
  if (this._win) throw Error(`You cannot set win but in constructor`);
  else if (!o) throw Error(`win is empty!`);
  else this._win = o;
 }
 
 get win() {
  return this._win;
 }
 
 set name(s) {
  this._name = s;
 }
 
 get name() {
  return this._name;
 }
}

g.compactText = txt => 
 txt
  .replace(/_/g, ``)
  .replace(/\d+\./gm, ``);


g.onclickTranslations = event => {
 event.preventDefault();
 const currWin = g.translations.stack[g.translations.currWini];
 const shiftKey = event.shiftKey;
 
 switch (event.keyCode) {
  case 37: // arr left
  // case 38: // arr up
   if (!shiftKey) currWin.prevt();
   else g.translations.stack[g.translations.currWini - 1].setAsCurrWin();
   break;
  
  case 39: // arr right
  // case 40: // arr down
   if (!shiftKey) currWin.nextt();
   else g.translations.stack[g.translations.currWini + 1].setAsCurrWin();
   break;
  
  case 69: // e
   currWin.equiv();
   break;
  
  case 27: // esc
   event.ctrlKey ?
    confirm('Закончить Трансляцию?') && currWin.close() :
    currWin.visiblet();
   break;
   
  case 86: // v
   currWin.visiblet();
   break;
  
  case 70: // f
   currWin.focus();
   break;
 }
 
 if (event.keyCode >= 48 && event.keyCode <= 57) {
  const nind = (event.keyCode - 48 || 11) - 1;
  if (event.shiftKey) g.translations.stack[nind].setAsCurrWin();
  else currWin.tot(nind);
 }
 
};

class ModelTool {
 constructor(O, defaults) {
  for (const df in defaults) this[df] = !O || O[df] === undefined ? defaults[df] : O[df];
 }
}

class TranslationListenerLi extends ModelTool {
 constructor(O) {
  super(O, {
   name: '',
   cb: ()=>{},
  });
 }
}

class TranslationListener extends ModelTool {
 constructor(O) {
  super(O, {
   state: false,
   list: [],
  });
 }
}

g.listen = {
 translations: new TranslationListener({
  state: false,
  list: [
   new TranslationListenerLi({
    name: 'keyup',
    cb: g.onclickTranslations,
   }),
  ],
 }),
};


g.switchListeners = (listen = new TranslationListener(), isAdd = true) => {
 const todo = isAdd ? 'addEventListener' : 'removeEventListener';
 listen.list.forEach(li => document[todo](li.name, li.cb));
};

class Translations extends React.Component {
 constructor() {
  super();
  g.context.translations = this;
  g.switchListeners(g.listen.translations, true);
  g.currentTranslationWin = 0;
 }
 
 fu(cb) {
  cb && cb();
  this.forceUpdate();
 }
 
 componentWillUnmount() {
  g.switchListeners(g.listen.translations, false);
 }
 
 render() {
  const com = this.props.ccom;
  
  return ce(
   `div`,
   {},
   [
    ce(
     `button`,
     {
      className: `btn btn-success`,
      onClick: e => this.fu(() => {
       const len = g.translations.stack.length;
       g.translations.stack.push(new IWindow(len, e));
       if (len === 0) g.translations.stack[0].setAsCurrWin();
       g.translations.stack[len].list = com.t;
      }),
     },
     `Новая трансляция`
    ),
    
    ce(
     `button`,
     {
      className: `btn btn-danger`,
      disabled: g.translations.stack.length === 0,
      onClick: ev => {
       if (!confirm(`Закончить все трансляции?`)) return;
       g.translations.stack.forEach(win => win && win.close());
       g.translations.stack = [];
       this.fu();
      }
     },
     `Закончить все трансляции`
    ),
    
    g.translations.stack.map((win, wini) => {
     
     setTimeout(() => win.upView());
     
     return win && ce(
      `div`,
      {
       key: `win-${win.initName}`,
       id: `id_block.${win.initName}`,
       style: {
        padding: `.3em`,
        border: `solid 3px ${win.initName == g.translations.currWini ? g.styleCurr.winBlock.able : g.styleCurr.winBlock.dis}`,
       },
       onClick: () => win.setAsCurrWin(),
      },
      win.win.closed ?
      ce(
       `div`,
       {style:{color: `red`}},
       `Завершено`
      ) :
      ([
       ce(
        `button`,
        {
         key: `win.close-${win.initName}`,
         className: `btn btn-danger`,
         onClick: event => confirm(`Закончить трансляцию "${win.name}"?`) && win.close()
        },
        `×`
       ),
       ce(
        `strong`,
        {
         key: `win.name-${win.initName}`,
         className: `as-text`,
        },
        win.name
       ),
       
       ce(
        `div`,
        {
         key: `win.block-${win.initName}`,
         className: `window-emulator`,
        },
        [
         
         ce(
          `div`,
          {
           key: `win.par-${win.initName}`,
           className: `window-emulator-parent`,
          },
          ce(
           `div`,
           {
            key: `win.odiv-${win.initName}`,
            className: `window-emulator-oscreen`,
            ref: element => win.odiv = element || win.odiv,
           },
           ce(
            `div`,
            {
             key: `win.div-${win.initName}`,
             className: `window-emulator-screen`,
             ref: element => {
              win.div = element || win.div;
              win.tot();
             },
            }
           )
          )
         ),
         
         ce(
          `div`,
          {
           key: `win.ctrl-${win.initName}`,
           className: `window-emulator-ctrl`,
          },
          [
           g.translations.viewDefaults.map(({styleName, name, max, min, step, value, type}) => 
            type === null ? null : ce(
             `div`,
             {
              key: `win.view-${win.initName}.${styleName}`,
             },
             [
              `${name}: `,
              ce(
               `input`,
               {
                type, max, min, step,
                defaultValue: win.view[styleName],
                onChange: event => {
                 win.upView({
                  [styleName]: event.target.nextSibling.innerText = event.target.value
                 });
                }
               }
              ),
              
              ce(
               `label`,
               {
                key: `win.view.label-${win.initName}.${styleName}`,
                className: ``,
                style: {
                 fontSize: type === `text` ? 0 : `1em`
                },
                onChange: event => event
               },
               win.view[styleName]
              ),
             ]
            )
           ),
           ce(
            `div`,
            {
             key: `win.${win.initName}.com`,
            },
            [
             ce(
              `button`,
              {
               key: `win.${win.initName}.com.current`,
               className: `btn btn-success`,
               onClick: ev => win.setCurrCom(com.w),
              },
              com.n
             ),
             ce(
              'div',
              {
               key: `win.${win.initName}.com.marks-list`,
               style: {
                maxHeight: `10em`,
                overflow: 'auto',
                height: `100vh`,
               }
              },
              ce(Marks, {
               class: ` `,
               onClick: comw => win.setCurrCom(comw),
              })
             )
            ]
           ),
          ]
         ),
        ]
       ),
       ce(
        `div`,
        {
         key: `win.down.${win.initName}`,
         className: `win-down`,
        },
        [
         ce(
          `button`,
          {
           className: `btn ${win._visible ? `btn-success` : `btn-secondary`}`,
           onClick: e => 
            win.visiblet(isEq => {
             e.target.classList.toggle(`btn-success`);
             e.target.classList.toggle(`btn-secondary`);
            }),
          },
          `vis`
         ),
         ce(
          `button`,
          {
           className: `btn ${win._equiv ? `btn-success` : `btn-secondary`}`,
           onClick: e =>
            win.equiv(isEq => {
             e.target.classList.toggle(`btn-success`);
             e.target.classList.toggle(`btn-secondary`);
            }),
          },
          `==`
         ),
         ce(
          `div`,
          {
           className: `btn btn-group`,
          },
          [
           ce(
            `button`,
            {
             className: `btn btn-success`,
             onClick: ev => win.prevt(),
            },
            `<`
           ),
           ce(
            `button`,
            {
             className: `btn btn-success`,
             onClick: ev => win.nextt(),
            },
            `>`
           ),
          ]
         ),
         ce(TranslationList, {win}),
        ]
       ),
      ])
     );
    })
   ]);
 }
}

class TranslationList extends React.Component {
 constructor(props) {
  super();
  props.win.listView = this;
 }
 
 fu() {
  this.forceUpdate();
 }
 
 render() {
  const win = this.props.win;
  
  return ce(
    `div`,
    {
     key: `window-emulator-text.list.${win.initName}`,
     className: `window-emulator-text-list`,
    },
    win.list.map((text, texti) => {
     return ce(
      `div`,
      {
       key: `window-emulator-text.list.${win.initName}.${texti}`,
       id: `id_win.${win.initName}.${texti}`,
       className: `window-emulator-text-list-unit ${win.curri !== texti ? '' : 'active'}`,
       onClick: ev => win.curri !== texti && win.tot(texti),
      },
      text
     );
    })
   );
 }
}
/****:3;****/

class News extends React.Component {
 constructor() {
  super();
  g.context.news = this;
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  return g.news.execs == null
   ? null
   : ce(`div`,
    {},
    [
     g.news.execs.map(ex => {
      return ce(`p`, {}, mylib.getReason(ex.reason, g.reasons/****:50:****/, true/****:50;****/));
     })
    ])
 }
}

class Marks extends React.Component {
 constructor() {
  super();
  g.context.marks = g.context.marks || this;
  this.state = {
   isOpened: false,
  };
 }
 fu(neww) {
  if (neww) {
   const index = g.marks.s.findIndex(comw => neww === comw);
   if (!~index) g.marks.s.push(neww);
   else g.marks.s.splice(index, 1);
   g.marks.s = g.marks.s.filter(w => w);
   mylib.setLS(ls_.marks, g.marks);
  }
  this.forceUpdate();
 }
 render() {
  const ccat = g.current(`Cat`);
  const coms = !ccat ? null : g.sort(`Coms`).filter(com => !ccat.w ? true : ~ccat.s.indexOf(com.w));
  const ccomw = g.db.navigation[g.Phase.Com];
  
  return !g.marks.s.length || !coms ?
   null :
   [
   ce(
    `div`,
    {
     className: this.props.class || `marks-box ${this.state.isOpened ? 'opened' : ''}`
    },
    ce(
     'button',
     {
      className: 'open-button mbtn msm mbtn-ok',
      onClick: e => this.setState({isOpened: !this.state.isOpened}),
     },
     'm',
    ),/****:100:****/
    ce(
     'button',
     {
      className: 'print-button mbtn msm mbtn-ko',
      onClick: e => e,
     },
     'p',
    ),/****:100;****/
    ce(
     'div',
     {
      className: 'list'
     },
    g.marks.s.map(comw => {
     const comi = coms.findIndex(com => com.w === comw);
     if (!~comi) return null;
     const com = coms[comi];
      
     return [
      ce(
       `button`,
       {
        key: `mark-${comw}`,
        className: `mbtn mmd com-button`,
        onClick: this.props.onClick
         ? ev => this.props.onClick(comw)
         : ev => {
          try {
          g.ss({
           phase: g.Phase.Com,
           [g.Phase.Com]: comw
          });
          mylib.loc({com: comw});
          
          g.context.Com.setState(com);
          this.setState({isOpened: false});
          } catch(e) {alert(e.stack);}
         }
       },
       com.n,
       ce(
        'span',
        {
         className: 'com-number',
         style: {
          fontWeight: ccomw === comw ? 'bold' : ''
         }
        },
        comi - -1
       ),
      ),
     ];
    })
    )
   ),
   ce(
    'div',
    {
     className: 'paranja',
     onClick: e => this.setState({isOpened: false}),
    }
   )
  ];
 }
}

const lettersTranslator = {"z":"я","x":"ч","c":"с","v":"м","b":"и","n":"т","m":"ь",",":"б",".":"ю","a":"ф","s":"ы","d":"в","f":"а","g":"п","h":"р","j":"о","k":"л","l":"д",";":"ж","'":"э","q":"й","w":"ц","e":"у","r":"к","t":"е","y":"н","u":"г","i":"ш","o":"щ","p":"з","[":"х","]":"ъ"};

class StartPage extends React.Component {
 constructor() {
  super();
  g.context.navigation = this;
  this.state = g.db.navigation;
 }
 fu() {
  this.forceUpdate();
 }
 render() {
  try {
  g.tryExistance();
  const ccat = g.current(`Cat`);
  const ccom = g.current(`Com`);
  
  const nav = g.db.navigation;
  if (nav.phase < 3) setTimeout(() => {
   const view = document.getElementById(nav[nav.phase -  -1].toString())
   if (view) view.scrollIntoView();
  }, 100);
  
  return ce(
   `div`,
   {
    className: `app-container phase-${nav.phase}`
   },
   ce(Marks, {key: `marks-list`}),
   ce(
    'button',
    {
     key: 'bb-button',
     className: 'bb-button',
     onClick: e => {
      const loc = {};
      if (g.isPhase(g.Phase.Com)) loc.com = '';
      if (g.isPhase(g.Phase.Cat)) loc.cat = '';
      
      mylib.loc(loc);
      g.ss({
       phase: (nav.phase > 9 ? 3 : nav.phase - 1) || 1
      })
     },
    },
    ''
   ),
    
    Object.keys(g.Comps).map(phase => {
     // const phase = g.Phase[phaseName];
     
     return ce(
      `div`,
      {
       key: `phase-body.${phase}`,
       className: `phase-body phase-${phase}`
      },
      ce(g.Comps[phase], {ccom, ccat}),/****:50:****/
      ce(
       'div',
       {
        key: `changes-list.${phase}`
       },
       ce(Changes, {key: `changes-list.${phase}`})
      ),/****:50;****/
     );
    }),
    null && ce(
     `div`,
     {},
     [
      ce(`hr`),
      g.sort(`Coms`).map(com => {
       const revLen = g.getRevizionList(com).filter(a => a[1]).length;
       return revLen < 1 ? null : ce(
        `div`,
        {
         onClick: e => g.ss({phase: g.Phase.Editor, [g.Phase.Com]: com.w})
        },
        // `${com.n} ${revLen}`
       );
      })
     ]
    ),
  );
 } catch(e) {confirm(e.stack) && delete localStorage[ls_.navigation];}
 }
}

if (navigator.userAgent.toLowerCase().search(/android|mobile/)) {
 document.querySelector('html').style.setProperty('--search-panel-height', '300px');
}

(loc => {
if (loc.cat != null) {
 const catw = parseInt(loc.cat);
 if (catw === 0 || g.db.cols.cats.some(cat => cat.w === catw)) {
  g.db.navigation[g.Phase.Cat] = catw;
  if (g.isPhase(g.Phase.Cats)) g.db.navigation.phase = g.Phase.Cat;
 } else mylib.loc({cat: ''});
}

if (loc.com != null) {
 const comw = parseInt(loc.com);
 if (g.db.cols.coms.some(com => com.w === comw)) {
  g.db.navigation[g.Phase.Com] = comw;
  if (g.isPhase(g.Phase.Cats, g.Phase.Cat)) g.db.navigation.phase = g.Phase.Com;
 } else mylib.loc({com: ''});
}
})(mylib.loc());

mylib.preventWindowBackrun(() => {
 const phase = g.db.navigation.phase;
 const jumps = {/****:50:****/
  [g.Phase.Editor]: [g.Phase.Com],/****:50;****/
  [g.Phase.Com]: [g.Phase.Cat],
 };
 if (phase !== g.Phase.Cats)
 g.ss({
  phase: jumps[phase] || g.Phase.Cats
 })
});

g.Comps = {
 1: Cats,
 2: Cat,
 3: Com,/****:3:****/
 4: News,
 5: Translations,/****:3;****//****:50:****//****:70:****/
 10: Settings,
 14: ChordCardEditor,/****:70;****/
 11: Editor,
 12: Changes,
 13: Changes,/****:50;****/
};

if (mylib.isUnd(g.Comps[g.db.navigation.phase])) g.db.navigation.phase = g.Phase.Cats;

g.appBox = document.querySelector(`.application`);

g.searchAll = (reg, O) => {
 const R = [];
 for (const i in O) reg.test(O[i]) && R.push(i);
 return R;
}

ReactDOM.render(ce(StartPage), g.appBox);

/****:50:****/
const savedExecs = mylib.getLS(g._.savedExecsLsName);
if (savedExecs) {
 mylib.setExecs(savedExecs);
 mylib.applyExecs(savedExecs, g.db);
 g.ss();
}
/****:50;****/

}catch(e){alert(e.stack)}





