



export function() {
    
    const {
        key,
        style,
        onClick,
        ref,
        asLineComponent,
        setChorded,
        setHideAnchor,
        onLineClick,
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
              className: `body ${orderUnit.top.textClassName}`
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



