; 'use strict';

(function CmModule() {
  var state = 0;
  
  function stage(s) {
    if (s === undefined) {
      //mylib.cconsl(`STAGED STSTE IS: ${state}`);
    } else
      state = s;
    //mylib.cconsl('STATE' + state);
  }

  const ce = React.createElement;

  stage(1);

  const g = applicanter.scope('cm');

  let mylib = g.initMylib();

  if (g.registerHelper == null)
    g.registerHelper = (name, args, cb) => cb;
    
  g.updateFlexFontSize = g.updateFlexFontSize || (f=>f);
  const reportErrorMessage = g.reportErrorMessage;
  
  g.isAccessed = (action, elem = Object) => {
    if (isAllOperationsBlokced) return null;

    const rights = window.json ? window.json.actions : [];
    const level = mylib.auth.level;
    const right = Object.entries(((g.app || 0).variables || {})).map(([action, level]) => ({ action, level })).concat(rights).find(right => right && right.action === action);
    if (right == null) mylib.alert(`Зарегистрировано правило на неизвестное действие ${action}`);
    return right ? right.level <= level ? elem : null : elem;
  };

  let isAllOperationsBlokced = false;
  mylib.dconsl('...', { json: window.json, g, localStorage, applicanter });

  stage(3);

  mylib.loadAuth();
  stage(4);

  const momentType = '${Year}${Month}${Day}${Hour}${Minute}${Second}${Ms}';
  stage(5);

  const getMoment = (dat, type, parseFunc, p1, p2) => {
    const dt = new Date(dat || Date.now());
    const date = {};
    date.Year = dt.getFullYear().toString();
    date.year = date.Year.substr(2);
    date.month = (dt.getMonth() + 1).toString();
    date.Month = date.month.padStart(2, '0');
    date.day = dt.getDate().toString();
    date.Day = date.day.padStart(2, '0');
    date.hour = dt.getHours().toString();
    date.Hour = date.hour.padStart(2, '0');
    date.minute = dt.getMinutes().toString();
    date.Minute = date.minute.padStart(2, '0');
    date.second = dt.getSeconds().toString();
    date.Second = date.second.padStart(2, '0');
    date.ms = dt.getMilliseconds().toString();
    date.Ms = date.ms.padStart(3, '0');

    let moment = (type || momentType).replace(/\$\{(\w+)\}/gi, (all, $1) => date[$1] || all);
    return parseFunc ? parseFunc(moment, p1, p2) : moment;
  };

  g.momentNow = () => getMoment(null, null, parseInt, 10);

  stage(6);

  class Nav {
    constructor(prev = {}) {
      const obj = this.getLocal() || {};
      
      this.fields.forEach(({ name, def }) => this[name] = mylib[def == null ? 'def' : 'typ'](def, prev[name], obj[name]));
      this.context = prev.context;
    }
    
    get fields() {
      return [
        {
          name: 'phase',
          def: 1,
        }, {
          name: 'v',
          def: 0,
        }, {
          name: 'plShown',
          def: 0,
        }, {
          name: 'prevPhase',
          def: 1,
        }, {
          name: g.Phase.Cat,
          def: 0,
        }, {
          name: g.Phase.Com,
          def: null,
        }
      ];
    }
    
    ls() {
      return 'cm_navigation';
    }

    getLocal() {
      return mylib.getLS(this.ls());
    }

    save() {
      const nav = {};
      this.fields.forEach(({ name, def }) => nav[name] = mylib.def(this[name], def));
      mylib.setLS(this.ls(), nav);
    }
    
    setState() {
      Object.assign.apply(null, [this].concat(Array.from(arguments)));
    }
    
    async setPhase(phase, state, cb) {
      const ret = phase === this.phase
        ? true
        : await applicanter.$emit('Cm.beforePhaseChange', [phase, state]);
      
      if (ret !== false) {
        if (phase !== this.phase) {
          applicanter.$emit('Cm.onPhaseChange', [phase, state, this.prevPhase]);
          this.prevPhase = this.phase;
        }
        this.ss(Object.assign({}, { phase }, state), cb);
      }
    }

    goBack() {
      if (g.rollMode) {
        g.rollModeMarks = false;
        g.rollMode = null;
        this.ss();
      } else this.setPhase((g.PhaseJumps[this.phase] === null ? (this.prevPhase === this.phase ? 1 : this.prevPhase) || this.phase - 1 : g.PhaseJumps[this.phase] || this.phase - 1) || 1);
    }

    isCanGoBack(phase) {
      return g.PhaseJumps[this.phase] !== null || g.PhaseJumps[phase] !== null;
    }

    isPhase() {
      for (let i = 0; i < arguments.length; i++)
        if (arguments[i] === this.phase) return true;
      return false;
    }
    
    updateCcols() {
      this.updateCcol('Com');
      this.updateCcol('Cat');
    }
    
    updateCcol(coln) {
      const ccol = this.current(coln);
      
      if (coln === 'Com') this.ccom = ccol;
      else this.ccat = ccol;
    }
    
    current(coln = 'Com') {
      return g.cols[coln.toLowerCase() + 's'].find(col => col.wid === this[g.Phase[coln]]);
    }
    
    async setCom(comw, phase = g.Phase.Com, isEmitBeforeEvent = true) {
      clearTimeout(this.setComTimeout);
      
      return new Promise((resolve) => {
        this.setComTimeout = setTimeout(async () => {
          const com = g.cols.getCom(comw);
          const ret = !isEmitBeforeEvent || await applicanter.$emit('Cm.beforeComChange', [com, comw, phase]);
          
          if (ret !== false) {
            g.actions.com.onComChange();
            this.setPhase(phase == null ? this.phase : phase, { [g.Phase.Com]: comw }, () => this.updateCcol('Com'));
            
            applicanter.$emit('Cm.onComChange', [com, comw]);
            g.updateFlexFontSize();
          }
          
          resolve(ret);
        }, 100);
      });
    }
    
    setCat(catw) {
      this.setPhase(g.Phase.Cat, { [g.Phase.Cat]: catw }, () => this.updateCcol('Cat'));
    }
    
    setContext(context) {
      this.context = context;
    }
    
    ss(newState, cb) {
      if (this.context == null) {
        setTimeout(() => {
          throw ('there is not nav context!');
        });
        return null;
      }
      
      if (mylib.isObj(newState)) {
        this.setState(newState);
        this.save();
        mylib.func(cb).call();
        this.context.setState(newState);

      } else {
        mylib.func(cb).call();
        this.context.forceUpdate();
      }
      return newState;
    }
  }
  
  const initNav = () => g.nav = new Nav(g.nav);
  
  g.ss = state => g.nav.ss(state);

  stage(7);

  ////// Interfaces:

  if (g.IEditableCols == null) {
    class IEditableCols { }
    g.IEditableCols = IEditableCols;
  }

  class ICols extends g.IEditableCols {
    constructor(cols, { coms: prevComs, cats: prevCats = [] }) {
      super();
      if (cols == null) {
        mylib.consl('ICols init params is null');
        cols = {};
      }
      const isComPhase = g.nav && g.nav.isPhase(g.Phase.Com);
      const ccomw = g.nav[g.Phase.Com];
      
      this.coms = mylib.typ([], cols.coms)
        .map(com => {
          let obj = com;
          let prevCom;
          const comw = com.wid;
          
          if (prevComs) {
            prevCom = prevComs.find(c => c.wid === comw);
            if (prevCom && prevCom.ton != null) {
              obj = mylib.overlap({}, com, {
                ton: prevCom.ton,
                tonc: prevCom.tonc,
              });
            }
          }
          
          const comc = new ICom(obj, ccomw !== comw, g.eeStorage);
          return comc;
        });
      this.sort('coms');
      
      this.cats = mylib.typ([], cols.cats).map(cat => new ICat(cat, this.coms, prevCats.find(prevCat => prevCat.wid === cat.wid), g.eeStorage));
      this.sort('cats');
    }

    sort(coln) {
      return mylib.sortObjectBy(this[coln.toLowerCase()], 'w', true)
        .map((col, coli) => {
          col.index = coli;
          return col;
        });
    }
    
    getCom(comw) {
      return this.getCol('coms', comw);
    }

    getCat(catw) {
      return this.getCol('cats', catw);
    }

    getCol(colsn, colw) {
      return this[colsn === 'cats' ? 'cats' : 'coms'].find(col => col.wid === colw);
    }
  }

  g.ICols = ICols;

  if (g.IEditableCat == null) {
    class IEditableCat extends g.IBased {
      searchErrors() {}
    }
    g.IEditableCat = IEditableCat;
  }

  class ICat extends g.IEditableCat {
    constructor(obj, coms, prevCat, eeStorage) {
      super(obj, eeStorage);
      if (!mylib.isObj(obj)) throw 'wrong Cat type in ICat';
      
      this.t = mylib.def(obj.t, null);
      this.term = mylib.typ('', prevCat && prevCat.term);
      this.topComs = coms;
    }
    
    getOrBase(o, t) {
      return mylib.func(super.getOrBase && (() => super.getOrBase(o, t))).call();
    }
    
    get wid() { return this.getOrBase(0, 'w'); }

    get name() { return this.getOrBase('', 'n'); }
    set name(val) { this.n = val; }

    get stack() { return this.getOrBase([], 's'); }

    get track() { return this.t; }
    set track(val) { this.t = val; }
    
    get coms() {
      if (this._coms != null) return this._coms;
      
      this._coms = (
        this.track == null
          ? (this.topComs || []).filter(com => com && ~this.stack.indexOf(com.wid))
          : (this.topComs || []).filter(com => com && mylib.isExpected(com, this.track, this))
        ).slice(0);
        
      this.search();
      
      return this._coms;
    }
    resetComs() {
      this._coms = null;
      this._wraps = null;
    }
    
    get wraps() {
      if (this._wraps != null) return this._wraps;
      this.search();
      return this._wraps;
    }
    set wraps(val) {
      this._wraps = val;
    }
    
    search(term = this.term, cb, debounceTime = 0, dtCb) {
      const filter = () => {
        if (term) {
          const errors = this.searchErrors(term);
          
          if (errors != null) {
            this._wraps = errors;
          } else if (term === '@1') {
            this._wraps = this.coms.filter(com => !com.audio || !com.audio.trim()).map(com => ({com}));
          } else if (term === '@2') {
            this._wraps = this.coms.map(com => ({ com, bag: [[com.nameCorrects(com.name), 'n']].concat(com.texts.map((t, ti) => [com.blockCorrects(t, 't'), ti])).filter(([s]) => s && s.errors) })).filter(({ bag }) => bag.length).map(({ com, bag }) => ({ com, errors: [].concat(bag).map(([{ errors, warnings, unknowns }, index]) => errors && errors.map(({ message }) => ce('div', {}, message + ' ' + (index + 1)))) }));
          } else {
            const inner = mylib.convertStrIfReg(term);
            let ratesBag = mylib.getRatesInclude(inner, reg => g.transcriptions.reduce((reg, trans) => reg.replace(RegExp(`[${trans[0]}]`, 'g'), `[${trans[1] || trans[0]}]`), reg));
            
            this._wraps = mylib.func(mylib.searchRate).call(this.coms, term, ['n', mylib.POSITION, ['orders', mylib.INDEX, 'text']], 'com');
          }
        } else this.wraps = this.coms.map(com => ({com}));
      };
      
      if (debounceTime) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          filter();
          dtCb && dtCb();
        }, debounceTime);
      } else filter();
      
      this.term = term;
      cb && cb();
    }
    
  }

  g.ICat = ICat;

  if (g.IEditableOrder == null) {
    class IEditableOrder extends g.IBased {
      setWid() {}
    }
    g.IEditableOrder = IEditableOrder;
  }

  class IOrder extends g.IEditableOrder {
    constructor(obj = {}, com, ordi) {
      super(obj);
      if (obj == null) {
        mylib.dcconsl('incorrect obj order in com:', com);
        return;
      }
      if (com == null && obj.com == null) throw mylib.dcconsl('No com for order').val;

      this.ordi = () => (com || obj.com).orders.indexOf(this);
      this.top = obj;
      
      const setReals = fields =>
        fields.forEach(fieldn => {
          if (obj[fieldn] != null)
            this[fieldn] = obj[fieldn];
        });

      if (mylib.isNum(obj.t))
        this.t = obj.t;

      this.p = mylib.def(obj.p, []);
      this.fieldValues = obj.f;

      setReals(['chords', 'text', 'inh', 'u', 'o', 'c', 'v', 'a', 's', 'e', 'w']);
    }
    
    get com() { return this.top.com; }
    
    static get fields() {
      return [
        {
          name: 'a',
          title: 'Ссылка на блок',
          type: '#Number',
        }, {
          name: 'c',
          title: 'Блок аккордов',
          isExt: true,
          type: '#Number',
        }, {
          name: 'e',
          title: 'Без названия',
          isExt: true,
          type: '#Num',
        }, {
          name: 'm',
          title: 'Минималка',
          isExt: true,
          type: '#Num',
        }, {
          name: 'o',
          title: 'Открыто в полном режиме',
          isExt: true,
          type: '#Num',
        }, {
          name: 'p',
          title: 'Позиции аккордов',
          isExt: true,
          extIf: poss => !poss || !poss.length,
          type: '#List',
        }, {
          name: 'r',
          title: 'Повторения',
          isExt: true,
          type: ['#number', '#dict'],
        }, {
          name: 's',
          title: 'Тип блока',
          isExt: true,
          type: '#String',
        }, {
          name: 't',
          title: 'Текстовый блок',
          isExt: true,
          type: '#Number',
        }, {
          name: 'u',
          title: 'Целевой айди',
          type: '#Number',
        }, {
          name: 'v',
          title: 'Видимость блока',
          isExt: true,
          type: '#Num',
        }, {
          name: 'w',
          title: 'Уникальный айди',
          type: '#Number',
        }
      ];
    }
    
    static getWithExtendableFields(source, target) {
      const result = {
        inhFields: []
      };
      if (source == null)
        mylib.overlap(result, target);
      else
        IOrder.fields.forEach(({name, isExt, extIf = el => el == null}) => {
          if (isExt && source[name] != null && extIf(target[name])) {
            result[name] = source[name];
            result.inhFields.push(name);
          } else {
            result[name] = target[name];
          }
        });
      return result;
    }
    
    static toDict(ord) {
      const dict = {};
      IOrder.fields.forEach(({name, forDict}) => forDict !== false && ord[name] != null && (dict[name] = ord[name]));
      return dict;
    }
    
    get isMin() { return this.top.m; }
    
    get wid() { return this.top.source.w; }
    set wid(val) { this.top.source.w = val; }
    
    get unique() { return this.top.source.u; }
    set unique(val) { this.top.source.u = val; }

    get isAnchor() { return this.a != null; }

    get anchor() { return this.a; }
    set anchor(val) { this.a = val; }
    
    get isEmptyHeader() { return this.e; }
    set isEmptyHeader(val) { this.e = val; }

    get isOpened() { return this.o; }
    set isOpened(val) { this.o = val; }

    get chordsi() { return this.c; }
    set chordsi(val) { this.c = val; }

    get texti() { return this.t; }
    set texti(val) { this.t = val; }

    get positions() { return (this.top.targetOrd || this.top.source).p; }
    set positions(val) { (this.top.targetOrd || this.top.source).p = val; }

    get type() { return this.s; }
    set type(val) { this.s = val; }
    
    get text() {
      return this.com.texts[this.texti] || '';
    }

    get repeatsTitle() {
      const repeats = this.repeats;
      
      if (!repeats) return '';
      if (mylib.isNum(repeats)) return repeats < 2 ? '' : repeats;
      if (repeats['.']) return repeats['.'] < 2 ? '' : repeats['.'];
      const lastLineIndex = this.text.split(/\n/).length - 1;
      const region = this.regions.find(([begLine,, endLine]) => begLine === 0 && endLine === lastLineIndex);
      
      return region ? region[10] : '';
    }
    
    get repeats() {
      if (this.top.isAnchorInherit) {
        return this.getInheritance('r');
      } else if (this.top && this.top.source && this.top.source.r != null)
        return this.top.source.r;
      else {
        const repeats = this.getLeadFirst('r');
        const nrepeats = {};
        const reg = /[a-z]/i;
        
        return Object.entries((repeats && (mylib.isNum(repeats) ? { '.': repeats } : repeats)) || nrepeats).reduce((acc, [key, val]) => {
          if (!reg.exec(key)) acc[key] = val;
          return acc;
        }, nrepeats);
      }
    }
    
    set repeats(val) {
      if (this.top.isAnchorInherit) {
        const inh = this.top.leadOrd.top.source.inh || {};
        const repeats = inh.r = inh.r || {};
        
        repeats[this.top.anchorInheritIndex] = val;
        this.top.leadOrd.top.source.inh = inh;
      } else this.top.source.r = val;
    }
    
    get regions() {
      if (this._regions === undefined) this.setRegions();
      
      return this._regions;
    }
    
    resetRegions() { delete this._regions; }
    
    setRegions() {
      const text = (this.text || '').split(/\n+/).map(txt => txt.split(/\s+/));
      const lines = text.length;
      
      this._regions = this.repeats === 0 ? [] : Object.entries(mylib.isNum(this.repeats) ? { '.': this.repeats } : (this.repeats || {})).map(([key, count]) => {
        let letter;
        
        if (key === '.') return [0, 0, lines - 1, (text[text.length - 1] || '').length - 1, this, this, null, null, key, key, count];
        else if (key.startsWith('~')) {
          const [, linei, wordi] = key.split(/[~:]/);
          
          return [+linei, +wordi, null, null, this, this, null, null, key, key, count];
        } else if (letter = (/[a-z]/i.exec(key) || [])[0]) {
          const [first, second, third] = key.split(/[a-z:]/i).map(num => parseInt(num));
          const isBeg = /^[a-z]/i.exec(key);
          let others;
          let finishKey;
          
          const ord = this.com.orders.find(ord => !mylib.isNum(ord.repeats) && Object.keys(ord.repeats || {}).some(key => {
            if (key[!isBeg ? 'startsWith' : 'endsWith'](letter)) {
              others = key.split(/[a-z:]/i).filter(s=>s).map(num => +num);
              finishKey = key;
              return true;
            }
          }));
          
          return (isBeg
            ? [second, third, null, null, this, ord]
            : [null, null, first, second, ord, this]).concat(others, key, finishKey);
        } else {
          const [beg, end] = key.split(/-/);
          const [begLinei, begWordi = 0] = beg.split(/:/).map(num => parseInt(num));
          let [endLinei, endWordi] = (end || '').split(/:/).map(num => parseInt(num));
          if (end) {
            if (endWordi == null) {
              endWordi = (text[endLinei] || '').length - 1;
            }
          } else [endLinei, endWordi] = [begLinei, (text[begLinei] || '').length - 1];
          
          return [begLinei, begWordi, endLinei, endWordi, this, this, null, null, key, key, count];
        }
      });
    }
    
    getInheritance(fieldn) {
      return this.top.isAnchorInherit && this.top.anchorInheritIndex != null && (this.top.leadOrd.top.source.inh || 1)[fieldn] != null
        ? this.top.leadOrd.top.source.inh[fieldn][this.top.anchorInheritIndex]
        : this.top.source[fieldn];
    }

    get antiVis() { return this.isVisible ? 0 : 1; }
    get isVisible() { return this.v !== 0; }
    set isVisible(val) { this.v = val ? 1 : 0; }
    
    get fieldValues() { return this.f; }
    set fieldValues(val) { this.f = mylib.typ({}, val); }
    
    getSourceFirst(fieldn) {
      return this.top && mylib.def(this.getInheritance(fieldn), (((this.top.targetOrd || 1).top || 1).source || 1)[fieldn]);
    }
    
    getLeadFirst(fieldn) {
      return this.top && mylib.def((((this.top.targetOrd || 1).top || 1).source || 1)[fieldn], this.getInheritance(fieldn));
    }
    
    get repeated() {
      const reps = this.repeats;
      const { text } = this.com.bracketsTransformed(this.text);
      
      if (!reps) return text;
      
      const rep = (txt, rp = 2, b = 1, e = 1) => `${!b || (rp < 1) ? '' : `${'/'.repeat(rp)}&nbsp;`}${txt || ''}${!e || (rp < 2) ? '' : `&nbsp;${'\\'.repeat(rp)}`}`;
      
      if (mylib.isNum(reps)) return rep(text, reps);
      else {
        const poss = {};
        
        Object
          .keys(reps)
          .sort((a, b) => {
            let acount = 0, bcount = 0;
            const [abeg = '', aend = ''] = a.split('-');
            const [abegLine, abegWord] = abeg.split(':');
            const [aendLine, aendWord] = aend.split(':');
            
            const [bbeg = '', bend = ''] = b.split('-');
            const [bbegLine, bbegWord] = bbeg.split(':');
            const [bendLine, bendWord] = bend.split(':');
            
            if (abegWord) acount++;
            if (aendWord) acount++;
            if (aendLine) acount++;
            
            if (bbegWord) bcount++;
            if (bendWord) bcount++;
            if (bendLine) bcount++;
            
            return acount - bcount;
          })
          .forEach(key => {
            if (key === '.') return;
            
            const pushRep = (linei, wordi, fix = 1) => {
              const tr = poss[linei] = mylib.typ({}, poss[linei]);
              const td = tr[wordi] = mylib.typ([], tr[wordi]);
              td.push(fix * reps[key]);
            }
            
            if (/[a-z]$/i.exec(key)) {
              const [linei, wordi] = key.split(/[:a-z]/i);
              pushRep(linei, wordi, -1);
              return;
            }
            
            if (key.startsWith('~') || /^[a-z]/i.exec(key)) {
              const [, linei, wordi] = key.split(/[~:a-z]/i);
              pushRep(linei, wordi);
              return;
            }
            
            const [beg = '', end = ''] = key.split('-');
            const [begLine, begWord = -1] = beg.split(':');
            let [endLine, endWord = -2] = end.split(':');
            endLine = endLine || begLine;
            
            if (begLine) pushRep(begLine, begWord);
            if (endLine) pushRep(endLine, endWord, -1);
            
          });
        
        const repld = text
          .split(/\n+/)
          .map((line, linei) => {
            const words = line.split(/ +/);
            
            const repldLine = words
              .map((word, wordi) => {
                const counts = mylib.typ([], (poss[linei] || {})[wordi]);
                
                return !counts.length
                  ? word
                  : counts.reduce((prev, count) => rep(prev, Math.abs(count), count > 0, count < 0), word);
              })
              .join(' ');
            
            const counts = ((poss[linei] || {})[-1] || [])
              .concat((poss[linei] || {})[-2] || []);
            
            return counts.length
              ? counts.reduce((prev, count) => rep(prev, Math.abs(count), count > 0, count < 0), repldLine)
              : repldLine;
          })
          .join('\n');
        
        return (mylib.isNum(reps['.']) ? rep(repld, reps['.']) : repld)
      }
    }

  }
  
  g.IOrder = IOrder;

  stage(9);
  
  if (g.IEditableCom == null) {
    class IEditableCom extends g.IBased { }
    g.IEditableCom = IEditableCom;
  }
  
  (() => {
    g.translationPushKinds = [
      // +цифра в ключе - меньше или равно количество реальных строк
      // -цифра в ключе - ровное количество реальных строк
      // 0 в ключе - все остальные значения
      
      // +цифра в значении - разбиение на количество строк
      // +цифра > 9 - сначала количество по первой цифре, остальные по последней (43 === 433333...)
      // -цифра > 9 - повторение схемы каждый шаг (43 === 43434343434343...)
      // 0 в значении - остаётся прежнее количество строк
      {
        6: 6,
        8: 4,
        10: 5,
        0: 4,
      },
      {
        0: 0,
      },
      {
        5: 5,
        '-6': 3,
        8: 35,
        0: 4,
      },
      {
        6: 6,
        8: 4,
        10: 46,
        0: 4,
      },
    ].map(rule => {
      const rules = Object.entries(rule).map(([key, val]) => [+key, val]).sort(([a], [b]) => a === 0 ? 1 : b === 0 ? -1 : Math.abs(a) - Math.abs(b) || a - b);
      const list = [];
      const push = num => list.push(num) + 1;
      
      return {
        title: rules.map(([key, val]) => key ? `${key < 0 ? `=${-key}` : key}:${val < 0 ? `~${-val}` : val}` : `[${val < 0 ? `~${-val}` : val}]`).join(','),
        list: () => {
          const prev = list.slice(0);
          list.length = 0;
          return prev;
        },
        push: num => {
          rules.some(([key, val]) => {
            if (key === 0 && val === 0) return push(num);
            
            if (key && val > 0 && val < 10) {
              if (num <= key || -key === num) {
                if (num <= val) return push(num);
                else {
                  let div = num;
                  
                  while (div >= val) {
                    push(val);
                    div -= val;
                  }
                  
                  return div ? push(div) : true;
                }
              }
            } else if (key === 0 || num <= key || -key === num) {
              const isNegative = val < 0;
              const nums = (isNegative ? -val : val).toString().split('').map(v => +v);
              let parti = 0;
              let div = num;
              
              while (div >= nums[parti]) {
                push(nums[parti]);
                div -= nums[parti];
                parti += nums.length - 1 === parti ? isNegative ? -parti : 0 : 1;
              }
              
              return div ? push(div) : true;
            }
          });
        }
      };
    });
  })();
  
  class ICom extends g.IEditableCom {
    constructor(obj = {}, isAsyncInit, eeStorage) {
      super(obj, eeStorage);
      
      this.initial = {};
      
      this.pullTransPosition(obj);
      
      const realFields = ['ton', 'tonc'];

      realFields.forEach(fieldn => {
        if (obj[fieldn] != null)
          this[fieldn] = obj[fieldn];
      });
      
      this.isIncludeChordedBlocks = false;
    }
    
    static get fields() {
      // free: d e f h i j k s u v x y z
      return ['a', 'b', 'c', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 't', 'w'];
    }
    
    getOrBase(o, t) {
      return mylib.func(super.getOrBase && (() => super.getOrBase(o, t))).call();
    }
    
    get name() { return this.getOrBase('?', 'n'); }
    set name(val) { this.n = val; }

    get wid() { return this.getOrBase(0, 'w'); }

    get chords() {
      if (this.c == null) this.c = this.forcedArray(this.top.c);
      return this.c;
    }
    set chords(val) {
      this.c = val;
      this.resetChordLabels();
    }

    get texts() {
      if (this.t == null) this.t = this.forcedArray(this.top.t);
      return this.t;
    }
    set texts(val) { this.t = val; }

    get audio() { return this.getOrBase('', 'a'); }

    get refs() { return this.getOrBase({}, 'r'); }
    set refs(val) { this.r = val; }

    get translationPushKind() { return this.getOrBase(0, 'k'); }
    set translationPushKind(val) { this.k = val; }

    get isBemoled() { return this.getOrBase(0, 'b'); }
    set isBemoled(val) {
      this.b = val ? 1 : 0;
      this.resetChordLabels();
    }
    
    get initialTransPosition() { return mylib.def(this.initial.p, this.p); }
    set initialTransPosition(val) {
      if (this.initial.p == null) this.initial.p = mylib.typ(0, val);
      this.initialTransPos = mylib.typ(0, val);
    }
    
    get initialTransPos() { return mylib.def(this.initial.pos, this.pos, this.initial.p, this.p); }
    set initialTransPos(val) {
      if (this.initial.pos == null) this.initial.pos = mylib.typ(0, val);
    }
    
    get transPosition() { return this.p; }
    set transPosition(value) {
      const v = mylib.typ(0, value);
      const val = v > 11 ? v % 12 : v < 0 ? 12 + v : v;
      this.p = val;
      this.initialTransPosition = val;
    }
    
    pullTransPosition(obj) {
      if (obj) {
        if (obj.ton != null) this.initialTransPosition = obj.p;
        this.transPosition = mylib.def(obj.ton, obj.p);
      }
    }
    
    turnBemoled() {
      this.isBemoled = !this.isBemoled;
    }

    get langi() { return this.getOrBase(0, 'l'); }
    //set langi(val) { this.l = val; }

    get langn() { return ICom.langs[this.langi]; }
    static get langs() { return ['русский', 'украинский']; }

    getVowelPositions(textLine) {
      return g.searchAll(/[уеыаоэяиёюіїє ]/i, textLine);
    }
    
    transChord(chord, delta) {
      const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];

      const cindex = chords.indexOf(chord);
      const di = cindex - -delta;
      const len = chords.length;
      const nindex = di < 0
        ? len - -di
        : di > len
          ? di % len
          : di === len || -di === len
            ? 0
            : di;
      return chords[nindex];
    }
    
    transBlock(cblock, delta = this.transPosition) {
      return cblock && cblock.replace(/[ACDEFGH]#?/g, chord => this.transChord(chord, delta));
    }

    transBlocks(delta) {
      return this.chords.map((cblock) => this.transBlock(cblock, delta));
    }

    setChordsInitialTon() {
      delete this.ton;
      delete this.tonc;
      this.transPosition = this.initialTransPos;
      this.resetChordLabels();
    }

    transpose(delta) {
      this.transPosition -= -delta;
      this.ton = this.transPosition;
      this.tonc = mylib.def(this.tonc, this.chordLabels[0][0][0]);
      this.resetChordLabels();
    }
    
    getOrderedTexts(isInsludeName = false, isIncluseEndstars = true) {
      return this.getOrderedBlocks(isInsludeName = false, isIncluseEndstars).map((lines, linesi, linesa) => lines.join('\n') + (isIncluseEndstars && linesa.length - 1 === linesi ? '\n* * *' : ''));
    }
    
    getOrderedBlocks(isInsludeName = false, isIncluseEndstars = true) {
      const textBeats = this.orders.reduce((text, ord) => text + (ord.top.t == null ? this.isIncludeChordedBlocks ? (text ? '\n' : '') + ord.top.header() : '' : (text ? '\n' : '') + ord.repeated), '').split(/\n/);
      
      const texts = this.translationMap().map(peaceSize => {
        return textBeats.splice(0, peaceSize);
      });
      
      return (isInsludeName ? [[this.name]] : []).concat(texts);
    }
    
    translationMap(isIncludeChordedBlocks = this.isIncludeChordedBlocks) {
      if (this._translationMap != null) return this._translationMap;
      
      const kinds = g.translationPushKinds[this.translationPushKind];
      let curr = 0;
      
      this.orders.forEach((ord, ordi, orda) => {
        if (ord.top.t == null) {
          isIncludeChordedBlocks && kinds.push(1);
          curr = 0;
          return;
        }
        
        if (ord.top.isInherit) {
          curr += ord.text.split(/\n/).length;
          if (ordi === orda.length - 1) kinds.push(curr);
          return;
        }
        
        curr && kinds.push(curr);
        
        curr = ord.text.split(/\n/).length;
        if (ordi === orda.length - 1) kinds.push(curr);
      });
      
      return this._translationMap = kinds.list();
    }
    
    bracketsTransformed(str = '') { 
      const brackets = [['«', '»'], ['„', '“'], ['"', '"'], ["'", "'"]];
      let level = 0;
      
      const text = str
        .replace(/(\s)-+(\s)/g, '$1—$2')
        .replace(/(\( ?)?("+)( ?\)?)/gs, function(_, pref = '', all, post = '', index, text) {
          const pre = text[index - 1];
          const isOpen = !pre || pre.search(/\s/) + 1;
          const brLevel = level - (isOpen ? 0 : 1);
          level -= (isOpen ? -1 : 1) * all.length;
          
          return pref[0] === '(' && post.endsWith(')')
            ? ''
            : (pref || '') + all
              .split('')
              .map((br, bri) => (brackets[brLevel - (isOpen ? -bri : bri)] || ['`', '`'])[isOpen ? 0 : 1])
              .join('') + (post || '');
        })
        .replace(/\("+ \)$|^\( "+\)/g, '');
      
      return { text, level };
    }
    
    get chordLabels() {
      if (this._chordLabels == null) this.updateChordLabels();
      
      return this._chordLabels;
    }
    
    get usedChords() {
      if (this._usedChords == null) this.updateChordLabels();
      
      return this._usedChords;
    }
    
    resetChordLabels() {
      this._usedChords = null;
      this._chordLabels = null;
    }
    
    updateChordLabels() {
      this._chordLabels = [];
      this._usedChords = {};
      let currTransPosition = this.transPosition;
      
      this.orders.forEach(ord => {
        const ordLabels = [];
        this.chordLabels.push(ordLabels);
        const chords = this.actualChords(ord.chordsi, currTransPosition);
        
        if ((ord.top.style || 0).isModulation) {
          currTransPosition = this.transPosition + (ord.fieldValues.md || 0);
        }
        
        (chords || '')
          .split(/\s*\n+\s*/)
          .forEach(line => {
            const lineLabels = [];
            ordLabels.push(lineLabels);
            
            (line || '')
              .split(/ +/)
              .forEach(chordSchema => {
                chordSchema
                  .split(/[^#A-Z/0-9]+/i)
                  .forEach(chord => this._usedChords[chord.replace(/B/, 'A#')] = chord);
                lineLabels.push(chordSchema);
              });
          });
      });
      
      this.tonc = this.firstChord = mylib.def(mylib.typ('', this.tonc, mylib.def(mylib.def(mylib.def(this.chordLabels, '')[0], '')[0], '')[0]).match(/[A-H]#?m?/), '')[0] || '';
    }
    
    static get bemoles() {
      return {
        'A#': 'B',
        'C#': 'Db',
        'D#': 'Eb',
        'F#': 'Gb',
        'G#': 'Ab',
      };
    }
    
    static withBemoles(chords, isSet) {
      return (isSet ? chords.replace(/[A-H]#/g, all => ICom.bemoles[all] || all) : chords).replace(/A#/g, 'B');
    }
    
    actualChords(chordsScalar, position = this.transPosition) {
      const chords = mylib.isStr(chordsScalar) ? chordsScalar : this.chords[chordsScalar];
      return chords && ICom.withBemoles(this.transBlock(chords, position), this.isBemoled);
    }
    
    lineComponent(props) {
      const {
        key,
        chordedOrd,
        textLine,
        textLinei,
        textLines,
        orderUnit,
        orderUniti,
        onLetterClick,
        onWordClick,
        setWordClass,
        isJoinLetters = true,
        setLineClassName,
        setChorded,
      } = props;
      
      const lineKey = `line-${key}.${orderUniti}-${textLinei}`;
      
      if (!chordedOrd)
        return ce('span',
          { key: `song-woc-part-${lineKey}` },
          textLine.split(/ +/).map((word, wordi, worda) => {
            const actionProps = { ord: orderUnit, linei: textLinei, wordi, word, words: worda.length, lines: textLines };
            return ce('span',
              { key: `song-line-woc-${lineKey}.${wordi}` },
              ce('span', {
                className: mylib.func(setWordClass).call(actionProps),
                onClick: mylib.isFunc(onWordClick)
                  ? event => onWordClick(actionProps, event)
                  : null,
                dangerouslySetInnerHTML: { __html: word }
              }),
              wordi === worda.length - 1 ? null : [' ', ce('wbr', { key: `song-line-woc-wbr-${lineKey}.${wordi}` })]
            )
          })
        );
      
      const letters = this.getVowelPositions(textLine);
      
      let chordIndex = 0;
      const chordsLabels = (this.chordLabels[orderUniti] || [])[textLinei] || [];
      const linePoss = (orderUnit.positions || [])[textLinei] || [];
      
      let points = letters;
      
      if (isJoinLetters)
        points = letters.filter((lett, letti) => !letti || linePoss.indexOf(letti) >= 0 || / /.test(textLine[lett]));
      
      const isHasPre = linePoss.indexOf(-1) > -1;
      const isHasPost = linePoss.indexOf(-2) > -1;
      
      return ce('span',
        {
          key: `song-line-wrapper-${lineKey}`,
        },
        points.map((index, indexi, indexa) => {
          const indexKey = `${lineKey}-${indexi}`;
          let isLast = indexi === indexa.length - 1;
          let isFirst = indexi === 0;
          let firstTextBit = isFirst ? textLine.slice(0, index) : '';
          let chordedFirst = isFirst && isHasPre && firstTextBit === '';
          let chordedLast = isLast && isHasPost;
          let chorded = setChorded ? setChorded(indexi) : (linePoss.indexOf(letters.indexOf(index)) > -1);
          let chordLabel = (chorded ? chordsLabels[chordIndex++ - (isHasPre ? -1 : 0)] || '' : '');

          const chord = chordedFirst ? chordsLabels[0] : chordLabel;
          const pchord = isLast && isHasPost ? chordsLabels[chordsLabels.length - 1] : null;

          let baseTextBitOriginal = textLine.slice(index, indexa[indexi + 1]);
          const isSpacedWord = / /.test(baseTextBitOriginal);
          const origBits = baseTextBitOriginal.split(/ +/g).map((txt, txti, txta) =>
            ce('span',
              { key: `text-bit:${lineKey}.${txti}` },
              ce('span', { dangerouslySetInnerHTML: { __html: txt } }),
              txti === txta.length - 1 ? null : [' ', ce('wbr', { key: `song-line-wbr-${indexKey}.${txti}` })]
            )
          );
          
          return [firstTextBit ?
            ce('span',
              {
                key: `song-letterbit-${lineKey}`,
                className: `${isHasPre ? 'chorded pre' : ''}`,
                dangerouslySetInnerHTML: { __html: firstTextBit },
                chord: chordsLabels[0]
              }
            ) : null,
            ce('span',
              {
                key: `chord_${lineKey}`,
                id: `chord_${lineKey}`,
                chord,
                pchord,
                className: [
                  'chord',
                  (chorded || chordedFirst || chordedLast) && 'chorded',
                  chordedLast && 'post',
                  chordedFirst && 'pre',
                  isSpacedWord && 'spaced-word',
                  chorded && isLast && isHasPost && 'twice',
                  mylib.func(setLineClassName).call(chorded),
                ].filter(s => s).join(' '),
                onClick: !onLetterClick || (isHasPre && isFirst && !chorded)
                  ? null
                  : (() => onLetterClick(indexi)),
              },
              chorded || chordedLast
                ? ce('f',
                    {
                      chord,
                      pchord: pchord || null
                    },
                    origBits
                  )
                : origBits
            )
          ];
        })
      );
    }
    
    orderComponent(props) {
      const {
        key,
        style,
        onClick,
        ref,
        asLineComponent,
        setChorded,
        setHideAnchor,
        onLineClick,
        onChordBlockClick,
        setOrdClassName,
        setChordsPosition,
        orderUnit,
        orderUniti,
        currTransPosition,
        isAnchorInheritHide,
      } = props || {};
      
      if ((isAnchorInheritHide && (orderUnit.top.isAnchorInherit || orderUnit.top.isPrevAnchorInheritPlus)) || !orderUnit.isVisible) return null;
      
      const params = (init = {}) => {
        return Object.assign({
            id: `com-block-${orderUniti}`,
            ref: element => element && g.actions.com.registerBlock(orderUniti, element),
            onContextMenu: (event) => {
              event.preventDefault();
              // navigator.clipboard.writeText('text123');
            },
          },
          init,
          g.streamManager.isCurr
            ? {
              onDoubleClick: () => g.streamManager.setBlocki(orderUniti, () => g.ss())
            }
            : null,
          g.streamManager.isSub
            ? {
              style: Object.assign({},
                g.streamManager.isCurr
                  ? {
                    borderTop: 'dotted var(--color-far) 1px'
                  }
                  : null,
                g.streamManager.isSubBlocki(orderUniti)
                  ? {
                    backgroundColor: 'var(--color-light-far)',
                  }
                  : null
              )
            }
            : null
        );
      };
      
      const isHideAnchor = !g.streamManager.isSub && orderUnit.isAnchor && mylib.func(
        setHideAnchor,
        ord => !ord.isOpened && !g.playerShown
      ).call(orderUnit);
      
      if (isHideAnchor) {
        
        return ce('div',
          params({
            key: `anchor-block-${orderUniti}-${orderUnit.a}`,
            className: `${orderUnit.top.headClassName} anchor styled-block`
          }),
          orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })
        );
      } else if (orderUnit.texti == null) {
        const chords = this.actualChords(orderUnit.chordsi, currTransPosition);
        if (!chords) return null;
        
        return ce('div',
          params({
            key: `chorded-block-${orderUniti}-${orderUnit.chordsi}`,
            className: 'com-order-block styled-block flex flex-baseline',
          }),
          ce('div',
            {
              key: `chorded-block-${orderUniti}-header`,
              className: `header ${(!g.nav.v) ? 'anchor styled-block' : ''} ${orderUnit.top.headClassName}`
            },
            orderUnit.top.header({ isTexted: g.nav.v, r: orderUnit.repeatsTitle })
          ),
          !g.nav.v ? null : ce('pre',
            {
              key: `chorded-block-${orderUniti}-content`,
              className: `body ${orderUnit.top.textClassName}`,
              onClick: mylib.isFunc(onChordBlockClick)
                ? event => onChordBlockClick({ ord: orderUnit, linei: 0, wordi: 0, word: null, words: 1, lines: 1 }, event)
                : null
            },
            chords
          )
        );
      }
      
      const blockHeader = orderUnit.top.isInherit ? null : orderUnit.top.header({ isTexted: true });
      const chordedOrd = mylib
        .func(
          setChorded,
          ord => ord.chordsi - -1 && (g.nav.v === 2 || (g.nav.v === 1 && ord.isMin))
        )
        .call(orderUnit);

      return ce('div',
        params({
          key: `song-part-wrapper user-select${orderUniti}`,
          className: [
            'com-order-block song-part-wrapper Xuser-select',
            mylib.func(setOrdClassName).call(orderUnit)
          ].filter(s => s).join(' '),
        }),
        ce('div',
          {
            key: `song-part-woc-${orderUniti}`,
            className: `song-part ${chordedOrd ? '' : 'without-chords'} ${orderUnit.top.textClassName}`,
          },
          blockHeader
            ? ce('span',
              {
                key: `song-part-header-${orderUniti}`,
                className: orderUnit.top.headClassName,
              },
              blockHeader
            )
            : null,
          (orderUnit.repeated || '')
            .split(/\n/)
            .map((textLine, textLinei, textLinea) =>
              ce('div',
                {
                  key: `song-line:${orderUniti}-${textLinei}`,
                  className: 'song-line',
                  onClick: () => mylib.func(onLineClick).call(textLine, textLinei, orderUnit, orderUniti),
                },
                mylib.func(asLineComponent, this.lineComponent.bind(this)).call({ chordedOrd, textLine, textLinei, textLines: textLinea.length, orderUnit, orderUniti })
              )
            )
        )
      );
    }
      
    ordersComponent(props) {
      const {
        key,
        style,
        onClick,
        ref,
        asLineComponent,
        asOrdComponent,
        setChorded,
        setHideAnchor,
        onLineClick,
        setClassName,
        setOrdClassName,
        setChordsPosition,
      } = props || {};
      
      let modulc;
      let currTransPosition = this.transPosition;
      
      return ce('div',
        {
          key: `com-ord-list:${key}`,
          className: [
            'com-ord-list',
            mylib.func(setClassName).call(),
          ].filter(s => s).join(' '),
          onClick, ref,
          style: mylib.overlap({
            fontSize: `${localStorage[g.lsCurrentCompositionFontSize] || 100}%`
          }, style),
        },
        this.orders.map((orderUnit, orderUniti) => {
          let trPos = currTransPosition;
          if ((orderUnit.top.style || 0).isModulation) {
            trPos = 0;
            currTransPosition = this.transPosition + (orderUnit.fieldValues.md || 0);
          }
          const ordProps = mylib.overlap({}, props, { orderUnit, orderUniti, currTransPosition: trPos });
          return mylib.func(asOrdComponent, () => this.orderComponent(ordProps)).call(ordProps);
        })
      );
    }
    
    get ords() {
      if (this._ords == null) this._ords = this.forcedArray(this.top.o, 'incorrect ord line');
      
      return this._ords;
    }
    
    get orders() { return this._o || this.setOrders(); }
    setOrders() {
      const val = this.ords
        .map((ord) => {
          ord.originWid = mylib.def(ord.originWid, ord.w);
          return ord;
        })
        .sort((a, b) => a.w - b.w);
      let ordi = 0;
      const orders = [];
      let minimals = [];
      const styles = g.setts.styles || [];
      const groups = {};
      let viewIndex = 0;
      let sourceIndex = 0;
      let originIndex = 0;
      let prev, prevOrd;
      let leadOrd = null;
      const self = this;
      const translate = function () { return arguments[self.langi || 0]; };
      
      const getStyle = (o, def = {}) => {
        return o && o.s != null
          ? styles.find(block => block.name === o.s) || def
          : def;
      };
      
      const setMin = src => {
        const style = src.init ? src.init.style : src.style;
        const styleName = ((style || '').name || '').trim();
        if (style.isModulation) minimals = [];
        src.m = !minimals.some(([s, c]) => styleName === s && src.c === c);
        minimals.push([styleName, src.c, src]);
      };
      
      const header = (ord, style, numered = true) => {
        const type = style.name.trim();
        const number = numered
          ? groups[type] = groups[type] == null
            ? 1
            : ord.a == null
              ? groups[type] + 1
              : groups[type]
          : '';
        
        const h = (bag = {}) => {
          return mylib.stringTemplater(style.header, mylib.overlap({
            num: numered ? groups[type] < 2 ? '' : ` ${number}` : '',
            translate,
          }, bag));
        };
        
        return b=>h(b);
      };
      
      for (let i = 0; i < val.length; i++) {
        const ord = val[i];
        if (ord == null) {
          orders.push(new IOrder({
            header: () => '!!!',
            isError: true,
            com: this,
          }));
          continue;
        }
        const targetOrd = ord.a == null ? null : orders.find(o => o.u === ord.a);
        const top = IOrder.getWithExtendableFields(((targetOrd || 1).top || 1).source, ord);
        
        const style = getStyle(top, null);
        
        if (!style) {
          orders.push(new IOrder({
            header: () => '???',
            isError: true,
            com: this,
            source: ord,
          }));
          continue;
        }
        
        if (style.isInherit) continue;
        
        top.style = style;
        top.com = this;
        top.source = ord;
        top.isNextInherit = !!getStyle(val[i + 1]).isInherit;
        top.isNextAnchorOrd = !!(ord.u != null && val[i + 1] && val[i + 1].a === ord.u);
        top.isPrevTargetOrd = !!(targetOrd && (val[i - 1] == targetOrd.top.source));
        top.targetOrd = targetOrd;
        top.isAnchor = ord.a != null;
        top.isTarget = ord.u != null && val.some(o => o.a === ord.u);
        top.viewIndex = viewIndex++;
        top.sourceIndex = val.indexOf(ord);
        top.originIndex = val.indexOf(targetOrd ? targetOrd.top.source : ord);
        top.headClassName = g.setts.query(style.name, 'c', ' ');
        top.textClassName = g.setts.query(style.name, 't', ' ');
        top.random = Math.random();
        
        setMin(top);
        
        const newOrder = new IOrder(top);
        orders.push(newOrder);
        
        top.header = newOrder.isEmptyHeader || !newOrder.isVisible
          ? (bag, isRequired) => isRequired ? header(ord, style, false)(bag) : ''
          : targetOrd && targetOrd.top.header
            ? targetOrd.top.header
            : header(ord, style);
        
        top.prev = prev || null;
        
        if (prev) prev.top.next = newOrder;
        prev = newOrder;
        
        if (!top.isAnchor) {
          top.prevOrd = prevOrd || null;
          if (prevOrd) prevOrd.top.nextOrd = newOrder;
          prevOrd = newOrder;
        }
        
        let isPrevAnchorInheritPlus = top.a != null;
        
        if (top.a != null && newOrder.isVisible) {
          const leadStyle = getStyle(targetOrd);
          let anci = targetOrd.top.sourceIndex + 1;
          let anc = val[anci];
          let ancStyle = getStyle(anc);
          let anchorInheritIndex = 0;
          
          while (ancStyle.isInherit) {
            isPrevAnchorInheritPlus = true;
            const ancTop = IOrder.getWithExtendableFields(((targetOrd || {}).top || {}).source, anc);
            
            ancTop.isAnchorInherit = true;
            ancTop.isInherit = true;
            ancTop.style = ancStyle;
            ancTop.com = this;
            ancTop.source = anc;
            ancTop.header = top.header;
            ancTop.init = top;
            //ancTop.targetOrd = targetOrd;
            ancTop.leadOrd = newOrder;
            ancTop.isNextInherit = !!getStyle(val[anci + 1]).isInherit;
            ancTop.anchorInheritIndex = anchorInheritIndex++;
            ancTop.viewIndex = viewIndex++;
            ancTop.sourceIndex = val.indexOf(targetOrd.top.source);
            ancTop.originIndex = val.indexOf(anc);
            ancTop.headClassName = g.setts.query(leadStyle.name, 'c', ' ', ancStyle.name);
            ancTop.textClassName = g.setts.query(leadStyle.name, 't', ' ', ancStyle.name);
            
            ancTop.random = Math.random();
            
            setMin(ancTop);
            
            const newAncOrd = new IOrder(ancTop);
            orders.push(newAncOrd);
            
            anc = val[++anci];
            ancStyle = getStyle(anc);
          }
        }
        
        let nexti = i + 1;
        let next = val[nexti];
        let nextStyle = getStyle(next);
        
        if (newOrder.isVisible)
          while (nextStyle.isInherit) {
            const nextTop = IOrder.getWithExtendableFields(((targetOrd || {}).top || {}).source, next);
            
            nextTop.isInherit = true;
            nextTop.style = nextStyle;
            nextTop.com = this;
            //nextTop.targetOrd = targetOrd;
            //nextTop.leadOrd = leadOrd;
            nextTop.prev = prev;
            nextTop.init = top;
            nextTop.isNextInherit = !!getStyle(val[nexti + 1]).isInherit;
            nextTop.isPrevAnchorInheritPlus = isPrevAnchorInheritPlus;
            nextTop.header = top.header;
            nextTop.source = next;
            nextTop.viewIndex = viewIndex++;
            nextTop.sourceIndex = val.indexOf(next);
            nextTop.originIndex = val.indexOf(next);
            nextTop.headClassName = g.setts.query(style.name, 'c', ' ', nextStyle.name);
            nextTop.textClassName = g.setts.query(style.name, 't', ' ', nextStyle.name);
            
            nextTop.random = Math.random();
            
            setMin(nextTop);
            
            const newNextOrd = new IOrder(nextTop);
            orders.push(newNextOrd);
            
            if (prev) prev.top.next = newNextOrd;
            prev = newNextOrd;
            
            next = val[++nexti];
            nextStyle = getStyle(next);
          }
      };
      
      this._o = orders;
      return orders;
    }
  }

  g.ICom = ICom;

  stage(10);

  ///// Components:

  class CCats extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      const cats = g.cols.cats;
      const struct = cats.filter(cat => mylib.correctRegExp(this.state.searchText || '', 'i').test(cat.name));

      return ce(
        'div',
        {},
        g.ColAdditionButtons && ce(g.ColAdditionButtons),
        null && [ce('input',
          {
            key: 'cat-searcher',
            type: 'text',
            className: 'm--ok minput cleared-input mblock filter-input mmd',
            onInput: event => {
              let searchText = convertForRegExp(event.target.value);
              this.setState({ searchText });
            },
            value: this.state.searchText
          }
        ),
        ce('span', {
          key: 'cat-filter-input-clear-button',
          className: 'clear-button',
          onClick: event => {
            this.setState({ searchText: '' });
            event.target.previousSibling.focus();
          }
        })],
        struct.map((cat, cati) => {
          return cat == null ?
            null :
            ce('button',
              {
                key: `cat-face-button-${cati}`,
                id: cat.wid,
                className: 'mbtn mblock mupper m-ok mmd',
                style: {
                  backgroundColor: cat.removed ? 'red' : ''
                },
                onClick: () => g.nav.setCat(cat.wid),
              },
              ce('span', { key: `${cati}-cat-name` }, cat.name)
            );

        })
      );
    }
  }

  g.Cats = CCats;

  stage(11);
  
  const convertForRegExp = text => text[0] === '%' ? text.substr(1) : text.replace(/([?*$^/.\\][{}()])/g, '\\$1');
  
  g.transcriptions = [
    ['ыіi', 'ыії'],
    ["ъ'ʼ", "ъ'ʼ"],
    ['эє'],
    ['гґ'],
    ['её']
  ];
  
  if (!g.selectedComs)
    g.selectedComs = [];

  class CCat extends React.Component {
    constructor(props) {
      super();
    }
    
    fu() {
      this.forceUpdate();
    }
    
    onSelectStart(com, event) {
      if (event && event.touches > 1) {
        clearTimeout(this.mouseDownTimeout);
        return;
      }
      this.mousedownOn = com.wid;
      this.mouseDownTimeout = setTimeout(() => {
        const index = g.selectedComs.indexOf(com.wid);

        if (~index) g.selectedComs.splice(index, 1);
        else g.selectedComs.push(com.wid);

        this.forceUpdate();
        this.canOpenCom = false;
      }, 400);
    }

    onSelectEnd(com) {
      clearTimeout(this.mouseDownTimeout);

      if (this.canOpenCom !== false && this.mousedownOn == com.wid) {
        g.nav.setCom(com.wid);
      }

      this.canOpenCom = true;
    }

    openActionsModal() {
      mylib.modal({
        title: 'Действия с выбранными песнями',
        inputs: [
          !g.meetings.isEditable
            ? null
            : {
              type: 'button',
              value: 'Прикрепить к событию',
              onClick: () => g.meetings.insertMarksToMeeting(g.selectedComs),
            },
          {
            type: 'button',
            value: 'Добавить в закладки',
            closable: true,
            onClick: () => {
              g.marks.insertMarks(g.selectedComs)
                .then(ok => {
                  g.selectedComs = [];
                  g.ss();
                });
            }
          }
        ],
        buttons: [
          {
            title: 'Снять отметки',
            onClick: () => {
              g.selectedComs = [];
              this.fu();
            }
          }, { title: 'Отмена' }
        ]
      });
    }

    render() {
      const ccat = g.nav.ccat;
      const streamComw = g.streamManager.current && g.streamManager.current.comw;
      
      return !ccat
        ? null
        : ce('div',
          {
            key: 'ccat-wrapper',
            className: `category-wrapper${g.selectedComs.length ? ' select-mode' : ''}`
          },
          [
            g.CatHeads ||
            ce('div',
              {
                key: 'category-title-col-title',
                className: 'category-title col-title',
              },
              ccat.name || 'Карегория без названия'
            ),
            ce('input',
              {
                key: 'com-searcher',
                type: 'text',
                className: 'filter-input cleared-input minput m--ok mblock mmd',
                onInput: (event) => ccat.search(event.target.value, () => this.fu(), 500, () => {
                  this.fu();
                  this.comsListElement.scrollTop = 0;
                }),
                onChange: () => {},
                ref: el => el && (this.searchInput = el),
                value: ccat.term
              }
            ),
            ccat.term
              ? ce('span', {
                  key: 'com-filter-input-clear-button',
                  className: 'clear-button',
                  onClick: event => {
                    ccat.search('', () => this.fu());
                    this.searchInput.focus();
                  },
                })
              : null,
            ce('div',
              {
                key: 'select-actions-panel',
                className: 'select-actions-panel'
              },
              ce('span',
                {
                  key: 'select-actions-panel-to-event',
                  className: 'mbtn m-br msm mactive',
                  onClick: () => this.openActionsModal(),
                },
                `Действия с ${g.selectedComs.length} ${mylib.declension(g.selectedComs.length, 'выбранной песней', 'выбранными песнями', 'выбранными песнями')}`
              )
            ),
            ce('div',
              {
                key: 'component-list',
                className: `component-list ${g.isAccessed('catDel') ? 'can-redact' : ''}`,
                ref: el => el && (this.comsListElement = el)
              },
              ccat.wraps
                ? ce('div',
                  {
                    key: 'coms-count',
                    style: {
                      textAlign: 'center'
                    }
                  },
                  `${ccat.coms.length === ccat.wraps.length ? '' : `${ccat.wraps.length} / `}${ccat.coms.length}`
                )
                : null,
              ccat.wraps
                .map((wrap, comi) => {
                  const { com, errors } = wrap || {};
                  const orderPositionIndex = g.selectedComs.indexOf(com.wid);
                  const className = () => `${errors ? 'm-ko' : streamComw === com.wid ? 'm-br' : wrap.deep > 0 ? 'm-no' : 'm-ok'}${~orderPositionIndex ? ' mactive' : ''}`;

                  return com == null
                    ? null
                    : ce('div', { key: `com-face-${com.wid}`, id: com.wid },
                      ce('button',
                        {
                          key: `com-face-button-${com.wid}`,
                          className: `com-face mbtn ${className()} mblock mmd`,
                          onMouseDown: () => this.onSelectStart(com),
                          onTouchStart: event => this.onSelectStart(com, event),
                          onMouseUp: () => this.onSelectEnd(com),
                          onTouchEnd: () => this.onSelectEnd(com),
                          onMouseMove: () => clearTimeout(this.mouseDownTimeout),
                          onTouchMove: () => {
                            clearTimeout(this.mouseDownTimeout);
                            this.canOpenCom = false;
                          },
                          'order-position': ~orderPositionIndex ? orderPositionIndex - -1 : null,
                          style: {
                            backgroundColor: com.removed ? 'red' : ''
                          }
                        },
                        ce('span', { key: `com--n-${com.wid}` }, `${'' && wrap.field && (comi + '[' + wrap.rate + wrap.field + ']') || ''}${com.index == null ? '?' : com.index - -1}${com.refs && com.refs[ccat.wid] ? `, №${com.refs[ccat.wid]}.` : '.'} ${com.name}`)
                      ),
                      errors
                    )
                })
            )
          ].filter((part, parti) => ccat.removed ? parti === 0 : true)
        );
    }
  }

  g.Cat = CCat;

  stage(12);

  g.tryExistance = () => {
    const coms = g.cols.coms;
    const cats = g.cols.cats;

    const nav = g.nav;
    const pcat = g.Phase.Cat;
    const pcom = g.Phase.Com;

    const catw = nav[pcat];
    const comw = nav[pcom];

    if (!cats.some(cat => cat.wid === catw)) {
      nav[pcat] = 0;
      nav[pcom] = 0;
      if (g.nav.isPhase(pcom, pcat)) nav.phase = g.Phase.Cats;
    } else if (!coms.some(com => com.wid === comw)) {
      nav[pcom] = 0;
      if (g.nav.isPhase(pcom)) nav.phase = pcat;
    }
  };

  mylib.makeCssPrefs();
  
  class CComCtrlPannel extends React.Component {
    constructor() {
      super();
      this.state = {
        isShowNatives: false,
      };
    }

    render() {
      const ccom = this.props.ccom;
      const ccat = g.nav.ccat;
      const cats = g.cols.cats;
      const coms = g.cols.coms.filter(com => !ccat.wid ? true : ~ccat.stack.indexOf(com.wid));
      const nav = g.nav;
      const isMarked = g.marks.isMarked(ccom.wid);
      const isWhole = !ccom.orders.some(ord => !ord.isMin && ord.texti != null && ord.a == null);
      
      return ce('div',
        {
          key: 'chord-ctrl',
          className: 'chord-ctrl',
        },
        ce('div',
          {

          },
          ce('button', {
            key: 'song-number-button',
            id: 'song-number-button',
            title: 'Номер песни',
            ref: element => {
              if (this.songNumberElement || !element) return;
              this.songNumberElement = element;
              const cb = (event) => {
                if ((event.name === 'start' || event.name === 'change') && event.direction.match(/d/)) {
                  this.setState({ isShowNatives: true });
                } else if (event.name === 'stop') {
                  this.setState({ isShowNatives: false });
                }
              };
              mylib.setDirective(element, 'onSwipe', cb);
            },
            className: `mbtn msm btn btn-sm btn-${!isMarked ? 'secondary' : 'success m-ok'} song-number`,
            onClick: event => {
              event.stopPropagation();
              
              if (event.ctrlKey) this.setState({ isShowNatives: !this.state.isShowNatives });
              else g.marks.toggle(ccom.wid);
            }
          }, `#${ccom.index == null ? '?' : ccom.index - -1}`),
          this.state.isShowNatives
            ? ce('div',
              {
                key: 'native-numbers-list',
                className: 'native-numbers-list m-ok',
              },
              (refKeys => refKeys.length === 0
                ? ce('div', { key: 'empty-native-numbers-list' }, 'Нет данных')
                : refKeys.map(catw => {
                  const nativeNumber = ccom.refs[catw];
                  const cat = cats.find(cat => cat.wid == catw);

                  if (cat == null) return null;

                  return ce('div', {
                    key: `native-number--${cat.wid}`,
                    className: 'native-number',
                  },
                    ce('span', {
                      key: `cat-native-name${cat.wid}`,
                      className: 'cat-native-name ellipsis',
                    }, `${cat.name}`),
                    nativeNumber
                      ? ce('span', {
                        key: `cat-native-number${cat.wid}`,
                        className: 'cat-native-number',
                      }, `: №${nativeNumber}`
                      )
                      : null
                  );
                }))(Object.keys(ccom.refs || {})))
            : null,
          !ccom.orders || !ccom.orders.some(ord => ord.chordsi != null && ord.chordsi !== -1)
            ? null
            : [
              ce('div',
                {
                  key: 'mgroup btn-group chord-binding',
                  className: 'mgroup chord-binding',
                  ref: element => {
                    if (this.comPlayerElement || !element) return;
                    this.comPlayerElement = element;
                    const cb = (event) => {
                      if (event.name === 'start' && event.direction.match(/d/)) {
                        g.playerShown = !g.playerShown;
                        g.ss();
                        g.updateFlexFontSize();
                      }
                    };
                    mylib.setDirective(element, 'onSwipe', cb);
                  },
                },
                [
                  svg('file-outline', 'нет'),
                  svg('file-remove-outline', 'мин'),
                  svg('file-text-outline', 'макс'),
                ].map((label, v, varr) => {
                  if (nav.v !== v) return;
                  const id = `song-variant-switcher-${v}`;
                  
                  return ce('button',
                    {
                      key: `navigation-v-${v}`,
                      id,
                      title: v ? v === 1 ? 'Показать минимальное количество аккордов' : 'Показать все аккорды' : 'Скрыть все аккорды',
                      className: `mbtn msm m-ok`,
                      onClick: event => {
                        event.stopPropagation();
                        
                        if (event.ctrlKey) {
                          event.stopPropagation();
                          g.playerShown = !g.playerShown;
                          g.ss();
                        } else {
                          const nv = isWhole ? nav.v ? 0 : 2 : nav.v - (nav.v > 1 ? 2 : -1);
                          
                          g.ss({ v: nv });
                        }
                        g.updateFlexFontSize();
                      }
                    },
                    label
                  );

                })
              ),
              ce('div',
                {
                  key: 'transport-buttons',
                  id: 'transport-buttons',
                  className: 'mgroup btn-group transport',
                  ref: element => {
                    if (this.bemoleSwitcherElement || !element) return;
                    this.bemoleSwitcherElement = element;
                    let isSwitch = false;
                    const cb = (event) => {
                      if (!nav.v) return;
                      if (event.name === 'start') {
                        isSwitch = !!event.direction.match(/d/);
                      } else if (event.name === 'stop' && isSwitch) {
                        isSwitch = false;
                        ccom.turnBemoled();
                        g.ss();
                      }
                    };
                    mylib.setDirective(element, 'onSwipe', cb);
                  },
                },
                [
                  svg('arrow-down-outline', '-'),
                  null,
                  svg('arrow-up-outline', '+')
                ].map((sign, signi) =>
                  ce('button',
                    {
                      key: `transport-${signi}`,
                      title: `Транспонировать песню на тон ${sign ? signi ? 'выше' : 'ниже' : 'в изначальную тональность'}`,
                      className: `mbtn ${!ccom.isBemoled ? 'm-ok' : 'm-br'} msm ${nav.v ? '' : 'disabled'}`,
                      disabled: !nav.v || (!sign && ccom.transPosition === ccom.initialTransPos),
                      onClick: event => {
                        event.stopPropagation();
                        
                        if (event.ctrlKey) ccom.turnBemoled();
                        else {
                          sign
                            ? ccom.transpose(!signi ? -1 : 1)
                            : ccom.setChordsInitialTon();
                        }
                        
                        g.ss();
                        g.updateFlexFontSize();
                      }
                    },
                    sign || ccom.firstChord
                  )
                )
              )
            ],
          g.additionalControlPanelButtons && g.additionalControlPanelButtons()
        ),
        g.playerShown
          ? ce(CComPlayerPanel)
          : null
      );
    }
  }

  g.ComCtrlPannel = CComCtrlPannel;

  class CComPlayerPanel extends React.Component {
    constructor() {
      super();
    }

    render() {
      return ce('div',
        {
          key: 'com-player',
          className: 'com-player',
        },
        g.actions.com.canRoll ?
        [
          ['play-circle-outline', 'Прокручивать'],
          ['book-open-outline', 'Заметки'],
        ].map(([cont, desc], conti) => {
          return conti && !g.marks.coms.length
            ? null
            : ce('div',
              {
                key: `collapse-mode-${cont}`,
                onClick: event => {
                  event.stopPropagation();
                  g.rollMode = 'pause';
                  if (conti) g.rollModeMarks = true;
                  g.ss();
                  g.updateFlexFontSize(400);
                }
              },
              svg(cont, desc)
            )
        }) : 'Развёрнутый режим',
        g.CollapsePane && ce(g.CollapsePane)
      );
    }
  }

  window.ComPlayerPanel = CComPlayerPanel;
  
  class CComPlayerSignaler extends React.Component {
    constructor() {
      super();
      
      this.state = {
        pulse: false,
        active: false,
      };
      
      this.short = true;
      this.closingTime = 1500;
    }
    
    interval(setNext) {
      //if (setNext) setTimeout(() => this.setState({ pulse: !this.state.pulse }), (this.short = !this.short) ? 500 : 100);
      return null;
    }
    
    fu() {
      this.forceUpdate();
    }
    
    render() {
      return g.rollMode
        ? ce('div',
          {
            key: 'com-player-signaler-panel',
            className: `com-player-signaler-panel ${this.state.closing ? 'closing' : ''} ${g.rollMode || 'stop'}-mode`,
          },
          ce('div',
            {
              className: 'speed-panel',
            },
            [
              'plus',
              '',
              'minus'
            ].map((sign, signi) => {
              const isActive = g.actions.com.isSpeedRollKfSetterActive(signi);
              
              return ce('div',
                {
                  key: `${sign}-sign of speed`,
                  className: 'sign-digit',
                  onClick: event => {
                    event.stopPropagation();
                    if (!isActive || !sign) return;
                    g.actions.com.updateSpeedRollKf(signi ? 1 : -1);
                    this.fu();
                  },
                  onTouchStart: event => {
                    event.stopPropagation();
                  }
                },
                sign ? svg(`${sign}-square${isActive ? '' : '-outline'}`) : g.actions.com.speedRollKfLabel
              );
            })
          ),
          ce('div',
            {
              key: 'com-player-signaler',
              className: `com-player-signaler ${this.state.pulse ? 'pulse' : ''} ${this.state.active ? 'active' : ''} ${this.state.closing ? 'closing' : ''}`,
              style: {
                '--slosing-time-kf': this.closingTime,
              },
              onClick: event => {
                event.stopPropagation();
              },
              onTouchStart: event => {
                this.setState({ closing: true });
                this.closingTimeout = setTimeout(() => {
                  g.rollMode = null;
                  g.rollModeMarks = false;
                  g.ss();
                  this.setState({ closing: false });
                  g.updateFlexFontSize(400);
                }, this.closingTime);
              },
              onTouchEnd: event => {
                this.setState({ closing: false });
                clearTimeout(this.closingTimeout);
              }
            },
            //this.interval(true),
            svg('music-outline'),
            ce('span',
              {
                key: 'com-player-signaler-num',
                className: 'num',
              },
              ''
            )
          )
        )
      : this.interval(false);
    }
  }

  stage(13);
  
  class CCom extends React.Component {
    constructor() {
      super();
              
      this.isChordsImagineBlockOpened = false;
      g.actions.com.setContext(this);
    }
    
    fu() {
      this.forceUpdate();
    }

    render() {
      const ccom = g.nav.ccom;
      if (ccom == null) return ce('div', { key: 'com-not-found' }, 'Песня не найдена');

      const actions = g.actions.com;
      
      return ce('div',
        {
          key: 'com-ord-list-wrapper',
          className: 'com-screen',
          ref: actions.winName,
          style: {
            '--roll-mode-padding-kf': actions.rollYAxis,
          },
        },
        ce(g.ComCtrlPannel, { ccom }),
        ce('div',
          {},
          [].concat(g.rollModeMarks ? g.marks.coms : ccom).map((com) => {
              return com && com.ordersComponent(
                {
                  key: `main-com-${com.wid}`,
                  onClick: () => actions.turnRoll(),
                  isAnchorInheritHide: !g.streamManager.isSub && !g.playerShown,
                }
              );
            })
        ),
        ce('div',
          {
            key: 'rollYAxis thumb',
            className: `roll-y-axis-thumb ${g.rollMode ? 'show' : ''}`,
            onClick: event => {
              event.stopPropagation();
              actions.nextRollYAxis(() => this.fu());
            },
            ref: actions.rollYAxisThumbName,
          },
          svg('menu-arrow-outline')
        ),
        ce('div',
            {
              key: `some-vcom-wrppr`,
              className: `chords-images-show-panel${!g.nav.v || g.rollMode || g.streamManager.isSub ? ' hidden' : ''}`,
            },
            ce('div',
              {
                key: 'show-wrappper',
                className: 'mgroup msm',
              },
              ce('button', 
                {
                  key: 'hiddener-chords-imgn',
                  className: 'mbtn m-ok',
                  onClick: () => {
                    this.isChordsImagineBlockOpened = !this.isChordsImagineBlockOpened;
                    this.forceUpdate();
                  }
                },
                svg('options-2-outline', ''),
                this.isChordsImagineBlockOpened
                  ? svg('chevron-up-outline', 'Скрыть изображения аккордов')
                  : svg('chevron-down-outline', 'Показать изображения аккордов')
              ),
              g.usedChordsButtons
            ),
            ce('div',
              {
                key: 'usedChords',
                className: `used-chords ${this.isChordsImagineBlockOpened ? ' shown' : ''}`
              },
              ce(
                'div',
                {},
                ccom.audio_lock && ccom.audio.split('\n\n').map(ablock => {
                  const [src, description] = mylib.explode('\n', ablock, 2);
                  return src && [
                    ce('audio',
                      {
                        key: `audio-${ablock}`,
                        controls: true,
                        preload: 'none',
                        src,
                        style: {
                          width: '100%',
                          outline: 'none',
                        }
                      }
                    ),
                    ce('div',
                      {
                        key: `audio-descr-${ablock}`,
                        style: {
                          whiteSpace: 'pre',
                        }
                      },
                      description),
                  ];
                })
              ),
              Object.keys(ccom.usedChords)
                .filter(uc => uc)
                .map(chordName => {

                  return ce('div',
                    {
                      key: `chord-used-${chordName}`,
                      className: 'chord-application'
                    },
                    ce(ChordCard, { chordName, chordLabel: ccom.usedChords[chordName] })
                  );
                })
            )
          )
        );
    }
  }

  g.Com = CCom;
  
  
  class IComActions {
    constructor(prev = {}) {
      
      this.rollBlocki = mylib.typ(0, prev.rollBlocki);
      this.resetBlockChildrenList();
      this.win = null;
      this.winName = 'IComActions.target.element';
      this.rollYAxisColumnName = 'rollYAxisColumnName';
      this.rollYAxisThumbName = 'rollYAxisThumbName';
      this.nextRollYAxis();
      this.speedRollKf = localStorage.cm_speedRollKf || 10;
    }
    
    nextRollYAxis(cb) {
      const axes = [.3, .5, .7, .1];
      const nextIndex = (localStorage.cm_rollYAxis || axes.indexOf(this.rollYAxis)) - (this.rollYAxis ? -1 : 0);
      const next = axes[nextIndex];
      this.rollYAxis = next || axes[0];
      
      localStorage.cm_rollYAxis = next ? nextIndex : 0;
      
      cb && cb();
    }
    
    setContext(context) {
      this.context = context;
      
      setTimeout(() => {
        const refs = this.context.refs;
        this.win = refs[this.winName];
        this.axisThumb = refs[this.rollYAxisThumbName];
        this.axisColumn = refs[this.rollYAxisColumnName];
        
        this.registerWinActions();
        //this.registerAxisControls();
      });
    }
    
    registerAxisControls() {
      let axisMove = false;
      const thumb = this.axisThumb;
      const column = this.axisColumn;
      const onAxisMoveStop = () => axisMove = false;
      const comp = getComputedStyle(thumb);
      const thumbStyle = thumb.style;
      let screenY;
      
      thumb.onclick = event => event.stopPropagation();
      thumb.onmousedown = event => {
        event.stopPropagation();
        axisMove = true;
      };
      
      thumb.ontouchstart = event => {
        event.stopPropagation();
        
        const { touches: [{ screenY: sy }] } = event;
        screenY = sy;
        //mylib.dcconsl(event, screenY);
        axisMove = true;
      };
      
      column.onmousemove = column.ontouchmove = event => {
        if (axisMove) {
          //mylib.dcconsl(event, comp.top);
          thumbStyle.top = `${parseInt(comp.top) + event.movementY / 1.5}px`;
        }
      };
      column.onmouseup = column.ontouchend = event => onAxisMoveStop();
      column.onmouseleave = event => onAxisMoveStop();
    }
    
    registerWinActions(triesCount = 5) {
      const element = this.win;
      if (element == null) {
        if (triesCount > 0) setTimeout(() => this.registerWinActions(triesCount - 1), 1000);
        else element.parentElement_isNotDefined;
        return;
      }
      const parent = element.parentElement;
      let dir = 0;
      let isMultiple = false;

      const onSwipe = event => {
        if ((g.rollMode && g.rollModeMarks) || !g.marks.stack || g.streamManager.isSub || (g.marks.stack.length < 2 && (!isMultiple && event.name === 'stop'))) return;
        
        if (event.name === 'stop') {
          if (dir) {
            const locate = isMultiple
              ? g.nav.ccat.wraps.map(({com}) => com.wid)
              : g.marks.stack;

            const ccomw = (g.nav.ccom || {}).wid;
            const currIndex = locate.findIndex(comw => ccomw === comw);
            let added = false;

            if (!isMultiple && currIndex < 0 || isMultiple && g.isComFullscreenMode) {
              return;
            }

            const newIndex = currIndex < 0
              ? added
                ? dir > 0
                  ? 1
                  : locate.length - 2
                : dir > 0
                  ? 0
                  : locate.length - 1
              : currIndex === 0
                ? dir > 0
                  ? 1
                  : locate.length - 1
                : currIndex === locate.length - 1
                  ? dir > 0
                    ? 0
                    : locate.length - 2
                  : currIndex + dir;

            dir = 0;
            if (locate[newIndex] == null) return;
            
            g.nav.setCom(locate[newIndex], null);
            setTimeout(() => mylib.scrollToView(document.querySelector(`#mark-${locate[newIndex]}`), 'center right'));
          }

          return;
        }

        if (event.direction === 'l') {
          dir = 1;
        } else if (event.direction === 'r') {
          dir = -1;
        } else dir = 0;

        isMultiple = event.touches === 2;
      };
      mylib.setDirective(element, 'onSwipe', {
        startMoveVKf: 100,
        startMoveHKf: 100,
        cb: onSwipe
      });
      
      parent.onscroll = event => {
      };
    }
    
    resetBlockChildrenList() {
      this.comBlockChildren = [];
    }
    
    get canRoll() {
      return this.win && !g.streamManager.isSub;
    }
    
    onComChange() {
      if (this.win && g.nav.isPhase(g.Phase.Com))
        this.win.parentElement.scrollTop = 0;
      
      this.resetBlockChildrenList();
    }
    
    registerBlock(blocki, element) {
      if (this.comBlockChildren[blocki] != element) {
        this.comBlockChildren[blocki] = element;
      }
    }
    
    updateSpeedRollKf(kf) {
      localStorage.cm_speedRollKf = this.speedRollKf -= kf;
    }
    
    isSpeedRollKfSetterActive(signi) {
      return signi ? this.speedRollKf > 1 : this.speedRollKf < 20;
    }
    
    get speedRollKfLabel() {
      return (this.speedRollKf / 10).toFixed(1);// + ' / ' + this.speedRollSlide;
    }
    
    get speedRollSlide() {
      return ((20 - this.speedRollKf) || .7) * 30;
    }
    
    turnRoll() {
      if (!this.win || !g.rollMode) return;
      g.rollMode = g.rollMode === 'play' ? 'pause' : 'play';
      g.ss();
      const element = this.win.parentElement;
      const next = () => get(++this.rollBlocki);
      const get = (blocki = this.rollBlocki) => this.comBlockChildren[blocki];
      let elem = get();
      
      const scroll = (dec = 10) => setTimeout(() => {
        if (g.rollMode !== 'play') return;
        const prevScrollTop = element.scrollTop;
        element.scrollTop += 1;
        const diff = element.scrollTop === prevScrollTop ? 1 : 0;
        
        if (dec > 0) scroll(dec - diff);
        else {
          g.rollMode = 'pause';
          g.ss();
        }
      }, this.speedRollSlide);
      
      scroll();
    }
  }
  
  g.actions = {
    com: new IComActions(g.actions && g.actions.com),
  };
  
  stage(18);

  window.onresize = e => {
    e.preventDefault();
  };
  
  if (g.CEditableChordCard == null) {
    class CEditableChordCard extends React.Component {
      constructor(props) {
        super(props);
      }
      onPointClick() {}
    }
    g.CEditableChordCard = CEditableChordCard;
  }
  
  class CChordCard extends g.CEditableChordCard {
    constructor(props) {
      super(props);
      this.stringsCount = 6;
      
      this.chordName = this.props.chordName || `?`;
      this.chordLabel = this.props.chordLabel;
      this.track = window.json.chords[this.chordName] || [0];
      
      this.strings = [];
      for (let i = 1; i <= this.stringsCount; i++)
        this.strings.push(i);
    }

    getPoints(poss, i) {
      const x = i * this.betweenLad - this.betweenLad / 2;
      if (!~poss)
        return ce('polyline', {
          key: `point-${poss}...${i}`,
          className: 'chord-point',
          points: `${x},${this.betweenStr / 2} ${x},${this.betweenStr * this.stringsCount - this.betweenStr / 2}`
        });
      
      const points = [];
      
      [].concat(poss).forEach((pos) => {
        const y = this.betweenStr * pos - this.betweenStr / 2;
        points.push(
          ce('polyline', {
            key: `chord-point-${pos}`,
            className: 'chord-point',
            points: `${x},${y} ${x},${y}`,
            onClick: this.onPointClick(poss, i, pos)
          }));
      });
      return points;
    }

    render() {
      this.betweenStr = 20 + (this.track[0] * .3);
      this.betweenLad = 80 - (this.track[0] * .7);
      const isFLad = this.track[0] === 0;

      const isRedaction = this.props.isRedaction;

      const lads = this.lads = [];
      
      for (let i = 1; i <= (this.track.length > 4 ? this.track.length - 1 : 3); i++)
        lads.push(i);

      const stringLength = this.betweenLad * lads.length;
      
      return [
        ce('span', {
          key: `first-lad-counter-${this.chordName}`,
          className: 'first-lad-counter',
          onClick: this.onLabelClick
        }, (this.chordLabel || this.chordName) + (this.track[0] ? ` [${this.track[0] + 1}]` : '')),
        ce('svg',
          {
            key: `chord-board:${this.chordName}`,
            className: 'chord-board',
            style: {
              width: stringLength + 3.5,
              height: this.betweenStr * this.stringsCount + (isRedaction ? this.betweenLad / 5 + 3 : 0)
            }
          },
          [
            ce('polyline', { // zero line
              key: `zero-line.${this.chordName}`,
              points: `2,0 2,${this.betweenStr * this.stringsCount}`,
              className: !isFLad ? 'chord-lad' : 'chord-zero-line'
            }),
            lads.map(ladPos => {
              const x = this.betweenLad * ladPos;

              return ce('polyline', {
                points: `${x},0 ${x},${this.betweenStr * this.stringsCount}`,
                className: 'chord-lad',
                key: `chord-lad_${ladPos}:${this.chordName}`
              });
            }),
            this.strings.map(stringPos => {
              const y = this.betweenStr * stringPos - this.betweenStr / 2;

              return ce('polyline', {
                points: `0,${y} ${stringLength + 3.5},${y}`,
                key: `chord-string-${stringPos}:${this.chordName}`,
                className: 'chord-string',
                strokeWidth: .5 + stringPos / 5
              });
            }),
            this.track.map((stage, stagei) => stagei === 0 || !stage ? null : this.getPoints(stage, stagei)),
            this.buttons,
          ])
      ];
    }
  }

  window.ChordCard = CChordCard;

  stage(21);

  g.translateChords = {
    Ab: 'G#',
    Bb: 'A#',
    Cb: 'H',
    Db: 'C#',
    Eb: 'D#',
    Fb: 'E',
    Gb: 'F#',
    Hb: 'A#',
  };

  stage(22);

  g.styleCols = [
    {
      title: 'Заголовков',
      n: 'c',
      excludedProps: [],
    },
    {
      title: 'Текстов',
      n: 't',
      excludedProps: [],
    },
  ];
  
  if (g.IEditableSetts == null) {
    class IEditableSetts { }
    g.IEditableSetts = IEditableSetts;
  }
  
  class ISetts extends g.IEditableSetts {
    constructor(obj = {}) {
      super();
      this.navigation = mylib.typ({}, obj.navigation);
      this.styles = mylib.typ([], obj.styles).map(st => new IStyleProp(st));
    }

    query(name, type, sep, add) {
      return `${name === add ? '' : `${sep || ''}style-box-${mylib.normQuery(name)}${type ? `-${type}` : ''}`}${add ? `${sep || ' '}inherit-style${sep || ' '}${mylib.normQuery(add)}` : ''}`;
    }
  }
  
  if (g.IEditableStyleProp == null) {
    class IEditableStyleProp extends g.IBased {
      create() { }
    }
    g.IEditableStyleProp = IEditableStyleProp;
  }
  
  class IStyleProp extends g.IEditableStyleProp {
    constructor(props) {
      super(props);
      if (!props.n) {
        throw mylib.consl('there is no StyleProp name');
      }
      
      this.headerProps = props.c;
      this.textProps = props.t;
    }
    
    getOrBase(o, t) {
      return mylib.func(super.getOrBase && (() => super.getOrBase(o, t))).call();
    }
    
    get name() { return this.getOrBase('', 'n'); }
    //set name(val) { this.n = mylib.typ('', val); }
    
    get header() { return this.getOrBase('', 'h'); }
    //set header(val) { this.h = mylib.typ('', val); }
    
    get isInherit() { return this.getOrBase(0, 'i'); }
    //set isInherit(val) { this.i = mylib.typ(0, val); }
    
    get headerProps() { return this.c; }
    set headerProps(val) { this.c = mylib.typ({}, val); }
    
    get level() { return this.l; }
    
    get tags() { return this.tg; }
    
    get textProps() { return this.t; }
    set textProps(val) { this.t = mylib.typ({}, val); }
    
    get isModulation() { return this.getOrBase(0, 'md'); }
    //set isModulation(val) { this.md = mylib.typ(0, val); }
    
  }
  
  g.IStyleProp = IStyleProp;

  g.setts = new ISetts(window.json.settings);

  g.styleProps = [
    {
      n: 'fontStyle',
      title: 'Курсив',
      type: 'p',
      on: 'italic'
    }, {
      n: 'fontWeight',
      title: 'Жирный',
      type: 'p',
      on: 'bold'
    }, {
      n: 'textDecoration',
      title: 'Подчёркнутый',
      type: 'p',
      on: 'underline'
    }, {
      n: 'marginTop',
      title: '-Отступ сверху-',
      type: 'p',
      on: '0'
    }, {
      n: 'fontSize',
      title: 'Размер',
      type: 'g',
      variants: [
        {
          title: 'S',
          n: 'S',
          val: '.5em'
        }, {
          title: 'M',
          n: 'M',
          val: '.7em'
        }, {
          title: 'N',
          n: 'N',
          val: '1em'
        }
      ],
      def: 'N'
    }, {
      n: 'marginLeft',
      title: 'Отступ',
      type: 'g',
      variants: [
        {
          title: 'Z',
          n: 'Z',
          val: '0'
        }, {
          title: 'S',
          n: 'S',
          val: '.5em'
        }, {
          title: 'M',
          n: 'M',
          val: '1em'
        }, {
          title: 'L',
          n: 'L',
          val: '1.5em'
        }
      ],
      def: 'Z'
    }
  ];

  const putStyles = () => {
    const topStyles = {};
    const newStyles = topStyles['.app-container.cm .com-ord-list '] = {};
    
    g.styleCols.forEach(styleCol => {
      g.setts.styles.forEach(styleBlock => {
        const block = newStyles[g.setts.query(styleBlock.name, styleCol.n, '.', styleBlock.isInherit ? styleBlock.name : '')] = {};
        const sBlock = styleBlock[styleCol.n];

        Object.keys(sBlock).forEach(bProp => {
          const prop = g.styleProps.find(sProp => sProp.n === bProp);
          block[bProp] = prop.type === 'p' ? sBlock[bProp] : (prop.variants.find(variant => variant.n === sBlock[bProp]) || {}).val;
        });
      });
    });

    mylib.useElement('style', 'cm-styles', style => style.innerText = mylib.stringifyCss(topStyles));
  };

  putStyles();
  
  stage(24);


  class IMarks {
    constructor() {
      const marks = mylib.getLS(this.ls()) || { s: [] };

      this.stack = marks.s.filter(comw => g.cols.coms.some(com => com.wid === comw));
      this.setComs();
    }
    
    listenOnEmpty(cb) {
      this.onEmptyListener = cb;
    }
    
    setComs() {
      const prevLen = (this.coms || '').length;
      this.coms = this.stack.map((comw) => g.cols.coms.find(com => com.wid === comw)).filter(c => c);
      const len = this.coms.length;
      
      if (prevLen !== len) mylib.func(this.onEmptyListener).call(len < 1);
    }

    goto(comw) {
      if (comw) {
        g.nav.setCom(comw);
      } else {
        this.stack.splice(this.stack.indexOf(comw), 1);
      }

      this.save();
    }

    bumerang(comw) {
      if (this.stack.length < 2) return;
      const comwi = this.stack.indexOf(comw);
      const find = dir => this.stack.indexOf(this.stack[dir > 0 ? 'reduce' : 'reduceRight']((curr, cw, cwi, cwa) => curr == null ? cw === comw ? cwi : null : curr > cwa.length ? curr : cw, null));

      const index = find(comwi ? -1 : 1);

      [this.stack[index], this.stack[comwi]] =
        [this.stack[comwi], this.stack[index]];
      
      this.setComs();
      g.ss();
      this.save();
    }

    toggle(comw) {
      const index = this.stack.indexOf(comw);

      if (index < 0) this.stack = this.stack.slice(0).concat(comw);
      else this.stack = this.stack.slice(0).filter(ccomw => ccomw !== comw);

      this.save();
      this.setComs();
      g.ss();
    }

    replace(marks) {
      this.stack = marks.slice(0);
      this.setComs();
      this.save();
    }

    append(marks, isRepInclusive) {
      const olds = isRepInclusive
        ? this.stack.filter(comw => marks.indexOf(comw) < 0)
        : this.stack;
      const news = !isRepInclusive
        ? marks.filter(comw => this.stack.indexOf(comw) < 0)
        : marks;
      this.replace(olds.concat(news));
    }

    insertMarks(marks, description) {
      if (this.stack.length === 0 && !description) {
        this.replace(marks);
        g.ss();
        return new Promise(resolve => resolve(true));
      } else {
        return mylib.modal((cb) => {
          return {
            title: 'Добавить в закладки',
            description,
            inputs: [
              {
                type: 'button',
                value: 'Заменить список',
                closable: true,
                onClick: () => {
                  this.replace(marks);
                  cb(true);
                  g.ss();
                }
              }
            ].concat(this.stack.some(comw => ~marks.indexOf(comw))
              ? [
                {
                  title: 'Добавить в конец:',
                  type: 'button',
                  value: 'Добавить с новыми',
                  closable: true,
                  onClick: () => {
                    this.append(marks, true);
                    cb(true);
                    g.ss();
                  }
                }, {
                  type: 'button',
                  value: 'Добавить со старыми',
                  closable: true,
                  onClick: () => {
                    this.append(marks);
                    cb(true);
                    g.ss();
                  }
                }
              ]
              : {
                type: 'button',
                value: 'Добавить в конец',
                closable: true,
                onClick: () => {
                  this.append(marks);
                  cb(true);
                  g.ss();
                }
              })
          };
        });
      }
    }

    isMarked(comw) {
      return this.stack.indexOf(comw) > -1;
    }

    save() {
      mylib.setLS(this.ls(), { s: this.stack });
    }

    ls() {
      return 'cm_marks';
    }
    
    getNextComw() {
      const index = this.stack.indexOf(g.nav.ccom.wid);
      if (index < 0) return;
      const next = index >= this.stack.length - 1 ? 0 : index - -1;
      return this.stack[next];
    }
    
    next(isEmitBeforeComChange = false, phase = null) {
      g.nav.setCom(this.getNextComw(), phase, isEmitBeforeComChange);
    }
    
    getPrevComw() {
      const index = this.stack.indexOf(g.nav.ccom.wid);
      if (index < 0) return;
      const prev = index <= 0 ? this.stack.length - 1 : index - 1;
      return this.stack[prev];
    }
    
    prev(isEmitBeforeComChange = false, phase = null) {
      g.nav.setCom(this.getPrevComw(), phase, isEmitBeforeComChange);
    }
  }

  class CMarks extends React.Component {
    constructor(props) {
      super();
      this.state = {
        isOpened: false,
      };

      this.isActive = (comw, com, ccomw) => mylib.isFunc(props.isActive)
        ? props.isActive(comw, com, ccomw)
        : ccomw === comw;

      if (mylib.isFunc(props.onInit))
        props.onInit({
          fu: () => this.forceUpdate(),
        });
      
      g.marks.listenOnEmpty(isOpened => !isOpened && this.setState({ isOpened }));
    }

    render() {
      const ccat = g.nav.ccat;
      const ccomw = g.nav[g.Phase.Com];

      return [
        ce(
          'div',
          {
            key: 'marks-block',
            className: `marks-box${this.state.isOpened ? ' opened' : ''}${g.marks.stack.length ? '' : ' hidden'}`,
          },
          this.props.isHideSysButtons
            ? null
            : [
              ce(
                'button',
                {
                  key: 'open-marks-button',
                  id: 'open-marks-button',
                  className: 'open-button mbtn msm m-ok',
                  title: 'Открыть закладки',
                  onClick: () => this.setState({ isOpened: !this.state.isOpened }),
                },
                svg('bookmark-outline', 'm')
              ),
              ce(
                'button',
                {
                  key: 'print-button mbtn msm m-ko',
                  className: 'print-button mbtn msm m-ko',
                  title: 'Действия с закладками',
                  onClick: () => {
                    mylib.modal({
                      title: 'Действия с закладками',
                      inputs: [
                        {
                          value: 'Очистить список',
                          type: 'button',
                          confirm: 'Очистить список закладок',
                          onClick: () => {
                            g.marks.replace([]);
                            g.ss();
                          },
                        },
                        !g.meetings.isEditable
                          ? null
                          : {
                            value: 'Добавить в событие',
                            type: 'button',
                            onClick: () => g.meetings.insertMarksToMeeting(g.marks.stack),
                          },
                        {
                          value: 'Поделиться',
                          type: 'button',
                          onClick: () => {
                            let description = '';
                            mylib.modal({
                              title: 'Поделиться',
                              description: 'Нужно скопировать ссылку',
                              inputs: [
                                {
                                  title: 'Описание',
                                  placeholder: 'Необязательно',
                                  onInput: ({event}) => description = event.target.value,
                                },
                                {
                                  title: 'Ссылка',
                                  value: () => applicanter.prepareStarterHref('marks_list', {
                                    appAction: {
                                      app: 'cm',
                                      type: 'marksList',
                                      val: {
                                        s: g.marks.stack || [],
                                        d: description,
                                      },
                                    },
                                  }),
                                },
                              ],
                            });
                          }
                        }
                      ]
                    });
                  }
                },
                svg('settings-2-outline', 'действия')
              )
            ],
          ce('div',
            {
              key: 'marked-buttons-list',
              id: 'marked-buttons',
              className: 'list'
            },
            g.marks.coms.map((com, comi, coma) => {
              const comw = com.wid;

              return [
                ce('div',
                  {
                    key: `marked-buttons-${comw}`,
                    id: `mark-${comw}`,
                    className: 'mgroup btn-group mblock'
                  },
                  ce('button',
                    {
                      key: `order-button-${comw}`,
                      className: `mbtn msm m-br order-button ${comi ? 'up' : 'down'}-button-marked-sort`,
                      disabled: coma.length < 2,
                      onClick: () => g.marks.bumerang(comw),
                    },
                    comi ? '↑' : '↓'
                  ),
                  ce('button',
                    {
                      key: `mark-${comw}`,
                      className: `mbtn msm com-button${com ? '' : ' m-ko'}${this.isActive(comw, com, ccomw) ? ' mactive' : ''}`,
                      onClick: this.props.onClick
                        ? () => {
                          this.props.onClick(comw);
                          this.forceUpdate();
                        }
                        : () => {
                          g.marks.goto(com && comw);
                          this.setState({ isOpened: false });
                        }
                    },
                    com ? com.name : 'Песня не найдена',
                    ce('span',
                      {
                        key: `com-number${comw}`,
                        className: 'com-number',
                      },
                      com ? com.index == null ? '?' : com.index - -1 || '' : ''
                    )
                  )
                )
              ];
            })
          )
        ),
        ce('div',
          {
            key: 'paranja',
            className: 'paranja',
            onClick: () => {
              this.setState({ isOpened: false });
            }
          }
        )
      ];
    }
  }

  window.Marks = CMarks;

  g.lsCurrentCompositionFontSize = 'lsCurrentCompositionFontSize';

  const lettersTranslator = {
    'z': 'яз',
    'x': 'чх',
    'c': 'с',
    'v': 'мв',
    'b': 'иб',
    'n': 'тн',
    'm': 'ьм',
    ',': 'б',
    '.': 'ю',
    'a': 'фа',
    's': 'ыс',
    'd': 'вд',
    'f': 'аф',
    'g': 'пг',
    'h': 'рх',
    'j': 'ож',
    'k': 'лк',
    'l': 'дл',
    ';': 'ж',
    "'": 'э',
    'q': 'йк',
    'w': 'цв',
    'e': 'уе',
    'r': 'кр',
    't': 'ет',
    'y': 'нйы',
    'u': 'гу',
    'i': 'ши',
    'o': 'що',
    'p': 'зп',
    '[': 'х',
    ']': 'ъ',
  };

  if (g.IEditableStream == null) {
    class IEditableStream {
      update(cb) { cb && cb(); }
      close(cb) { cb && cb(); }
      onClose(cb) { cb && cb(); }
    }
    g.IEditableStream = IEditableStream;
  }

  class IStream extends g.IEditableStream {
    constructor(obj = {}) {
      super();

      this.install(obj);
    }
    get lsName() { return 'cm_streamingData'; }

    get wid() { return this.w; }
    set wid(val) { this.w = val; }

    get fio() { return this.f; }

    get isSharable() { return this.s; }
    
    get comw() { return this.c; }
    set comw(val) { this.c = val; }

    get isClosed() { return this.x; }
    set isClosed(val) { this.x = val; }

    get blocki() { return this.b; }
    set blocki(val) { this.b = val; }

    install(obj = {}) {
      this.w = mylib.typ('...', obj.w, obj.wid, this.w);
      this.x = mylib.typ(0, obj.x, obj.isClosed, this.x);
      this.c = mylib.typ(0, obj.c, obj.comw, this.c);
      this.b = mylib.typ(0, obj.b, obj.blocki, this.b);
      this.s = mylib.typ(0, obj.s, obj.isSharable, this.s);
      this.f = mylib.typ('Без имени', obj.f, obj.fio, this.f);

      return this;
    }

    update(obj = {}, cb, closeCb) {
      this.install(obj);
      this.isClosed ? closeCb() : cb();
    }
  }

  g.IStream = IStream;


  if (g.IEditableStreamManager == null) {
    class IEditableStreamManager {
      wakeUp() { }
      setComw() { }
      setBlocki() { }
      isOtherComw() { }
    }
    g.IEditableStreamManager = IEditableStreamManager;
  }

  class IStreamManager extends g.IEditableStreamManager {
    constructor() {
      super();
    }

    update(obj, cb, closeCb) {
      this.sub && this.sub.update(obj, cb, () => {
        this.current && this.current.onClose(() => this.unsubscribe(closeCb));
      });
    }

    unsubscribe(cb) {
      this.sub = null;
      this.current = null;
      try {
        history.pushState('', '', new URL(location.href).origin);
      } catch (event) { }
      cb && cb();
    }

    async subscribe(id = '', cb) {
      const subscribe = () => {
        this.sub = new g.IStream({ id });
        cb && cb();
      };

      if (this.current) {
        if (this.current.id === id) System.showToast('Текущий стрим');
        else {
          if (!await mylib.confirm('С данного устройства уже был запущен стрим. Для подписки необходимо закрыть текущий', 'Стрим', 'Сбросить и подписаться', 'Отменить')) return;
          this.current.close(subscribe);
        }
      } else subscribe();
    }

    isSubBlocki(blocki = 0) {
      return this.sub && this.sub.blocki === blocki;
    }

    get isCurr() {
      return !!this.current && !this.current.isClosed;
    }

    get isSub() {
      return !!this.sub && !this.sub.isClosed;
    }

    get isJustSub() {
      return !this.isCurr && this.isSub;
    }

    get subId() {
      return this.sub && this.sub.id;
    }
  }

  if (g.IEditableMeeting == null) {
    class IEditableMeeting extends g.IBased { }
    g.IEditableMeeting = IEditableMeeting;
  }

  class IMeeting extends g.IEditableMeeting {
    getOrBase(o, t) {
      return mylib.func(super.getOrBase && (() => super.getOrBase(o, t))).call();
    }
    
    get name() { return this.getOrBase('noname', 'n'); }
    set name(value) { this.n = value; }

    get wid() { return this.getOrBase(0, 'w'); }
    set wid(value) { this.w = value; }

    get begin() { return this.getOrBase(0, 'b'); }
    set begin(value) { this.b = value; }

    get end() { return this.getOrBase(0, 'e'); }
    set end(value) { this.e = value; }

    get stack() { return this.getOrBase([], 's'); }
    set stack(value) { this.s = value; }


    writeMarks(stack, isAppend = false) {

    }

    showDetails() {
      const edits = this.isEditable
        ? this.editableDetails() || {}
        : {};

      mylib.modal({
        title: `Действия с событием ${this.name}`,
        descriptionHtml: this.stack.length < 1
          ? 'Закладок нет'
          : this.stack.map(comw => {
            const com = g.cols.getCom(comw);

            return `<div>${com == null ? 'Не существующая песня' : `${!com.index ? '?' : com.index - -1}. ${com.name}`}</div>`;
          }).join(''),
        inputs: [
          this.stack.length === 0
            ? null
            : {
              value: 'Добавить в мои закладки',
              type: 'button',
              onClick: () => {
                g.marks.insertMarks(this.stack);
                g.ss();
              },
            }
        ].concat(edits.inputs || [])
      });
    }

    getTitle() {
      return `${this.name}${this.end ? `, ${this.getDate()}` : ''}`;
    }

    getDate() {
      if (!this.end) return '';

      const date = new Date(this.begin).toLocaleDateString();
      const interval = this.begin === this.end ? '' : ` (${mylib.intervalToString(this.begin, this.end, 'day', 'year')})`;

      return `${date}${interval}`;
    }
  }

  g.IMeeting = IMeeting;
  
  if (g.IEditableMeetings == null) {
    class IEditableMeetings { }
    g.IEditableMeetings = IEditableMeetings;
  }

  class IMeetings extends g.IEditableMeetings {
    constructor(stack) {
      super();

      this.stack = stack.map(meeting => new IMeeting(meeting));
    }
  }

  const updateJsons = () => {
    const { cols, cm_meetings } = window.json;

    g.cols = new ICols(cols, g.cols || {});
    
    g.marks = new IMarks();

    g.meetings = new IMeetings(cm_meetings || []);
  };
  
  class CStartPage extends React.Component {
    constructor() {
      super();
      g.nav.setContext(this);
      this.state = g.nav;
    }

    fu() {
      this.forceUpdate();
    }

    render() {
      g.tryExistance();
      
      if (g.nav.phase < 3) setTimeout(() => {
        const view = document.getElementById((g.nav[g.nav.phase - -1] || '').toString());
        if (view) mylib.scrollToView(view, 'top');
      }, 100);

      const rangeStep = 5;
      let rangeValue = parseFloat(localStorage[g.lsCurrentCompositionFontSize] || '100');
      const rangeMin = 20;
      const rangeMax = 200;

      rangeValue = rangeValue < rangeMin && rangeValue > 0 ? rangeMin : rangeValue > rangeMax ? rangeMax : rangeValue;

      return ce('div',
        {
          key: 'app-container',
          className: `app-container phase-${g.nav.phase}${g.isComFullscreenMode || g.rollMode ? ' hidden-tools' : ''}${g.rollMode ? ' roll-mode' : ''} ${g.isAccessed('canWatch') ? 'top-visor111' : ''}`,
          onClick: () => {
            if (!g.nav.isPhase(g.Phase.Com) || g.streamManager.isCurr || g.rollMode) return;
            if (Date.now() - this.topClickDateNow < 500) {
              this.topClickDateNow = 0;
              g.isComFullscreenMode = !g.isComFullscreenMode;
              g.updateFlexFontSize(400);
              this.forceUpdate();
            } else this.topClickDateNow = Date.now();
          },
        },
        ce('div',
          {
            className: 'top-panel',
          },
          ce('div',
            {
              className: 'buttons top-part',
            },
            //ce('div', { className: 'number' }, `#${g.nav.ccom.index + 1}`),
            ce('div', { className: 'button' }),
            ce('div', { className: 'button' }),
            ce('div', { className: 'button' })
          ),
          ce('span',
            {
              key: 'main-more-button',
              className: 'main-more-button top-part',
            },
            svg('more-vertical-outline')
          )
        ),
        ce(CComPlayerSignaler),
        g.mainTopButtons || '',
        ce(
          'div',
          {
            key: 'tools-panel',
            className: 'tools-panel',
          },
          ce(
            'button',
            {
              key: 'bb-button',
              'aria-label': 'back',
              className: `bb-button weight`,
              onClick: async (event) => {
                event.stopPropagation();

                if (g.nav.isPhase(g.Phase.Com) && g.streamManager.isJustSub) {
                  if (!await mylib.confirm('Отписаться от текущего стрима?', 'Стрим', 'да', 'остаться')) return;

                  g.streamManager.unsubscribe(() => g.ss());
                } else {
                  if (g.nav.phase <= 1)
                    applicanter.load('index');
                  else
                    g.nav.goBack();
                }
              }
            },
            g.nav.isPhase(g.Phase.Com) && g.streamManager.isJustSub
              ? svg('close-outline')
              : g.nav.isPhase(g.Phase.Cats)
                ? svg('arrowhead-left-outline')
                : svg('chevron-left-outline')
          ),
          g.streamManager.isJustSub
            ? null
            : ce(Marks, { key: 'marks-list' }),
          //g.Helper && ce(g.Helper, {}),
          window.json.cm_executions == null || !g.nav.isCanGoBack(g.Phase.News)
            ? null
            : ce('button',
              {
                key: 'execs-button',
                className: 'execs-button mbtn m-no mxs',
                onClick: () => g.nav.setPhase(g.Phase.News)
              },
              svg('list', '=')
            ),
          !g.nav.isCanGoBack(g.Phase.Translations) || !g.isAccessed('canShowTranslation')
            ? null
            : ce('button',
              {
                key: 'translations-button',
                className: 'translations-button mbtn m-no mxs',
                onClick: () => g.nav.setPhase(g.Phase.Translations)
              },
              svg('monitor-outline', 'T')
            ),
          g.streamManager.isJustSub
            ? null
            : ce('button',
              {
                key: 'meetings-button',
                className: 'meetings-button mbtn m-no mxs',
                onClick: () => {
                  const inputs = g.meetings.stack.map((meeting) => {

                    return {
                      titleHtml: meeting.getTitle(),
                      type: 'button',
                      value: 'Просмотреть',
                      onClick: () => meeting.showDetails(),
                    };
                  }, []);

                  const buttons = g.meetings.isEditable ? [
                    {
                      title: 'Новое событие',
                      onClick: () => g.meetings.create(),
                    }
                  ] : null;

                  mylib.modal({
                    title: 'События',
                    inputs,
                    buttons
                  });
                }
              },
              svg('calendar-outline', 'M')
            ),
          (() => {
            const getComWindows = () => document.querySelectorAll('.com-ord-list');
            
            return g.nav.isPhase(g.Phase.Com, g.Phase.Editor) && g.RangePanel
              ? ce(g.RangePanel, {
                value: rangeValue,
                min: rangeMin,
                max: rangeMax,
                step: rangeStep,
                textElem: () => Array.from(getComWindows()),
                textWide: () => 'parent',
                onRange: (value, per) => {
                  const comWindows = getComWindows();
                  comWindows && Array.from(comWindows).forEach(comWindow => {
                    comWindow.style.fontSize = `${value}%`;
                  });
                },
                onChange: (value, per) => {
                  localStorage.setItem(g.lsCurrentCompositionFontSize, value);
                  rangeValue = value.toFixed(0);
                },
                registerUpdaters: (update) => {
                  g.updateFlexFontSize = update;
                }
              })
              : null
          })()
        ),

        Object.entries(g.Comps).map(([phasen, phase]) => {
          const comp = mylib.isArr(phase)
            ? phase[0]()
            : phase;

          return comp && ce('div',
            {
              key: `phase-body.${phasen}`,
              className: `phase-body phase-${phasen} ${phasen == this.state.phase ? 'active' : ''}`
            },
            phasen == this.state.phase
              ? ce(comp)
              : null,
            mylib.func(g.comFooters).call(phasen),
          );
        }),
      );
    }
  }

  g.StartPage = CStartPage;

  0 && (loc => {
    if (loc.cat != null) {
      const catw = parseInt(loc.cat);
      if (catw === 0 || g.cols.cats.some(cat => cat.wid === catw)) {
        g.nav[g.Phase.Cat] = catw;
        if (g.nav.isPhase(g.Phase.Cats)) g.nav.phase = g.Phase.Cat;
      }
    }

    stage(31);

    if (loc.com != null) {
      const comw = parseInt(loc.com);
      if (g.cols.coms.some(com => com.wid === comw)) {
        g.nav[g.Phase.Com] = comw;
        if (g.nav.isPhase(g.Phase.Cats, g.Phase.Cat)) g.nav.phase = g.Phase.Com;
      } else mylib.loc({ com: '' });
    }
  })(mylib.loc());

  stage(32);

  g.backButtonPressedTimeout;
  g.backButtonPressedTime = 0;

  if (g.isComFullscreenMode == null)
    g.isComFullscreenMode = false;

  const onBackPressed = async (event) => {
    if (g.isComFullscreenMode) {
      return 'cm-mute';
    }
    const timeout = 500;

    if (Date.now() - g.backButtonPressedTime < timeout) {
      'HIDE_APP';
    } else {
      g.backButtonPressedTime = Date.now();

      if (!g.nav.isPhase(g.Phase.Cats)) {
        g.nav.goBack();
        return 'cm-back';
      }
    }
  };

  setTimeout(() => {
    if (mylib.isUnd(g.Comps[g.nav.phase]) || (mylib.isArr(g.Comps[g.nav.phase]) && mylib.isUnd(g.Comps[g.nav.phase][0]()))) {
      g.nav.phase = g.Phase.Cats;
      g.ss();
    }
  });

  g.searchAll = (reg, O) => {
    const R = [];
    for (const i in O) reg.test(O[i]) && R.push(i);
    return R;
  };

  stage(35);
  
  const initStates = () => {
    putStyles();
    initNav();
    updateJsons();
    g.nav.updateCcols();
    mylib = g.initMylib();
  };

  if (window.applicanter && window.applicanter.$listen) {
    initStates();
    
    applicanter.register('cm', ce(g.StartPage));

    g.subscribeStream = stream => {
      mylib.dcconsl('subscr', stream);
      applicanter.registerAppProps('cm', [
        {
          name: 'joinedStream',
          prop: () => g.streamManager.subId,
          onUpdate: (obj) => {

          },
        }
      ]);

      applicanter.refresh();
      setTimeout(() => g.ss());
    };

    if (g.streamManager == null) {
      g.streamManager = new IStreamManager();

      g.streamManager.wakeUp(
        stream => g.subscribeStream(stream),
        stream => applicanter.appParam('cm', 'joinedStream', null) 
      );
    }

    applicanter.$listen('App.onApplicationRefresh:cm', 'cm-main-listener', async (event = {}) => {
      const { value = [] } = event;
      
      initStates();
      
      const joinedStream = value.some(comp => comp.name === 'joined_stream') ? window.json.joined_stream : null;

      if (joinedStream) {
        g.streamManager.update(joinedStream, () => {
          const elem = document.querySelector(`#com-block-${joinedStream.b}`);
          if (elem)
            mylib.scrollToView(elem, 'center left', {
              force: true,
              parent: elem.offsetParent,
              animationTime: joinedStream.b < 0 ? 0 : 3000
            });
          
          if (joinedStream.c != null && g.nav[g.Phase.Com] !== joinedStream.c) {
            g.nav.setCom(joinedStream.c, null);
            setTimeout(() => g.ss());
          } else
            g.ss();
        }, () => {
          System.showToast('Сртим был завершён');
          g.ss();
        });
      }
      
      g.ss();
    });

    applicanter.$listen('App.onCheckUpdates', 'cm-main-check-listener', async event => {
      if (event.value && event.value.block) {
        isAllOperationsBlokced = true;
        g.ss();
      }
    });
    
    applicanter.$listen('App.onAppStartAction:cm', 'initial', async event => {
      const [action = {}] = event.values || [];
      mylib.dcconsl('cm. start action', action);
      if (action.type === 'joinStream') {
        applicanter.setAppParams('cm', {
          joinedStream: action.val
        });

        g.streamManager.subscribe(action.val, () => g.ss());

        applicanter.refresh();
      }
      
      if (action.type === 'marksList') {
        g.marks.insertMarks(action.val.s, action.val.d)
          .then(ok => g.ss());
      }
    });

    applicanter.$listen('App.onOnlineToggle', 'cm App.onOnlineToggle', async (event, isOnline) => {
      g.isOnline = isOnline;
    });

    applicanter.$listen('Apk.onBackPressed', 'cm-back-button', onBackPressed);

  } else ReactDOM.render(ce(g.StartPage), document.querySelector('#application'));
  
  g.totalArgs = {
    getMeetingDate: (begin, end) => new g.IMeeting({ b: begin, e: end }).getDate(),
    declension: (num, one, two, five) => mylib.declension(num, one, two, five),
    comLang: langi => g.ICom.langs[langi],
  };
  
  stage(36);

})();




