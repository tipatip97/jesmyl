;'use strict';

(function MyLibModule() {

try {
class MyLib {
  constructor(config = {}) {
    const {
      host = '',
      appName = '',
      isDebug = () => true,
    } = config;
    
    this.config = Object.assign({
      host,
      appName,
      isDebug,
    }, config);
    
    this._setConstants();
    this.localStorageData = {};
    this.auth = this.getLS('auth', {});
    this.execs = [];
    this.globs = {};
    this.currentCrossbrowserPrefix = [``,`webkit`,`moz`,`o`,`ms`][[document.fullscreenEnabled, document.webkitFullscreenEnabled, document.mozFullscreenEnabled, document.oFullscreenEnabled, document.msFullscreenEnabled].findIndex(pref => pref != null)];
  }
  
  isAndroid() {
    return navigator.userAgent && /android/i.test(navigator.userAgent);
  }
  
  isDebug(cb, alt, both) {
    const isDebug = !!(this.config && this.config.isDebug && this.config.isDebug());
    isDebug ? cb && cb() : alt && alt();
    both && both(isDebug);
    return isDebug;
  }
  
  myLevel(cb) {
    const myLevel = this.auth.level;
    const result = cb && cb(myLevel, this.auth);
    return this.def(result, myLevel);
  }
  
  showToast(msg) {
    this.config.showToast && this.config.showToast(msg);
  }
  
  async modal(S) {
    return this.config.showModal && this.config.showModal.apply(this, arguments);
  }
  
  async alert(message) {
    return this.config.alertModal && this.config.alertModal.apply(this, arguments) || new Promise((resolve, reject) => {
      alert(message);
      resolve(true);
    });
  }
  
  async confirm(message) {
    return this.config.confirmModal && this.config.confirmModal.apply(this, arguments) || new Promise((resolve, reject) => {
      resolve(confirm(message));
    });
  }
  
  async prompt(message, altVal) {
    return this.config.promptModal && this.config.promptModal.apply(this, arguments) || new Promise((resolve, reject) => {
      resolve(prompt(message, altVal));
    });
  }
  
  getLS(name, asDef = null) {
    const content = localStorage[name];
    if (content == null) return asDef;
    try {
      return JSON.parse(content);
    } catch (error) {
      return asDef;
    }
  }
  
  setLS(name, content) {
    try {
      localStorage.setItem(name, JSON.stringify(content));
      return true;
    } catch (error) {
      return false;
    }
  }
  
  remLS(name) {
    localStorage.removeItem(name);
  }
  
  tryIt() {
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
  }
  
  func() {
    const funcs = Array.from(arguments);
    const self = this;
    const call = args => {
      const func = funcs.find(this.isFunc);
      return func && func.apply(this, Array.from(args));
    };
    
    return {
      call() { return call(arguments); },
      invoke(func) { return call([].concat(self.isFunc(func) ? func() : [])); }
    };
  }
  
  getLs(name) {
    let val = this.localStorageData[name];
    if (val == null) {
      val = this.tryIt(() => JSON.parse(localStorage[name]), null);
    } else return val;
    
    return val == null ? null : val;
  }
  
  setLs(name, value) {
    if (value == null) {
      localStorage.removeItem(name);
      this.localStorageData[name] = null;
    } else {
      const val = tryIt(() => JSON.stringify(value), err => this.dcconsl(err.stack).config({type: 0}) && null);
      if (val != null) {
        this.localStorageData[name] = this.clone(value);
        localStorage[name] = val;
      }
    }
    
    return value;
  }
  
  remLs(name) {
    localStorage.removeItem(name);
    this.localStorageData[name] = null;
  }
  
  takePref(str, icase = false) {
    return `${this.currentCrossbrowserPrefix}${icase ? str : str.replace(/[A-Z]/, all => !this.currentCrossbrowserPrefix ? all.toLowerCase() : all.toUpperCase())}`;
  }
  
  makeCssPrefs() {
    const prefix = this.currentCrossbrowserPrefix;
    Array.from(document.querySelectorAll(`style[compiled]`) || []).forEach(styleBox => {
      styleBox.innerHTML = styleBox.innerText.replace(/-\?-/g, prefix ? `-${prefix}-` : ``);
    });
  }
  
  compileCss(scss, styleId) {
    const tromb = (p => {
      let t = 0;
      return () => `${p}${t++}`;
    })('<');
    
    let colonCode = 1000000;
    
    while (scss.match(String.fromCharCode(colonCode))) {
      colonCode++;
    }
    
    const replaceColons = str => str.replace(/:/g, all => String.fromCharCode(colonCode));
    let text;
    
    try {
      
      text = '{' + scss
        // comments
        .replace(/\/\*+[\w\W]*?\*+\//g, '')
        .replace(/(^|\n)\s*\/{2,}.*?(?=\n)/g, '$1')
        
        .replace(/"/g, '\\"')
        
        .replace(/(^|[;{}])[^};]*?{/g, all => replaceColons(all))
        .replace(/\s*,\s*/g, ',') // {
        .replace(/([\s\n ]*|[{};,])[\s\n ]*(.+?)[\n\s ]*{/g, (all, $1, $2) => `${$1}\n\n  "${replaceColons($2)}${tromb()}": {`)
        .replace(/([-\w]+)[\n\s ]*:[\n\s ]*([\w\W]+?)[;\n}]/ig, (all, $1, $2) => `"${replaceColons($1)}${tromb()}":"${replaceColons($2)}",`) // {
        .replace(/(\s*),(\s*)}/g, '$1$2}') // {{
        .replace(/([}\]])(\s*)"/g, '$1,$2"')
        .replace(RegExp(String.fromCharCode(colonCode), 'g'), ':')
        
        + '}';
      
      return this.stringifyCss(JSON.parse(text)); // {{
        
      
    } catch(error) {
      console.error(`CSS Parser Error. incorrect css text${styleId ? ` in ${styleId}` : ''}`, error, text);
      throw error;
    }
  }
  
  stringifyCss(obj) {
    const trombReg = /<\d+$/g;
    let css = '';
    
    const stringifyCss = (obj, topPath = '', isAnnotate, isAnnotateInner) => { // {
    
      css += isAnnotateInner
        ? `${topPath}{`
        : isAnnotate
          ? `}${topPath}{`
          : topPath
            ? `}${topPath}{`
            : '';
      for (const objn in obj)
        if (this.isStr(obj[objn]))
          css += `${objn.replace(trombReg, '').replace(/([A-Z])/g, all => `-${all.toLowerCase()}`)}:${obj[objn]};`;
      
      for (const objn in obj)
        if (typeof obj[objn] !== 'string') {
          const query = objn.replace(trombReg, '');
          const isAnn = /^\s*@/.test(query);
          const includeQuery = () => topPath
            .split(',')
            .map(
              sTopPath => query
                .split(',')
                .map(sQuery => /^=/.test(sQuery)
                  ? sQuery.trim().replace(/^=/, '')
                  : /&/.test(sQuery)
                    ? sQuery.trim().replace(/&/g, sTopPath.trim())
                    : `${sTopPath.trim()} ${sQuery.trim()}`
                ).join(',')
            ).join(',');
            
          const path = (isAnn || isAnnotateInner || isAnnotate ? query : includeQuery()).trim().replace(/\s*([,>+])\s*/g, '$1');
          
          stringifyCss(obj[objn], path, isAnn, isAnnotate);
        }
      css += isAnnotateInner
        ? `}`
        : '';
    }
    
    stringifyCss(obj);
    
    return `${css}}`.replace(/}/, '').replace(/(^|})[^{]+{}/g, '$1');
  }
  
  count(obj){
    return Object.keys(obj).length;
  }
  
  random(min, max, fx){
    return((Math.random()*(max-min))+min).toFixed(fx||0);
  }
  
  compute(element) {
    return getComputedStyle(this.isStr(element)?document.querySelector(element):element);
  }
  
  coords(e) {
    return e.getBoundingClientRect();
  }

  heapSort(input) {
    let arrayLength = input.length;
    const heapRooter = (input, i) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let max = i;
      
      if (left < arrayLength && input[left] > input[max]) max = left;
      if (right < arrayLength && input[right] > input[max]) max = right;
      
      if (max !== i) {
        swapHeapElements(input, i, max);
        heapRooter(input, max);
      }
    };
    const swapHeapElements = (input, a, b) => [input[a], input[b]] = [input[b], input[a]];
    
    for (let i = Math.floor(arrayLength / 2); i >= 0; i--)
      heapRooter(input, i);
    
    for (let i = input.length - 1; i > 0; i--) {
      swapHeapElements(input, 0, i);
      arrayLength--;  
      heapRooter(input, 0);
    }
    
    return input;
  }
  
  sortObjectBy(o, by, rev) {
    return o.sort((a, b) => {
      const sa = this.isStr(a[by]) ? a[by].replace(/[^a-zа-я]/ig, '').toLowerCase() : a[by];
      const sb = this.isStr(b[by]) ? b[by].replace(/[^a-zа-я]/ig, '').toLowerCase() : b[by];
      const dir = rev ? -1 : 1;
      
      return sa < sb
        ? dir
        : sa > sb
          ? -dir
          : a.n < b.n
            ? -dir
            : a.n > b.n
              ? dir
              : 0;
    });
  }
  
  newExist(o) {return this.isObj(o)?{}:this.isArr(o)?[]:this.isNum(o)?0:'';}
  
  debounce(id, time, cb) {
    this.debounceTimeOuts = this.debounceTimeOuts || {};
    clearTimeout(this.debounceTimeOuts[id]);
    this.debounceTimeOuts[id] = setTimeout(() => cb(), time);
  }
  
  allIndexes(O, str) {
    let R= [];
    let i=0;
    for(let o in O) if(O[o]== str) R[i++]= o;
    return R;
  }

  join(arr, joins) {
    let R = '';
    for(let i = 0; i < arr.length; i++)
      R += arr[i] + joins[i % joins.length];
    return R.slice(0, -1);
  }
  
  randomSort(A) {
    const R = [];
    const l = A.length;
    
    for (let i = 0; i < l; i++) {
      const rdm = this.random(0, A.length-1);
      R.push(A[rdm]);
      A.splice(rdm, 1);
    }
    return R;
  }
  
  serialize(obj) {
    return Object.keys(obj).reduce((query, name) => query + `${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}&`, '?').slice(0, -1);
  }
  
  unique(arr = [], by = f=>f) {
    const exclusives = [];
    return arr.filter(item => exclusives.indexOf(by(item)) === -1 ? exclusives.push(by(item)) : false);
  }
  
  preventWindowBackrun(callback) {
    const hash = '!';
    let timeout = null;
    let init;
    
    window.onload = () => {
      window.location.href += '#';
      init = true;

      setTimeout(() => window.location.href += '!', 50);
    };
    
    window.onhashchange = () => {
      if (window.location.hash !== hash) window.location.hash = hash;
    
      if (!timeout) {
        timeout = setTimeout(() => {
          !init && callback && callback();
          clearTimeout(timeout);
          timeout = null;
          init = false;
        }, 100);
      }
    };
    
    window.onKeyUpBackRunEmitter = (event) => {
      if (event.altKey && event.ctrlKey && event.keyCode === 37) callback && callback();
    };
    
    window.addEventListener('keyup', window.onKeyUpBackRunEmitter);
  }
  
  loadAuth() {
    try{
      this.hashch = 0;
      this.cookie(this.auth ? {
        login: this.auth.login,
        at: this.auth.at,
      } : {
        login: null,
        at: null,
      });
    } catch(error) {
      this.dconsl(error.stack);
    }
  }
  
  loc(reps = {}, isNeedReload = false, cancelThrow) {
    try {
      if (typeof reps === 'function') {
        this.onlocchange = reps;
      } else {
        let edits = 0;
        const paths = location.href.split(/&|#!/);
        
        const props = paths
          .slice(1)
          .reduce((obj, curr) => {
            const [key, val] = curr.split('=');
            if (val) obj[key] = val;
            return obj;
          }, {});
        
        for (const repn in reps) {
          const rep = reps[repn];
          
          if (rep === '' || rep == null) {
            if (props[repn]) {
              delete props[repn];
              ++edits;
            }
          } else {
            if (!props[repn] || props[repn].replace(/%27/g, '\'') !== rep.toString()) {
              props[repn] = rep.toString();
              ++edits;
            }
          }
        }
        
        let pathname = '';
        
        for (const propn in props) pathname += `&${propn}=${props[propn]}`;
        if (isNeedReload) {
            if (edits > 0) location.href = `${paths[0]}${pathname}`;
        } else window.history.pushState({}, "by mylib", `${paths[0]}${pathname}`);
        //location.hash = this.hashch++ % 2 ? '!!' : '!';
        if (this.onlocchange) this.onlocchange();
        return props;
      }
    } catch(error) {
    }
  }
  
  parse(json, defVal = []) {
    try {
      return JSON.parse(json);
    } catch (error) {
      this.consl(json, error.stack);
      return defVal;
    }
  }
  
  
  conslBox({top, toggle, show} = {}) {
    
    if (this._conslBox == null) 
      this._conslBox = this.useElement('div', `consl-app`, box => {
        
        this.useElement('style', 'consl-style', style => {
          style.innerText = (`
              .consl-grey {color: grey;}
              .consl-green {color: green;}
              .consl-violet {color: violet;}
              .consl-red {color: pink;}
              .consl-blue {color: blue;}
              .consl-pre {margin: 0;padding: 0;display: inline-block;}
          `);
        });
    
      });
    
    if (top) {
      this._conslBox.style.position = 'absolute';
      this._conslBox.style.marginTop = top;
    }
    if (toggle) {
      this._conslBox.style.display = this._conslBox.style.display ? null : 'none';
    }
    if (show != null) {
      this._conslBox.style.display = show ? null : 'none';
    }
        
      
    return this._conslBox;
  }
  
  cconsl() {
    console.log.apply(null, arguments);
    return this.consl.apply(this, arguments);
  }
  
  dcconsl() {
    return this.isDebug()
      ? this.cconsl.apply(this, arguments)
      : this.conslConfig(Array.from(arguments));
  }
  
  dconsl() {
    return this.isDebug()
      ? this.consl.apply(this, arguments)
      : this.conslConfig(Array.from(arguments));
  }
  
  conslConfig(args) {
    return {
      val: args[0],
      value: args[0],
      args,
      get: argn => args[argn],
    };
  }
  
  consl() {
    const args = Array.from(arguments);
    const config = this.conslConfig(args);
      
    try {
      
      let clearButton = this._clearButton || document.getElementById(`consl-app-clear`);
      if (clearButton == null) {
        const button = document.createElement(`button`);
        button.id = `consl-app-clear`;
        button.innerText = `CLEAR`;
        button.onclick = event => document.querySelectorAll(`.consl-app-message`).forEach(box => box.remove());
        this.conslBox().appendChild(button);
        this._clearButton = clearButton = button;
      }
      const typizator = (some, parent, name, level = 0, isOwn = true, specialText = null) => {
          
        const someType = this.typeOf(some);
        
        const element = document.createElement('div');
        parent.appendChild(element);
        let html;
        const repHtmls = str => str.replace(/[<>&#]/g, all => `&#${all.charCodeAt(0)};`);
        
        const innerHTML = htmlText => `${name == null ? '' : `<span class="consl-${name && isOwn ? 'violet' : 'grey'}">${name ? '' : '"'}${name}${name ? '' : '"'}</span>: `}${htmlText}`;
        
        if (specialText) html = `<span class="consl-green">${specialText}</span>`;
        else
          switch (someType) {
            case 'Str':
              const bracket = `<span class="consl-grey">"</span>`;
              const text = repHtmls(some);
              const isSliced = text.length > 150;
              const head = isSliced ? text.slice(0, 100) : text;
              
              const strHtml = (innerTxt, showInfo = true) => `<pre class="consl-red consl-pre">${bracket}${innerTxt}${bracket}</pre>${isSliced && showInfo ? `<sub class="consl-grey">(показано ${head.length} из ${text.length} символов)</sub>` : ''}`;
              html = strHtml(head);
              if (isSliced) {
                let opened = true;
                
                element.onclick = e => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  element.innerHTML = innerHTML(strHtml(opened ? head : text, opened));
                  opened = !opened;
                };
              }
              
              break;
            case 'Bool':
            case 'Nan':
            case 'Num':
              html = `<span class="consl-blue">${some}</span>`;
              break;
            case 'Null':
            case 'Und':
              html = `<span class="consl-grey">${some}</span>`;
              break;
            case 'Func':
              html = some.name
                ? `<span class="consl-grey">${/^\s*class/.test(some.toString()) ? 'class ' : ''}${name === some.name ? '' : `${some.name} `}</span>()`
                : '()';
              
              (() => {
                const box = document.createElement('div');
                let isFirstly = true;
                box.hidden = true;
                const prevParams = '["val"]';
                
                element.ondblclick = e => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  const paramsStr = prompt(`invoke ${name || 'function'}`, prevParams) || '[]';
                  const params = JSON.parse(paramsStr);
                  
                  some.apply(null, params);
                };
                
                element.onclick = e => {
                  e.preventDefault();
                  e.stopPropagation();
                  box.hidden = !box.hidden;
                  
                  if (isFirstly) {
                    isFirstly = false;
                    element.appendChild(box);
                    box.innerHTML = `<pre>${some}</pre>`;
                  }
                };
              })();
              break;
            case 'Arr':
            case 'Obj':
              (() => {
                const isArr = someType === 'Arr';
                const box = document.createElement('div');
                let isFirstly = true;
                box.hidden = true;
                
                
                if (some instanceof RegExp) {
                  html = some.toString();
                } else {
                  html = isArr
                    ? `[<span class="consl-grey">${some.length}</span>]`
                    : some.constructor && some.constructor.name && some.constructor.name !== 'Object'
                      ? `<span class="consl-grey">${some.constructor.name}</span> {}`
                      : '{}';
                  element.onclick = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    box.hidden = !box.hidden;
                    
                    if (isFirstly) {
                      isFirstly = false;
                      element.appendChild(box);
                      const owns = this.getAllProperties(some).filter(propn => !some.hasOwnProperty(propn));
                      
                      Object.keys(some).concat(isArr ? ['length'] : []).forEach(fieldn => typizator(some[fieldn], box, fieldn, level + 1, some.hasOwnProperty(fieldn)));
                      if (owns.length) {
                        let isInnFirstly = true;
                        const innBox = document.createElement('div');
                        const elem = typizator([], box, null, level + 1, false, ((some || 0).constructor || 0).name || 'open()');
                        innBox.hidden = true;
                        
                        elem.onclick = e => {
                          e.preventDefault();
                          e.stopPropagation();
                          innBox.hidden = !innBox.hidden;
                          
                          if (isInnFirstly) {
                            isInnFirstly = false;
                            box.appendChild(innBox);
                            owns.forEach(fieldn => typizator(some[fieldn], innBox, fieldn, level + 1, false));
                          }
                        };
                      }
                    }
                  };
                }
              })();
              break;
          }
        
        element.style.marginLeft = `${level ? 15 : 0}px`;
        element.innerHTML = innerHTML(html);
        
        
        return element;
      };
      
      const child = document.createElement(`div`);
      const className = 'consl-app-message';
      
      child.style.borderBottom = `solid 1px grey`;
      child.style.marginBottom = `1em`;
      child.style.maxHeight = ``;
      child.className = className;
      Array.from(arguments).forEach(something => typizator(something, child));
      this.insertAfter(child, clearButton);
      
      
      const setConfig = (params = {}) => {
        const {
          type = 1,
          top = '100vh',
          unclosable = false
        } = params;
        
        const [bgColor = 'black', color = 'white'] = [[`red`], [`black`], [`blue`], ['orange', 'black']][type] || [];
      
        child.style.backgroundColor = bgColor;
        child.style.color = color;
        
        if (unclosable) child.classList.remove(className);
        
        this.conslBox({top});
        return config;
      };
      
      const insertAfter = element => {
        this.insertAfter(child, element);
        return config;
      };
      
      setConfig();
      config.config = setConfig;
      config.insertAfter = insertAfter;
      
      return config;
    } catch (error) {
      config.config = () => {
        throw error;
      };
      config.insertAfter = () => {
        throw error;
      };
      
      return config;
    }
  }
  
  getAllProperties(obj){
    var allProps = [], curr = obj;
    do{
        var props = Object.getOwnPropertyNames(curr);
        props.forEach(function(prop){
            if (allProps.indexOf(prop) === -1)
                allProps.push(prop);
        })
    } while (curr = Object.getPrototypeOf(curr));
    return allProps;
  }
  
  scrollToView(element, position = 'center', props = {}) {
    if (element) {
      const {
        parent = element.parentElement,
        force = true,
        animationTime = 0
      } = props;
      
      const attrName = 'animation.ts';
      const attrVal = (Date.now() + Math.random()).toString();
      const is = pos => ~(position || 'center').search(pos);
      const isStatic = getComputedStyle(parent).position === 'static';
      const prevPosition = parent.style.position;
      
      if (isStatic) {
        parent.style.position = 'relative';
      }
      
      parent.setAttribute(attrName, attrVal);
      
      const scroll = (posMode = 's' || 'c' || 'e', dir = 'v' || 'h') => {
        const [pos, vol] = dir === 'v'
          ? ['Top', 'Height']
          : ['Left', 'Width'];
          
        const parentScroll = parent[`scroll${pos}`];
        const parentVol = parent[`client${vol}`];
        const elemVol = element[`client${vol}`];
        const elemPos = element[`offset${pos}`];
        
        const end = elemPos - parentVol + elemVol;
        const center = elemPos - parentVol / 2 + elemVol / 2;
        
        const newPos = posMode === 's'
          ? elemPos
          : posMode === 'e'
            ? end
            : center;
        
        const toStart = posMode === 's'
          ? elemPos > parentScroll
          : posMode === 'e'
            ? parentVol + parentScroll > elemPos
            : center < newPos;
          
        if (force || parentScroll > elemPos || parentScroll + parentVol < elemPos + elemVol) {
          if (animationTime < 1) parent[`scroll${pos}`] = newPos;
          else {
            const diff = parent[`scroll${pos}`] - newPos;
            const time = Math.abs(animationTime / diff);
            const dir = diff > 0 ? -1 : 1;
            let last = 0;
            
            const step = (dec = 0) => setTimeout(() => {
              const px = (parent[`scroll${pos}`] += dir) - dir;
              
              if (parent.getAttribute(attrName) === attrVal)
                if (dec < 5 && (dir > 0 ? px < newPos : px > newPos))
                  step(dec + (px !== last ? 0 : 1));
              
              last = px;
            }, time);
            
            step();
          }
        }
      };
      
      [
        [/left/i, /right/i, /top/i, /bottom/i, /center +-/i, 'h'],
        [/top/i, /bottom/i, /left/i, /right/i, /- +center/i, 'v']
      ].forEach(([sReg, eReg, nsReg, neReg, ncReg, dir]) => {
        if (is(sReg)) scroll('s', dir);
        else if (is(eReg)) scroll('e', dir);
        else if (
          is(nsReg) || is(neReg)
            ? is(/center/i)
            : is(/center/i) && !is(ncReg)
        ) scroll('c', dir);
      });
      
      if (isStatic) parent.style.position = prevPosition;
    }
  }
  
  insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }
  
  clone(what) {
    return this.isStr(what)
      ? `` + what
      : this.isNum(what)
        ? 0 + what
        : this.isArr(what)
          ? what.slice(0)
          : this.isBool(what)
            ? !!what
            : this.isObj(what)
              ? Object.assign({}, what)
              : this.isUnd(what)
                ? undefined
                : null;
  }
  
  deepClone(obj) {
    const cloned = [];
    
    const clone = (what) => {
      if (this.isStr(what)) return '' + what;
      if (this.isNum(what)) return 0 + what;
      if (this.isBool(what)) return !!what;
      if (what == null || this.isFunc(what)) return what;
      
      if (this.isobj(what)) {
        if (cloned.indexOf(what) > -1) throw 'Circular clone';
        cloned.push(what);
        const newObj = this.isArr(what) ? [] : {};
        
        for (const whatn in what) 
          newObj[whatn] = clone(what[whatn]);
        
        return newObj;
      }
    };
    
    return clone(obj);
  }
  
  normQuery(query = '#$@+') {
    return query.replace(/[^-a-z0-9]/g, all => `_${all.charCodeAt(0)}`);
  }
  
  useElement(name, topId, cb, forceReborn = false) {
    const id = this.normQuery(topId);
    const oldElement = document.querySelector(`#${id}`);
    
    if (oldElement) {
      if (forceReborn) {
        oldElement.remove();
      } else {
        cb && cb(oldElement);
        return oldElement;
      }
    }
    
    const element = document.createElement(name);
    
    element.id = id;
    const serviceNode = document.querySelector('#service_node');
    serviceNode.appendChild(element);
    cb && cb(element);
    return element;
  }
  
  setExecs(execs = []) {
    try {
      [].concat(execs).filter(e => e).forEach((exec) => {
        const { scope, eprev, prev, value, method, args, isFriendly, action, generalId, createByPath } = exec;
        exec.id = (Date.now() - -Math.random()).toString();
        if (this.config.muteExecs) exec.muted = true;
        
        const prevExeci = this.execs.findIndex(ex => ex.scope === scope && ex.method === method);
        const prevExec = this.execs[prevExeci];
        const lasti = this.execs.length - 1;
        const lastExec = this.execs[lasti];
        
        if (method === 'func') {
          if (prevExec) this.execs.splice(prevExeci, 1, exec);
          else this.execs.push(exec);
          
        } else if (method === 'migrate' && lastExec && lastExec.method === method && lastExec.scope === scope) {
          if (!Object.keys(value).length) this.execs.splice(lasti, 1);
          else this.execs.splice(lasti, 1, exec);
          
        } else if (method === 'set') {
          if (this.isEq(exec.prev, exec.value)) return;
          if (prevExec)
            if (this.isEq(prevExec.eprev, value)) this.execs.splice(prevExeci, 1);
            else this.execs.splice(prevExeci, 1, exec);
          else this.execs.push(exec);
          
          exec.eprev = prevExec && prevExec.hasOwnProperty('eprev')
            ? prevExec.eprev
            : prev == null
              ? null
              : JSON.parse(JSON.stringify(prev));
              
          if (exec.args) {
            exec.args.prev = exec.eprev;
            if (this.isStr(exec.argValue)) exec.args[exec.argValue] = exec.value;
          }
        } else if (method === 'bumerang') {
          const lastExeci = this.findLastIndex(this.execs, ex => ex.scope === scope && ex.method === method);
          const lastExec = this.execs[lastExeci];
          let some;
          
          if (prevExec == null || (some = this.execs.some((ex, exi) => exi > lastExeci && ex.generalId === generalId && ex.scope !== scope && ex.method !== method))) {
            exec.value = [value];
            this.execs.push(exec);
          } else if (lastExec) lastExec.value.push(value);
          
          //this.dconsl(method, lastExeci, this.execs, prevExec, some, exec);
          
        } else {
          let removeIndex = method === 'push'
            ? this.execs.findIndex(ex =>
              ex.scope === scope
              && (ex.method === 'remove'
                && (!this.isArr(method)
                 ? ex.value === value
                 : value[ex.value[0]] === ex.value[2])
              )
            )
            : method === 'remove'
              ? this.execs.findIndex(ex => ex.scope === scope && ex.method === 'push' && (!this.isArr(method) ? value === ex.value : ex.value[value[0]] === value[2]))
              : -1;
          
          if (removeIndex < 0) this.execs.push(exec);
          else this.execs.splice(removeIndex, 1);
          
        }
        
        exec.scope = scope;
        switch (this.func(exec.onSet).call(exec)) {
          case this.REMOVE: this.execs.splice(prevExeci, 1);
        }
      });
      
      if (!this.execs.some(ex => !ex.isFriendly))
        this.execs.splice(0, this.execs.length);
      
      this.dconsl('execs:', JSON.parse(JSON.stringify(this.execs)));
    } catch (error) {
      this.dconsl(error.stack, error).config({ type: 0 });
    }
  }
  
  isThereLocalExecs() {
    return !!this.getLS(this.execsLsName);
  }
  
  setActionsCallbacks(callbacks = []) {
    this.actionsCallbacks = callbacks;
  }
  
  applyLocalExecs(parent, cb) {
    this.applyExecs(execs, parent);
    cb && cb();
  }
  
  sendExecs(fixedExecs, cb, errCb, finCb) {
    this.loadExecs(cb, errCb, finCb, [].concat(fixedExecs));
  }
  
  loadExecs(cb, errCb, finCb, fixedExecs) {
    const execFields = ['action', 'args', 'id', 'muted', 'createByPath'];
    const execs = (fixedExecs || this.execs)
      .filter(ex => !ex.del)
      .map(exec => {
        exec.onLoad && exec.onLoad(exec);
        
        const retEx = {};
        
        execFields.forEach(fieldn => {
          if (exec.hasOwnProperty(fieldn)) {
            retEx[fieldn] = exec[fieldn];
          }
        });
        
        return retEx;
      });
    
    const onError = (error, text) => {
      this.dconsl(error, text).config({ type: 0 });
      this.confirm(`${error || `Ошибка!`}\nСохранить локально?`)
        .then(isSave => {
          if (isSave) this.saveExecsLocally();
          else this.confirm(`Удалить весь стек?`)
            .then(isRemove => {
              if (isRemove) {
                this.removeLocalExecs();
                this.execs.length = 0;
              }
            });
        });
      errCb && errCb();
      finCb && finCb(null);
    };
    this.dconsl(execs, fixedExecs);
    
    this.execute({
      execs,
      //responseType: 'text',
      success: resp => {
        this.dconsl(resp);
        
        if (!resp.ok) onError(resp.errors);
        else {
          this.execs = this.execs.filter(ex => (resp.ok && ex.del) ||
            resp.rejected && resp.rejected.some(rej => {
              if (ex.id === rej.exec.id) {
                ex.errors = rej.errors;
                return true;
              }
            }));
          //this.setLS(, this.execs);
          cb && cb(resp);
          finCb && finCb(resp);
        }
      },
      error: onError,
    });
  }
  
  get execsLsName() {
    return `app:${this.config.appName}:execs`;
  }
  
  getLocalExecs() {
    return this.getLS(this.execsLsName);
  }
  
  saveExecsLocally() {
    this.setLS(this.execsLsName, this.execs);
  }
  
  removeLocalExecs() {
    this.remLS(this.execsLsName);
  }
  
  removeExecs(tracks = []) {
    tracks.forEach(track => delete this.execs[JSON.stringify(track)]);
  }
  
  setLocalExecs() {
    const savedExecs = this.getLS(this.execsLsName);
    if (savedExecs) {
      this.setExecs(savedExecs);
    }
  }
  
  applyExecs(execs = [], topParent = {}) {
    try {
      execs
        .sort((a, b) => a.ts - b.ts)
        .forEach(ex => {
          const {ts, value, method, track} = ex;
          const {parent, target, trace} = this.tracker(track, topParent);
          if (value != null) {
            switch (method) {
              case `set`:
                parent[trace] = value;
                break;
              case `remove`:
                if (this.isArr(method))
                  target
                    .filter(unit => unit[value[0]] === value[1])
                    .forEach(tr => {
                      const index = target.indexOf(tr);
                      if (index > -1) target.splice(index, 1);
                    });
                break;
              case `push`:
                if (!target.some(t => t.w === value.w)) {
                  target.push(value);
                  target.sort((a, b) => a.n - b.n);
                }
                break;
              case `concat`:
                parent[trace] = target.concat(value);
                break;
            }
          }
        });
    } catch (error) {
      this.dconsl(error.stack);
    }
  }
  
  findLastIndex(arr, cb) {
    if (!this.isArr(arr)) return null;
    if (!this.isFunc(cb)) return arr.length - 1;
    
    for (let i = arr.length - 1; i >= 0; i--)
      if (cb(arr[i], i, arr))
        return i;
    
    return -1;
  }
  
  isEq(base, source) {
    if (base == null && base == source) return true;
    if (base == null || source == null) return false; 
    
    const baseType = this.typeOf(base);
    const srcType = this.typeOf(source);
    
    if (baseType !== srcType) return false;
    if (typeof base === 'object') {
      const bKeys = Object.keys(base);
      
      if ( bKeys.length !== Object.keys(source).length
        || bKeys.some(bKey => !this.isEq(source[bKey], base[bKey]))
      ) return false;
    } else if (base !== source) return false;
    
    return true;
  }
  
  getMilliseconds(monthDays = 30, yearDays = 365) {
    const inSec = 1000;
    const inMin = inSec * 60;
    const inHour = inMin * 60;
    const inDay = inHour * 24;
    const inMonth = inDay * monthDays;
    const inYear = inDay * yearDays;
    
    return {inSec, inMin, inHour, inDay, inMonth, inYear};
  }
  
  dateIntervals(index) {
    const intervals = ['day', 'month', 'year'];
    return index == null ? intervals : index === -1 ? intervals[intervals.length - 1] : intervals[index] || intervals[0];
  }
  
  intervalToString(begin, end, step = this.dateIntervals(0), limit = this.dateIntervals(-1)) {
    const diff = end - begin;
    const ms = this.getMilliseconds();
    
    if (diff > ms.inYear) return 'Больше года';
    if (diff > ms.inMonth) return 'Больше месяца';
    if (diff >= ms.inDay) {
      const days = Math.trunc(diff % ms.inDay) + 2;
      return `${days} ${this.declension(days, 'день', 'дня')}`;
    }
    
    this.dconsl(diff, ms);
    
    return '678';
  }
  
  isExpected(target, inspector, bag) {
    if (inspector == null) return null;
    this.dconsl(target, inspector, bag);
    if (this.isArr(inspector)) {
      if (inspector.length === 1) {
        return !!target;
      } else if (inspector.length === 2) {
        return (inspector[0] === '!' && !this.getAttribute(target, inspector[1])) || this.isCorrectType(target[inspector[0]], inspector[1]) || this.getAttribute(target, inspector[0]) === inspector[1];
      } else if (inspector.length) {
        const step = 3;
        let happensCount = 0;
        let wholeCount = 0;
        
        for (let i = 0; i < inspector.length; i += step) {
          wholeCount += 1;
          const field = this.getAttribute(target, inspector[i], bag);
          const operator = inspector[i + 1];
          const sign = this.getAttribute(target, inspector[i + 2], bag);
          let result = false;
          
          
          if (operator === "==") result = field == sign;
          else if (operator === "===") result = field === sign;
          else if (operator === "!==") result = field !== sign;
          else if (operator === ">=") result = field >= sign;
          else if (operator === "<=") result = field <= sign;
          else if (operator === "!=") result = field != sign;
          else if (operator === "<") result = field < sign;
          else if (operator === ">") result = field > sign;
          else if (operator === 'in' || operator === '!in') {
            result = this.isArr(sign) && (sign.indexOf(field) < 0 ? operator === '!in' : operator === 'in');
          } else if (operator === 'key' || operator === '!key') {
            result = this.isobj(sign) && (Object.keys(sign).indexOf('' + field) < 0 ? operator === '!key' : operator === 'key');
            this.dconsl(result, sign, field, bag, inspector[i + 2], target);
          }
          
          //this.dconsl(target, bag, inspector, field, operator, sign, result);
          
          if (result) happensCount++;
        }
        
        return wholeCount && (happensCount === wholeCount);
      }
    } else return inspector;
  }
  
  isCorrectType(value, typer) {
    if (this.isStr(typer)) {
      
      if (typer[0] === '#') {
        const explodes = this.explode(':', typer, 2);
        const type = explodes[0].substr(1);
        const lower = type.toLowerCase();
        
        if (lower === type && value == null) return true;
        
        let isCorrect = false;
        
          if   (lower === 'list') isCorrect = this.isArr(value); // && this.isCorrectInArray(explodes[1], value);
        else if (lower === 'dict') isCorrect = this.isObj(value); // && this.isCorrectInArray(explodes[1], value);
        else if (lower === 'object') isCorrect = this.isobj(value); // && this.isCorrectInArray(explodes[1], value);
        else if (lower === 'string') isCorrect = this.isStr(value);
        else if (lower === 'numeric') isCorrect = this.isnum(value);
        else if (lower === 'number') isCorrect = this.isNum(value);
        else if (lower === 'boolean') isCorrect = this.isBool(value);
        else if (lower === 'simple') isCorrect = this.isStr(value) || this.isNum(value);
        else if (lower === 'primitive') isCorrect = this.isBool(value) || this.isStr(value) || this.isNum(value);
        else if (lower === 'any') isCorrect = true;
        
        return isCorrect;
        
      } else return value === typer;
    } else if (this.isArr(typer)) {
      return typer.some(tup => this.isCorrectType(value, tup));
    }
    
    return false;
  }
  
  getAttribute(target, topField, bag) {
    let last = null;
    [].concat(topField).find(field => {
      if (this.isStr(field)) {
        last = target[field];
        const name = field.slice(1);
        
        if (field[0] === '$') {
          last = target[name];
        } else if (field[0] === '>') {
          last = bag && bag[name];
        }
        
        return last;
      } else return last = field;
    });
    return last;
  }
  
  isCorrectInArray(content, type) {
    
  }
  
  getIfGlob(val) {
    return val;
  }
  
  explode(separator, string, lim) {
    const limit = Math.abs(lim);
    const splitted = string.split(separator);
    if (!this.isNum(limit)) return splitted;
    
    return splitted.reduce((res, curr, curri) => {
      if (limit > curri)
        return res.concat([curr]);
      else
        res[res.length - 1] += separator + curr;
      return res;
    }, []);
  }
  
  execute(S) {
    const {
      path = '',
      execs = [],
      success = ()=>{},
      error = ()=>{},
      complete = ()=>{},
      responseType = 'json'
    } = S;
    
    this.fetch({
      method: 'POST',
      action: 'execute',
      queries: {path},
      bodies: {execs, auth: this.auth, appName: this.config.appName},
      responseType,
      success,
      error,
      complete
    });
  }
  
  fetch(S) {
    try {
      const {
        action,
        method = `POST`,
        queries = {},
        bodies = {},
        responseType = `json`,
        success = ()=>{},
        error = ()=>{},
        complete = ()=>{}
      } = S;
      const body = new FormData();
      
      for (const bodyName in bodies)
        body.append(bodyName, JSON.stringify(bodies[bodyName]));
      
      const url = `${this.config.host}/${action}${this.serialize(queries)}`;
      let text;
      
      fetch(url, {method, body})
        .then(response => response.text())
        .then(txt => {
          text = txt;
          return JSON.parse(txt);
        })
        .then(r => {
          success(r);
          complete(r, true);
        })
        .catch(r => {
          error(r, text);
          complete(r, false);
        });
    } catch (error) {
      this.alert(error.stack);
    }
  }
  
  cutDistricts(text, look) {
    try {
      const reg = RegExp(`((/(\\*{4}):((=?)(\\d{1,3})(([-+])(\\d{1,3}))?)):([\\w\\W]*?)\\3/)([\\w\\W]*?)\\2;\\3/`, 'g');
      return text.replace(reg, (all, comment, firstCommentPart, stars, period, equal, firstNum, dashAndSName, dashType, secondNum, altInput, input) => {
        const fNum = firstNum && parseInt(firstNum);
        const sNum = secondNum && parseInt(secondNum);
        
        return fNum == null
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
      });
    } catch (e) {
      return null;
    }
  }
  
  tracker(track = [], topParent = {}) {
    const targets = [topParent];
    
    track.forEach(ctrace => {
      const ctarget = targets[targets.length - 1];
      
      if (this.isArr(ctrace)) {
        if (this.isArr(ctarget)) {
          const [name, sign, value] = ctrace;
          const oper = sign === '==='
            ? (a, b) => a === b
            : sign === '!=='
              ? (a, b) => a !== b
              : sign === '=='
                ? (a, b) => a == b
                : sign === '!='
                  ? (a, b) => a != b
                  : sign === '<='
                    ? (a, b) => a <= b
                    : sign === '>='
                      ? (a, b) => a >= b
                      : (a, b) => a % b;
          const found = ctarget.find(f => oper(f, value));
          targets.push(found);
        } else this.alert(`Target type error`);
      } else if (ctarget == null) return null;
      else targets.push(ctarget[ctrace]);
    });
    const parent = targets[targets.length - 2];
    const target = targets[targets.length - 1];
    const trace = track[track.length - 1];
          
    return {parent, target, trace};
  }
  
  declension(num, one, two, five) {
    if (num % 1) return two;
    let absNum = Math.abs(num) % 100;
  
    if (absNum > 10 && absNum < 20)
      return this.def(five, two);
    
    absNum %= 10;
    
    return (absNum > 1 && absNum < 5)
      ? two
      : (absNum === 1)
        ? one
        : this.def(five, two);
  }
  
  def() {
    const args = Array.from(arguments);
    const res = args.find(some => some != null);
    return res == null ? args[args.length - 1] : res;
  }
  
  typ() {
    const args = Array.from(arguments);
    if (args[0] == null) return null;
    if (args.length < 2) return args[0];
    
    const type = this.typeOf(args[0]);
    const arg = args.find((arg, argi) => argi && this.typeOf(arg) === type);
    return arg == null ? args[0] : arg;
  }
  
  cookie(reps = {}) {
    let edits = 0;
    const paths = document.cookie.split('; ');
    let cookie = '';
    
    const cookies = paths
      .reduce((obj, curr) => {
        const [key, val] = curr.split('=');
        if (val != null) obj[key] = val;
        return obj;
      }, {});
    
    for (const repn in reps) {
      const rep = reps[repn];
      const val = rep == null ? `; expires=${this.getCookieDate(-1)}` : rep;
      
      document.cookie = `${cookie === '' ? '' : '; '}${repn}=${val}`;
    }
    
    return cookies;
  }
  
  getCookieDate(t = Date.now()) {
    return new Date(Date.now() + t).toUTCString();
  }
  
  get(obj, names, cb) { // ('abc', [0, 1, 2]) - cb(1): null
    let ret, name, child = obj;
    const ex = () => {
      this.func(cb).call(name);
      return null;
    };
    if (obj == null) return ex();
    
    names = this.isStr(names) ? names.split('.') : [].concat(names);
    
    for (let i = 0; i < names.length; i++) {
      name = names[i];
      child = child[name];
      
      if (i < names.length) {
        if (child == null) return ex();
        ret = child;
      }
    }
    return ret;
  }
  
  overlap() {
    const args = Array.from(arguments);
    if (args.length === 0) return null;
    const zero = this.def(args[0], {});
    
    args.forEach(arg => arg == null ? null : Object.keys(arg).forEach(arn => zero[arn] = arg[arn]));
    return zero;
  }
  
  fill() {
    const args = Array.from(arguments);
    if (args.length === 0) return null;
    
    args
      .forEach(arg => arg == null
        ? null
        : Object.keys(arg)
          .forEach(arn => args[0][arn] == null
            ? args[0][arn] = arg[arn]
            : null)
        );
    return args[0];
  }
  
  stringTemplaterTest() {
    const values = [
      {
        str: '\\$disabledVal',
        args: {
          nullVal: null,
          falsyVal: 0
        }
      }, {
        str: '$func($nullVal);,$val,$func($nullVal!!)',
        args: {
          nullVal: null,
          falsyVal: 0,
          val: '+ Val',
          func: () => 'retByFuncWithoutArgs: ifAttr not null'
        }
      },
    ];
    const outputs = 
      values.reduce((outs, {str, args}) => {
        const val = this.stringTemplater1(str, args);
        this.consl(str, args, val);
        return outs.concat({str, args, val});
      }, []);
    
    return outputs;
  }
  
  checkTP() {
    if (!this.testMode) return;
    let a = 333;
    const str = '$a??{{1}{$z}} lab$lab;min$b!{{t{r}ue}} \\$u7{{$f}{$g?}{DEF}} $c?{{$d?{{dx}{DY $func{{f$a;s}{reast}{007}{$u{{0}{$dS}}}}}}}} $val;$a...';
    const tops = {
      a: () => a,
      z: 'zr',
      g: 0,
      d: false,
      dS: 777,
      c: 1,
      num: 2,
      func: val => `[${a++}]`
    };
    
    const tests = [
      {
        args: {},
        str: '$s',
        exp: '',
      }, {
        str: '$sum{{$s}{$b}}',
        exp: '128',
        args: {
          s: 123,
          b: 5,
          sum: (a, b) => a + b,
        },
      }, {
        str: '$sum{{$s?{{3}}}{$b}}',
        exp: '35',
        args: {
          s: 123,
          b: 5,
          sum: (a, b) => a + b,
        },
      }, {
        name: 'escaping dollar',
        str: '$sum{{$s{{3}}}{$b{{$b + $s = 128 (\\$b + \\$s = 128)}}}}',
        exp: '5 + 123 = 128 ($b + $s = 128)',
        args: {
          s: 123,
          b: 5,
        },
      }, {
        name: 'escaping dollar',
        str: '$sum{{$s{{3}}}{$b{{$b + $s = 128 (\\$b + \\$s = 128)}}}}',
        exp: '5 + 123 = 128 ($b + $s = 128)',
        args: {
          s: 123,
          b: 5,
        },
      },
    ];
    
    tests.forEach(({exp, str, args}) => {
      const result = this.stringTemplater(str, args);
      const passed = result === exp;
      this.dconsl(passed, str, result, exp, args).config({type: passed ? 1 : 0});
    });
    
    this.dconsl('tryTpl();', tops, str, this.stringTemplater(str, tops));
  }
  
  stringTemplater(str, topArgs) {
    const self = this;
    topArgs = Object.assign({
      ink: (num, post = '', pre = '') => num == null ? null : `${pre}${num - -1}${post}`,
      switch: function() {
        let val, found;
        const args = Array.from(arguments);
        
        const ret = args.find((arg, argi) => {
          if (!argi) {
            val = arg;
            return false;
          }
          //self.dconsl(argi, arg, val, (argi % 2), arg == val);
          
          if (found) return true;
          if ((argi % 2) && (arg == val)) found = true;
        });
        
        return ret == null ? args[args.length - 1] : ret;
      }
    }, topArgs);
    
    const dob = '{{';
    const ocb = '}{';
    const dcb = '}}';
    const noObj = {};
    const norm = (val, op) => op === '?' ? val ? val : noObj : op === '!' ? val ? noObj : val : op === '!!' ? val == null ? '' : noObj : val == null ? noObj : val;
    let lim = 1000;
    
    const inline = (parts) => {
      lim--;
      if (lim < 0) {
        this.dconsl('IS LIM');
        return;
      }
      let line = [];
      
      const addNorm = (val, op) => {
        const value = norm(val, op);
        line = line.concat(value == noObj || value == null ? '' : value);
      };
      
      const getDiapason = (diapason = [], district = null, structItems = false) => {
        let ballance = null;
        let distBallance = 0;
        let struct = [];
        const dists = [];
        
        const diap = diapason.filter(txt => {
          //this.dconsl('ballance/txt', ballance, txt);
          if (ballance === 0) return false;
          
          if (structItems) {
            if ((txt === ocb || txt === dcb) && ballance === 1) {
              dists.push(inline(struct));
              //this.dconsl('struct', struct.slice(0));
              struct = [];
            } else if (ballance) struct.push(txt);
            
          } else if (district != null) {
            if (distBallance === district) dists.push(txt);
            if (ballance === 1 && txt === ocb) distBallance++;
          }
          
          if (txt === dob) ballance++;
          else if (txt === dcb) ballance--;
          
          //this.dconsl('ballance', diapason, struct.slice(0), ballance, txt);
          return true;
        });
       // this.dconsl(district, dists, diap);
        
        return {
          list: structItems || district != null ? dists : diap,
          len: diap.length,
          diap, dists
        };
      };
      
      let escLim = 0;
      
      parts.forEach((part, parti, parta) => {
        //this.dconsl(part, parti, escLim, parti < escLim, parta);
        if (parti && parti <= escLim) return;
        
        const invokeFunc = (func) => {
          const diapason = getDiapason(parta.slice(parti + 1), null, true);
          escLim += diapason.len;
          
          const nrm = inline(diapason.list, true);
          addNorm(func.apply(this, nrm));
          //this.dconsl('FUNC', diapason, escLim, nrm);
        };
        
        if (part === dob) {
          //this.dconsl('dob', part, getDigit);
        } else if (part === dcb || part === ocb) escLim++;
        else if (this.isStr(part)) {
          const match = part.match(/^\$(\w+)(!{1,2}|\?{1,2})?(;?)/);
          const [, topArgName, op, semicolon] = match || [];
          //this.dconsl('match', part, match, escLim);
          
          if (topArgName != null) {
            const val = topArgs[topArgName];
            //this.dconsl('topArgName', topArgName, val, parta);
            if (semicolon) {
              escLim++;
              //this.dconsl('semi', val, escLim);
              if (this.isFunc(val)) invokeFunc(val);
              else addNorm(val, op);
            } else if (parta[parti + 1] === dob) {
              //this.dconsl(topArgName);
              if (!op && this.isFunc(val)) invokeFunc(val);
              else {
                const value = norm(val, op);
                const diapason = getDiapason(parta.slice(parti + 1), value != noObj ? 0 : 1);
                escLim += diapason.len;
                
                const nrm = inline(diapason.list);
                addNorm(nrm);
                //this.dconsl('!func', diapason, escLim, nrm);
              }
            } else if (this.isFunc(val)) invokeFunc(val);
            else {
              escLim++;
              addNorm(val, op);
             // this.dconsl('val', topArgName, val, escLim, line.slice(0));
            }
          } else {
            parti && escLim++;
            //this.dconsl('part', part, escLim);
            addNorm(part.replace(/^\\/, ''), op);
          }
        } else addNorm(part);
      });
      
      return line;
    };
    
    return inline((str || '')
      .split(/(\\?\$\w+!{0,2}\?{0,2};?|\\?{{|\\?}{|\\?}})/)
      .filter(s => s)).join('');
  }
  
  setDirectives(element = Object, dirs = {}) {
    Object.keys(dirs).forEach(dirn => this.setDirective(element, dirn, dirs[dirn]));
  }
  
  setDirective(element = Object, dirn = String, properties = {} || (func => func)) {
    const props = this.isFunc(properties) ? {cb: properties} : properties;
    
    if (dirn === 'onSwipe') {
      const defProps = {
        follow: false,
        cb: (eventn, dir = ['u', 'ur', 'r', 'dr', 'd', 'dl', 'l', 'ul'][0]) => true,
        startMoveKf: 10,
        dirDiapasonH: 50,
        dirDiapasonV: 50,
        isMovingPhase: false,
        movingStep: 5,
        prevMove: {x: 0, y: 0}
      };
      const nprops = Object.assign({}, defProps, props, {
        startMoveVKf: props.startMoveVKf == null
          ? props.startMoveKf == null
            ? defProps.startMoveKf
            : props.startMoveKf
          : props.startMoveVKf,
          
        startMoveHKf: props.startMoveHKf == null
          ? props.startMoveKf == null
            ? defProps.startMoveKf
            : props.startMoveKf
          : props.startMoveHKf,
      });
      
      const start = {x: 0, y: 0};
      const move = {x: 0, y: 0};
      
      element.addEventListener('touchstart', event => this.onTouchStartForDirective(event, nprops, start, move));
      element.addEventListener('touchmove', event => this.onTouchMoveForDirective(event, nprops, start, move));
      element.addEventListener('touchend', event => this.onTouchEndForDirective(event, nprops, start, move));
    }
  }
  
  onTouchStartForDirective(event = Event.required, props = {}, start = {x, y}, move = {x, y}) {
    event.preventDefault = () => event.preventDefault();
    //event.stopPropagation();
    
    const {clientX: x, clientY: y} = event.targetTouches[0];
    start.x = x;
    start.y = y;
    props.prevPoint = null;
  }
      
  onTouchMoveForDirective(event = Event.required, props = {}, start = {x, y}, move = {x, y}) {
    const {clientX: x, clientY: y} = event.targetTouches[0];
    move.x = x;
    move.y = y;
    
    const dx = x - start.x;
    const dy = y - start.y;
    const toRight = dx >= props.startMoveHKf;
    const toLeft = dx <= -props.startMoveHKf;
    const toUp = dy <= -props.startMoveVKf;
    const toDown = dy >= props.startMoveVKf;
    const cardinalPoints = [toUp, toUp && toRight, toRight, toDown && toRight, toDown, toDown && toLeft, toLeft, toUp && toLeft];
    const cardinalPointsLabels = ['u', 'ur', 'r', 'dr', 'd', 'dl', 'l', 'ul'];
    const toAny = cardinalPoints.some(cardinalPoint => cardinalPoint);
    const allPointLabels = cardinalPointsLabels.filter((pointl, pointli) => cardinalPoints[pointli]);
    const toLabel = allPointLabels.find(pointl => pointl.length === 2) || allPointLabels[0];
    
    if (toAny) {
      const isStart = !props.isMovingPhase;
      const isChange = props.prevPoint != null && props.prevPoint !== toLabel;
      const eventn = isStart ? 'start' : isChange ? 'change' : 'moving';
      const eventProp = {
        name: eventn,
        direction: toLabel,
        touches: event.touches.length
      };
      
      if (isStart) {
        props.isMovingPhase = true;
      } else if (isChange || props.prevPoint == null) {
        props.prevPoint = toLabel;
      }
      
      props.cb(eventProp);
    }
  }
  
  onTouchEndForDirective(event = Event.required, props = {}, start = {x, y}, move = {x, y}) {
    props.isMovingPhase = false;
    props.cb({name: 'stop'});
  }
  
  getSplittedWordsRegExp(separator = /\s+/) {
    return new RegExp(`(\\S*${str2.split(separator).map(word => word.replace(/[|{(?$^[*+]/g, '\\$1')).join('\\S*)|(\\S*')}\\S*)`, 'gi'); //)}]
  }
  
  getRatesInclude(inner, replacer) {
    const ret = {};
    
    if (this.isStr(inner)) {
      ret.reg = this.correctRegExp(inner, 'ig',
        (text, reps) => {
          if (reps) return text;
          const replaced = this.isFunc(replacer) ? replacer(text) : all;
          ret.textBits = replaced.split(/[-\s.,;'!_:?/\\`]+/).filter(bit => bit);
          const not = '[^-\\s.,;\'!_:?/\\\\`]';
          return `${not}*?(${ret.textBits.join('|')})${not}*`;
        });
        
      ret.string = inner;
    } else if (inner instanceof RegExp) {
      ret.reg = inner;
      ret.isFreeReg = true;
    } else if (this.isObj(inner)) {
      return Object.assign(ret, inner.inner, inner);
    }
    
    return ret;
  }
  
  rateInclude(inner, outer, replacer, decorator) {
    const self = this;
    const ret = function(innRate) {
      return {
        rate, text, reg, textBits, inner, string, founds, isFreeReg
      };
    };
    let rate;
    let {reg, textBits = [], string, isFreeReg} = this.getRatesInclude(inner, replacer);
    let text; 
    const founds = [];
    
    if (!this.isStr(outer)) return ret();
    
    if (isFreeReg) {
      rate = 1;
      
      outer.replace(reg, function(all) {
        rate += 1; //Array.from(arguments).reduce((sum, arg) => sum + (arg ? 0 : 1), 0);
        
        const decorated = self.isFunc(decorator) ? decorator(Array.from(arguments)) : all;
        return decorated == null ? all : decorated;
      });
      
      return ret();
    }
    
    text = outer.replace(
      reg,
      (all, word, index) => {
        if (!this.isStr(word)) return all;
        const lowerWord = word.toLowerCase();
        
        if (!founds.some(found => found.lowerWord === lowerWord)) 
          founds.push({all, word, index, lowerWord});
        
        const decorated = this.isFunc(decorator) ? decorator(all, word, index) : all;
        return decorated == null ? all : decorated;
      });
    
    if (founds.length === 0) return ret();
    rate = 1;
    
    if (textBits.length) {
      rate +=
        (textBits
          .filter(bit => bit)
          .reduce((len, bit) => len + bit.length, 0)
        - founds
          .reduce((len, {word}) => len + word.length, 1)) * (textBits.length - founds.length);
    }
    
    rate += founds.reduce((len, {all, word, index}) => len - -(Math.abs((all.length - word.length) + all.search(word))), 0);
    
    return ret();
  }
  
  convertStrIfReg(str, asDef = str) {
    try {
      const regMatch = str.match(/^([gimsuy]*)(?!\\)%([\w|\W]+)$/);
      const reg = regMatch
        ? RegExp(regMatch[2], regMatch[1])
        : asDef;
      
      return reg;
    } catch (localError) {
      return asDef;
    }
  }
  
  correctRegExp(str, flags = '', transformer) {
    let reps = 0;
    const string = str.replace(/[[\]\\$^*()+|?.<>{}]/g, all => {reps++; return `\\${all}`});
    return RegExp(this.isFunc(transformer) ? transformer(string, reps) : string, flags);
  }
  
  internationalWordReg(word, flags = '') {
    const reps = [
      ['ыіi', 'ыії'],
      ["ъ'ʼ", "ъ'ʼ"],
      ['эє'],
      ['гґ'],
      ['её']
    ];
    
    return RegExp(reps.reduce((acc, [from, to]) => acc.replace(RegExp(`[${from}]`), `[${to || from}]`), word).toLowerCase(), flags);
  }
  
  searchRate(objects = [{ n: 'name' }], searchWord = 'string for search', places = [this.POSITION], objName = 'ferry') {
    const normalWords = searchWord.split(/[^а-яё0-9ґії'ʼє]+/i).filter(word => word);
    const words = normalWords.map(word => word.toLowerCase());
    const wordRegs = normalWords.map(word => this.internationalWordReg(word));
    
    return objects.reduce((ferries, object, objecti) => {
      let rate = 0;
      let deep = 0;
      const ferry = () => ({ deep, rate, [objName]: object });
      
      if (places.some((place, placei) => {
        deep = placei;
        const num = [this.INDEX, this.POSITION].indexOf(place);
        if (num > -1) {
          if (words.some(word => word && (objecti + num).toString().startsWith(word))) {
            rate = 1;
            return true;
          }
          return false;
        }
        
        const searchInPlace = (str = '', level) => {
          str = str.toLowerCase();
          let noWord = false;
        
          const currRate = words.reduce((accRate, word, wordi) => {
            if (noWord) return;
            const index = str.search(wordRegs[wordi]);
            if (index < 0) {
              noWord = true;
              return;
            }
            return accRate + index + level;
          }, null);
          
          if (noWord || currRate == null) return false;
          
          rate = currRate;
          return true;
        };
        
        const search = (track, target, level) => {
          let searched;
          [].concat(track).reduce((obj, trace, tracei, tracea) => {
            if (!obj) return;
            if (trace === this.INDEX) {
              searched = obj.some(o => search(track.slice(tracei + 1), o, (level + tracei) * 10));
              return;
            }
            if (tracei >= tracea.length - 1) searched = searchInPlace(obj[trace], level);
            return obj[trace];
          }, target);
          return searched;
        };
        
        return search(place, object, placei);
        
      })) return ferries.concat(ferry());
      else return ferries;
    }, []).sort((a, b) => a.rate - b.rate);
  }
  
  _setConstants() {
    ['NUMBER', 'INDEX', 'POSITION', 'REMOVE'].forEach(lower => this[lower] = [lower]);
  }
  
  md5(content) {return md5(content);}
  
  isObj(obj){return obj instanceof Object && !(obj instanceof Array)}
  isobj(obj){return typeof obj === 'object' && obj != null}
  isArr(obj){return obj instanceof Array}
  isNum(obj){return typeof obj === 'number' && !isNaN(obj)}
  isnum(obj){return parseFloat(obj) == obj}
  isStr(obj){return typeof obj === 'string'}
  isFunc(obj){return typeof obj === 'function'}
  isAFunc(obj){return this.isFunc(obj) && obj[Symbol.toStringTag] === 'AsyncFunction'}
  isUnd(obj){return obj === undefined}
  isBool(obj){return typeof obj === 'boolean'}
  isNull(obj){return obj === null}
  isNan(obj){return isNaN(obj)}
  
  typeOf(obj) {return ['Str', 'Num', 'Bool', 'Arr', 'Null', 'Und', 'Func', 'Obj', 'Nan'].find(type => this[`is${type}`](obj)) || null;}
}
window.mylib = new MyLib();
window.MyLib = MyLib;



function ra(s) {alert(s);return s;}
const rad = (s, S) => {alert(mylib.dump(s, S));return s;}
const raj = o => {
  alert(JSON.stringify(o));
  return o;
};

/**
  * [js-md5]{@link https://github.com/emn178/js-md5}
  *
  * @namespace md5
  * @version 0.7.3
  * @author Chen, Yi-Cyuan [emn178@gmail.com]
  * @copyright Chen, Yi-Cyuan 2014-2017
  * @license MIT
  */
!function(){"use strict";function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(r){return function(e){return new t(!0).update(e)[r]()}},v=function(){var r=b("hex");h&&(r=w(r)),r.create=function(){return new t},r.update=function(t){return r.create().update(t)};for(var e=0;e<c.length;++e){var i=c[e];r[i]=b(i)}return r},w=function(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(s){if("string"==typeof s)return e.createHash("md5").update(s,"utf8").digest("hex");if(null===s||void 0===s)throw r;return s.constructor===ArrayBuffer&&(s=new Uint8Array(s)),Array.isArray(s)||ArrayBuffer.isView(s)||s.constructor===i?e.createHash("md5").update(new i(s)).digest("hex"):t(s)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var s,h,f=0,o=t.length,n=this.blocks,u=this.buffer8;f<o;){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)if(a)for(h=this.start;f<o&&h<64;++f)u[h++]=t[f];else for(h=this.start;f<o&&h<64;++f)n[h>>2]|=t[f]<<y[3&h++];else if(a)for(h=this.start;f<o&&h<64;++f)(s=t.charCodeAt(f))<128?u[h++]=s:s<2048?(u[h++]=192|s>>6,u[h++]=128|63&s):s<55296||s>=57344?(u[h++]=224|s>>12,u[h++]=128|s>>6&63,u[h++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++f)),u[h++]=240|s>>18,u[h++]=128|s>>12&63,u[h++]=128|s>>6&63,u[h++]=128|63&s);else for(h=this.start;f<o&&h<64;++f)(s=t.charCodeAt(f))<128?n[h>>2]|=s<<y[3&h++]:s<2048?(n[h>>2]|=(192|s>>6)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]):s<55296||s>=57344?(n[h>>2]|=(224|s>>12)<<y[3&h++],n[h>>2]|=(128|s>>6&63)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++f)),n[h>>2]|=(240|s>>18)<<y[3&h++],n[h>>2]|=(128|s>>12&63)<<y[3&h++],n[h>>2]|=(128|s>>6&63)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]);this.lastByteIndex=h,this.bytes+=h-this.start,h>=64?(this.start=h-64,this.hash(),this.hashed=!0):this.start=h}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[r>>2]|=u[3&r],r>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,r,e,i,s,h,f=this.blocks;this.first?r=((r=((t=((t=f[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(i=((i=(-1732584194^2004318071&t)+f[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+f[2]-1126478375)<<17|e>>>15)+i<<0)&(i^t))+f[3]-1316259209)<<22|r>>>10)+e<<0:(t=this.h0,r=this.h1,e=this.h2,r=((r+=((t=((t+=((i=this.h3)^r&(e^i))+f[0]-680876936)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[1]-389564586)<<12|i>>>20)+t<<0)&(t^r))+f[2]+606105819)<<17|e>>>15)+i<<0)&(i^t))+f[3]-1044525330)<<22|r>>>10)+e<<0),r=((r+=((t=((t+=(i^r&(e^i))+f[4]-176418897)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[5]+1200080426)<<12|i>>>20)+t<<0)&(t^r))+f[6]-1473231341)<<17|e>>>15)+i<<0)&(i^t))+f[7]-45705983)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+f[8]+1770035416)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[9]-1958414417)<<12|i>>>20)+t<<0)&(t^r))+f[10]-42063)<<17|e>>>15)+i<<0)&(i^t))+f[11]-1990404162)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+f[12]+1804603682)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[13]-40341101)<<12|i>>>20)+t<<0)&(t^r))+f[14]-1502002290)<<17|e>>>15)+i<<0)&(i^t))+f[15]+1236535329)<<22|r>>>10)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[1]-165796510)<<5|t>>>27)+r<<0)^r))+f[6]-1069501632)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[11]+643717713)<<14|e>>>18)+i<<0)^i))+f[0]-373897302)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[5]-701558691)<<5|t>>>27)+r<<0)^r))+f[10]+38016083)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[15]-660478335)<<14|e>>>18)+i<<0)^i))+f[4]-405537848)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[9]+568446438)<<5|t>>>27)+r<<0)^r))+f[14]-1019803690)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[3]-187363961)<<14|e>>>18)+i<<0)^i))+f[8]+1163531501)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[13]-1444681467)<<5|t>>>27)+r<<0)^r))+f[2]-51403784)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[7]+1735328473)<<14|e>>>18)+i<<0)^i))+f[12]-1926607734)<<20|r>>>12)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[5]-378558)<<4|t>>>28)+r<<0))+f[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[11]+1839030562)<<16|e>>>16)+i<<0))+f[14]-35309556)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[1]-1530992060)<<4|t>>>28)+r<<0))+f[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[7]-155497632)<<16|e>>>16)+i<<0))+f[10]-1094730640)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[13]+681279174)<<4|t>>>28)+r<<0))+f[0]-358537222)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[3]-722521979)<<16|e>>>16)+i<<0))+f[6]+76029189)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[9]-640364487)<<4|t>>>28)+r<<0))+f[12]-421815835)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[15]+530742520)<<16|e>>>16)+i<<0))+f[2]-995338651)<<23|r>>>9)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[0]-198630844)<<6|t>>>26)+r<<0)|~e))+f[7]+1126891415)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[14]-1416354905)<<15|e>>>17)+i<<0)|~t))+f[5]-57434055)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[12]+1700485571)<<6|t>>>26)+r<<0)|~e))+f[3]-1894986606)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[10]-1051523)<<15|e>>>17)+i<<0)|~t))+f[1]-2054922799)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[8]+1873313359)<<6|t>>>26)+r<<0)|~e))+f[15]-30611744)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[6]-1560198380)<<15|e>>>17)+i<<0)|~t))+f[13]+1309151649)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[4]-145523070)<<6|t>>>26)+r<<0)|~e))+f[11]-1120210379)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[2]+718787259)<<15|e>>>17)+i<<0)|~t))+f[9]-343485551)<<21|r>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=r-271733879<<0,this.h2=e-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+r<<0,this.h2=this.h2+e<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),r=new Uint32Array(t);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,r,e,i="",s=this.array(),h=0;h<15;)t=s[h++],r=s[h++],e=s[h++],i+=p[t>>>2]+p[63&(t<<4|r>>>4)]+p[63&(r<<2|e>>>6)]+p[63&e];return t=s[h],i+=p[t>>>2]+p[t<<4&63]+"=="};var _=v();f?module.exports=_:(i.md5=_,o&&define(function(){return _}))}();


} catch (error) {
  throw error;
}
})();





