
  export class IComActions {
    // constructor(prev = {}) {
      
    //   this.rollBlocki = mylib.typ(0, prev.rollBlocki);
    //   this.resetBlockChildrenList();
    //   this.win = null;
    //   this.winName = 'IComActions.target.element';
    //   this.rollYAxisColumnName = 'rollYAxisColumnName';
    //   this.rollYAxisThumbName = 'rollYAxisThumbName';
    //   this.nextRollYAxis();
    //   this.speedRollKf = localStorage.cm_speedRollKf || 10;
    // }
    
    // nextRollYAxis(cb) {
    //   const axes = [.3, .5, .7, .1];
    //   const nextIndex = (localStorage.cm_rollYAxis || axes.indexOf(this.rollYAxis)) - (this.rollYAxis ? -1 : 0);
    //   const next = axes[nextIndex];
    //   this.rollYAxis = next || axes[0];
      
    //   localStorage.cm_rollYAxis = next ? nextIndex : 0;
      
    //   cb && cb();
    // }
    
    // setContext(context) {
    //   this.context = context;
      
    //   setTimeout(() => {
    //     const refs = this.context.refs;
    //     this.win = refs[this.winName];
    //     this.axisThumb = refs[this.rollYAxisThumbName];
    //     this.axisColumn = refs[this.rollYAxisColumnName];
        
    //     this.registerWinActions();
    //     //this.registerAxisControls();
    //   });
    // }
    
    // registerAxisControls() {
    //   let axisMove = false;
    //   const thumb = this.axisThumb;
    //   const column = this.axisColumn;
    //   const onAxisMoveStop = () => axisMove = false;
    //   const comp = getComputedStyle(thumb);
    //   const thumbStyle = thumb.style;
    //   let screenY;
      
    //   thumb.onclick = event => event.stopPropagation();
    //   thumb.onmousedown = event => {
    //     event.stopPropagation();
    //     axisMove = true;
    //   };
      
    //   thumb.ontouchstart = event => {
    //     event.stopPropagation();
        
    //     const { touches: [{ screenY: sy }] } = event;
    //     screenY = sy;
    //     //mylib.dcconsl(event, screenY);
    //     axisMove = true;
    //   };
      
    //   column.onmousemove = column.ontouchmove = event => {
    //     if (axisMove) {
    //       //mylib.dcconsl(event, comp.top);
    //       thumbStyle.top = `${parseInt(comp.top) + event.movementY / 1.5}px`;
    //     }
    //   };
    //   column.onmouseup = column.ontouchend = event => onAxisMoveStop();
    //   column.onmouseleave = event => onAxisMoveStop();
    // }
    
    // registerWinActions() {
    //   const element = this.win;
    //   const parent = element.parentElement;
    //   let dir = 0;
    //   let isMultiple = false;

    //   const onSwipe = event => {
    //     if ((g.rollMode && g.rollModeMarks) || !g.marks.stack || g.streamManager.isSub || (g.marks.stack.length < 2 && (!isMultiple && event.name === 'stop'))) return;
        
    //     if (event.name === 'stop') {
    //       if (dir) {
    //         const locate = isMultiple
    //           ? g.nav.ccat.wraps.map(({com}) => com.wid)
    //           : g.marks.stack;

    //         const ccomw = (g.nav.ccom || {}).wid;
    //         const currIndex = locate.findIndex(comw => ccomw === comw);
    //         let added = false;

    //         if (!isMultiple && currIndex < 0 || isMultiple && g.isComFullscreenMode) {
    //           return;
    //         }

    //         const newIndex = currIndex < 0
    //           ? added
    //             ? dir > 0
    //               ? 1
    //               : locate.length - 2
    //             : dir > 0
    //               ? 0
    //               : locate.length - 1
    //           : currIndex === 0
    //             ? dir > 0
    //               ? 1
    //               : locate.length - 1
    //             : currIndex === locate.length - 1
    //               ? dir > 0
    //                 ? 0
    //                 : locate.length - 2
    //               : currIndex + dir;

    //         dir = 0;
    //         g.nav.setCom(locate[newIndex], null);
    //         setTimeout(() => mylib.scrollToView(document.querySelector(`#mark-${locate[newIndex]}`), 'center right'));
    //       }

    //       return;
    //     }

    //     if (event.direction === 'l') {
    //       dir = 1;
    //     } else if (event.direction === 'r') {
    //       dir = -1;
    //     } else dir = 0;

    //     isMultiple = event.touches === 2;
    //   };
    //   mylib.setDirective(element, 'onSwipe', {
    //     startMoveVKf: 100,
    //     startMoveHKf: 100,
    //     cb: onSwipe
    //   });
      
    //   parent.onscroll = event => {
    //   };
    // }
    
    // resetBlockChildrenList() {
    //   this.comBlockChildren = [];
    // }
    
    // get canRoll() {
    //   return this.win && !g.streamManager.isSub;
    // }
    
    // onComChange() {
    //   if (this.win && g.nav.isPhase(g.Phase.Com))
    //     this.win.parentElement.scrollTop = 0;
      
    //   this.resetBlockChildrenList();
    // }
    
    // registerBlock(blocki, element) {
    //   if (this.comBlockChildren[blocki] != element) {
    //     this.comBlockChildren[blocki] = element;
    //   }
    // }
    
    // updateSpeedRollKf(kf) {
    //   localStorage.cm_speedRollKf = this.speedRollKf -= kf;
    // }
    
    // isSpeedRollKfSetterActive(signi) {
    //   return signi ? this.speedRollKf > 1 : this.speedRollKf < 20;
    // }
    
    // get speedRollKfLabel() {
    //   return (this.speedRollKf / 10).toFixed(1);// + ' / ' + this.speedRollSlide;
    // }
    
    // get speedRollSlide() {
    //   return ((20 - this.speedRollKf) || .7) * 30;
    // }
    
    // turnRoll() {
    //   if (!this.win || !g.rollMode) return;
    //   g.rollMode = g.rollMode === 'play' ? 'pause' : 'play';
    //   g.ss();
    //   const element = this.win.parentElement;
    //   const next = () => get(++this.rollBlocki);
    //   const get = (blocki = this.rollBlocki) => this.comBlockChildren[blocki];
    //   let elem = get();
      
    //   const scroll = (dec = 10) => setTimeout(() => {
    //     if (g.rollMode !== 'play') return;
    //     const prevScrollTop = element.scrollTop;
    //     element.scrollTop += 1;
    //     const diff = element.scrollTop === prevScrollTop ? 1 : 0;
        
    //     if (dec > 0) scroll(dec - diff);
    //     else {
    //       g.rollMode = 'pause';
    //       g.ss();
    //     }
    //   }, this.speedRollSlide);
      
    //   scroll();
    // }
  }