








(function CmModule() {

  

    let isAllOperationsBlokced = false;
  
    // const momentType = '${Year}${Month}${Day}${Hour}${Minute}${Second}${Ms}';
  
    // const getMoment = (dat, type, parseFunc, p1, p2) => {
    //   const dt = new Date(dat || Date.now());
    //   const date = {};
    //   date.Year = dt.getFullYear().toString();
    //   date.year = date.Year.substr(2);
    //   date.month = (dt.getMonth() + 1).toString();
    //   date.Month = date.month.padStart(2, '0');
    //   date.day = dt.getDate().toString();
    //   date.Day = date.day.padStart(2, '0');
    //   date.hour = dt.getHours().toString();
    //   date.Hour = date.hour.padStart(2, '0');
    //   date.minute = dt.getMinutes().toString();
    //   date.Minute = date.minute.padStart(2, '0');
    //   date.second = dt.getSeconds().toString();
    //   date.Second = date.second.padStart(2, '0');
    //   date.ms = dt.getMilliseconds().toString();
    //   date.Ms = date.ms.padStart(3, '0');
  
    //   let moment = (type || momentType).replace(/\$\{(\w+)\}/gi, (all, $1) => date[$1] || all);
    //   return parseFunc ? parseFunc(moment, p1, p2) : moment;
    // };
  
    // g.momentNow = () => getMoment(null, null, parseInt, 10);
  
  
  
    ////// Interfaces:
  
    if (g.IEditableCat == null) {
      class IEditableCat extends g.IBased {
        searchErrors() {}
      }
      g.IEditableCat = IEditableCat;
    }
  
  
    if (g.IEditableOrder == null) {
      class IEditableOrder extends g.IBased {
        setWid() {}
      }
      g.IEditableOrder = IEditableOrder;
    }
  
    
    g.IOrder = IOrder;
  
    stage(9);
    
    if (g.IEditableCom == null) {
      class IEditableCom extends g.IBased { }
      g.IEditableCom = IEditableCom;
    }
    
    g.translationPushKinds = [
      {
        title: '6,34',
        cb: (map, num) => {
          if (num < 7) map.push(num);
          else if (num < 9) map.push(num - (num - 4), num - 4);
          else if (num < 11) map.push(num - (num - 4), num - (num - 4), num - 4);
          else map.push(num);
        }
      }, {
        title: '5,33,34',
        cb: (map, num) => {
          if (num < 6) map.push(num);
          else if (num === 6) map.push(3, 3);
          else if (num < 9) map.push(num - (num - 4), num - 4);
          else if (num < 11) map.push(num - (num - 4), num - (num - 4), num - 4);
          else map.push(num);
        }
      },
    ];
  
  
    g.ICom = ICom;
  
    stage(10);
  
    ///// Components:
  
  
    g.Cats = CCats;
  
    stage(11);
    
    const convertForRegExp = text => text[0] === '%' ? text.substr(1) : text.replace(/([?*$^/.\\][{}()])/g, '\\$1');
    g.breakWorgRegExp = beg => `(?:${beg}|[^а-яёіїєґ])`;
  
    g.transcriptions = [
      ['ыіi', 'ыії'],
      ["ъ'ʼ", "ъ'ʼ"],
      ['эє'],
      ['гґ'],
      ['её']
    ];
    
    if (!g.selectedComs)
      g.selectedComs = [];
  
  
    g.Cat = CCat;
  
    stage(12);
  
    g.tryExistance = () => {
      const coms = g.cols.coms;
      const cats = g.cols.cats;
  
      const nav = g.nav;
      const pcat = g.Phase.Cat;
      const pcom = g.Phase.Com;
  
      const catw = nav[pcat];
      const comw = nav[pcom];
  
      if (!cats.some(cat => cat.wid === catw)) {
        nav[pcat] = 0;
        nav[pcom] = 0;
        if (g.nav.isPhase(pcom, pcat)) nav.phase = g.Phase.Cats;
      } else if (!coms.some(com => com.wid === comw)) {
        nav[pcom] = 0;
        if (g.nav.isPhase(pcom)) nav.phase = pcat;
      }
    };
  
    mylib.makeCssPrefs();
    
  
    g.ComCtrlPannel = CComCtrlPannel;
  
  
    window.ComPlayerPanel = CComPlayerPanel;
    
  
    stage(13);
    
  
    g.Com = CCom;
    
    
    
    g.actions = {
      com: new IComActions(g.actions && g.actions.com),
    };
    
    stage(18);
  
    window.onresize = e => {
      e.preventDefault();
    };
    
    if (g.CEditableChordCard == null) {
      class CEditableChordCard extends React.Component {
        constructor(props) {
          super(props);
        }
        onPointClick() {}
      }
      g.CEditableChordCard = CEditableChordCard;
    }
    
    window.ChordCard = CChordCard;
  
    stage(21);
  
    g.translateChords = {
      Ab: 'G#',
      Bb: 'A#',
      Cb: 'H',
      Db: 'C#',
      Eb: 'D#',
      Fb: 'E',
      Gb: 'F#',
      Hb: 'A#',
    };
  
    stage(22);
  
    g.styleCols = [
      {
        title: 'Заголовков',
        n: 'c',
        excludedProps: [],
      },
      {
        title: 'Текстов',
        n: 't',
        excludedProps: [],
      },
    ];
    
    if (g.IEditableSetts == null) {
      class IEditableSetts { }
      g.IEditableSetts = IEditableSetts;
    }
    
    if (g.IEditableStyleProp == null) {
      class IEditableStyleProp extends g.IBased {
        create() { }
      }
      g.IEditableStyleProp = IEditableStyleProp;
    }
    
    g.IStyleProp = IStyleProp;
  
    g.setts = new ISetts(window.json.settings);
  
    g.styleProps = [
      {
        n: 'fontStyle',
        title: 'Курсив',
        type: 'p',
        on: 'italic'
      }, {
        n: 'fontWeight',
        title: 'Жирный',
        type: 'p',
        on: 'bold'
      }, {
        n: 'textDecoration',
        title: 'Подчёркнутый',
        type: 'p',
        on: 'underline'
      }, {
        n: 'marginTop',
        title: '-Отступ сверху-',
        type: 'p',
        on: '0'
      }, {
        n: 'fontSize',
        title: 'Размер',
        type: 'g',
        variants: [
          {
            title: 'S',
            n: 'S',
            val: '.5em'
          }, {
            title: 'M',
            n: 'M',
            val: '.7em'
          }, {
            title: 'N',
            n: 'N',
            val: '1em'
          }
        ],
        def: 'N'
      }, {
        n: 'marginLeft',
        title: 'Отступ',
        type: 'g',
        variants: [
          {
            title: 'Z',
            n: 'Z',
            val: '0'
          }, {
            title: 'S',
            n: 'S',
            val: '.5em'
          }, {
            title: 'M',
            n: 'M',
            val: '1em'
          }, {
            title: 'L',
            n: 'L',
            val: '1.5em'
          }
        ],
        def: 'Z'
      }
    ];
  
    const putStyles = () => {
      const topStyles = {};
      const newStyles = topStyles['.app-container.cm .com-ord-list '] = {};
      
      g.styleCols.forEach(styleCol => {
        g.setts.styles.forEach(styleBlock => {
          const block = newStyles[g.setts.query(styleBlock.name, styleCol.n, '.', styleBlock.isInherit ? styleBlock.name : '')] = {};
          const sBlock = styleBlock[styleCol.n];
  
          Object.keys(sBlock).forEach(bProp => {
            const prop = g.styleProps.find(sProp => sProp.n === bProp);
            block[bProp] = prop.type === 'p' ? sBlock[bProp] : (prop.variants.find(variant => variant.n === sBlock[bProp]) || {}).val;
          });
        });
      });
  
      mylib.useElement('style', 'cm-styles', style => style.innerText = mylib.stringifyCss(topStyles));
    };
  
    putStyles();
    
    stage(24);
  
  
  
    window.Marks = CMarks;
  
    g.lsCurrentCompositionFontSize = 'lsCurrentCompositionFontSize';
  
    const lettersTranslator = {
      'z': 'яз',
      'x': 'чх',
      'c': 'с',
      'v': 'мв',
      'b': 'иб',
      'n': 'тн',
      'm': 'ьм',
      ',': 'б',
      '.': 'ю',
      'a': 'фа',
      's': 'ыс',
      'd': 'вд',
      'f': 'аф',
      'g': 'пг',
      'h': 'рх',
      'j': 'ож',
      'k': 'лк',
      'l': 'дл',
      ';': 'ж',
      "'": 'э',
      'q': 'йк',
      'w': 'цв',
      'e': 'уе',
      'r': 'кр',
      't': 'ет',
      'y': 'нйы',
      'u': 'гу',
      'i': 'ши',
      'o': 'що',
      'p': 'зп',
      '[': 'х',
      ']': 'ъ',
    };
  
    if (g.IEditableStream == null) {
      class IEditableStream {
        update(cb) { cb && cb(); }
        close(cb) { cb && cb(); }
        onClose(cb) { cb && cb(); }
      }
      g.IEditableStream = IEditableStream;
    }
  
  
    g.IStream = IStream;
  
  
    if (g.IEditableStreamManager == null) {
      class IEditableStreamManager {
        wakeUp() { }
        setComw() { }
        setBlocki() { }
        isOtherComw() { }
      }
      g.IEditableStreamManager = IEditableStreamManager;
    }
  
  
    if (g.IEditableMeeting == null) {
      class IEditableMeeting extends g.IBased { }
      g.IEditableMeeting = IEditableMeeting;
    }
  
  
    g.IMeeting = IMeeting;
    
    if (g.IEditableMeetings == null) {
      class IEditableMeetings { }
      g.IEditableMeetings = IEditableMeetings;
    }
  
  
    const updateJsons = () => {
      const { cols, cm_meetings } = window.json;
  
      g.cols = new ICols(cols, g.cols || {});
      
      g.marks = new IMarks();
  
      g.meetings = new IMeetings(cm_meetings || []);
    };
    
  
    g.StartPage = CStartPage;
  
    0 && (loc => {
      if (loc.cat != null) {
        const catw = parseInt(loc.cat);
        if (catw === 0 || g.cols.cats.some(cat => cat.wid === catw)) {
          g.nav[g.Phase.Cat] = catw;
          if (g.nav.isPhase(g.Phase.Cats)) g.nav.phase = g.Phase.Cat;
        }
      }
  
      stage(31);
  
      if (loc.com != null) {
        const comw = parseInt(loc.com);
        if (g.cols.coms.some(com => com.wid === comw)) {
          g.nav[g.Phase.Com] = comw;
          if (g.nav.isPhase(g.Phase.Cats, g.Phase.Cat)) g.nav.phase = g.Phase.Com;
        } else mylib.loc({ com: '' });
      }
    })(mylib.loc());
  
    stage(32);
  
    g.backButtonPressedTimeout;
    g.backButtonPressedTime = 0;
  
    if (g.isComFullscreenMode == null)
      g.isComFullscreenMode = false;
  
    const onBackPressed = async (event) => {
      if (g.isComFullscreenMode) {
        return 'cm-mute';
      }
      const timeout = 500;
  
      if (Date.now() - g.backButtonPressedTime < timeout) {
        'HIDE_APP';
      } else {
        g.backButtonPressedTime = Date.now();
  
        if (!g.nav.isPhase(g.Phase.Cats)) {
          g.nav.goBack();
          return 'cm-back';
        }
      }
    };
  
    setTimeout(() => {
      if (mylib.isUnd(g.Comps[g.nav.phase]) || (mylib.isArr(g.Comps[g.nav.phase]) && mylib.isUnd(g.Comps[g.nav.phase][0]()))) {
        g.nav.phase = g.Phase.Cats;
        g.ss();
      }
    });
  
    g.searchAll = (reg, O) => {
      const R = [];
      for (const i in O) reg.test(O[i]) && R.push(i);
      return R;
    };
  
    stage(35);
    
    const initStates = () => {
      putStyles();
      initNav();
      updateJsons();
      g.nav.updateCcols();
      mylib = g.initMylib();
    };
  
    if (window.applicanter && window.applicanter.$listen) {
      initStates();
      
      applicanter.register('cm', ce(g.StartPage));
  
      g.subscribeStream = stream => {
        mylib.dcconsl('subscr', stream);
        applicanter.registerAppProps('cm', [
          {
            name: 'joinedStream',
            prop: () => g.streamManager.subId,
            onUpdate: (obj) => {
  
            },
          }
        ]);
  
        applicanter.refresh();
        setTimeout(() => g.ss());
      };
  
      if (g.streamManager == null) {
        g.streamManager = new IStreamManager();
  
        g.streamManager.wakeUp(
          stream => g.subscribeStream(stream),
          stream => applicanter.appParam('cm', 'joinedStream', null) 
        );
      }
  
      applicanter.$listen('App.onApplicationRefresh:cm', 'cm-main-listener', async (event = {}) => {
        const { value = [] } = event;
        
        initStates();
        
        const joinedStream = value.some(comp => comp.name === 'joined_stream') ? window.json.joined_stream : null;
  
        if (joinedStream) {
          g.streamManager.update(joinedStream, () => {
            const elem = document.querySelector(`#com-block-${joinedStream.b}`);
            if (elem)
              mylib.scrollToView(elem, 'center left', {
                force: true,
                parent: elem.offsetParent,
                animationTime: joinedStream.b < 0 ? 0 : 3000
              });
            
            if (joinedStream.c != null && g.nav[g.Phase.Com] !== joinedStream.c) {
              g.nav.setCom(joinedStream.c, null);
              setTimeout(() => g.ss());
            } else
              g.ss();
          }, () => {
            System.showToast('Сртим был завершён');
            g.ss();
          });
        }
        
        g.ss();
      });
  
      applicanter.$listen('App.onCheckUpdates', 'cm-main-check-listener', async event => {
        if (event.value && event.value.block) {
          isAllOperationsBlokced = true;
          g.ss();
        }
      });
      
      applicanter.$listen('App.onAppStartAction:cm', 'initial', async event => {
        const [action = {}] = event.values || [];
        mylib.dcconsl('cm. start action', action);
        if (action.type === 'joinStream') {
          applicanter.setAppParams('cm', {
            joinedStream: action.val
          });
  
          g.streamManager.subscribe(action.val, () => g.ss());
  
          applicanter.refresh();
        }
        
        if (action.type === 'marksList') {
          g.marks.insertMarks(action.val.s, action.val.d)
            .then(ok => g.ss());
        }
      });
  
      applicanter.$listen('App.onOnlineToggle', 'cm App.onOnlineToggle', async (event, isOnline) => {
        g.isOnline = isOnline;
      });
  
      applicanter.$listen('Apk.onBackPressed', 'cm-back-button', onBackPressed);
  
    } else ReactDOM.render(ce(g.StartPage), document.querySelector('#application'));
    
    g.totalArgs = {
      getMeetingDate: (begin, end) => new g.IMeeting({ b: begin, e: end }).getDate(),
      declension: (num, one, two, five) => mylib.declension(num, one, two, five),
      comLang: langi => g.ICom.langs[langi],
    };
    
    stage(36);
  
  })();
  
  
  
  
  