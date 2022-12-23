try{
mylib.cre({
 similars: {
  in: `html`
 },
 input: {
  class: `type-input`,
  on: {
   focus: event => {
    g.blured = false;
    g.flash.Nav.forceUpdate();
   },
   blur: event => {
    g.blured = true;
    g.flash.Nav.forceUpdate();
   },
   keydown: event => g.onTypeInputKeyDown(event),
   keyup: event => g.onTypeInputKeyUp(event)
  }
 },
 style: {
  class: `main`
 }
});

const RC = React.Component,
 ce = React.createElement,
 g = {
  flash: {},
  lsStateNames: {
   start: `start`,
   nav: `nav`,
   Verses: `Verses`,
   Timer: `Timer`
  },
  stateNames: [`start`, `nav`, `Verses`, `Timer`],
  books: {
   Rom: [32,29,31,25,21,23,25,39,33,21,36,21,14,26,33,24],
   Ekk: [18,26,22,17,19,12,29,17,18,20,10,14]
  },
  init: {
   Timer: {
    left: 865,
    top: 685,
    fontSize: 340,
    current: 0,
    phase: `stop`
   },
   Verses: {
    left: 385,
    top: 45,
    fontSize: 85,
    now: [],
    rdm: [],
    bookn: ``,
   },
   nav: {
    baseVersesCount: 10,
    baseTime: 60,
    versesDisplay: `vr`
   },
   start: {
    bookName: `Ekk`,
    phase: ``
   }
  },
  versesDisplayVariants: [`vr`, `hr`],
  versesDisplayTranslate: {
   vr: `вертикальное`,
   hr: `горизотальное`,
   vr2: `2 по вертикали`,
   hr2: `2 по горизонтали`,
   vr4: `4 по вертикали`,
   hr4: `4 по горизонтали`,
   vr6: `6 по вертикали`,
   hr6: `6 по горизонтали`
  },
  setLS(name, state) {
   mylib.setLS(name, state);
  },
  windows: [],
  windowsUpdate(className, styles) {
   if (!g.windows.length) return;
   g.windows.forEach(w => {
    if (w.doc) {
     const el = w.doc.querySelector(className),
      style = el.style,
      styleNames = Object.keys(styles);

     styleNames.forEach(styleName => !g.is(styleName, `innerHTML`) && (style[styleName] = styles[styleName]));
     if (styles.innerHTML) el.innerHTML = styles.innerHTML;
    }
   });
  },
  momentType: '${Year}${Month}${Day}${Hour}${Minute}${Second}',
  getMomentNow: type => {
   const dt = new Date(),
    date = {};
   date.Year = `${dt.getFullYear()}`;
   date.year = date.Year.substr(2);
   date.month = `${dt.getMonth()+1}`;
   date.Month = date.month.padStart(2, '0');
   date.day = `${dt.getDate()}`;
   date.Day = date.day.padStart(2, '0');
   date.hour = `${dt.getHours()}`;
   date.Hour = date.hour.padStart(2, '0');
   date.minute = `${dt.getMinutes()}`;
   date.Minute = date.minute.padStart(2, '0');
   date.second = `${dt.getSeconds()}`;
   date.Second = date.second.padStart(2, '0');
   
   return (type || g.momentType).replace(/\$\{(\w+)\}/gi, (all, $1)=> date[$1] || all);
  },
  onTypeInputKeyDown(event, recursy) {
   event.target.select();
   const gNav = g.flash.Nav,
    keyCode = event.keyCode;

   if (keyCode === 116 && g.windows.length) {
    event.preventDefault();
    if (!recursy &&
     !confirm(`Есть ${g.windows.length === 1 ? `дочернее окно.\nОно будет также закрыто.` : `дочерние окна (${g.windows.length}).\nОни будут также закрыты.`}\nПерезапустить?`)) return;
    g.windows.forEach(wind => wind.w.close());
    gNav.forceUpdate();
    if (!g.windows.length) location.reload();
    else g.onTypeInputKeyDown(event, true);
   }

   if (event.shiftKey && !gNav.searchTerm) {
    gNav.searchTerm = ``;
    gNav.forceUpdate();
   }
  },
  onTypeInputKeyUp(event) {
   const keyCode = event.keyCode,
    shiftKey = event.shiftKey,
    letter = event.target.value,
    gNav = g.flash.Nav;

   event.target.value = ``;
   
   if (/[А-Яа-я]/.test(letter) || (g.keyBlock && letter !== `p`)) {
    g.body.style.background = g.keyBlock ? `#005` : `#500`;
    setTimeout(() => g.body.style.background = 'black', 500);
    return;
   }
   
   if (shiftKey && (keyCode === 32 || keyCode === 8 || (keyCode >= 48 && keyCode <= 57))) {
    const term = gNav.searchTerm;
    if (keyCode === 8) gNav.searchTerm = term.slice(0, term.length - 1);
    else if (term.length >= 5 || (term.search(/:/) >= 0 && keyCode === 32)) gNav.searchTerm = ``;
    else gNav.searchTerm += `${keyCode === 32 ? `:` : keyCode - 48}`;
    gNav.forceUpdate();
    return;
   }

   if (shiftKey && keyCode === 13 && gNav.isCorrectTerm) {
    const term = gNav.searchTerm,
     now = g.Verses.now,
     index = now.indexOf(term),
     inNow = index !== -1;

    const rdmMember = g.Verses.rdm.find(verse => verse.l === gNav.searchTerm);
    if (rdmMember) rdmMember.del = !rdmMember.del;

    if (inNow) g.Verses.now = now.slice(0, index).concat(now.slice(index + 1, now.length));
    else {
     const chapter = (term.match(/(\d+):/) || [])[1] || ``;
     if (chapter) {
      const index = now.findIndex(verse => RegExp(`${chapter}:`).test(verse)),
       a = now.slice(0, index),
       b = now.slice(index, now.length);
       a.push(term);
       g.Verses.now = a.concat(b);
     }
    }
    g.flash.Verses.rememberState().forceUpdate();
    gNav.forceUpdate();
    return;
   }

   if (!shiftKey && gNav.searchTerm) {
    gNav.searchTerm = ``;
    gNav.forceUpdate();
    return;
   }
   g.clickActionEmit(letter);
  },
  clickActionEmit(letter) {
   const leftFlashName = `Verses`,
    rightFlashName = `Timer`,
    flash =
     /[qweasdzxc]/i.test(letter) ? leftFlashName :
     /[rtyfghvbn]/i.test(letter) ? rightFlashName : ``,
    km = 20,
    kr = 15;

   if (g.is(letter, [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`]))
    g.flash.Verses.glueVerse(letter);
   
   if (g.is(letter, [`a`, `w`, `d`, `s`, `f`, `t`, `h`, `g`]))
    g.move(flash,
     g.is(letter, [`a`, `f`]) ? -km : g.is(letter, [`d`, `h`]) ? km : 0,
     g.is(letter, [`w`, `t`]) ? -km : g.is(letter, [`s`, `g`]) ? km : 0
    );
   
   if (g.is(letter, [`r`, `y`, `q`, `e`]))
    g.resize(flash,
     g.is(letter, [`q`, `r`]) ? -kr : g.is(letter, [`e`, `y`]) ? kr : 0
    );
   
   
   if (g.is(letter, [`z`, `v`]))
    g.flash[flash].start();
    
   if (g.is(letter, [`x`, `b`]))
    g.flash[flash].pause();
   
   if (letter === `c`)
    if (g.c) g.flash.Verses.stop();
    else {
     g.c = true;
     setTimeout(() => g.c = false, 200);
    }
   
   if (letter === `n`)
    if (g.n) g.flash.Timer.stop();
    else {
     g.n = true;
     setTimeout(() => g.n = false, 200);
    }
   
   if (letter === `p`) g.keyBlock = !g.keyBlock;
  
   if (letter === `Z`) g.flash.Verses.resetVerse();
   
   if (letter === `H`) g.flash.Nav.toggleHelp();
   
   if (letter === ` `) g.flash.Verses.takeVerse();
   
   if (letter === `O`) {
    const index = g.windows.length,
     w = window.open(),
     doc = w.document;
     doc.querySelector('html').innerHTML =
      `<title>${g.windows.length + 1}</title>
       <body>
        <div class="application">
         <div class="timer-box"></div>
         <div class="verses-box"></div>
        </div>
        <style>${g.mainStyles}</style>
       </body>`;
     w.onbeforeunload = () => {
      g.windows.splice(g.windows.findIndex(wind => index === wind.index), 1);
      g.flash.Nav.forceUpdate();
     };
    const app = doc.querySelector('.application'),
     Timer = doc.querySelector('.timer-box'),
     Verses = doc.querySelector('.verses-box');
    Timer.outerHTML = document.querySelector('.timer-box').outerHTML;
    Verses.outerHTML = document.querySelector('.verses-box').outerHTML;
    g.windows.push({w, doc, app, Timer, Verses, index});
   }
   
   if (g.is(letter, [`Q`, `A`]))
    g.flash.Verses.changeBase(letter === `Q` ? 1 : -1);
   
   if (g.is(letter, [`R`, `F`]))
    g.flash.Timer.changeBase(letter === `R` ? 5 : -5);
   
   if (g.is(letter, [`W`, `S`, `T`, `G`]))
    g.flash[flash].changeCurrent(g.is(letter, [`W`, `T`]) ? 5 : -5);
  },
  move(flashName, dx, dy) {
   const context = g.flash[flashName],
    state = context.state;
   
   state.left -= -dx;
   state.top -= -dy;
   
   g.setLS(flashName, state);
   context.forceUpdate();
  },
  resize(flashName, ds) {
   const context = g.flash[flashName],
    state = context.state;
   
   state.fontSize -= -ds;
   
   g.setLS(flashName, state);
   context.forceUpdate();
  },
  is(it, iss) {
   return typeof iss === `string` ? it === iss : iss.some(is => is === it);
  },
  blured: true,
  body: document.body,
  typeInput: document.querySelector(`input.type-input`),
  mainStyles: mylib.q(`style[compiled]`).innerText
 };


mylib.q('html',{on:{'mouseover,click': () => g.typeInput.focus()}});

g.stateNames.forEach(name => g[name] = mylib.getLS(g.lsStateNames[name]) || g.init[name] || {});

if (!g.Verses.now.length || g.Verses.bookn !== g.init.start.bookName) {
 const chapters = g.Verses.now = [];
 g.Verses.bookn = g.init.start.bookName;
 g.books[g.start.bookName].forEach((versesCount, versesCounti) => {
  for (let i = 1; i <= versesCount; i++) {
   chapters.push(`${versesCounti + 1}:${i}`);
  }
 });
};

class Verse extends RC {
 constructor() {
  super();
  this.state = {};
 }
 render() {
  return ce(`div`, {className: `verse-item`}, `123`);
 }
}

class Verses extends RC {
 constructor() {
  super();
  g.flash.Verses = this;
  this.name = `Verses`;
  this.className = `.verses-box`;
  this.state = g.Verses || {};
  this.verseIndex = ``;
  this.takkenVerse = ``;
 }
 rememberState() {
  g.setLS(this.name, this.state);
  return this;
 }
 start() {
  const isRandomed = this.state.rdm.length,
   timerPhase = g.flash.Timer.state.phase;
  if (g.is(timerPhase, [`stop`, `pause`]) && isRandomed || this.hide) {
   this.hide = !this.hide;
   this.forceUpdate();
  }
  if (isRandomed || (g.flash.Timer.state.current && g.is(timerPhase, [`start`, `pause`]))) return;
  g.flash.Timer.restart();
  this.takkenVerse = ``;
  const rdm = [],
   now = this.state.now,
   nowSize = now.length,
   periodsCount = g.nav.baseVersesCount,
   versesCount = periodsCount > nowSize ? nowSize : periodsCount,
   remainderSize = nowSize % versesCount,
   mainPartSize = nowSize - remainderSize,
   periodSize = mainPartSize / versesCount;
  
  this.tmp = [];
  for (let i = 0; i < versesCount; i++) {
   const rdmFrom = i * periodSize,
    rdmTo = rdmFrom + periodSize - 1,
    rdmIndex = mylib.random(rdmFrom, rdmTo);
   this.tmp.push([rdmFrom, rdmTo]);
   
   rdm[i] = {
    l: now[rdmIndex], i: rdmIndex
   };
  }
  this.tmp.push([mainPartSize, nowSize - 1]);
  
  this.state.rdm = rdm;
  this.rememberState().forceUpdate();
  return this;
 }
 pause() {
  g.flash.Timer.pause();
  return this;
 }
 stop() {
  if (!this.state.rdm.length) return;
  
  g.flash.Timer.stop();
  this.state.rdm = [];
  this.rememberState().forceUpdate();
  return this;
 }
 restart() {
  this.takkenVerse = ``;
  this.forceUpdate();
  return this;
 }
 glueVerse(i) {
  if (!this.state.rdm.length || (this.verseIndex === `` && i === `0`)) return;
  if (!this.takkenVerse) {
   const verseIndex = this.verseIndex + i,
    index = parseInt(verseIndex) - 1;
   if (index <= g.nav.baseVersesCount) {
    this.verseIndex = verseIndex;
    this.currentVerse = this.state.rdm[index].l;
    this.rememberState().forceUpdate();
   }
  }
  return this;
 }
 resetVerse() {
  if (this.state.rdm.length && g.flash.Timer.state.phase !== `stop`) g.flash.Timer.start();
  this.verseIndex =
   this.currentVerse =
   this.takkenVerse = ``;
  this.rememberState().forceUpdate();
  return this;
 }
 takeVerse(ind = this.verseIndex) {
  if (this.takkenVerse) {
   this.state.now.splice(this.verseIndex, 1);
   this.rememberState().stop().resetVerse();
   g.flash.Nav.forceUpdate();
  } else {
   const verse = this.state.rdm[ind - 1],
    verseLabel = verse.l,
    verseIndex = verse.i;
   this.takkenVerse = verseLabel;
   this.verseIndex = verseIndex;
   g.flash.Timer.pause();
   this.forceUpdate();
  }
  g.flash.Timer.forceUpdate();
  return this;
 }
 clickVerse(ind) {
  if (this.verseIndex) {
   if (this.verseIndex === ind) this.takeVerse(this.verseIndex);
   else {
    this.verseIndex = ``;
    this.forceUpdate();
   }
  } else {
   this.glueVerse(ind);
  }
  return this;
 }
 hideBox() {
  this.hide = true;
  this.resetVerse();
  return this;
 }
 changeBase(k) {
  g.nav.baseVersesCount -= -k;
  g.setLS(g.lsStateNames.nav, g.nav);
  g.flash.Nav.forceUpdate();
  return this;
 }
 changeCurrent() {
  return this;
 }
 color() {
  return !this.state.rdm.length || this.hide ? `rgba(0,0,0,0)` : `white`;
 }
 componentDidUpdate() {
  const left = `${this.state.left}px`,
   top = `${this.state.top}px`,
   fontSize = `${this.state.fontSize}px`,
   color = this.color();
  consl(this.html);
  g.windowsUpdate(this.className,
   {
    left, top, fontSize,
    innerHTML: this.html
   }
  );
 }
 render() {
  const left = `${this.state.left}px`,
   top = `${this.state.top}px`,
   fontSize = `${this.state.fontSize}px`,
   color = this.color();

  return [
   ce(`div`, {
    className: `br-box verses-box`,
    ref: ref => ref && (this.html = ref.innerHTML),
    style: {
     left, top, fontSize, color
    }
   },
    this.takkenVerse ? 
     ce(`div`, {
      style: {
       fontSize: `${g.flash.Timer.state.fontSize / 1.2}px`
      },
      onClick: event => this.takeVerse(this.verseIndex)
     }, this.takkenVerse) :
     this.state.rdm.map(({l, i, del}, ind) =>
      ce(g.nav.versesDisplay === `hr` ? `span` : `div`, {
       key: `verse-label-${ind}`,
       className: `verse-label`,
       style: {
        textDecoration: del ? `line-through` : `none`,
        backgroundColor: this.verseIndex === `${ind + 1}` ? `grey` : `rgba(0,0,0,0)`
       },
       onClick: event => this.clickVerse(`${ind + 1}`)
      }, `${ind + 1}. ${l} `))
   ),
   ce(Ctrl, {
    style: {left, top},
    name: this.name,
    buttons: [[`q`, `w`, `e`], [`a`, `s`, `d`], [`z`, `x`, `c`], [this.takkenVerse || this.verseIndex ? `Z` : ``]]}
   )
  ];
 }
}

class Timer extends RC {
 constructor() {
  super();
  g.flash.Timer = this;
  this.name = `Timer`;
  this.className = `.timer-box`;
  this.interval = false;
  this.state = g.Timer || {};
  const current = this.state.current;
  if (current && g.Verses.rdm.length && this.state.phase === `start`) this.start();
 }
 rememberState() {
  g.setLS(this.name, this.state);
  return this;
 }
 changeBase(k) {
  g.nav.baseTime -= -k;
  g.setLS(g.lsStateNames.nav, g.nav);
  g.flash.Nav.forceUpdate();
  return this;
 }
 changeCurrent(k) {
  if (this.interval) {
   const current = this.state.current - (-k);
   this.setState({current});
  }
  return this;
 }
 start() {
  this.state.phase = `start`;
  if(!this.interval) {
   this.interval = setInterval(() => {
    const current = --this.state.current;
    if (current < 0) {
     this.stop();
     g.flash.Verses.hide = true;
     g.flash.Verses.forceUpdate();
     return;
    }
    this.rememberState().forceUpdate();
   }, 1000);
   this.rememberState().forceUpdate();
  }
  if (g.flash.Verses.hide) {
   g.flash.Verses.hide = false;
   g.flash.Verses.forceUpdate();
  }
  return this;
 }
 pause() {
  if (this.interval) {
   this.state.phase = `pause`;
   clearInterval(this.interval);
   delete this.interval;
   this.rememberState().forceUpdate();
  }
  return this;
 }
 stop() {
  this.pause();
  this.state.current = g.nav.baseTime;
  this.state.phase = `stop`;
  this.rememberState().forceUpdate();
  return this;
 }
 restart(){
  this.stop().start();
  return this;
 }
 color() {
  return this.state.phase === `stop` ? `rgba(0,0,0,0)` : this.state.phase === `pause` ? `rgba(255,255,255,.1)` : `white`;
 }
 componentDidUpdate() {
  const left = `${this.state.left}px`,
   top = `${this.state.top}px`,
   fontSize = `${this.state.fontSize}px`;

   if (this.html) {
    g.windowsUpdate(this.className,
     {
      left, top, fontSize,
      innerHTML: this.html,
      color: this.color()
     }
    );
   }
 }
 render() {
  const left = `${this.state.left}px`,
   top = `${this.state.top}px`,
   fontSize = `${this.state.fontSize}px`,
   color = this.color();

  return [
   ce(`div`, {
    className: `br-box timer-box`,
    ref: ref => ref && (this.html = ref.innerHTML),
    title: g.flash.Verses && g.flash.Verses.takkenVerse ? `Сброс выбора` : ``,
    onClick: ev => {
     if (g.flash.Verses.takkenVerse) {
       g.flash.Verses.resetVerse();
     }
    },
    style: {
     left, top, fontSize, color
    }
   }, this.state.current),
   ce(Ctrl, {
    style: {left, top},
    name: this.name,
    buttons: [[`r`, `t`, `y`], [`f`, `g`, `h`], [`v`, `b`, `n`]]
   })
  ];
 }
}

class Ctrl extends RC {
 constructor() {
  super();
  g.flash.Ctrl = {};
  // g.flash.Ctrl[this.props.name] = this;
 }
 render() {
  return ce(`table`,
   {
    className: `ctrl-box`,
    style: this.props.style
   },
   this.props.buttons.map((line) =>
    ce(`tr`, {},
     line.map(letter =>
      ce(`td`, {
       onClick: event => g.clickActionEmit(letter)
      }, letter.replace(/[A-Z]/, all => `~${all.toLowerCase()}`))
     )
    )
   )
  );
 }
}

class Nav extends RC {
 constructor() {
  super();
  g.flash.Nav = this;
  this.searchTerm = ``;
  this.isCorrectTerm = false;
  this.showHelp = false;
 }
 rememberState() {
  g.setLS(g.lsStateNames.nav, g.nav);
  return this;
 }
 question() {
  const term = this.searchTerm,
   isCorrectTerm = this.isCorrectTerm = /\d{1,2}:\d{1,2}/.test(term),
   inNow = g.Verses.now.indexOf(term) !== -1;
  return `${isCorrectTerm ? inNow ? `del` : `add` : ``} ${term}${isCorrectTerm ? `?` : ` `}`;
 }
 isTermInRandom() {
  return g.Verses.rdm.findIndex(verse => verse.l === this.searchTerm) !== -1;
 }
 toggleHelp() {
  this.showHelp = !this.showHelp;
  this.forceUpdate();
 }
 render() {
  const allVersesCount = g.books[g.start.bookName].reduce((pre, curr) => pre + curr, 0);
  return [
    ce(`div`, {
     className: `view-verses-count ctrl`,
     style: {
      top: 5,
      left: 5
     }
    },
    [
     ce(`div`, {}, `Выбор из: ${g.nav.baseVersesCount};`),
     ce(`div`, {}, `Время: ${g.nav.baseTime};`),
     ce(`div`, {}, `Стихи: ${g.Verses.now.length} / ${allVersesCount}.`),
     ce(`div`, {
      className: `pointer`,
      onClick: () => {
       const displayLabel = g.nav.versesDisplay,
        variants = g.versesDisplayVariants,
        index = variants.indexOf(displayLabel),
        nextLabel = variants[index + 1] || variants[0];
        g.nav.versesDisplay = nextLabel;
        g.flash.Verses.forceUpdate();
        this.rememberState().forceUpdate();
      }
     }, `Расположение стихов: ${g.versesDisplayTranslate[g.nav.versesDisplay]}`),
     ce(`div`, {}, `Дочерних окон: ${g.windows.length}`),
     ce(`div`, {
      className: `add-del-verse-label`,
      style: {
       color: this.isTermInRandom() ? `red` : `inherit`,
       right: 100
      }
     }, this.question()),
     g.blured ? ce(`div`, {className: `click-on-page-label`}, ` Click on page`) : null
    ]),
    this.showHelp ? ce(`div`, {
     className: `help-screen`,
     onClick: () => {
      this.showHelp = false;
      this.forceUpdate();
     }
    }, ce(`pre`, {
     style: {
      color: `white`
     }
    }, helpLetter)) : null
   ];
 }
}

const helpLetter = `"~" - означает [SHIFT+].
Помощь: ~h;
Открыть окно: ~o;
Удалить/добавить ссылку: ~[0-9 ] + ENTER;
Блок ввода: p;

Стихи:
 перемещ.: a/w/s/d;
 увелич./уменьш.: q/e;
 старт: z;
 сброс: c*2;
 изменить дефолт: ~q/~a;
 выбрать ссылку: [0-9] + SPACE;
 отменить: ~z

Таймер:
 перемещ.: f/t/g/h;
 увелич./уменьш.: r/y;
 старт: v;
 пауза: b;
 сброс(cтоп): n*2;
 изм. дефолт: ~r/~f;
 изм. тек.: ~t/~g;
`;

class StartPage extends RC {
 constructor() {
  super();
  g.flash.StartPage = this;
  this.state = {};
 }
 render() {
  return ce(`div`,
   {
    style: {
     color: `white`
    }
   },
   [
    ce(Nav),
    ce(Timer),
    ce(Verses),
   ]
  );
 }
}

ReactDOM.render(ce(StartPage), document.querySelector('.application'));










}catch(e){alert(e.stack);}