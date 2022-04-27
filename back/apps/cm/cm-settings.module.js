;'use strict';

(function CmSettingsModule(moduleName) {

  try {
  
    const g = applicanter.scope('cm');
    const mylib = g.mylib;
    const generalId = 'settings-changes';
    
    class IEditableStyleProp extends g.IBased {
      constructor(top) {
        super(top);
        this.tg = top.tg;
        this.l = top.l;
      }
      
      create() {
        this.exec({
          action: 'addStyleBlock',
          generalId,
        });
        g.ss();
      }
      
      scope() {
        return ['settings', 'style', this.n].concat(Array.from(arguments)).join('.');
      }

      setTopField(fieldn, value, def = this[fieldn]) {
        const action = ({
          h: 'changeStyleTopField',
          i: 'changeStyleInheritField',
          l: 'setStyleBlockLevelSign',
          md: 'setIsModulationBlock',
          tg: 'setTagListStyleProp',
        })[fieldn];
        
        this.exec({
          scope: this.scope(action, fieldn),
          prev: def,
          value,
          method: 'set',
          action,
          generalId,
          args: {
            value
          }
        });

        this[fieldn] = value;
        g.ss();
      }

      setProp(coln, propn = String, value = String) {
        this.exec({
          scope: this.scope([coln, 'changeStyleProp', propn]),
          prev: this[coln][propn],
          value,
          method: 'set',
          action: 'changeStyleProp',
          args: {
            coln,
            propn,
            value
          }
        });

        this[coln][propn] = value;
        g.ss();
      }
      
      remove() {
        this.exec({
          action: 'removeStyleProp',
        });
        g.ss();
      }
      
      exec(bag) {
        mylib.setExecs(mylib.overlap({ generalId }, bag, {
          args: mylib.overlap({}, bag.args, {
            name: this.n
          }),
        }));
      }
      
      static get simpleNumFields() {
        return {
          i: 'Наследуемые стили',
          md: 'Модулирующий блок',
        };
      }
    }
    
    g.IEditableStyleProp = IEditableStyleProp;
    
    class IEditableSetts {
      bumerangStyles(ai, bi) {
        [this.styles[ai], this.styles[bi]] = [this.styles[bi], this.styles[ai]];

        mylib.setExecs({
          value: [ai, bi],
          method: 'bumerang',
          action: 'bumerangSettingsStyleProps',
          generalId,
          args: {},
          onSet: exec => exec.args.value = exec.value
        });
        g.ss();
      }

      newBlock(n) {
        const prop = new g.IStyleProp({ n });
        prop.create();
        this.styles.push(prop);
      }
    }
    
    g.IEditableSetts = IEditableSetts;
    
    class CSettings extends React.Component {
      constructor() {
        super();
        this.state = {
          newStyleName: ''
        };
      }
      
      render() {
        const navigation = g.setts.navigation;
        /*const sortFields = {
          sortAlbums: ['n', 'w', 'm'],
          sortSongs: ['n', 'w', 'm']
        };*/
    
        return ce('div',
          {
            key: `settings-window`,
            className: `settings-window`,
          },
          ce('h3',
            {
              key: 'settings-title',
            },
            'Настройки'
          ),
          //ce('b', {key: 'settings-sorting-header',}, 'Сортировка'),
          null && Object.keys(g.setts.navigation).map(nav =>
            ce('div',
              {
                key: `settings-sorting-${nav}`,
              },
              //g.translate[nav],
              /*mylib.isStr(g.setts.navigation[nav])
                ? ce(`select`,
                  {
                    key: `selector-${nav}`,
                    className: 'minput m--ok msm',
                    onChange: event => {
                      mylib.setExecs({
                        scope: ['settings', 'navigation-sort-var', nav].join('.'),
                        prev: navigation[nav],
                        value: event.target.value,
                        method: 'set',
                        action: 'changeSortVariant',
                        args: {
                          value: event.target.value,
                          nav
                        }
                      });
                      navigation[nav] = event.target.value;
                      this.setState({navigation});
                      g.ss();
                    },
                    defaultValue: navigation[nav]
                  },
                  //sortFields[nav].map(field => ce('option', {key: `sel-option-${nav}${field}`, value: field}, g.translate[field]))
                )
                : ce('button',
                  {
                    key: `sel-bool-${nav}`,
                    className: 'mbtn msm m-no',
                    onClick: g.registerHelper(51, [], async event => {
                      
                      mylib.setExecs({
                        scope: ['settings', 'navigation-sort-ord', nav].join('.'),
                        prev: !!navigation[nav],
                        value: !navigation[nav],
                        method: 'set',
                        action: 'changeSortOrder',
                        args: {
                          value: !navigation[nav],
                          nav
                        }
                      });
                      navigation[nav] = !navigation[nav];
                      this.setState({navigation});
                      g.ss();
                    })
                  },
                  g.translate[navigation[nav] ? `sortUp` : `sortDown`]
                )*/
            )
          ),
          ce('b', { key: 'settings-styles-header' }, 'Стили'),
          ce('div',
            {
              key: `settings-new-group`,
              className: 'settings-new-group mgroup msm',
            },
            ce('button',
              {
                key: 'new-settings-style-block-button',
                className: 'new-settings-style-block-button mbtn m-ok',
                disabled: !this.state.newStyleName || g.setts.styles.some(st => st.n === this.state.newStyleName),
                onClick: event => {
                  g.setts.newBlock(this.state.newStyleName);
                  
                  this.setState({
                    newStyleName: '',
                  });
                },
              },
              '+'
            ),
            ce('input',
              {
                key: `new-settings-style-block-name-input`,
                className: `new-settings-style-block-name-input mbtn`,
                onInput: event => this.setState({newStyleName: event.target.value}),
                value: this.state.newStyleName
              }
            )
          ),
          g.setts.styles.map((styleBlock, styleBlocki) => {
            return ce('div',
              {
                key: `style-block_${styleBlock.name}`,
                style: {
                  border: 'solid 1px var(--color-far)',
                }
              },
              ce('div',
                {
                  key: `block-name-title${styleBlock.name}`,
                  className: 'mgroup msm',
                },
                ce('span',
                  {
                    key: `styleBlock-title${styleBlock.name}-br`,
                    className: 'mbtn m-br',
                    onClick: () => {
                      g.setts.bumerangStyles(styleBlocki ? styleBlocki - 1 : 1, styleBlocki);
                      this.forceUpdate();
                    }
                  },
                  styleBlocki ? '↑' : '↓'
                ),
                ce('span',
                  {
                    key: `styleBlock-title${styleBlock.name}`,
                    className: 'mbtn mdisabled m-no',
                    onClick: async() => {
                      if (await mylib.confirm(`Удалить блок стилей "${styleBlock.name}"?`, 'Удалить блок')) {
                        mylib.dconsl(styleBlock);
                        styleBlock.remove();
                      }
                    }
                  },
                  styleBlock.name
                ),
                ce('input',
                  {
                    key: `styleBlock.template-${styleBlock.name}`,
                    className: 'mbtn',
                    value: styleBlock.header,
                    onInput: event => styleBlock.setTopField('h', event.target.value)
                  }
                ),
                ce('button',
                  {
                    key: `styleBlock.setts-${styleBlock.name}`,
                    className: 'mbtn m-ko',
                    onClick: () => {
                      mylib.modal({
                        title: `Настройка стиля "${styleBlock.name}"`,
                        inputs: Object.entries(IEditableStyleProp.simpleNumFields).map(([fieldn, title]) => {
                          return {
                            title,
                            type: 'checkbox',
                            checked: () => styleBlock[fieldn],
                            onChange: event => styleBlock.setTopField(fieldn, event.target.checked ? 1 : 0)
                          }
                        }),
                      });
                    }
                  },
                  svg('settings-2-outline')
                )
              ),
              ce('div',
                {
                  key: `styleBlock.styles_${styleBlock.name}`,
                },
                ce('div',
                  {
                    key: `styleBlock.level-radios_${styleBlock.name}`,
                  },
                  [0,0,0,0].map((_, level) => {
                    return ce('input',
                      {
                        type: 'radio',
                        name: `level-style-block_${styleBlock.name}`,
                        checked: styleBlock.level === level || (level === 0 && !styleBlock.level),
                        onChange: event => {
                          styleBlock.setTopField('l', level);
                        }
                      },
                    );
                  }),
                ),
                (tags =>
                  ce('div',
                    { key: `style-col-tag-cloud-${styleBlock.name}` },
                    tags.map((tag, tagi) => {
                      return ce('input',
                        {
                          key: `style-col-tag-cloud-value-${styleBlock.name}.${tagi}`,
                          value: tag,
                          placeholder: 'Новый тег',
                          onInput: event => {
                            tags[tagi] = event.target.value;
                            styleBlock.setTopField('tg', !tags.some(tag => tag) ? null : tags);
                          },
                        }
                      );
                    }).concat(
                      !tags.some(tag => !tag)
                        ? ce('input',
                          {
                            key: `style-col-tag-cloud-value-${styleBlock.name}.${tags.length}`,
                            placeholder: 'Новый тег',
                            value: '',
                            onInput: event => styleBlock.setTopField('tg', tags.concat(event.target.value)),
                          }
                        )
                        : null,
                    )
                  )
                )(mylib.typ([], styleBlock.tags)),
                g.styleCols.map(styleCol => {
                  return ce('div',
                    {
                      key: `style-col-${styleBlock.name}.${styleCol.n}`,
                    },
                    ce('b',
                      {
                        key: `style-col-title-${styleBlock.name}.${styleCol.n}`,
                      },
                      `стили ${styleCol.title}:`
                    ),
                    ce('div',
                      {
                        key: `style-col-${styleBlock.name}.${styleCol.n}-prop-p`,
                        className: `mgroup msm`,
                      },
                      g.styleProps.filter(prop => prop.type === 'p').map(styleProp => {
                        return ce('span',
                          {
                            key: `style.prop.p-${styleBlock.name}.${styleProp.n}`,
                            className: `mbtn m-no ${styleBlock[styleCol.n][styleProp.n] ? 'mactive' : ''}`,
                            style: {[styleProp.n]: styleProp.on},
                            onClick: () => styleBlock.setProp(styleCol.n, styleProp.n, styleBlock[styleCol.n][styleProp.n] ? null : styleProp.on),
                          },
                          styleProp.title
                        );
                      })
                    ),
                    g.styleProps.filter(prop => prop.type === 'g' && (styleCol.excludedProps == null || styleCol.excludedProps.indexOf(prop.n) < 0)).map(styleProp => {
                      return ce('div', 
                        {
                          key: `style.prop.g-${styleBlock.name}.${styleProp.n}`,
                          
                        },
                        ce('span',
                          {
                            key: `style.prop.g-${styleBlock.name}.${styleProp.n}-title`
                          },
                          styleProp.title
                        ),
                        ce('div',
                          {
                            key: `style.prop.g-${styleBlock.name}.${styleProp.n}-variants`,
                            className: `mgroup msm`
                          },
                          styleProp.variants.map(variant => {
                            return ce('button',
                              {
                                key: `style.prop.g-${styleBlock.name}.${styleProp.n}-var-${variant.n}-button`,
                                className: `mbtn m-ok ${styleBlock[styleCol.n][styleProp.n] === variant.n ? 'mactive' : ''}`,
                                style: {[styleProp.n]: variant.val},
                                onClick: () => styleBlock.setProp(styleCol.n, styleProp.n, variant.n)
                              },
                              variant.title
                            );
                          }),
                          ce('button',
                            {
                              key: `style.prop.g-${styleBlock.name}.${styleProp.n}-variants-default`,
                              className: `mbtn m-no ${styleBlock[styleCol.n][styleProp.n] == null ? 'mactive' : ''}`,
                              onClick: () => styleBlock.setProp(styleCol.n, styleProp.n, null),
                            },
                            styleProp.def
                          )
                        )
                      );
                    })
                  );
                })
              )
            );
          })
        );
      }
    }
    
    class CEELabling extends React.Component {
      constructor() {
        super();
        
        this.state = {
          words: [],
          page: 0,
          pageSize: 50,
        };
        
        this.radioTitles = ['И е и ё', 'Только е', 'Только ё'];
        this.eeStorage = mylib.typ({}, window.json.cm_e_e_rules);
      }
      
      setWord(word, value) {
        mylib.setExecs({
          method: 'set',
          scope: `set-ee-word-rule.${word}`,
          action: 'setEERuleWordTrack',
          value,
          generalId: 'word-ee-setting',
          prev: this.eeStorage[word],
          args: { word, value },
        });
        
        this.eeStorage[word] = value;
        g.ss();
      }
      
      render() {
        return ce('div',
          {
            key: 'e-e-labeling',
          },
          ce('button',
            {
              key: 'ee-check-button',
              className: 'mbtn m-ko',
              onClick: () => {
                const words = [];
                
                [].concat(g.cols.cats, g.cols.coms).forEach(col => col && [col.n].concat(col.texts || []).forEach(text => {
                  (text || '').toLowerCase().replace(/[^а-яёіїєґ]/gi, ' ').split(' ').forEach(freeWord => {
                    const word = freeWord.replace(/ё/g, 'е');
                    if (!/[іїєґ]/.exec(word) && words.indexOf(word) < 0 && /е/.exec(word)) words.push(word);
                  });
                }));
                
                this.setState({ words: words.sort() });
                //mylib.dconsl(words[words.length - 1], words);
              }
            },
            'Проверить наличие неизвестных слов'
          ),
          [10, 30, 50].map(pageSize => ce('button', { key: `page-size-button-switcher${pageSize}`, className: 'mbtn m-ok mxs', disabled: this.state.pageSize === pageSize, onClick: () => this.setState({ pageSize }) }, pageSize)),
          '.'.repeat(Math.ceil(this.state.words.length / this.state.pageSize))
            .split('')
            .map((_, page) => {
              const words = this.state.words.slice(page * this.state.pageSize, page * this.state.pageSize + this.state.pageSize);
              
              return ce('button',
                {
                  disabled: this.state.page === page,
                  className: words.some(word => this.eeStorage[word] == null)
                    ? 'mbtn m-ko mxs'
                    : 'mbtn m-no mxs',
                  onClick: () => this.setState({ page })
                },
                words[0]
              );
            }),
          this.state.words.map((word, wordi) => {
            if (this.state.page * this.state.pageSize > wordi || wordi >= this.state.page * this.state.pageSize + this.state.pageSize) return null;
            const storeType = this.eeStorage[word];
            
            return ce('table',
              {
                key: `ee-word-${word}`,
              },
              (parts => [
                ce('tr',
                  {
                    key: `ee-word-letters-${word}`,
                  },
                  ce('th',
                    {
                      style: {
                        background: storeType == null ? 'red' : null,
                      },
                    },
                    'Слово:'
                  ),
                  parts.map((part, parti) => ce('td',
                    {
                      key: `ee-word-letters-part-${word}:${part}`,
                    },
                    storeType === 2 || (storeType || '')[parti] === 2 ? part.replace(/е/, 'ё') : part
                  ))
                ),
                ce('tr',
                  {
                    key: `ee-word-buttons-${word}`,
                  },
                  ce('th', {}, this.radioTitles.map((typeName, type) => ce('div', { key: `ee-word-radio-title_${word}:${type}` }, typeName))),
                  parts.map((part, parti) => ce('td',
                    {
                      key: `ee-word-buttons-part-${word}:${part}`,
                      style: {
                        textAlign: 'right',
                      }
                    },
                    part.endsWith('е')
                      ? this.radioTitles.map((_, type) =>
                        ce('div', { key: `ee-word-radio_${word}:${type}` },
                          ce('input',
                            {
                              type: 'radio',
                              name: `ee-word-radio_${word}-${parti}`,
                              style: {
                                marginRight: '-.3em',
                              },
                              checked: storeType === type || (storeType || '')[parti] === type,
                              onChange: event => {
                                let track = mylib.isArr(storeType) ? storeType.slice(0) : storeType;
                                const elen = word.match(/е/g).length;
                                
                                if (storeType == null) {
                                  if (elen > 1) {
                                    track = '.'.repeat(elen).split('').map(o => 1);
                                    track[parti] = type;
                                  } else track = type;
                                } else {
                                  if (elen > 1) track[parti] = type;
                                  else track = type;
                                }
                                
                                this.setWord(word, track)
                              }
                            }
                          )
                        )
                      )
                      : null,
                  ))
                ),
              ])(word.split(/([а-дж-я]*е)/).filter(w => w))
            );
          }),
        );
      }
    }
    
    class CExecs extends React.Component {
      constructor() {
        super();
        this.state = {
          phasei: 0,
        };
        this.phases = [
          {
            title: 'Последние',
            comp: ce(CNews, { stack: window.json.cm_executions }),
          },
          {
            title: 'Наблюдаемые',
            comp: ce(CComHistory),
          },
        ];
      }
      
      render() {
        return [
          ce(
            'div',
            {
              className: 'mgroup msm',
            },
            this.phases.map(({ title }, phasei) => ce('button', { key: `exec-switcher-btn`, className: 'mbtn m-no', onClick: () => this.setState({ phasei }) }, title)),
          ),
          this.phases[this.state.phasei].comp,
        ];
      }
    }
    
    
    class CComHistory extends React.Component {
      constructor() {
        super();
        
        this.coms = (applicanter.appParam('cm', 'observedComs', null) || '').split(',').filter(w => w);
      }
      
      render() {
        mylib.dconsl('cms', this.coms);
        
        return ce(
          'div',
          {
            //observedComs
          },
          ce('button',
            {
              className: 'mbtn m-br msm',
              onClick: () => {
                mylib.modal({
                  title: 'Действия с наблюдаемыми',
                  inputs: [
                    {
                      type: 'button',
                      value: 'Повторить изменения',
                      closable: true,
                      onClick: () => {
                        mylib.setExecs(window.json.cm_observable_executions.map(ex => Object.assign({ muted: true }, ex)).sort((a, b) => a.ts - b.ts));
                        g.ss();
                      }
                    }
                  ]
                });
              },
            },
            'Действия'
          ),
          ce(CNews, { stack: window.json.cm_observable_executions })
        );
      }
    }
    
    class CNews extends React.Component {
      constructor() {
        super();
        g.context.news = this;
      }
      
      fu() {
        this.forceUpdate();
      }
      
      render() {
        return !g.isAccessed('canWatch') || this.props.stack == null || g.actions == null
          ? null
          : ce(`div`,
            {},
            this.props.stack.sort((a, b) => b.ts - a.ts).map((ex, exi, exa) => {
              const isRes = ex.status === 'resolved';
              const exec = isRes ? ex : ex.exec;
              const header = `${ex.author || '???'}, ${new Date(ex.ts * 1000).toLocaleString()}:`;
              const reason = exec
                ? mylib.stringTemplater(exec.title || (g.cm_actions.find(({action}) => action === exec.action) || {}).title, mylib.overlap(g.totalArgs, exec.args))
                : 'Не установленное изменение';
              let dconsl;
              const description = `${header}\n${reason}`;
              
              return ce('div',
                {
                  key: `news-${exi}`,
                  className: `execution-item ${exa[exi - 1] == null || exa[exi - 1].ts - 60 > ex.ts ? 'separated' : ''}${exa[exi - 1] && exa[exi - 1].author !== ex.author ? ' other-author' : ''}`,
                  onClick: event => {
                    event.stopPropagation();
                    if (!dconsl)
                      dconsl = mylib.cconsl(ex)
                        .insertAfter(event.currentTarget)
                        .config({
                          type: isRes ? 1 : 0,
                          unclosable: true
                        });
                  }
                },
                ce('div',
                  {
                    onClick: () => {
                      const inputs = [
                        {
                          type: 'button',
                          value: 'Посмотреть аргументы',
                          onClick: () => {
                            mylib.modal({
                              title: 'Аргументы',
                              description,
                              inputs: Object.entries(ex.args).map(([argn, arg]) => ({
                                title: argn,
                                value: JSON.stringify(arg),
                              })),
                            });
                          }
                        }
                      ];
                      
                      mylib.modal({
                        title: 'Действия',
                        description,
                        inputs,
                        buttons: ['Закрыть']
                      });
                    }
                  },
                  'действия'
                ),
                ce('div',
                  {
                    style: {
                      color: isRes ? 'blue' : 'red'
                    }
                  },
                  header
                ),
                ex.errorMessage
                  ? ce('div',
                      {
                        style: {
                          color: 'orange'
                        }
                      },
                      ex.errorMessage
                    )
                  : null,
                ce('div',
                  {},
                  reason
                )
              );
            })
          );
      }
    }
    
    g.mainTopButtons = [
      ce('div',
        {
          key: 'main-top-buttons',
          className: 'main-top-buttons mgroup',
        },
        ce('button',
          {
            key: 'opentsettings-button',
            className: 'open-settings-button mbtn m-no msm',
            onClick: () => g.nav.setPhase(g.Phase.Settings),
          },
          svg('settings-2-outline', 'S')
        ),
        ce('button',
          {
            key: 'ё-е collector',
            className: 'open-settings-button mbtn m-no msm',
            onClick: () => g.nav.setPhase(g.Phase.EELabling),
          },
          'ё,е'
        ),
      )
    ];
    
    mylib.overlap(g.Comps, {
      4: CExecs,
      10: CSettings,
      14: CEELabling,
    });
  
    mylib.overlap(g.Phase, {
      News: 4,
      Settings: 10,
      EELabling: 14,
    });
    
    mylib.overlap(g.PhaseJumps, {
      [g.Phase.Settings]: g.Phase.Cats,
      [g.Phase.News]: null,
      [g.Phase.EELabling]: g.Phase.Cats,
    });
  
  } catch (error) {
    mylib.dconsl(error.stack);
    throw error;
  }


})('');