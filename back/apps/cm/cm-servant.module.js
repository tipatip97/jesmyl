;'use strict';

(function CmServantModule(moduleName) {

  try {
    const g = applicanter.scope('cm', {
      context: {},
    });
    
    g.Comps = {
      1: [() => g.Cats],
      2: [() => g.Cat],
      3: [() => g.Com],
    };
    
    g.Phase = {
      Cats: 1,
      Cat: 2,
      Com: 3,
    };
    
    g.PhaseJumps = {
      
    };

    
    let mylib;
    
    g.initMylib = () => {
      if (g.mylib == null)
        g.mylib = mylib = applicanter.initMyLib('cm', { muteExecs: ((g.app || 0).variables || 0).mutedExecs });
      
      return g.mylib;
    };
    
    
    mylib = g.initMylib();
    const reportErrorMessage = error => mylib.func(window.reportErrorMessage, mylib && mylib.consl).call(error);
    g.reportErrorMessage = reportErrorMessage;
    
    g.isAccessToDo = g.isAccessToDo || (() => []);
    
    class CRangePanel extends React.Component {
      constructor() {
        super();
        
        this.defProps = {
          baseSize: 30,
          min: 10,
          max: 60,
          step: 1,
          perVal: 50,
          value: 35,
          view: 'value' || 'percents',
          onChange: (px, percents) => {
          },
          onRange: (px, percents) => {
          },
          onClick: (px, percents) => {
          },
          registerUpdaters: (updater) => {
          }
        };
        
      }
      
      prop(name) {
        return this.props == null || this.props[name] === undefined ? this.defProps[name] : this.props[name];
      }
      
      flexUpdate() {
        if (!g.isAccessToDo('flexibleMainFontSize') || this.curr > 0) return;
        const textElems = [].concat(mylib.func(this.prop('textElem')).call());
        const textWide = mylib.func(this.prop('textWide')).call();
        let width = 0;
        
        textElems.forEach(elem => {
          if (!elem) return;
          width = textWide === 'parent' ? elem.parentElement.getBoundingClientRect().width : width;
          const half = width / 2;
          
          let max;
          const up = (per) => {
            elem.style.fontSize = `${per}%`;
            if (elem.getBoundingClientRect().width < half) up(per + 15);
            else max = per;
          };
          up(1);
          
          //elem.style.background = 'rgba(0,0,0,.5)';
          elem.style.fontSize = `${(max * width) / elem.getBoundingClientRect().width - 5}%`;
          mylib.consl('flex-size', {
            width,
            max,
            size: elem.style.fontSize,
          });
        });
      }
      
      componentDidMount() {
        this.flexUpdate();
        this.prop('registerUpdaters')((timeout) => setTimeout(() => this.flexUpdate(), timeout));
      }
      
      render() {
        try {
          const oreol = 20;
          const start = { x: 0, y: 0 };
          const move = { x: 0, y: 0 };
          const setCurr = ncurr => {
            if (ncurr == null) return;
            this.curr = mylib.clone(ncurr);
            ringText.innerText =
              blurText.innerText = view();
          };
          
          const setCurrPx = (el = farvater) => {
            const min = this.prop('min');
            const kf = (this.prop('max') - min) / (this.curr - min);
            this.currPx = (el.clientWidth - this.prop('baseSize')) / kf;
          };
          
          const view = () => this.curr < 0 ? '<>' : Math.ceil(this.prop('view') === 'value' ? this.curr : percents);
          
          let panel, blurRing, ring, ringText, blurText, farvater;
          let isRangeMode = false;
          let value;
          this.currPx = this.currPx || 0 + oreol;
          this.curr = this.curr === undefined ? this.prop('value') : this.curr;
          let isRanged = false;
          let percents = Math.ceil(((this.curr - this.prop('min')) * 100) / (this.prop('max') - this.prop('min')));
          
          return ce(
            'div',
            {
              ref: el => panel = el || panel,
              className: `range-panel`,
              onClick: () => this.prop('onClick')(value, percents),
              style: {
                '--base-size': `${this.prop('baseSize')}px`
              }
            },
            ce(
              'div',
              {
                ref: el => blurRing = el || blurRing,
                className: 'blur-ring'
              },
              ce(
                'span',
                {
                  ref: el => blurText = el || blurText,
                  className: 'text'
                },
                view()
              )
            ),
            ce(
              'div',
              {
                ref: el => {
                  if (el) {
                    farvater = el || farvater;
                    setCurrPx(el);
                  }
                },
                className: 'range-farvater'
              }
            ),
            ce(
              'div',
              {
                ref: el => ring = el || ring,
                className: `ring ${this.props.icon || ''}`,
                onClick: () => {
                  const turnCurr = (isRange, isTurn = true) => {
                    if (isTurn) setCurr(-this.curr);
                    if (isRange) this.prop('onRange')(this.curr, percents);
                    this.prop('onChange')(this.curr, percents);
                  };
                  if (!g.isAccessToDo('flexibleMainFontSize')) {
                    turnCurr(true, this.curr < 0);
                    return;
                  }
                  turnCurr(this.curr < 0);
                  this.flexUpdate();
                },
                onTouchStart: event => {
                  if (this.curr < 0) return;
                  const { clientX: x, clientY: y } = event.targetTouches[0];
                  start.x = x;
                  start.y = y;
                },
                onTouchMove: event => {
                  try {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.curr < 0) return;
                    
                    const step = this.prop('step');
                    const max = this.prop('max');
                    const min = this.prop('min');
                    
                    const {clientX: x, clientY: y} = event.targetTouches[0];
                    move.x = x;
                    move.y = y;
                    
                    const dr = 10;
                    const dY = move.y - start.y;
                    const dX = move.x - start.x;
                    const absDY = Math.abs(dY);
                    
                    const isV = start.y != null && absDY > oreol;
                    const isH = start.x != null && Math.abs(dX) > oreol;
                    const firstly = start.x != null && start.y != null;
                    const limit = farvater.clientWidth - (this.prop('baseSize'));
                    
                    const left =
                      isRangeMode
                        ? limit > dX
                          ? dX < 0
                            ? 0
                            : dX
                          : limit
                        : isH
                          ? dX > 0
                            ? dr
                            : -dr
                          : 0;
                    
                    ring.style.top = `${isV ? dY > 0 ? dr : -dr : 0}px`;
                    ring.style.left = `${left}px`;
                    const pxPer = (left * 100) / (limit || oreol);
                    const nval = pxPer * (max - min) / 100 + min;
                    const newValue =
                      isRangeMode
                        ? nval
                        : isV
                        ? absDY > oreol
                          ? dY > 0
                            ? this.curr - step <= min
                              ? min
                              : this.curr - step
                            : this.curr - -step >= max
                              ? max
                              : this.curr - -step
                          : this.curr
                        : this.curr;
                    
                    const oreolBlurLeft = oreol * 3;
                    
                    const blurLeft = this.currPx < oreolBlurLeft ? oreolBlurLeft : this.currPx.toFixed(0);
                    
                    if (firstly) {
                      if (isV) start.x = null;
                      if (isH) {
                        start.y = null;
                        
                        blurRing.style.left = `${blurLeft}px`;
                        blurRing.style.opacity = .7;
                      }
                    }
                    if (!isRangeMode && !isV && isH && dX > 0 && dX > blurLeft) {
                      isRangeMode = true;
                      panel.classList.add('ranged');
                    }
                    
                    if (value != newValue) {
                      value = newValue;
                      
                      if (isRangeMode && !isNaN(pxPer)) {
                        percents = pxPer;
                        ringText.innerText = Math.ceil(Math.ceil(this.prop('view') === 'value' ? value : percents));
                      }
                      this.prop('onRange')(value, percents);
                      isRanged = true;
                    }
                  } catch (error) {
                    mylib.consl(error.stack);
                    throw error;
                  }
                },
                onTouchEnd: event => {
                  
                  if (this.curr < 0) return;
                  if (start.x != null && start.y != null) {
                    return;
                  }
                  
                  ring.style.top = 0;
                  ring.style.left = 0;
                  blurRing.style.left = 0;
                  blurRing.style.opacity = 0;
                  panel.classList.remove('ranged');
                  isRangeMode = false;
                  isRanged = false;
                  
                  if (value != this.curr) {
                    this.prop('onChange')(value, percents);
                    setCurr(value);
                    setCurrPx();
                  } else {
                    setCurr(value);
                  }
                }
              },
              ce(
                'div',
                {
                  ref: el => ringText = el || ringText,
                  className: `text`
                },
                view()
              )
            )
          );
        } catch (error) {
          mylib.consl(error.stack);
          throw error;
        }
      }
    }
    
    g.RangePanel = CRangePanel;
    
    
    class CHelper extends React.Component {
      constructor() {
        super();
      }
      
      render() {
        return ce(
          'div',
          {
            className: `helper flex flex-center flex-middle${g.isHelperMode ? ' helper-mode' : ''}`,
            onClick: () => {
              g.isHelperMode = !g.isHelperMode;
              this.forceUpdate();
            }
          },
          ce(
            'span',
            {},
            '?'
          )
        );
      }
    }
    
    g.Helper = CHelper;
    
    g.shakeForHelper = (query, shakeType = 'shaking' || 'sizing' + '--sm', hideModal = true) => {
      try {
        const elements = Array.from(document.querySelectorAll(query) || []);
        const modals = Array.from(document.querySelectorAll('.app-modal-window') || []);
        const elementClassName = `helper-element-${shakeType}`;
        const modalClassName = 'blur-element-animated';
        
        clearTimeout(g.shakerForHelperTimeout);
        
        elements.forEach((element, elementi) => {
          element.classList.add(elementClassName);
          if (!elementi) {
            element.scrollIntoViewIfNeeded ? element.scrollIntoViewIfNeeded(true) : element.scrollIntoView(true);
          }
        });
        if (hideModal) modals.forEach(modal => modal.classList.add(modalClassName));
        
        g.shakerForHelperTimeout = setTimeout(() => {
          elements.forEach(element => element.classList.remove(elementClassName));
          if (hideModal) modals.forEach(modal => modal.classList.remove(modalClassName));
        }, 1000);
      } catch (error) {
        mylib.consl(error.stack).config({type: 0});
        throw error;
      }
    };
    
    g.helperRegisters = [];
    g.registerHelper = (id, topArgs, cb, context) => {
      //g.helperRegisters.push(id);
      
      return (event) => {
        
        if (g.isHelperMode) {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
            event.target.blur && event.target.blur();
          }
          
          try {
            const stopHelper = () => {
              g.isHelperMode = false;
              cm.ss();
            };
            
            return fetch(`${mylib.config.host}/helper/cm/${id}`)
              .then(json => json.json())
              .then(async (result) => {
                
                if (result == null) {
                  await mylib.alert(`Подсказка по номеру ${id} ещё не была описана!`);
                  stopHelper();
                } else {
                  try {
                    const template = (text) =>
                      mylib.stringTemplater(text,
                        mylib.overlap({id},
                          mylib.isArr(topArgs)
                            ? [id].concat(topArgs)
                            : topArgs,
                          mylib.isStr(topArgs.thisQuery)
                            ? {
                              shakeThis: (linkText, kind = 'shaking') => () => g.shakeForHelper(topArgs.thisQuery, kind),
                            }
                            : null));
                    
                    if (mylib.isArr(result.val))
                      mylib.modal({
                        title: `Помощник${result.val[0] == null ? '' : `: ${template(result.val[0])}`}`,
                        descriptionHtml: template(result.val[1]),
                        buttons: [
                          {
                            title: 'Закончить с подсказками',
                            onClick: ({closeModal}) => {
                              closeModal();
                              stopHelper();
                            }
                          }
                        ]
                      });
                    else
                      mylib.modal({
                        title: `Помощник`,
                        descriptionHtml: `Не удалось загрузить подсказку`,
                        buttons: [{title: 'Ок'}]
                      });
                  } catch (error) {
                    mylib.consl(error.stack);
                    throw error;
                  }
                }
              })
              .catch(() => {
                mylib.showToast('Не получилось загрузить Подсказку.');
                stopHelper();
              });
          } catch (error) {
            mylib.consl(error.stack);
            throw error;
          }
        } else cb && cb(event);
      };
    };
    
    class IBased {
      constructor(top) {
        this.top = top;
      }
      
      getOrBase(typ, fieldn) {
        if (this[fieldn] === null || this[fieldn] === undefined) this[fieldn] = mylib.typ(typ, this.top[fieldn]);
        return this[fieldn];
      }
      
      forcedArray(obj, message = 'expected #Array, but got #other') {
        if (obj) {
          if (mylib.isArr(obj)) return obj;
          else {
            const list = [];
            mylib.dcconsl(message, JSON.parse(JSON.stringify(obj)), obj);
            Object.entries(obj).forEach(([k, v]) => k != '' && k > -1 && (list[k] = v));
            return list;
          }
        } else return [];
      }
    }
    
    g.IBased = IBased;
    
  } catch (error) {
    mylib.dconsl(error.stack);
    throw error;
  }


})('');