;'use strict';

(function CmTranslationsModule() {

  try {
  
    const g = applicanter.scope('cm');
    const mylib = g.mylib;
    
    
    if (g.translations == null)
      g.translations = {
        viewDefaults: [
          {
            styleName: 'overflow',
            name: '',
            value: 'visible',
            type: null,
            post: ''
          },
          {
            styleName: 'fontWeight',
            name: '',
            value: 'bold',
            type: null,
            post: ''
          },
          {
            styleName: 'textAlign',
            name: '',
            value: 'center',
            type: null,
            post: ''
          },
          {
            styleName: 'whiteSpace',
            name: '',
            value: 'pre',
            type: null,
            post: ''
          },
          {
            styleName: 'fontFamily',
            name: 'Шрифт',
            value: 'montserrat, main, calibri, georgia, times, serif, verdana, arial',
            type: 'text',
            post: ''
          },
          {
            styleName: 'background',
            name: 'Фон',
            value: 'black',
            type: null && 'color',
            post: ''
          },
          {
            styleName: 'color',
            name: 'Цв. шрифта',
            value: 'white',
            type: null && 'color',
            post: ``
          },
          {
            styleName: 'lineHeight',
            name: 'Меж.строк',
            type: null && 'number',
            value: 1.1,
            min: 1,
            max: 2,
            step: .1,
            post: ''
          },
          {
            styleName: 'fontSize',
            name: 'Размер шрифра',
            type: null,
            value: .09,
            min: .01,
            max: .3,
            step: .01,
            post: 'px'
          }
        ],
        stack: [],
        currWini: 0
      };
    
    g.styleCurr = {
      winBlock: {
        dis: 'rgba(0,0,0,0)',
        able: 'blue'
      }
    };
    
    
    class IWindow {
      constructor(props) {
        const { name, top, left, comw } = props;
        let win = window.open(undefined, `win-${name}`, `top=${top},left=${left},width=200,height=200`);
        
        this.oscreen = document.createElement('div');
        this.screen = document.createElement('div');
        this.leftArea = document.createElement('div');
        this.rightArea = document.createElement('div');
        
        this.leftArea.onclick = event => {
          event.stopPropagation();
          this.prevt();
        };
        
        this.rightArea.onclick = event => {
          event.stopPropagation();
          this.nextt();
        };
        
        this.leftAreaId = 'left-area';
        this.rightAreaId = 'right-area';
        
        this.oscreen.id = 'oscreen';
        this.screen.id = 'screen';
        this.leftArea.id = this.leftAreaId;
        this.rightArea.id = this.rightAreaId;
        
        this.name = name;
        this.initName = name;
        this.view = {};
        
        this._visible = true;
        this._equiv = true;
        
        let onClose = () => {
          clearTimeout(timer);
          win = window;
          this.win = win;
          this.startOwn();
          this.insertStyle(document, '#the-translation-screen');
          this.listeners();
          this.setCurrCom(comw);
        };
        
        const timer = setTimeout(() => {
          this.win = win;
          onClose = null;
          this.startTranslation();
          this.insertStyle(this.win.document, 'body');
          this.listeners();
          this.setCurrCom(comw);
        }, 300);
        
        win.onunload = () => onClose && onClose();
        
        g.translations.viewDefaults.forEach(({ styleName, value, post }) => {
          this.screen.style[styleName] = 'inherit';
          this.view[styleName] = value;
        });
        
        applicanter.$listen('App.onApplicationRefresh', 'cm-translations-listener', async event => {
          
          setTimeout(() => {
            if (event.value.val.some(comp => comp.app === 'cm' && comp.name === 'cols')) {
              g.translations.stack.forEach(win => {
                win.updateCom();
                win.text = win.text;
              });
              this.listView.forceUpdate();
            }
          });
        });
      }
      
      startOwn() {
        const screen = document.createElement('div');
        document.body.appendChild(screen);
        screen.id = 'the-translation-screen';
        let closits = 0;
        let clositsTimeout;
        screen.onclick = () => {
          clearTimeout(clositsTimeout);
          if (++closits === 3) {
            this.isOwnClosed = true;
            this.onclose();
            setTimeout(() => screen.remove(), 300);
          }
          clositsTimeout = setTimeout(() => closits = 0, 500);
        };
        setTimeout(() => this.startTranslation(screen));
      }
      
      startTranslation(container = this.win.document.body) {
        
        this.win.onclick = () => container.webkitRequestFullScreen();
        
        container.appendChild(this.oscreen);
        container.appendChild(this.leftArea);
        container.appendChild(this.rightArea);
        this.oscreen.appendChild(this.screen);
        let dir = null;
        
        const cb = (event) => {
           // mylib.dconsl(event);
          if (event.name === 'moving') {
            if (event.direction.match(/r/)) dir = 1;
            else if (event.direction.match(/l/)) dir = -1;
            else dir = 0;
          } else if (event.name === 'stop') {
            if (dir > 0) this.setCurrCom(g.marks.getPrevComw(), true, false);
            else if (dir < 0) this.setCurrCom(g.marks.getNextComw(), true, false);
          }
        };
        //mylib.setDirective(container, 'onSwipe', cb);
      }
      
      insertStyle(doc, top = null) {
        window.insertStyle(
          `screen-styles-${this.initName}`,
          top == null ? '' : `
            ${top} {
              position: absolute;
              z-index: 10000;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              margin: 0;
              background: black;
              
              #${this.leftAreaId}, #${this.rightAreaId} {
                position: absolute;
                width: 40vw;
                height: 100vh;
                top: 0;
                //background: rgba(0,0,0,.5);
              }
              
              #${this.leftAreaId} {
                left: 0;
              }
              
              #${this.rightAreaId} {
                right: 0;
              }
            }
            
            #oscreen {
              display: flex;
              width: 100vw;
              height: 100vh;
              justify-content: space-around;
            }
            
            #screen {
              align-self: center;
            }
          `,
          doc
        );
      }
      
      listeners() {
        this.win.addEventListener('resize', () => this.resizeDiv.call(this, true));
        this.win.addEventListener('keyup', g.onKeyUpTranslations);
        this.win.addEventListener('unload', () => this.onclose.call(this));
        window.addEventListener('resize', () => this.resizeDiv.call(this, false));
        window.addEventListener('unload', () => this.close.call(this));
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
      
      async setCurrCom(comw, isUpdate = true, isEmitComChange = true) {
        if (this.currComw !== comw && await g.nav.setCom(comw, null, isEmitComChange) !== false) {
          this.currComw = comw;
          const com = g.cols.coms.find(com => com.w === comw);
          this.list = com.getOrderedTexts();
          
          if (isUpdate) {
            this.tot(0, false);
            setTimeout(() => this.listView.forceUpdate());
          }
          g.ss();
        }
      }
      
      updateCom() {
        this.setCurrCom(this.currComw, false);
      }
      
      set curri(next) {
        this._curri = next < 1 ? 0 : next >= this.list.length ? this.list.length - 1 : next;
      }
      
      get curri() {
        return this._curri || 0;
      }
      
      set list(next) {
        this._list = next;
        this.curri = 0;
      }
      
      get list() {
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
      
      tot(next, isSetBlocki = true) {
        next = next == null ? this._curri : next;
        const nextd = window[`id_win.${this.initName}.${next}`];
        
        if (nextd) {
          this.curri = next;
          this.text = this.text;
          
          this.listView.fu();
          const nextParent = nextd.parentElement;
          nextParent.scrollLeft = nextd.offsetLeft + nextd.clientWidth / 2 - nextParent.clientWidth / 2;
          if (isSetBlocki) g.streamManager.setBlocki(next, () => g.ss());
        }
      }
      
      visibles(val = true, cb = e => e) {
        this._visible = !!val;
        this.text = this.text;
        cb && cb();
        g.context.translations.fu();
      }
      
      visiblet(cb = e => e) {
        this._visible = !this._visible;
        this.text = this.text;
        cb && cb(this._visible);
        g.context.translations.fu();
      }
      
      equiv(cb = e => e) {
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
      
      set text(text) {
        if (this._equiv) this.screen.innerHTML = text;
        
        this.div.innerHTML =
          this._text = text;
        this.upView();
      }
      
      get text() {
        return this._visible ? this.list[this.curri] : '';
      }
      
      resizeDiv(isUpViewReq) {
        if (!this.win || !g.nav.isPhase(g.Phase.Translations)) return;
        if (!this._div.offsetParent) return;
        const {
          clientHeight: parenth,
          clientWidth: parentw
        } = this._div.offsetParent;
        
        const winw = this.win.innerWidth;
        const winh = this.win.innerHeight;
        
        const ls = winw > winh;
        
        const neww = ls ? parentw : parentw * (winw / winh);
        const newh = !ls ? parenth : parenth * (winh / winw);
        
        this.odiv.style.width = `${neww}px`;
        this.odiv.style.height = `${newh}px`;
        this.upView(null, isUpViewReq);
      }
      
      upView(updates = null, isReq) {
        try {
          if (!g.nav.isPhase(g.Phase.Translations) || !this.oscreen || !this.odiv) return;
          
          if (!this._div) throw Error(`There is no Div in "${this._name}" screen`);
          const isReset = updates == null;
          
          g.translations.viewDefaults.forEach(({styleName, post}) => {
            if (!isReset && !(styleName in updates)) return;
            const indicator = 'clientWidth';
            const max = .9;
            
            let sfs = 0;
            let dfs = 0;
            
            if (styleName === 'fontSize') {
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
        } catch (e) {
          mylib.alert(e.stack);
          throw e;
        }
      }
      
      onclose() {
        window.setTimeout(() => g.context.translations.fu(), 10);
        window.removeEventListener('resize', this.resizeDiv);
        window.focus();
        this.closed = true;
      }
      
      close() {
        this.win.close();
        this.onclose();
      }
      
      focus() {
        this.win.focus();
      }
      
      set win(o) {
        if (this._win) throw Error('You cannot set win but in constructor');
        else if (!o) throw Error('win is empty!');
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
    
    g.onKeyUpTranslations = async event => {
      event.preventDefault();
      const currWin = g.translations.stack[g.translations.currWini];
      const shiftKey = event.shiftKey;
      
      if (currWin == null) return;
      
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
          event.ctrlKey
            ? await mylib.confirm('Закончить Трансляцию?') && currWin.close()
            : currWin.visiblet();
          break;
        
        case 86: // v
          currWin.visiblet();
          break;
        
        case 70: // f
          currWin.focus();
          break;
      }
      
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        if (g.translationsFirstNums.length) {
          let mult = 1;
          const nind = g.translationsFirstNums.reduceRight((sum, num) => {
            const res = sum + num * mult;
            mult *= 10;
            return res;
          }, 0) - 1;
          
          if (event.shiftKey) g.translations.stack[nind].setAsCurrWin();
          else currWin.tot(nind);
          
          g.translationsFirstNums.length = 0;
        }
      }
    };
    
    g.translationsFirstNums = [];
    
    g.onKeyDownTranslations = event => {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        g.translationsFirstNums.push(event.keyCode - 48);
      }
      if (event.keyCode === 32 && g.translationsFirstNums.length)
        g.translationsFirstNums.push(g.translationsFirstNums[g.translationsFirstNums.length - 1]);
    };
    
    document.addEventListener('keydown', g.onKeyDownTranslations);
    document.addEventListener('keyup', g.onKeyUpTranslations);
    
    class CTranslations extends React.Component {
      constructor() {
        super();
        g.context.translations = this;
        g.currentTranslationWin = 0;
      }
      
      fu(cb) {
        cb && cb();
        this.forceUpdate();
      }
      
      render() {
        const com = g.nav.ccom;
        
        return ce(
          'div',
          {
            key: 'translations',
          },
          [
            ce('button',
              {
                key: 'new-trans',
                className: 'mbtn m-ok',
                onClick: async event => {
                  const top = event.view.screenTop + event.clientY + 70;
                  const left = event.view.screenLeft + event.clientX - 70;
                  
                  const stack = g.translations.stack;
                  const len = stack.length;
                  if (len && stack.some(item => item.isOwnClosed)) stack.length = 0;
                  const win = new IWindow({ name: len, top, left, comw: com.w });
                  g.translations.stack.push(win);
                  if (len === 0) win.setAsCurrWin();
                  setTimeout(() => this.fu());
                }
              },
              'Новая трансляция'
            ),
            
            ce('button',
              {
                key: 'stop-all-trans',
                className: `mbtn m-ko${g.translations.stack.length === 0 ? ' disabled' : ''}`,
                onClick: async ev => {
                  if (g.translations.stack.length === 0) return;
                  if (!await mylib.confirm(`Закончить все трансляции?`)) return;
                  g.translations.stack.forEach(win => win && win.close());
                  g.translations.stack = [];
                  this.fu();
                }
              },
              'Закончить все трансляции'
            ),
            
            g.CollapsePane && ce(g.CollapsePane, { key: 'collapse-pane in transls' }),
            
            g.translations.stack.map((win, wini) => {
              
              setTimeout(() => win.upView());
              
              return !win ? null :
                win.isOwnClosed
                  ? ce(Marks, {
                      onInit: config => this.marksConfig = config,
                      class: ' ',
                      isHideSysButtons: true,
                      onClick: comw => win.setCurrCom(comw),
                      isActive: (comw, com, ccomw) => win.currComw === comw
                    })
                  : ce('div',
                {
                  key: `win-${win.initName}`,
                  id: `id_block.${win.initName}`,
                  style: {
                    padding: '.3em',
                    border: `solid 3px ${win.initName == g.translations.currWini ? g.styleCurr.winBlock.able : g.styleCurr.winBlock.dis}`
                  },
                  onClick: async () => {
                    win.setAsCurrWin();
                  }
                },
                win.closed ?
                  ce('div',
                    {
                      key: `completed-tr_${win.initName}`,
                      style: {color: 'red'}
                    },
                    'Завершено'
                  ) :
                  [
                    ce('button',
                      {
                        key: `win.close-${win.initName}`,
                        className: `btn btn-danger`,
                        onClick: async event => {
                          await mylib.confirm(`Закончить трансляцию "${win.name}"?`) && win.close();
                        }
                      },
                      '×'
                    ),
                    ce('strong',
                      {
                        key: `win.name-${win.initName}`,
                        className: `as-text`
                      },
                      win.name
                    ),
                    
                    ce(
                      `div`,
                      {
                        key: `win.block-${win.initName}`,
                        className: 'window-emulator'
                      },
                      [ 
                        ce(
                          `div`,
                          {
                            key: `win.par-wr-${win.initName}`,
                            className: 'window-emulator-parent-wrapper'
                          },
                          ce('div',
                            {
                              className: 'parent',
                            },
                            ce(
                              `div`,
                              {
                                key: `win.odiv-${win.initName}`,
                                className: `window-emulator-oscreen`,
                                ref: element => win.odiv = element || win.odiv
                              },
                              ce(
                                `div`,
                                {
                                  key: `win.div-${win.initName}`,
                                  className: `window-emulator-screen`,
                                  ref: element => {
                                    if (element) {
                                      win.div = element;
                                    }
                                    win.tot(null, false);
                                  }
                                }
                              )
                            )
                          )
                        ),
                        
                        ce(
                          `div`,
                          {
                            key: `win.ctrl-${win.initName}`,
                            className: `window-emulator-ctrl`
                          },
                          [
                            g.translations.viewDefaults.map(({styleName, name, max, min, step, value, type}) =>
                              type === null ? null : ce(
                                `div`,
                                {
                                  key: `win.view-${win.initName}.${styleName}`
                                },
                                [
                                  `${name}: `,
                                  ce('input',
                                    {
                                      key: `win.view-inp-style-${win.initName}.${styleName}`,
                                      type, max, min, step,
                                      defaultValue: win.view[styleName],
                                      onChange: event => {
                                        win.upView({
                                          [styleName]: event.target.nextSibling.innerText = event.target.value
                                        });
                                      },
                                      onKeyUp: event => event.stopPropagation(),
                                      onKeyDown: event => event.stopPropagation(),
                                      onKeyPress: event => event.stopPropagation(),
                                    }
                                  ),
                                  
                                  ce('label',
                                    {
                                      key: `win.view.label-${win.initName}.${styleName}`,
                                      className: '',
                                      style: {
                                        fontSize: type === 'text' ? 0 : '1em'
                                      },
                                      onChange: event => event
                                    },
                                    win.view[styleName]
                                  )
                                ]
                              )
                            ),
                            ce('div',
                              {
                                key: `win.${win.initName}.com`
                              },
                              [
                                ce('button',
                                  {
                                    key: `win.${win.initName}.com.current`,
                                    className: 'mbtn m-br',
                                    onClick: () => {
                                      win.setCurrCom(com.w);
                                      this.marksConfig.fu();
                                    }
                                  },
                                  com.n
                                ),
                                ce('div',
                                  {
                                    key: `win.${win.initName}.com.marks-list`,
                                    style: {
                                      maxHeight: '10em',
                                      overflow: 'auto',
                                      height: '100vh'
                                    }
                                  },
                                  ce(Marks, {
                                    onInit: config => this.marksConfig = config,
                                    class: ' ',
                                    isHideSysButtons: true,
                                    onClick: comw => win.setCurrCom(comw),
                                    isActive: (comw, com, ccomw) => win.currComw === comw
                                  })
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    ce('div',
                      {
                        key: `win.down.${win.initName}`,
                        className: 'win-down'
                      },
                      [
                        ce('div',
                          {
                            key: `win.view-${win.initName}.vis-wr`,
                            className: 'mgroup'
                          },
                          ce('button',
                            {
                              key: `win.view-${win.initName}.vis`,
                              className: `mbtn m-ko ${win._visible ? 'mactive' : ''}`,
                              onClick: async e => {
                                
                                win.visiblet(isEq => {
                                  e.target.classList.toggle('mactive');
                                });
                              }
                            },
                            'vis'
                          ),
                          ce(
                            `button`,
                            {
                              key: `win.view-${win.initName}.==`,
                              className: `mbtn m-ko ${win._equiv ? 'mactive' : ''}`,
                              onClick: async e => {
                                win.equiv(isEq => {
                                  e.target.classList.toggle('mactive');
                                });
                              }
                            },
                            '=='
                          )
                        ),
                        ce(
                          `div`,
                          {
                            key: `win.view-${win.initName}.arr-wr`,
                            className: 'mgroup'
                          },
                          [
                            ce(
                              `button`,
                              {
                                key: `win.view-${win.initName}.<`,
                                className: `mbtn m-ok`,
                                onClick: async ev => {
                                  win.prevt();
                                }
                              },
                              `<`
                            ),
                            ce(
                              `button`,
                              {
                                key: `win.view-${win.initName}.>`,
                                className: `mbtn m-ok`,
                                onClick: ev => {
                                  win.nextt();
                                }
                              },
                              `>`
                            )
                          ]
                        ),
                        ce(TranslationList, { key: `tr.list.${win.initName}`, win })
                      ]
                    )
                  ]
              );
            })
          ]);
      }
    }
    
    //g.Translations = CTranslations;
    
    
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
            className: 'window-emulator-text-list'
          },
          win.list.map((text, texti) => {
            return ce('div',
              {
                key: `translation-box-wrapper.${texti}`,
                id: `id_win.${win.initName}.${texti}`,
                className: 'window-emulator-text-list-unit'
              },
              ce('div',
                {
                  key: `translation-box-num.${texti}`
                },
                texti + 1
              ),
              ce('pre',
                {
                  key: `window-emulator-text.list.${win.initName}.${texti}`,
                  className: `window-emulator-text-list-unit-inner ${win.curri !== texti ? '' : 'active'}`,
                  onClick: () => win.curri !== texti && win.tot(texti),
                  dangerouslySetInnerHTML: { __html: text }
                }
              )
            );
          })
        );
      }
    }
    
    
    applicanter.$listen('App.onApplicationRefresh:cm', 'cm-translations-listener', async (event = {}) => {
      const {value = []} = event;
      
      const joinedStream = value.some(comp => comp.name === 'joined_stream') ? window.json.joined_stream : null;
      const currWin = g.translations.stack[g.translations.currWini];
      
      if (joinedStream && currWin) {
        
        g.streamManager.update(joinedStream, () => {
          
          if (!g.streamManager.isCurr) {
            if (joinedStream.b != null)
              if (joinedStream.b < 0)
                currWin.visibles(false);
              else {
                currWin.tot(joinedStream.b, false);
                currWin.visibles(true);
              }
              
            if (joinedStream.c != null)
              currWin.setCurrCom(joinedStream.c, false);
            else
              g.ss();
          }
        }, () => {
          System.showToast('Сртим был завершён');
          g.ss();
        });
        
      }
    });
    
    mylib.overlap(g.Comps, {
      5: CTranslations,
    });
    
    mylib.overlap(g.Phase, {
      Translations: 5,
    });
    
    mylib.overlap(g.PhaseJumps, {
      [g.Phase.Translations]: null,
    });
    
  } catch (error) {
    mylib.consl(error.stack);
    throw error;
  }


})();