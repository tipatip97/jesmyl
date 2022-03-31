
  class TheComCtrlPannel {
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