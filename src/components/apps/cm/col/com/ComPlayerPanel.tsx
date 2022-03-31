
  class TheComPlayerPanel {
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