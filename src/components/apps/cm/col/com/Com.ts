import mylib from "../../../../../complect/MyLib";
import { EditableCol } from "../EditableCol";
import { IExportableCom } from "./Com.model";

export class Com extends EditableCol<IExportableCom> {
  initial: Record<string, any>;
  ton: string = '';
  tonc: string[] = [];
  index: number = -1;

  constructor(obj: IExportableCom) {
    super(obj);

    this.initial = {};

    this.pullTransPosition(obj);

    const realFields = ['ton', 'tonc'];

    realFields.forEach(fieldn => {
      if (obj[fieldn] != null)
        this[fieldn] = obj[fieldn];
    });
  }

  static get fields() {
    // free: d e f h i j k s u v x y z
    return ['a', 'b', 'c', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 't', 'w'];
  }

  get name() { return this.getOrBase('n', '?'); }
  set name(val) { this.n = val; }

  get wid() { return this.getOrBase('w', 0); }

  get chords() {
    return this.forcedArray('c');
  }
  set chords(val) {
    this.setExportable('c', val);
    this.resetChordLabels();
  }

  get texts() { return this.forcedArray('t'); }
  set texts(val) { this.setExportable('t', val); }

  get audio() { return this.getOrBase('a', ''); }

  get refs() { return this.getOrBase('r', {}); }
  set refs(val) { this.setExportable('r', val); }

  get translationPushKind() { return this.getOrBase('k', 0); }
  set translationPushKind(val) { this.setExportable('k', val); }

  get isBemoled() { return this.getOrBase('b', 0); }
  set isBemoled(val) {
    this.setExportable('b', val ? 1 : 0);
    this.resetChordLabels();
  }

  get initialTransPosition() { return mylib.def(this.initial.p, this.p); }
  set initialTransPosition(val) {
    if (this.initial.p == null) this.initial.p = mylib.typ(0, val);
    this.initialTransPos = mylib.typ(0, val);
  }

  get initialTransPos() { return mylib.def(this.initial.pos, this.pos, this.initial.p, this.p); }
  set initialTransPos(val) {
    if (this.initial.pos == null) this.initial.pos = mylib.typ(0, val);
  }

  get transPosition() { return this.p; }
  set transPosition(value) {
    const v = mylib.typ(0, value);
    const val = v > 11 ? v % 12 : v < 0 ? 12 + v : v;
    this.p = val;
    this.initialTransPosition = val;
  }

  pullTransPosition(obj) {
    if (obj) {
      if (obj.ton != null) this.initialTransPosition = obj.p;
      this.transPosition = mylib.def(obj.ton, obj.p);
    }
  }

  turnBemoled() {
    this.isBemoled = !this.isBemoled;
  }

  get langi() { return this.getOrBase('l', 0); }
  //set langi(val) { this.l = val; }

  get langn() { return ICom.langs[this.langi]; }
  static get langs() { return ['русский', 'украинский']; }

  getVowelPositions(textLine) {
    return g.searchAll(/[уеыаоэяиёюіїє ]/i, textLine);
  }

  transChord(chord, delta) {
    const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];

    const cindex = chords.indexOf(chord);
    const di = cindex - -delta;
    const len = chords.length;
    const nindex = di < 0
      ? len - -di
      : di > len
        ? di % len
        : di === len || -di === len
          ? 0
          : di;
    return chords[nindex];
  }

  transBlock(cblock, delta = this.transPosition) {
    return cblock && cblock.replace(/[ACDEFGH]#?/g, chord => this.transChord(chord, delta));
  }

  transBlocks(delta) {
    return this.chords.map((cblock) => this.transBlock(cblock, delta));
  }

  setChordsInitialTon() {
    delete this.ton;
    delete this.tonc;
    this.transPosition = this.initialTransPos;
    this.resetChordLabels();
  }

  transpose(delta) {
    this.transPosition -= -delta;
    this.ton = this.transPosition;
    this.tonc = mylib.def(this.tonc, this.chordLabels[0][0][0]);
    this.resetChordLabels();
  }

  getOrderedTexts(isInsludeName = false, isIncluseEndstars = true) {
    return this.getOrderedBlocks(isInsludeName = false, isIncluseEndstars).map((lines, linesi, linesa) => lines.join('\n') + (isIncluseEndstars && linesa.length - 1 === linesi ? '\n* * *' : ''));
  }

  getOrderedBlocks(isInsludeName = false, isIncluseEndstars = true) {
    const textBeats = this.orders.reduce((text, ord) => text + (ord.top.t == null ? (text ? '\n' : '') + ord.repeated), '').split(/\n/);

    const texts = this.translationMap().map(peaceSize => {
      return textBeats.splice(0, peaceSize);
    });

    return (isInsludeName ? [[this.name]] : []).concat(mylib.dconsl(texts).val);
  }

  translationMap(isIncludeChordedBlocks = this.isIncludeChordedBlocks) {
    if (this._translationMap != null) return this._translationMap;

    const push = g.translationPushKinds[this.translationPushKind].cb;

    const map = this._translationMap = [];
    let curr = 0;

    this.orders.forEach((ord, ordi, orda) => {
      if (ord.top.t == null) {
        isIncludeChordedBlocks && push(map, 1);
        curr = 0;
        return;
      }

      if (ord.top.isInherit) {
        curr += ord.text.split(/\n/).length;
        if (ordi === orda.length - 1) push(map, curr);
        return;
      }

      curr && push(map, curr);

      curr = ord.text.split(/\n/).length;
      if (ordi === orda.length - 1) push(map, curr);
    });

    return map;
  }

  bracketsTransformed(str = '') {
    const brackets = [['«', '»'], ['„', '“'], ['"', '"'], ["'", "'"]];
    let level = 0;

    const text = str
      .replace(/(\s)-+(\s)/g, '$1—$2')
      .replace(/(\( ?)?("+)( ?\)?)/gs, function (_, pref = '', all, post = '', index, text) {
        const pre = text[index - 1];
        const isOpen = !pre || pre.search(/\s/) + 1;
        const brLevel = level - (isOpen ? 0 : 1);
        level -= (isOpen ? -1 : 1) * all.length;

        return pref[0] === '(' && post.endsWith(')')
          ? ''
          : (pref || '') + all
            .split('')
            .map((br, bri) => (brackets[brLevel - (isOpen ? -bri : bri)] || ['`', '`'])[isOpen ? 0 : 1])
            .join('') + (post || '');
      })
      .replace(/\("+ \)$|^\( "+\)/g, '');

    return { text, level };
  }

  get chordLabels() {
    if (this._chordLabels == null) this.updateChordLabels();

    return this._chordLabels;
  }

  get usedChords() {
    if (this._usedChords == null) this.updateChordLabels();

    return this._usedChords;
  }

  resetChordLabels() {
    this._usedChords = null;
    this._chordLabels = null;
  }

  updateChordLabels() {
    this._chordLabels = [];
    this._usedChords = {};
    let currTransPosition = this.transPosition;

    this.orders.forEach(ord => {
      const ordLabels = [];
      this.chordLabels.push(ordLabels);
      const chords = this.actualChords(ord.chordsi, currTransPosition);

      if ((ord.top.style || 0).isModulation) {
        currTransPosition = this.transPosition + (ord.fieldValues.md || 0);
      }

      (chords || '')
        .split(/\s*\n+\s*/)
        .forEach(line => {
          const lineLabels = [];
          ordLabels.push(lineLabels);

          (line || '')
            .split(/ +/)
            .forEach(chordSchema => {
              chordSchema
                .split(/[^#A-Z/0-9]+/i)
                .forEach(chord => this._usedChords[chord.replace(/B/, 'A#')] = chord);
              lineLabels.push(chordSchema);
            });
        });
    });

    this.tonc = this.firstChord = mylib.def(mylib.typ('', this.tonc, mylib.def(mylib.def(mylib.def(this.chordLabels, '')[0], '')[0], '')[0]).match(/[A-H]#?m?/), '')[0] || '';
  }

  static get bemoles() {
    return {
      'A#': 'B',
      'C#': 'Db',
      'D#': 'Eb',
      'F#': 'Gb',
      'G#': 'Ab',
    };
  }

  static withBemoles(chords, isSet) {
    return (isSet ? chords.replace(/[A-H]#/g, all => ICom.bemoles[all] || all) : chords).replace(/A#/g, 'B');
  }

  actualChords(chordsScalar, position = this.transPosition) {
    const chords = mylib.isStr(chordsScalar) ? chordsScalar : this.chords[chordsScalar];
    return chords && ICom.withBemoles(this.transBlock(chords, position), this.isBemoled);
  }

  lineComponent(props) {
    const {
      key,
      chordedOrd,
      textLine,
      textLinei,
      textLines,
      orderUnit,
      orderUniti,
      onLetterClick,
      onWordClick,
      setWordClass,
      isJoinLetters = true,
      setLineClassName,
      setChorded,
    } = props;

    const lineKey = `line-${key}.${orderUniti}-${textLinei}`;

    if (!chordedOrd)
      return ce('span',
        { key: `song-woc-part-${lineKey}` },
        textLine.split(/ +/).map((word, wordi, worda) => {
          const actionProps = { ord: orderUnit, linei: textLinei, wordi, word, words: worda.length, lines: textLines };
          return ce('span',
            { key: `song-line-woc-${lineKey}.${wordi}` },
            ce('span', {
              className: mylib.func(setWordClass).call(actionProps),
              onClick: mylib.isFunc(onWordClick)
                ? event => onWordClick(actionProps, event)
                : null,
              dangerouslySetInnerHTML: { __html: word }
            }),
            wordi === worda.length - 1 ? null : [' ', ce('wbr', { key: `song-line-woc-wbr-${lineKey}.${wordi}` })]
          )
        })
      );

    const letters = this.getVowelPositions(textLine);

    let chordIndex = 0;
    const chordsLabels = (this.chordLabels[orderUniti] || [])[textLinei] || [];
    const linePoss = (orderUnit.positions || [])[textLinei] || [];

    let points = letters;

    if (isJoinLetters)
      points = letters.filter((lett, letti) => !letti || linePoss.indexOf(letti) >= 0 || / /.test(textLine[lett]));

    const isHasPre = linePoss.indexOf(-1) > -1;
    const isHasPost = linePoss.indexOf(-2) > -1;

    return ce('span',
      {
        key: `song-line-wrapper-${lineKey}`,
      },
      points.map((index, indexi, indexa) => {
        const indexKey = `${lineKey}-${indexi}`;
        let isLast = indexi === indexa.length - 1;
        let isFirst = indexi === 0;
        let firstTextBit = isFirst ? textLine.slice(0, index) : '';
        let chordedFirst = isFirst && isHasPre && firstTextBit === '';
        let chordedLast = isLast && isHasPost;
        let chorded = setChorded ? setChorded(indexi) : (linePoss.indexOf(letters.indexOf(index)) > -1);
        let chordLabel = (chorded ? chordsLabels[chordIndex++ - (isHasPre ? -1 : 0)] || '' : '');

        const chord = chordedFirst ? chordsLabels[0] : chordLabel;
        const pchord = isLast && isHasPost ? chordsLabels[chordsLabels.length - 1] : null;

        let baseTextBitOriginal = textLine.slice(index, indexa[indexi + 1]);
        const isSpacedWord = / /.test(baseTextBitOriginal);
        const origBits = baseTextBitOriginal.split(/ +/g).map((txt, txti, txta) =>
          ce('span',
            { key: `text-bit:${lineKey}.${txti}` },
            ce('span', { dangerouslySetInnerHTML: { __html: txt } }),
            txti === txta.length - 1 ? null : [' ', ce('wbr', { key: `song-line-wbr-${indexKey}.${txti}` })]
          )
        );

        return [firstTextBit ?
          ce('span',
            {
              key: `song-letterbit-${lineKey}`,
              className: `${isHasPre ? 'chorded pre' : ''}`,
              dangerouslySetInnerHTML: { __html: firstTextBit },
              chord: chordsLabels[0]
            }
          ) : null,
        ce('span',
          {
            key: `chord_${lineKey}`,
            id: `chord_${lineKey}`,
            chord,
            pchord,
            className: [
              'chord',
              (chorded || chordedFirst || chordedLast) && 'chorded',
              chordedLast && 'post',
              chordedFirst && 'pre',
              isSpacedWord && 'spaced-word',
              chorded && isLast && isHasPost && 'twice',
              mylib.func(setLineClassName).call(chorded),
            ].filter(s => s).join(' '),
            onClick: !onLetterClick || (isHasPre && isFirst && !chorded)
              ? null
              : (() => onLetterClick(indexi)),
          },
          chorded || chordedLast
            ? ce('f',
              {
                chord,
                pchord: pchord || null
              },
              origBits
            )
            : origBits
        )
        ];
      })
    );
  }

  orderComponent(props) {
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

  ordersComponent(props) {
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

  get ords() {
    if (this._ords == null) this._ords = this.forcedArray(this.top.o, 'incorrect ord line');

    return this._ords;
  }

  get orders() { return this._o || this.setOrders(); }
  setOrders() {
    const val = this.ords
      .map((ord) => {
        ord.originWid = mylib.def(ord.originWid, ord.w);
        return ord;
      })
      .sort((a, b) => a.w - b.w);
    let ordi = 0;
    const orders = [];
    let minimals = [];
    const styles = g.setts.styles || [];
    const groups = {};
    let viewIndex = 0;
    let sourceIndex = 0;
    let originIndex = 0;
    let prev, prevOrd, prevStyle;
    let leadOrd = null;
    const self = this;
    const translate = function () { return arguments[self.langi || 0]; };

    const getStyle = (o, def = {}) => {
      return o && o.s != null
        ? styles.find(block => block.name === o.s) || def
        : def;
    };

    const setMin = src => {
      const style = src.init ? src.init.style : src.style;
      const styleName = ((style || '').name || '').trim();
      if (style.isModulation) minimals = [];
      src.m = !minimals.some(([s, c]) => styleName === s && src.c === c);
      minimals.push([styleName, src.c, src]);
    };

    const header = (ord, style, numered = true) => {
      const type = style.name.trim();
      const number = numered
        ? groups[type] = groups[type] == null
          ? 1
          : ord.a == null
            ? groups[type] + 1
            : groups[type]
        : '';

      const h = (bag = {}) => {
        return mylib.stringTemplater(style.header, mylib.overlap({
          num: numered ? groups[type] < 2 ? '' : ` ${number}` : '',
          translate,
        }, bag));
      };

      return b => h(b);
    };

    for (let i = 0; i < val.length; i++) {
      const ord = val[i];
      if (ord == null) {
        orders.push(new IOrder({
          header: () => '!!!',
          isError: true,
          com: this,
        }));
        continue;
      }
      const targetOrd = ord.a == null ? null : orders.find(o => o.u === ord.a);
      const top = IOrder.getWithExtendableFields(((targetOrd || 1).top || 1).source, ord);

      const style = getStyle(top, null);

      if (!style) {
        orders.push(new IOrder({
          header: () => '???',
          isError: true,
          com: this,
          source: ord,
        }));
        continue;
      }

      if (style.isInherit) {
        prevStyle = style;
        continue;
      }

      top.style = style;
      top.com = this;
      top.source = ord;
      top.isNextInherit = !!getStyle(val[i + 1]).isInherit;
      top.isNextAnchorOrd = !!(ord.u != null && val[i + 1] && val[i + 1].a === ord.u);
      top.isPrevTargetOrd = !!(targetOrd && (val[i - 1] == targetOrd.top.source));
      top.targetOrd = targetOrd;
      top.isAnchor = ord.a != null;
      top.isTarget = ord.u != null && val.some(o => o.a === ord.u);
      top.viewIndex = viewIndex++;
      top.sourceIndex = val.indexOf(ord);
      top.originIndex = val.indexOf(targetOrd ? targetOrd.top.source : ord);
      top.headClassName = g.setts.query(style.name, 'c', ' ');
      top.textClassName = g.setts.query(style.name, 't', ' ');
      top.random = Math.random();

      setMin(top);

      const newOrder = new IOrder(top);
      orders.push(newOrder);

      top.header = newOrder.isEmptyHeader || !newOrder.isVisible
        ? (bag, isRequired) => isRequired ? header(ord, style, false)(bag) : ''
        : targetOrd && targetOrd.top.header
          ? targetOrd.top.header
          : header(ord, style);

      top.prev = prev || null;

      if (prev) prev.top.next = newOrder;
      prev = newOrder;

      if (!top.isAnchor) {
        top.prevOrd = prevOrd || null;
        if (prevOrd) prevOrd.top.nextOrd = newOrder;
        prevOrd = newOrder;
      }

      let isPrevAnchorInheritPlus = top.a != null;

      if (top.a != null && newOrder.isVisible) {
        const leadStyle = getStyle(targetOrd);
        let anci = targetOrd.top.sourceIndex + 1;
        let anc = val[anci];
        let ancStyle = getStyle(anc);
        let anchorInheritIndex = 0;

        while (ancStyle.isInherit) {
          isPrevAnchorInheritPlus = true;
          const ancTop = IOrder.getWithExtendableFields(((targetOrd || {}).top || {}).source, anc);

          ancTop.isAnchorInherit = true;
          ancTop.isInherit = true;
          ancTop.style = ancStyle;
          ancTop.com = this;
          ancTop.source = anc;
          ancTop.header = top.header;
          ancTop.init = top;
          //ancTop.targetOrd = targetOrd;
          ancTop.leadOrd = newOrder;
          ancTop.isNextInherit = !!getStyle(val[anci + 1]).isInherit;
          ancTop.anchorInheritIndex = anchorInheritIndex++;
          ancTop.viewIndex = viewIndex++;
          ancTop.sourceIndex = val.indexOf(targetOrd.top.source);
          ancTop.originIndex = val.indexOf(anc);
          ancTop.headClassName = g.setts.query(leadStyle.name, 'c', ' ', ancStyle.name);
          ancTop.textClassName = g.setts.query(leadStyle.name, 't', ' ', ancStyle.name);

          ancTop.random = Math.random();

          setMin(ancTop);

          const newAncOrd = new IOrder(ancTop);
          orders.push(newAncOrd);

          anc = val[++anci];
          ancStyle = getStyle(anc);
        }
      }

      let nexti = i + 1;
      let next = val[nexti];
      let nextStyle = getStyle(next);

      if (newOrder.isVisible)
        while (nextStyle.isInherit) {
          const nextTop = IOrder.getWithExtendableFields(((targetOrd || {}).top || {}).source, next);

          nextTop.isInherit = true;
          nextTop.style = nextStyle;
          nextTop.com = this;
          //nextTop.targetOrd = targetOrd;
          //nextTop.leadOrd = leadOrd;
          nextTop.prev = prev;
          nextTop.init = top;
          nextTop.isNextInherit = !!getStyle(val[nexti + 1]).isInherit;
          nextTop.isPrevAnchorInheritPlus = isPrevAnchorInheritPlus;
          nextTop.header = top.header;
          nextTop.source = next;
          nextTop.viewIndex = viewIndex++;
          nextTop.sourceIndex = val.indexOf(next);
          nextTop.originIndex = val.indexOf(next);
          nextTop.headClassName = g.setts.query(style.name, 'c', ' ', nextStyle.name);
          nextTop.textClassName = g.setts.query(style.name, 't', ' ', nextStyle.name);

          nextTop.random = Math.random();

          setMin(nextTop);

          const newNextOrd = new IOrder(nextTop);
          orders.push(newNextOrd);

          if (prev) prev.top.next = newNextOrd;
          prev = newNextOrd;

          next = val[++nexti];
          nextStyle = getStyle(next);
        }
    };

    this._o = orders;
    return orders;
  }
}