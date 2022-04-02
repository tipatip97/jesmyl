


export function() {
    
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
          style: mylib.overlap({}, style, {
            fontSize: `${localStorage[g.lsCurrentCompositionFontSize] || 100}%`
          }),
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
