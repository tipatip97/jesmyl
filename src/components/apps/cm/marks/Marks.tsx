
  class TheMarks {
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