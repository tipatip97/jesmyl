
  class TheCom {
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
                ce('span',
                  {},
                  svg('options-2-outline', ''),
                  this.isChordsImagineBlockOpened
                    ? svg('chevron-up-outline', 'Скрыть изображения аккордов')
                    : svg('chevron-down-outline', 'Показать изображения аккордов')
                )
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
                ccom.audio && ccom.audio.split('\n\n').map(ablock => {
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